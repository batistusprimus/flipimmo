'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  identifyUser,
  trackFormStart,
  trackFormStep,
  trackLeadSubmitted,
  trackRedirectTyp,
} from '@/lib/analytics/mixpanel';
import { trackPixel, trackPixelCustom } from '@/lib/analytics/pixel';
import { createEventId } from '@/lib/analytics/event-id';
import { sendMetaEvent } from '@/lib/analytics/capi';

import type {
  ContactStep,
  FormLeadPayload,
  FormOption,
  FormOutcome,
  FormRejectPayload,
  FormStep,
  FormWizardConfig,
  SingleChoiceStep,
} from './types';

type FormWizardProps = {
  config: FormWizardConfig;
  onSubmitLead?: (payload: FormLeadPayload) => Promise<void> | void;
  onReject?: (payload: FormRejectPayload) => Promise<void> | void;
  className?: string;
};

type StepMap = Map<string, FormStep>;

export function FormWizard({ config, onSubmitLead, onReject, className }: FormWizardProps) {
  const { steps } = config;
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, unknown>>({});
  const [history, setHistory] = useState<string[]>(() => (steps.length > 0 ? [steps[0].id] : []));
  const [currentStepId, setCurrentStepId] = useState<string | null>(() => (steps.length > 0 ? steps[0].id : null));
  const [outcome, setOutcome] = useState<FormOutcome | null>(null);
  const [contactErrors, setContactErrors] = useState<Record<string, string>>({});
  const [trustedCount, setTrustedCount] = useState(182);

  const eventIdRef = useRef(createEventId('form'));
  const initialPath = typeof window !== 'undefined' ? window.location.pathname : undefined;
  const formMetaRef = useRef<{ id: string; name: string; path?: string }>({
    id: config.id ?? initialPath ?? 'form',
    name: config.name ?? config.id ?? initialPath ?? 'form',
    path: initialPath,
  });
  const hasTrackedStart = useRef(false);

  const stepMap = useMemo<StepMap>(
    () => new Map(steps.map((step) => [step.id, step])),
    [steps],
  );

  const stepOrder = useMemo(() => steps.map((step) => step.id), [steps]);

  if (!currentStepId) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[FormWizard] Aucun step configuré.');
    }
    return null;
  }

  const currentStep = stepMap.get(currentStepId);
  if (!currentStep) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[FormWizard] Step introuvable: ${currentStepId}`);
    }
    return null;
  }

  const currentIndex = stepOrder.indexOf(currentStepId);
  const canGoBack = history.length > 1;
  const totalSteps = stepOrder.length;
  const progress = totalSteps > 0 ? Math.round(((currentIndex + 1) / totalSteps) * 100) : 0;
  useEffect(() => {
    const target = 267;
    const base = 182;
    const duration = 1200;
    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const eased = Math.min(elapsed / duration, 1);
      const value = Math.round(base + (target - base) * easeOutCubic(eased));
      setTrustedCount(value);
      if (eased < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    setTrustedCount(base);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [currentStepId]);


  const goToStep = (stepId: string) => {
    if (stepId === currentStepId) return;
    if (!stepMap.has(stepId)) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`[FormWizard] Impossible de naviguer vers "${stepId}" (inexistant).`);
      }
      return;
    }
    setCurrentStepId(stepId);
    setHistory((prev) => [...prev, stepId]);
  };

  const goBack = () => {
    setHistory((prev) => {
      if (prev.length <= 1) return prev;
      const nextHistory = prev.slice(0, -1);
      const previousId = nextHistory[nextHistory.length - 1];
      setCurrentStepId(previousId);
      return nextHistory;
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      formMetaRef.current = {
        id: config.id ?? path ?? 'form',
        name: config.name ?? config.id ?? path ?? 'form',
        path,
      };
    } else {
      formMetaRef.current = {
        id: config.id ?? 'form',
        name: config.name ?? config.id ?? 'form',
        path: undefined,
      };
    }

    if (hasTrackedStart.current || steps.length === 0 || stepOrder.length === 0) {
      return;
    }

    trackFormStart({
      eventId: eventIdRef.current,
      formId: formMetaRef.current.id,
      formName: formMetaRef.current.name,
      path: formMetaRef.current.path,
      firstStepId: stepOrder[0],
      totalSteps: steps.length,
    });
    hasTrackedStart.current = true;
  }, [config.id, config.name, stepOrder, steps.length]);

  const getVariableKey = (step: FormStep) => step.variable ?? step.id;

  const updateAnswer = (key: string, value: unknown) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const handleOutcome = async (
    type: FormOutcome,
    meta: { stepId: string; value?: string; redirect?: string; optinType?: string },
  ) => {
    if (type === 'reject') {
      await onReject?.({
        answers,
        eventId: eventIdRef.current,
        stepId: meta.stepId,
        value: meta.value,
      });

      if (config.rejectRedirect) {
        router.push(config.rejectRedirect);
        return;
      }

      setOutcome('reject');
      return;
    }

    const contactData = extractContactData(steps, answers);
    if (contactData.email || contactData.phone) {
      identifyUser(contactData.email ?? contactData.phone ?? eventIdRef.current, {
        email: contactData.email,
        phone: contactData.phone,
        firstName: contactData.firstName,
        lastName: contactData.lastName,
      });
    }
    const pageUrl = typeof window !== 'undefined' ? window.location.href : undefined;
    const searchParams = typeof window !== 'undefined' ? window.location.search : undefined;
    const referrer = typeof document !== 'undefined' ? document.referrer : undefined;
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

    await onSubmitLead?.({
      answers,
      eventId: eventIdRef.current,
      contact: contactData,
      stepId: meta.stepId,
      optinType: meta.optinType,
      pageUrl,
      referrer,
      userAgent,
      searchParams,
    });

    trackLeadSubmitted({
      ...answers,
      eventId: eventIdRef.current,
      optinType: meta.optinType,
      formId: formMetaRef.current.id,
      formName: formMetaRef.current.name,
      path: formMetaRef.current.path,
    });

    trackPixel(
      'Lead',
      {
        value: 0,
        currency: 'EUR',
        optinType: meta.optinType,
        pageUrl,
        referrer,
      },
      { eventID: eventIdRef.current },
    );
    await sendMetaEvent({
      eventName: 'Lead',
      eventId: eventIdRef.current,
      userData: buildMetaUserData(contactData),
      customData: {
        stepId: meta.stepId,
        optinType: meta.optinType,
        answers,
        pageUrl,
        referrer,
        searchParams,
      },
    });

    const redirectTarget = meta.redirect ?? config.successRedirect;
    if (redirectTarget) {
      trackRedirectTyp({
        eventId: eventIdRef.current,
        formId: formMetaRef.current.id,
        formName: formMetaRef.current.name,
        path: formMetaRef.current.path,
        redirect: redirectTarget,
        stepId: meta.stepId,
      });
      router.push(redirectTarget);
      return;
    }

    setOutcome('success');
  };

  const handleOptionSelect = async (step: SingleChoiceStep, option: FormOption) => {
    const variableKey = getVariableKey(step);
    updateAnswer(variableKey, option.value);

    const stepNumber = currentIndex + 1;
    trackFormStep(stepNumber, {
      stepId: step.id,
      variable: variableKey,
      value: option.value,
      eventId: eventIdRef.current,
      formId: formMetaRef.current.id,
      formName: formMetaRef.current.name,
      path: formMetaRef.current.path,
    });
    trackPixelCustom(
      'FormStep',
      { stepId: step.id, variable: variableKey, value: option.value, stepNumber },
      { eventID: eventIdRef.current },
    );

    const target = option.next ?? step.defaultNext ?? stepOrder[currentIndex + 1];
    if (!target) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`[FormWizard] Aucun enchaînement configuré pour le step "${step.id}".`);
      }
      return;
    }

    if (isOutcome(target)) {
      await handleOutcome(target, { stepId: step.id, value: option.value });
      return;
    }

    goToStep(target);
  };

  const handleContactChange = (step: ContactStep, name: string, value: string) => {
    const key = getVariableKey(step);
    setAnswers((prev) => {
      const current = (prev[key] as Record<string, string>) ?? {};
      return {
        ...prev,
        [key]: {
          ...current,
          [name]: value,
        },
      };
    });
    setContactErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const handleContactSubmit = async (step: ContactStep) => {
    const key = getVariableKey(step);
    const contactData = (answers[key] as Record<string, string>) ?? {};
    const errors: Record<string, string> = {};

    step.fields.forEach((field) => {
      const value = contactData[field.name];
      if (field.required && !value) {
        errors[field.name] = 'Champ obligatoire';
      }

      if (!errors[field.name] && isPhoneField(field)) {
        if (!isValidFrenchPhone(value ?? '')) {
          errors[field.name] = 'Merci de saisir un numéro de téléphone français valide';
        }
      }

      if (!errors[field.name] && isEmailField(field)) {
        if (!isValidEmail(value ?? '')) {
          errors[field.name] = 'Merci de saisir une adresse email valide';
        }
      }
    });

    if (Object.keys(errors).length > 0) {
      setContactErrors(errors);
      return;
    }

    setContactErrors({});

    const stepNumber = currentIndex + 1;
    trackFormStep(stepNumber, {
      stepId: step.id,
      variable: key,
      value: 'submitted',
      eventId: eventIdRef.current,
      formId: formMetaRef.current.id,
      formName: formMetaRef.current.name,
      path: formMetaRef.current.path,
    });
    trackPixelCustom(
      'FormStep',
      { stepId: step.id, variable: key, value: 'submitted', stepNumber },
      { eventID: eventIdRef.current },
    );

    await handleOutcome('success', {
      stepId: step.id,
      redirect: step.successRedirect,
      optinType: step.optinType,
    });
  };

  if (outcome) {
    return (
      <div className={className}>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-md">
          <h2 className="text-2xl font-semibold">
            {outcome === 'success' ? 'Merci !' : 'Nous allons en rester là'}
          </h2>
          <p className="mt-3 text-slate-600">
            {outcome === 'success'
              ? 'Nous avons bien reçu vos informations.'
              : 'Vous ne correspondez pas aux critères pour le moment.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-xl ring-1 ring-slate-100">
        <header className="mb-8">
          <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-[#1E3A8A]/70">
            <span>Progression</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#f59e0b] via-[#f59e0b] to-[#fb923c] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-6 text-center">
            <h1 className="text-2xl font-bold text-[#1E3A8A]">{currentStep.title}</h1>
            {currentStep.subtitle ? <p className="mt-2 text-sm text-slate-600">{currentStep.subtitle}</p> : null}
          </div>
        </header>

        {currentStep.kind === 'single-choice' ? (
          <>
            <div className="space-y-3">
              {currentStep.options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    void handleOptionSelect(currentStep, option);
                  }}
                  className="group w-full rounded-2xl border border-slate-100 bg-white px-5 py-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[#f59e0b]/60 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b]/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold text-[#1E3A8A]">{option.label}</span>
                    <span className="text-sm font-semibold text-[#f59e0b] transition group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                  {option.description ? (
                    <p className="mt-1 text-sm text-slate-500">{option.description}</p>
                  ) : null}
                </button>
              ))}
            </div>
            <TrustedCounter trustedCount={trustedCount} />
          </>
        ) : null}

        {currentStep.kind === 'contact' ? (
          <>
            <form
              className="space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                void handleContactSubmit(currentStep);
              }}
            >
              {currentStep.fields.map((field) => {
                const key = getVariableKey(currentStep);
                const contactData = (answers[key] as Record<string, string>) ?? {};
                const value = contactData[field.name] ?? '';
                const error = contactErrors[field.name];
                const inputProps = buildInputValidationProps(field);
                return (
                  <div key={field.name}>
                    <label className="block text-sm font-semibold uppercase tracking-wide text-[#1E3A8A]/80">
                      {field.label}
                    </label>
                    <input
                      name={field.name}
                      type={field.type ?? 'text'}
                      autoComplete={field.autoComplete}
                      placeholder={field.placeholder}
                      value={value}
                      onChange={(event) => handleContactChange(currentStep, field.name, event.target.value)}
                      className={`mt-1 w-full rounded-xl border bg-white px-3 py-2 text-slate-900 shadow-sm transition focus:outline-none focus:ring-2 ${
                        error
                          ? 'border-red-400 focus:border-red-400 focus:ring-red-400/30'
                          : 'border-slate-200 focus:border-[#f59e0b] focus:ring-[#f59e0b]/30'
                      }`}
                      required={field.required}
                      {...inputProps}
                    />
                    {error ? <p className="mt-1 text-sm text-red-500">{error}</p> : null}
                  </div>
                );
              })}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#f59e0b] py-3 text-base font-semibold text-white shadow-lg transition hover:translate-y-[-2px] hover:bg-[#f97316]"
              >
                {currentStep.submitLabel ?? 'Envoyer'}
              </button>
            </form>
            <TrustedCounter trustedCount={trustedCount} />
          </>
        ) : null}

        {canGoBack ? (
          <button
            type="button"
            onClick={goBack}
            className="mt-8 text-sm font-semibold text-[#1E3A8A] underline underline-offset-4 transition hover:text-[#f59e0b]"
          >
            ← Retour
          </button>
        ) : null}
      </div>
    </div>
  );
}

function isOutcome(value: string | FormOutcome): value is FormOutcome {
  return value === 'success' || value === 'reject';
}

function extractContactData(steps: FormStep[], answers: Record<string, unknown>): Record<string, string> {
  const contactStep = steps.find((step): step is ContactStep => step.kind === 'contact');
  if (!contactStep) return {};
  const key = contactStep.variable ?? contactStep.id;
  const data = answers[key];
  if (!data || typeof data !== 'object') return {};
  return data as Record<string, string>;
}

function buildMetaUserData(contact: Record<string, string>) {
  return {
    em: contact.email,
    ph: contact.phone,
    fn: contact.firstName,
    ln: contact.lastName,
  };
}

function isPhoneField(field: ContactStep['fields'][number]) {
  return field.type === 'tel' || field.name.toLowerCase().includes('phone') || field.name.toLowerCase().includes('tel');
}

function isEmailField(field: ContactStep['fields'][number]) {
  return field.type === 'email' || field.name.toLowerCase().includes('email');
}

function isValidFrenchPhone(value: string) {
  const normalized = value.replace(/[\s.-]/g, '');
  const phoneRegex = /^(?:\+33|0)[1-9]\d{8}$/;
  return phoneRegex.test(normalized);
}

function isValidEmail(value: string) {
  const emailRegex =
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(value.trim());
}

function buildInputValidationProps(field: ContactStep['fields'][number]) {
  if (isPhoneField(field)) {
    return {
      inputMode: 'tel' as const,
      pattern: '^((\\+33|0)[1-9](?:[ .-]?\\d{2}){4})$',
      title: 'Format attendu : 06 12 34 56 78 ou +33 6 12 34 56 78',
    };
  }
  if (isEmailField(field)) {
    return {
      inputMode: 'email' as const,
      spellCheck: false,
      autoCapitalize: 'none' as const,
    };
  }
  return {};
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

type TrustedCounterProps = {
  trustedCount: number;
};

function TrustedCounter({ trustedCount }: TrustedCounterProps) {
  return (
    <div className="mt-8 flex items-center justify-center rounded-2xl bg-[#1E3A8A]/5 px-5 py-4 text-center text-sm font-semibold text-[#1E3A8A]">
      <span className="text-base font-extrabold text-[#f59e0b]">{trustedCount}</span>
      <span className="ml-2">Marchands de Biens nous ont fait confiance en Octobre 2025</span>
    </div>
  );
}


