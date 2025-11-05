// Types pour le système de tracking des tunnels

export interface FunnelVariant {
  visits: number;
  conversions: number;
  rate: number;
}

export interface PageConversion {
  name: string;
  visits: number;
  rate: number;
}

export interface DeviceStat {
  name: 'Desktop' | 'Tablet' | 'Mobile' | 'Other';
  percentage: number;
}

export interface TimelineData {
  date: string;
  count: number;
}

export interface FunnelAnalyticsData {
  totalVisits: number;
  conversions: number;
  conversionRate: number;
  variants: {
    original: FunnelVariant;
    variant_a?: FunnelVariant;
    variant_b?: FunnelVariant;
    variant_c?: FunnelVariant;
  };
  pageConversions: PageConversion[];
  deviceSplit: DeviceStat[];
  contactsOverTime: TimelineData[];
}

export type TimeframeOption = 'today' | 'week' | 'month' | 'quarter' | 'year' | 'all';
export type VariantOption = 'all' | 'original' | 'variant_a' | 'variant_b' | 'variant_c';

// Interface pour les données Vercel Analytics (à implémenter)
export interface VercelAnalyticsEvent {
  name: string;
  timestamp: Date;
  properties: Record<string, string | number | boolean>;
}

// Interface pour les événements de tracking personnalisés
export interface FunnelTrackingEvent {
  funnelId: string;
  stepName: string;
  variant?: string;
  timestamp: Date;
  deviceType: 'desktop' | 'tablet' | 'mobile' | 'other';
  sessionId: string;
  converted: boolean;
}



