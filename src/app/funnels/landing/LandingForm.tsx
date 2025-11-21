'use client';

import { useCallback } from 'react';

import { FormWizard } from '@/features/forms/core';
import type { FormLeadPayload, FormRejectPayload } from '@/features/forms/core';
import { replaceEmptyWithKeyword } from '@/lib/utils/empty-values';
import { sendToGhlWebhook } from '@/lib/webhooks/ghl';
import { sendToLeadProsper } from '@/lib/webhooks/leadprosper';

import { trackLandingConversion, type LandingVariant } from './ab-tracking';
import { landingFormConfig } from './config';

const FORM_NAME = 'FlipImmoLandingForm';
const FORM_SOURCE_BASE = 'landing-funnel';

type LandingFormProps = {
  variant: LandingVariant;
};

function stringValue(value: unknown): string {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string') return value;
  return String(value);
}

function normalizePhoneForLeadProsper(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('33')) {
    return `0${digits.slice(2)}`;
  }
  if (digits.length > 10) {
    return digits.slice(-10);
  }
  return digits;
}

function normalizePostalCode(value: string): string {
  return value.replace(/\s+/g, '');
}

function normalizeLandingPageUrl(value: string): string {
  if (!value) return '';
  try {
    const parsed = new URL(value);
    if (parsed.hostname === 'localhost' || /^127(\.\d+){3}$/.test(parsed.hostname)) {
      return '';
    }
    return parsed.toString();
  } catch {
    return '';
  }
}

function resolveChoiceLabel(variable: string, rawValue: unknown) {
  const step = landingFormConfig.steps.find(
    (candidate) => (candidate.variable ?? candidate.id) === variable,
  );
  if (!step || step.kind !== 'single-choice') {
    return stringValue(rawValue);
  }
  const option = step.options.find((candidate) => candidate.value === rawValue);
  return option?.label ?? stringValue(rawValue);
}

function buildLeadPayload({
  answers,
  contact,
  eventId,
  stepId,
  optinType,
  pageUrl,
  referrer,
  userAgent,
  searchParams,
}: FormLeadPayload, variant: LandingVariant) {
  const flattenedContact = {
    first_name: stringValue(contact.firstName),
    last_name: stringValue(contact.lastName),
    postal_code: stringValue(contact.postalCode),
    phone: stringValue(contact.phone),
    email: stringValue(contact.email),
  };

  const normalizedAnswers = {
    step1_mdb: resolveChoiceLabel('step1_mdb', answers.step1_mdb),
    step2_transactions: resolveChoiceLabel('step2_transactions', answers.step2_transactions),
    step3_objective: resolveChoiceLabel('step3_objective', answers.step3_objective),
    step4_metier: resolveChoiceLabel('step4_metier', answers.step4_metier),
    step5_delai: resolveChoiceLabel('step5_delai', answers.step5_delai),
    step6_capital: resolveChoiceLabel('step6_capital', answers.step6_capital),
    step7_besoin: resolveChoiceLabel('step7_besoin', answers.step7_besoin),
    step71_formation: resolveChoiceLabel('step71_formation', answers.step71_formation),
    step712_confirmation: resolveChoiceLabel('step712_confirmation', answers.step712_confirmation),
    step8_priority: resolveChoiceLabel('step8_priority', answers.step8_priority),
    step9_high_need: resolveChoiceLabel('step9_high_need', answers.step9_high_need),
    step10_high_capital: resolveChoiceLabel('step10_high_capital', answers.step10_high_capital),
    step11_cpf: resolveChoiceLabel('step11_cpf', answers.step11_cpf),
  };

  const crmAliases = {
    situation: normalizedAnswers.step4_metier,
    objectif: normalizedAnswers.step3_objective,
    delai: normalizedAnswers.step5_delai,
    capital: normalizedAnswers.step6_capital || normalizedAnswers.step10_high_capital,
  };

  return {
    form_name: FORM_NAME,
    form_variant: variant,
    source: `${FORM_SOURCE_BASE}-${variant}`,
    event_id: eventId,
    step_id: stepId,
    optin_type: optinType ?? 'standard',
    optin_page: stepId,
    page_url: pageUrl ?? '',
    parent_url: pageUrl ?? '',
    referrer: referrer ?? '',
    user_agent: userAgent ?? '',
    query_string: searchParams ?? '',
    submitted_at: new Date().toISOString(),
    ...flattenedContact,
    ...normalizedAnswers,
    ...crmAliases,
    answers: normalizedAnswers,
  };
}

function buildLeadProsperPayload(
  body: ReturnType<typeof buildLeadPayload>,
): Record<string, unknown> {
  const normalizedPhone = normalizePhoneForLeadProsper(stringValue(body.phone));
  const payload = {
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    phone: normalizedPhone,
    zip_code: normalizePostalCode(stringValue(body.postal_code)),
    user_agent: body.user_agent,
    landing_page_url: normalizeLandingPageUrl(stringValue(body.page_url)),
    step1_mdb: body.step1_mdb,
    step2_transactions: body.step2_transactions,
    step3_objective: body.step3_objective,
    step4_metier: body.step4_metier,
    step5_delai: body.step5_delai,
    step6_capital: body.step6_capital,
    step7_besoin: body.step7_besoin,
    step71_formation: body.step71_formation,
    step712_confirmation: body.step712_confirmation,
    step8_priority: body.step8_priority,
    step9_high_need: body.step9_high_need,
    step10_high_capital: body.step10_high_capital,
    step11_cpf: body.step11_cpf,
  };

  // Remplacer les valeurs vides par "empty" pour LeadProsper
  return replaceEmptyWithKeyword(payload);
}

export default function LandingForm({ variant }: LandingFormProps) {
  const handleLead = useCallback(
    async (payload: FormLeadPayload) => {
      const body = buildLeadPayload(payload, variant);
      try {
        const leadProsperPayload = buildLeadProsperPayload(body);
        const leadProsperResponse = await sendToLeadProsper(leadProsperPayload, {
          subId1: variant,
          subId2: stringValue(body.source),
        });

        if (leadProsperResponse && process.env.NODE_ENV !== 'production') {
          const debugClone = leadProsperResponse.clone();
          let debugBody: unknown;
          try {
            debugBody = await debugClone.json();
          } catch {
            debugBody = await debugClone.text();
          }
          console.info('[leadprosper] Réponse', {
            status: leadProsperResponse.status,
            body: debugBody,
          });
        }
      } catch (error) {
        if (process.env.NODE_ENV !== 'production') {
          console.error('[leadprosper] Erreur lors de l’envoi', error);
        }
      }

      try {
        await sendToGhlWebhook(body);
      } catch (error) {
        if (process.env.NODE_ENV !== 'production') {
          console.error('[ghl] Erreur lors de l’envoi', error);
        }
      }

      trackLandingConversion(variant);
    },
    [variant],
  );

  const handleReject = useCallback(
    async ({ answers, eventId, stepId, value }: FormRejectPayload) => {
      if (process.env.NODE_ENV !== 'production') {
        console.info('[landing-form] lead non qualifié', { answers, eventId, stepId, value, variant });
      }
    },
    [variant],
  );

  return (
    <FormWizard
      config={landingFormConfig}
      onSubmitLead={handleLead}
      onReject={handleReject}
      analyticsContext={{
        variant,
        lp_variant: variant,
        formVariant: variant,
      }}
      className="mx-auto max-w-2xl"
    />
  );
}

