'use client';

import { GrowthBook } from '@growthbook/growthbook-react';

const CLIENT_KEY =
  process.env.NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY ??
  process.env.GROWTHBOOK_CLIENT_KEY;
const API_HOST =
  process.env.NEXT_PUBLIC_GROWTHBOOK_API_HOST ??
  process.env.GROWTHBOOK_API_HOST ??
  'https://cdn.growthbook.io';

let growthbookInstance: GrowthBook | null = null;

export function getGrowthBook(): GrowthBook | null {
  if (growthbookInstance) return growthbookInstance;
  if (typeof window === 'undefined') return null;
  if (!CLIENT_KEY) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[growthbook] Aucune clé publique configurée (`NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY`).');
    }
    return null;
  }

  growthbookInstance = new GrowthBook({
    apiHost: API_HOST,
    clientKey: CLIENT_KEY,
    enableDevMode: process.env.NODE_ENV !== 'production',
  });
  growthbookInstance.setTrackingCallback((experiment, result) => {
    if (process.env.NODE_ENV !== 'production') {
      console.info('[growthbook] Viewed Experiment', {
        experimentId: experiment.key,
        variationId: result.key,
      });
    }
  });
  growthbookInstance.loadFeatures().catch((error) => {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[growthbook] Impossible de charger les features', error);
    }
  });

  return growthbookInstance;
}


