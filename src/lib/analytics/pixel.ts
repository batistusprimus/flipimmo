'use client';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type PixelEventOptions = {
  eventID?: string;
};

export function trackPixel(event: string, data?: Record<string, unknown>, options?: PixelEventOptions): void {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return;

  if (options?.eventID) {
    window.fbq('track', event, data ?? {}, { eventID: options.eventID });
    return;
  }

  window.fbq('track', event, data ?? {});
}

export function trackPixelCustom(event: string, data?: Record<string, unknown>, options?: PixelEventOptions): void {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return;

  if (options?.eventID) {
    window.fbq('trackCustom', event, data ?? {}, { eventID: options.eventID });
    return;
  }

  window.fbq('trackCustom', event, data ?? {});
}

export function trackPixelPageView(): void {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return;
  window.fbq('track', 'PageView');
}


