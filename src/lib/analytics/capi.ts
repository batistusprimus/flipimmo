'use client';

const HASHABLE_KEYS = new Set(['em', 'ph', 'fn', 'ln', 'ct', 'st', 'zp', 'country']);

type MetaUserData = Record<string, string | undefined>;

export type MetaEventPayload = {
  eventName: string;
  eventId: string;
  eventSourceUrl?: string;
  userData?: MetaUserData;
  customData?: Record<string, unknown>;
};

export async function sendMetaEvent(payload: MetaEventPayload): Promise<void> {
  if (typeof window === 'undefined') return;

  try {
    const hashedUserData = payload.userData ? await hashUserData(payload.userData) : {};
    await fetch('/api/fb-capi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event_name: payload.eventName,
        event_id: payload.eventId,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: payload.eventSourceUrl ?? window.location.href,
        user_data: hashedUserData,
        custom_data: payload.customData ?? {},
      }),
    });
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[meta-capi] Échec de l’envoi de l’événement CAPI', error);
    }
  }
}

async function hashUserData(data: MetaUserData): Promise<MetaUserData> {
  const entries = await Promise.all(
    Object.entries(data).map(async ([key, value]) => {
      if (!value) return [key, value] as const;
      if (!HASHABLE_KEYS.has(key)) return [key, value] as const;

      const normalized = key === 'ph' ? normalizePhone(value) : normalizeText(value);
      if (!normalized) return [key, undefined] as const;

      const hashed = await sha256(normalized);
      return [key, hashed] as const;
    }),
  );

  return Object.fromEntries(entries);
}

async function sha256(value: string): Promise<string> {
  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(value);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((byte) => byte.toString(16).padStart(2, '0')).join('');
  } catch {
    return value;
  }
}

function normalizeText(value: string): string {
  return value.trim().toLowerCase();
}

function normalizePhone(value: string): string {
  return value.replace(/[^\d]/g, '');
}


