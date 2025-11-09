'use client';

import mixpanel from 'mixpanel-browser';

declare global {
  interface Window {
    mixpanel?: typeof mixpanel & { __loaded?: boolean };
  }
}

const DEFAULT_MIXPANEL_TOKEN = 'a91d3ee4f12c360c3c3316f359a3b139';
const MIXPANEL_TOKEN =
  process.env.NEXT_PUBLIC_MIXPANEL_TOKEN ??
  process.env.MIXPANEL_TOKEN ??
  DEFAULT_MIXPANEL_TOKEN;
const MIXPANEL_DEBUG = process.env.NEXT_PUBLIC_MIXPANEL_DEBUG === 'true';

let hasInitialized = false;

function resolveMixpanel() {
  if (typeof window !== 'undefined' && window.mixpanel) {
    return window.mixpanel;
  }
  return mixpanel;
}

export function initMixpanel(): void {
  if (hasInitialized) return;
  if (typeof window === 'undefined') return;

  const instance = resolveMixpanel();
  if (!MIXPANEL_TOKEN) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[mixpanel] Aucun token configuré (NEXT_PUBLIC_MIXPANEL_TOKEN / MIXPANEL_TOKEN).');
    }
    return;
  }

  instance.init(MIXPANEL_TOKEN, {
    debug: MIXPANEL_DEBUG || process.env.NODE_ENV !== 'production',
    ignore_dnt: true,
    autocapture: true,
    record_sessions_percent: 100,
    api_host: process.env.NEXT_PUBLIC_MIXPANEL_API_HOST ?? 'https://api-eu.mixpanel.com',
  });

  if (typeof window !== 'undefined') {
    window.mixpanel = instance;
  }

  hasInitialized = true;
}

export function identifyUser(uniqueId: string, traits?: Record<string, unknown>): void {
  if (!hasInitialized) return;
  const instance = resolveMixpanel();
  instance.identify(uniqueId);
  if (traits && instance.people) {
    instance.people.set(traits);
  }
}

export function trackEvent(event: string, props?: Record<string, unknown>): void {
  if (!hasInitialized) return;
  resolveMixpanel().track(event, props);
}

export function trackPageView(pathname: string, props?: Record<string, unknown>): void {
  trackEvent('page_view', {
    path: pathname,
    ...props,
  });
}

export function trackFormStart(context: Record<string, unknown> = {}): void {
  trackEvent('form_start', context);
}

export function trackFormStep(step: number, context: Record<string, unknown> = {}): void {
  const payload = {
    step,
    ...context,
  };
  trackEvent('step_completed', payload);
  trackEvent('form_step_completed', payload);
}

export function trackLeadSubmitted(context: Record<string, unknown> = {}): void {
  trackEvent('lead_submitted', context);
}

export function trackRedirectTyp(context: Record<string, unknown> = {}): void {
  trackEvent('redirect_typ', context);
}

