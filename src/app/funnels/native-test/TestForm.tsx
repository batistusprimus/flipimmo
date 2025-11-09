'use client';

import { useCallback } from 'react';

import { FormWizard } from '@/features/forms/core';
import type { FormLeadPayload, FormRejectPayload } from '@/features/forms/core';
import { sendToGhlWebhook } from '@/lib/webhooks/ghl';

import { nativeTestFormConfig } from './config';

const FORM_NAME = 'FlipImmoNativeForm';
const FORM_SOURCE = 'native-test-funnel';

function stringValue(value: unknown): string {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string') return value;
  return String(value);
}

function buildLeadPayload({ answers, contact, eventId, stepId, optinType, pageUrl, referrer, userAgent, searchParams }: FormLeadPayload) {
  const flattenedContact = {
    first_name: stringValue(contact.firstName),
    last_name: stringValue(contact.lastName),
    postal_code: stringValue(contact.postalCode),
    phone: stringValue(contact.phone),
    email: stringValue(contact.email),
  };

  const normalizedAnswers = {
    step1_mdb: stringValue(answers.step1_mdb),
    step2_transactions: stringValue(answers.step2_transactions),
    step3_objective: stringValue(answers.step3_objective),
    step4_metier: stringValue(answers.step4_metier),
    step5_delai: stringValue(answers.step5_delai),
    step6_capital: stringValue(answers.step6_capital),
    step7_besoin: stringValue(answers.step7_besoin),
    step71_formation: stringValue(answers.step71_formation),
    step712_confirmation: stringValue(answers.step712_confirmation),
    step8_priority: stringValue(answers.step8_priority),
    step9_high_need: stringValue(answers.step9_high_need),
    step10_high_capital: stringValue(answers.step10_high_capital),
    step11_cpf: stringValue(answers.step11_cpf),
  };

  return {
    form_name: FORM_NAME,
    source: FORM_SOURCE,
    event_id: eventId,
    step_id: stepId,
    optin_type: optinType ?? 'standard',
    optin_page: stepId,
    answers: normalizedAnswers,
    answers_json: JSON.stringify(answers),
    page_url: pageUrl ?? '',
    parent_url: pageUrl ?? '',
    referrer: referrer ?? '',
    user_agent: userAgent ?? '',
    query_string: searchParams ?? '',
    submitted_at: new Date().toISOString(),
    ...flattenedContact,
    ...normalizedAnswers,
  };
}

export default function TestForm() {
  const handleLead = useCallback(async (payload: FormLeadPayload) => {
    const body = buildLeadPayload(payload);
    await sendToGhlWebhook(body);
  }, []);

  const handleReject = useCallback(async ({ answers, eventId, stepId, value }: FormRejectPayload) => {
    if (process.env.NODE_ENV !== 'production') {
      console.info('[native-test] lead non qualifié', { answers, eventId, stepId, value });
    }
  }, []);

  return (
    <FormWizard
      config={nativeTestFormConfig}
      onSubmitLead={handleLead}
      onReject={handleReject}
      className="mx-auto max-w-2xl"
    />
  );
}
