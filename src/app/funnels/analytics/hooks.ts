import { useState, useEffect } from 'react';
import type { FunnelAnalyticsData, TimeframeOption, VariantOption } from './types';

// Données mockées temporaires
const MOCK_DATA: Record<string, FunnelAnalyticsData> = {
  formation: {
    totalVisits: 531,
    conversions: 50,
    conversionRate: 9.4,
    variants: {
      original: { visits: 121, conversions: 11, rate: 9.26 },
      variant_a: { visits: 121, conversions: 12, rate: 9.52 },
    },
    pageConversions: [
      { name: 'Landing', visits: 531, rate: 101 },
      { name: 'Métier', visits: 210, rate: 91 },
      { name: 'Capital', visits: 191, rate: 89 },
      { name: 'Délai', visits: 170, rate: 92 },
      { name: 'CPF', visits: 157, rate: 94 },
      { name: 'Optin', visits: 148, rate: 16 },
      { name: 'GBC', visits: 23, rate: 48 },
      { name: 'Capital<20k', visits: 11, rate: 25 },
      { name: 'Lead Reçu', visits: 3, rate: 100 },
      { name: 'AXIO', visits: 3, rate: 100 },
    ],
    deviceSplit: [
      { name: 'Desktop', percentage: 9.6 },
      { name: 'Tablet', percentage: 2.64 },
      { name: 'Mobile', percentage: 80.04 },
      { name: 'Other', percentage: 7.72 },
    ],
    contactsOverTime: [
      { date: 'Fri', count: 2 },
      { date: 'Sat', count: 0 },
      { date: 'Sun', count: 1 },
      { date: 'Mon', count: 4 },
      { date: 'Tue', count: 5 },
      { date: 'Wed', count: 8 },
      { date: 'Thu', count: 7 },
      { date: 'Fri', count: 8 },
      { date: 'Sat', count: 6 },
      { date: 'Sun', count: 7 },
    ],
  },
  expert: {
    totalVisits: 234,
    conversions: 18,
    conversionRate: 7.7,
    variants: {
      original: { visits: 234, conversions: 18, rate: 7.7 },
    },
    pageConversions: [
      { name: 'Landing', visits: 234, rate: 100 },
      { name: 'Qualification', visits: 180, rate: 87 },
      { name: 'Optin', visits: 156, rate: 12 },
      { name: 'Lead Reçu', visits: 18, rate: 100 },
    ],
    deviceSplit: [
      { name: 'Desktop', percentage: 15.4 },
      { name: 'Tablet', percentage: 4.3 },
      { name: 'Mobile', percentage: 75.2 },
      { name: 'Other', percentage: 5.1 },
    ],
    contactsOverTime: [
      { date: 'Fri', count: 1 },
      { date: 'Sat', count: 0 },
      { date: 'Sun', count: 2 },
      { date: 'Mon', count: 3 },
      { date: 'Tue', count: 2 },
      { date: 'Wed', count: 4 },
      { date: 'Thu', count: 3 },
      { date: 'Fri', count: 2 },
      { date: 'Sat', count: 1 },
      { date: 'Sun', count: 0 },
    ],
  },
};

/**
 * Hook pour récupérer les données analytics d'un tunnel
 * 
 * @param funnelId - ID du tunnel (ex: 'formation', 'expert')
 * @param timeframe - Période de temps
 * @param variant - Variante A/B/C à filtrer
 * @returns Les données analytics du tunnel
 * 
 * TODO: Remplacer par un appel API réel vers /api/funnels/analytics
 */
export function useFunnelAnalytics(
  funnelId: string,
  timeframe: TimeframeOption = 'all',
  variant: VariantOption = 'all'
) {
  const [data, setData] = useState<FunnelAnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        // Pour l'instant, utiliser les données mockées
        // TODO: Remplacer par un vrai appel API
        // const response = await fetch(
        //   `/api/funnels/analytics?funnel=${funnelId}&timeframe=${timeframe}&variant=${variant}`
        // );
        // const result = await response.json();
        // setData(result);

        // Simulation d'un délai réseau
        await new Promise(resolve => setTimeout(resolve, 300));

        const mockData = MOCK_DATA[funnelId];
        if (!mockData) {
          throw new Error(`Données non trouvées pour le tunnel: ${funnelId}`);
        }

        setData(mockData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erreur inconnue'));
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [funnelId, timeframe, variant]);

  return { data, loading, error };
}

/**
 * Hook pour tracker un événement de funnel
 * 
 * @returns Fonction pour tracker un événement
 * 
 * TODO: Implémenter avec Vercel Analytics ou système custom
 */
export function useTrackFunnelEvent() {
  return async (eventData: {
    funnel: string;
    step: string;
    variant?: string;
    converted?: boolean;
  }) => {
    // TODO: Implémenter le tracking réel
    // await track('funnel_event', eventData);
    
    console.log('Event tracked:', eventData);
    
    // Pour le développement, logger dans la console
    if (process.env.NODE_ENV === 'development') {
      console.table(eventData);
    }
  };
}

/**
 * Hook pour récupérer la liste de tous les tunnels disponibles
 * 
 * @returns Liste des tunnels avec leurs métadonnées
 */
export function useAvailableFunnels() {
  return [
    { id: 'formation', name: 'Formation Gratuite', active: true },
    { id: 'expert', name: 'Parler à un Expert', active: true },
  ];
}



