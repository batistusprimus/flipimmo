import { useEffect, useState } from 'react';

import {
  calculateABStats,
  getAssignedVariant,
  trackLandingView,
  type LandingVariant,
} from './ab-tracking';

/**
 * Hook pour gérer le tracking A/B de la landing page
 * 
 * @param urlVariant - Variante forcée depuis l'URL (?v=a ou ?v=b)
 * @returns La variante assignée (a ou b)
 * 
 * @example
 * ```tsx
 * export default function LandingPage({ searchParams }) {
 *   const variant = useLandingABTracking(searchParams.v);
 *   
 *   return (
 *     <div>
 *       <h1>{getTitle(variant)}</h1>
 *     </div>
 *   );
 * }
 * ```
 */
export function useLandingABTracking(urlVariant?: string | null): LandingVariant {
  const [variant, setVariant] = useState<LandingVariant>('a');

  useEffect(() => {
    const assignedVariant = getAssignedVariant(urlVariant);
    setVariant(assignedVariant);
    trackLandingView(assignedVariant);
  }, [urlVariant]);

  return variant;
}

/**
 * Hook pour récupérer les statistiques A/B en temps réel
 * 
 * @returns Stats A/B (views par variante, pourcentages)
 * 
 * @example
 * ```tsx
 * export default function ABTestDashboard() {
 *   const stats = useABStats();
 *   
 *   return (
 *     <div>
 *       <p>Variante A: {stats.variantA.views} vues ({stats.variantA.percentage}%)</p>
 *       <p>Variante B: {stats.variantB.views} vues ({stats.variantB.percentage}%)</p>
 *     </div>
 *   );
 * }
 * ```
 */
export function useABStats() {
  const [stats, setStats] = useState(() => {
    // Initialiser avec des valeurs par défaut pour éviter les problèmes SSR
    if (typeof window === 'undefined') {
      return {
        totalViews: 0,
        totalConversions: 0,
        conversionRate: 0,
        variantA: { views: 0, percentage: 0, conversions: 0, conversionRate: 0 },
        variantB: { views: 0, percentage: 0, conversions: 0, conversionRate: 0 },
      };
    }
    return calculateABStats();
  });

  useEffect(() => {
    // Charger les stats initiales
    setStats(calculateABStats());

    // Mettre à jour les stats toutes les 5 secondes
    const interval = setInterval(() => {
      setStats(calculateABStats());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return stats;
}

