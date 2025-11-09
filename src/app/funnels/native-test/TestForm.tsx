'use client';

import { useCallback } from 'react';

import { FormWizard } from '@/features/forms/core';
import type { FormLeadPayload, FormRejectPayload } from '@/features/forms/core';
import { sendToGhlWebhook } from '@/lib/webhooks/ghl';

import { nativeTestFormConfig } from './config';

const FORM_NAME = 'FlipImmoNativeForm';
const FORM_SOURCE = 'native-test-funnel';

function buildLeadPayload({ answers, contact, eventId, stepId, optinType }: FormLeadPayload) {
  const flattenedContact = {
    first_name: contact.firstName ?? '',
    postal_code: contact.postalCode ?? '',
    phone: contact.phone ?? '',
    email: contact.email ?? '',
    last_name: contact.lastName ?? '',
  };

  return {
    form_name: FORM_NAME,
    source: FORM_SOURCE,
    event_id: eventId,
    step_id: stepId,
    optin_type: optinType ?? 'standard',
    answers,
    answers_json: JSON.stringify(answers),
    ...flattenedContact,
    mdb_status: answers.mdb_status,
    transactions: answers.transactions,
    objective: answers.objective,
    situation: answers.situation,
    timeline: answers.timeline,
    capital: answers.capital,
    primary_need: answers.primary_need,
    difficulty: answers.difficulty,
    high_need: answers.high_need,
    high_capital: answers.high_capital,
    formation_reason: answers.formation_reason,
    cpf_status: answers.cpf_status,
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

'use client';

import { useCallback } from 'react';


