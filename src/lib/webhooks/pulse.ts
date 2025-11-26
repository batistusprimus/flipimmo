const PULSE_WEBHOOK_URL =
  'https://admin.pulse.bpcorp.eu/api/ingest/webhook/160c63fc-7dea-45b8-9dc7-0b592f6ee189';

export type PulseWebhookPayload = Record<string, unknown>;

export async function sendToPulseWebhook(
  payload: PulseWebhookPayload,
): Promise<Response | undefined> {
  return fetch(PULSE_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}

