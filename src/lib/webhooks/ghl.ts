const DEFAULT_GHL_WEBHOOK_URL = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL;

export type GhlWebhookPayload = Record<string, unknown>;

type SendToGhlOptions = {
  webhookUrl?: string;
  headers?: Record<string, string>;
};

export async function sendToGhlWebhook(
  payload: GhlWebhookPayload,
  options: SendToGhlOptions = {},
): Promise<Response | undefined> {
  const targetUrl = options.webhookUrl ?? DEFAULT_GHL_WEBHOOK_URL;
  if (!targetUrl) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[ghl] Aucun webhook configuré (`NEXT_PUBLIC_GHL_WEBHOOK_URL`).');
    }
    return undefined;
  }

  return fetch(targetUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: JSON.stringify(payload),
  });
}


