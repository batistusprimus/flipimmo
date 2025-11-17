'use client';

import { useCallback } from 'react';

import { FormWizard } from '@/features/forms/core';
import type { FormLeadPayload, FormRejectPayload } from '@/features/forms/core';
import { sendToGhlWebhook } from '@/lib/webhooks/ghl';

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

export default function LandingForm({ variant }: LandingFormProps) {
  const handleLead = useCallback(
    async (payload: FormLeadPayload) => {
      const body = buildLeadPayload(payload, variant);
      await sendToGhlWebhook(body);
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

