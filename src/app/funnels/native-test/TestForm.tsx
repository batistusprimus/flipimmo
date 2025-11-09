'use client';

import { useCallback } from 'react';

import { FormWizard } from '@/features/forms/core';
import type { FormLeadPayload, FormRejectPayload } from '@/features/forms/core';
import { sendToGhlWebhook } from '@/lib/webhooks/ghl';

import { nativeTestFormConfig } from './config';

export default function TestForm() {
  const handleLead = useCallback(async ({ answers, contact, eventId, optinType, stepId }: FormLeadPayload) => {
    const payload = {
      form_name: 'NativeTestForm',
      event_id: eventId,
      source: 'native-test-funnel',
      situation: answers.situation,
      capital: answers.capital,
      timeline: answers.timeline,
      optin_type: optinType,
      step_id: stepId,
      ...contact,
    };

    await sendToGhlWebhook(payload);
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


