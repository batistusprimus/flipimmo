'use client';

import { useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import { identifyUser, trackFormStep, trackLeadSubmitted } from '@/lib/analytics/mixpanel';
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

  const eventIdRef = useRef(createEventId('form'));

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
    await onSubmitLead?.({
      answers,
      eventId: eventIdRef.current,
      contact: contactData,
      stepId: meta.stepId,
      optinType: meta.optinType,
    });

    trackLeadSubmitted({
      ...answers,
      eventId: eventIdRef.current,
      optinType: meta.optinType,
    });

    trackPixel('Lead', { value: 0, currency: 'EUR' }, { eventID: eventIdRef.current });
    await sendMetaEvent({
      eventName: 'Lead',
      eventId: eventIdRef.current,
      userData: buildMetaUserData(contactData),
      customData: {
        stepId: meta.stepId,
        optinType: meta.optinType,
      },
    });

    const redirectTarget = meta.redirect ?? config.successRedirect;
    if (redirectTarget) {
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
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
        <header className="mb-6 text-center">
          <div className="mb-2 text-sm font-medium text-slate-500">
            Étape {currentIndex + 1} sur {steps.length}
          </div>
          <h1 className="text-2xl font-bold text-slate-900">{currentStep.title}</h1>
          {currentStep.subtitle ? <p className="mt-2 text-slate-600">{currentStep.subtitle}</p> : null}
        </header>

        {currentStep.kind === 'single-choice' ? (
          <div className="space-y-3">
            {currentStep.options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  void handleOptionSelect(currentStep, option);
                }}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left transition hover:border-slate-900 hover:bg-slate-50"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium text-slate-900">{option.label}</span>
                  <span className="text-sm text-slate-400">→</span>
                </div>
                {option.description ? <p className="mt-1 text-sm text-slate-500">{option.description}</p> : null}
              </button>
            ))}
          </div>
        ) : null}

        {currentStep.kind === 'contact' ? (
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
              return (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-slate-700">{field.label}</label>
                  <input
                    name={field.name}
                    type={field.type ?? 'text'}
                    autoComplete={field.autoComplete}
                    placeholder={field.placeholder}
                    value={value}
                    onChange={(event) => handleContactChange(currentStep, field.name, event.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                    required={field.required}
                  />
                  {error ? <p className="mt-1 text-sm text-red-500">{error}</p> : null}
                </div>
              );
            })}

            <button
              type="submit"
              className="w-full rounded-xl bg-slate-900 py-3 text-base font-semibold text-white transition hover:bg-slate-800"
            >
              {currentStep.submitLabel ?? 'Envoyer'}
            </button>
          </form>
        ) : null}

        {canGoBack ? (
          <button
            type="button"
            onClick={goBack}
            className="mt-6 text-sm font-medium text-slate-500 underline underline-offset-4"
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


