/**
 * Utilitaires de tracking pour les tunnels de conversion
 * 
 * Ce fichier contient les fonctions pour tracker les événements
 * dans les tunnels et les envoyer aux analytics.
 */

export interface TrackingEvent {
  funnel: string;
  step: string;
  variant?: string;
  action: 'view' | 'submit' | 'conversion' | 'abandon';
  metadata?: Record<string, string | number | boolean>;
}

/**
 * Détermine la variante A/B/C pour un utilisateur
 * Basé sur un hash du sessionId ou userId
 */
export function getVariant(sessionId?: string): 'original' | 'variant_a' | 'variant_b' | 'variant_c' {
  // Pour l'instant, retourner toujours 'original'
  // TODO: Implémenter la logique de répartition A/B/C
  
  if (!sessionId) {
    return 'original';
  }

  // Exemple de répartition : hash du sessionId % 4
  // 0 = original, 1 = variant_a, 2 = variant_b, 3 = variant_c
  const hash = simpleHash(sessionId);
  const variants = ['original', 'variant_a', 'variant_b', 'variant_c'] as const;
  return variants[hash % 4];
}

/**
 * Hash simple pour la répartition A/B/C
 */
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

/**
 * Obtient ou crée un sessionId unique pour le tracking
 */
export function getSessionId(): string {
  if (typeof window === 'undefined') {
    return '';
  }

  const storageKey = 'flipimmo_session_id';
  let sessionId = sessionStorage.getItem(storageKey);

  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem(storageKey, sessionId);
  }

  return sessionId;
}

/**
 * Détecte le type d'appareil de l'utilisateur
 */
export function getDeviceType(): 'desktop' | 'mobile' | 'tablet' | 'other' {
  if (typeof window === 'undefined') {
    return 'other';
  }

  const userAgent = navigator.userAgent.toLowerCase();
  const width = window.innerWidth;

  // Détection tablet
  if (
    /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent)
  ) {
    return 'tablet';
  }

  // Détection mobile
  if (
    /mobile|android|iphone|ipod|blackberry|iemobile|opera mini/.test(userAgent) ||
    width < 768
  ) {
    return 'mobile';
  }

  // Desktop par défaut
  if (width >= 768) {
    return 'desktop';
  }

  return 'other';
}

/**
 * Track un événement de funnel
 * 
 * @param event - L'événement à tracker
 * 
 * Cette fonction envoie les événements aux analytics.
 * Pour l'instant, elle log uniquement dans la console.
 * 
 * TODO: Implémenter l'envoi réel vers Vercel Analytics ou API custom
 */
export async function trackEvent(event: TrackingEvent): Promise<void> {
  const sessionId = getSessionId();
  const deviceType = getDeviceType();
  const timestamp = new Date().toISOString();

  const enrichedEvent = {
    ...event,
    sessionId,
    deviceType,
    timestamp,
    url: typeof window !== 'undefined' ? window.location.href : '',
    referrer: typeof document !== 'undefined' ? document.referrer : '',
  };

  // Log en développement
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Tracking Event:', enrichedEvent);
  }

  // TODO: Envoyer vers Vercel Analytics
  // if (typeof window !== 'undefined' && window.va) {
  //   window.va('track', event.action, enrichedEvent);
  // }

  // TODO: Ou envoyer vers votre propre API
  // try {
  //   await fetch('/api/track', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(enrichedEvent),
  //   });
  // } catch (error) {
  //   console.error('Erreur de tracking:', error);
  // }
}

/**
 * Hook pour tracker automatiquement la vue d'une page de funnel
 * À utiliser dans useEffect
 * 
 * @example
 * ```tsx
 * useEffect(() => {
 *   trackPageView('formation', 'landing', getVariant(getSessionId()));
 * }, []);
 * ```
 */
export function trackPageView(
  funnel: string,
  step: string,
  variant?: string
): void {
  trackEvent({
    funnel,
    step,
    variant,
    action: 'view',
  });
}

/**
 * Track la soumission d'un formulaire dans un funnel
 * 
 * @example
 * ```tsx
 * const handleSubmit = (data: FormData) => {
 *   trackFormSubmit('formation', 'landing', getVariant(getSessionId()), {
 *     formFields: Object.keys(data).length,
 *   });
 *   // ... reste de la logique
 * };
 * ```
 */
export function trackFormSubmit(
  funnel: string,
  step: string,
  variant?: string,
  metadata?: Record<string, string | number | boolean>
): void {
  trackEvent({
    funnel,
    step,
    variant,
    action: 'submit',
    metadata,
  });
}

/**
 * Track une conversion finale (lead généré)
 * 
 * @example
 * ```tsx
 * const handleFinalSubmit = async (data: FormData) => {
 *   await submitLead(data);
 *   trackConversion('formation', 'final', getVariant(getSessionId()));
 *   router.push('/merci');
 * };
 * ```
 */
export function trackConversion(
  funnel: string,
  step: string,
  variant?: string,
  metadata?: Record<string, string | number | boolean>
): void {
  trackEvent({
    funnel,
    step,
    variant,
    action: 'conversion',
    metadata,
  });
}

/**
 * Track l'abandon d'un funnel
 * Peut être appelé quand l'utilisateur quitte la page ou revient en arrière
 */
export function trackAbandon(
  funnel: string,
  step: string,
  variant?: string
): void {
  trackEvent({
    funnel,
    step,
    variant,
    action: 'abandon',
  });
}

/**
 * Hook React pour tracker automatiquement une page
 * 
 * @example
 * ```tsx
 * import { useTrackPage } from '@/app/funnels/analytics/tracking';
 * 
 * export default function FormationLanding() {
 *   useTrackPage('formation', 'landing');
 *   // ... reste du composant
 * }
 * ```
 */
export function useTrackPage(funnel: string, step: string, variant?: string) {
  if (typeof window === 'undefined') {
    return;
  }

  const sessionId = getSessionId();
  const variantToUse = variant || getVariant(sessionId);

  // Track au chargement
  trackPageView(funnel, step, variantToUse);

  // Track l'abandon si l'utilisateur quitte
  const handleBeforeUnload = () => {
    trackAbandon(funnel, step, variantToUse);
  };

  window.addEventListener('beforeunload', handleBeforeUnload);

  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };
}



