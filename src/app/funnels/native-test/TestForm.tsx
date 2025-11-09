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
    mdb_status: stringValue(answers.mdb_status),
    transactions: stringValue(answers.transactions),
    objective: stringValue(answers.objective),
    situation: stringValue(answers.situation),
    timeline: stringValue(answers.timeline),
    capital: stringValue(answers.capital),
    primary_need: stringValue(answers.primary_need),
    difficulty: stringValue(answers.difficulty),
    high_need: stringValue(answers.high_need),
    high_capital: stringValue(answers.high_capital),
    formation_reason: stringValue(answers.formation_reason),
    cpf_status: stringValue(answers.cpf_status),
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
