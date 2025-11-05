/**
 * Export central pour le système de tracking FlipImmo
 * 
 * Utilisez ce fichier pour importer facilement les fonctions de tracking
 * dans vos tunnels de conversion.
 * 
 * @example
 * ```tsx
 * import { trackPageView, trackConversion, getVariant } from '@/app/funnels/analytics';
 * ```
 */

// Fonctions de tracking
export {
  trackPageView,
  trackFormSubmit,
  trackConversion,
  trackAbandon,
  trackEvent,
  getSessionId,
  getVariant,
  getDeviceType,
  useTrackPage,
} from './tracking';

// Hooks
export {
  useFunnelAnalytics,
  useTrackFunnelEvent,
  useAvailableFunnels,
} from './hooks';

// Types
export type {
  FunnelAnalyticsData,
  FunnelVariant,
  PageConversion,
  DeviceStat,
  TimelineData,
  TimeframeOption,
  VariantOption,
  VercelAnalyticsEvent,
  FunnelTrackingEvent,
} from './types';

export type {
  TrackingEvent,
} from './tracking';

// Composants
export {
  MetricCard,
  FunnelChart,
  TimelineChart,
  DeviceSplit,
} from './components';



