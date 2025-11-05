/**
 * Système de tracking A/B pour la landing page Formation
 * 
 * Track uniquement : VUE de la landing (pas encore les conversions)
 */

export type LandingVariant = 'a' | 'b';

interface LandingViewEvent {
  variant: LandingVariant;
  timestamp: Date;
  sessionId: string;
  deviceType: string;
  url: string;
}

/**
 * Obtient ou crée un ID de session unique
 */
export function getSessionId(): string {
  if (typeof window === 'undefined') return '';

  const storageKey = 'flipimmo_landing_session';
  let sessionId = sessionStorage.getItem(storageKey);

  if (!sessionId) {
    sessionId = `landing_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem(storageKey, sessionId);
  }

  return sessionId;
}

/**
 * Assigne ou récupère la variante A/B pour cet utilisateur
 * Répartition : 50% A, 50% B
 */
export function getAssignedVariant(urlParam?: string | null): LandingVariant {
  if (typeof window === 'undefined') return 'a';

  // Si variante forcée dans l'URL (?v=a ou ?v=b)
  if (urlParam === 'a' || urlParam === 'b') {
    sessionStorage.setItem('flipimmo_landing_variant', urlParam);
    return urlParam;
  }

  // Vérifier si déjà assignée
  const stored = sessionStorage.getItem('flipimmo_landing_variant');
  if (stored === 'a' || stored === 'b') {
    return stored;
  }

  // Assigner aléatoirement A ou B (50/50)
  const sessionId = getSessionId();
  const hash = simpleHash(sessionId);
  const variant: LandingVariant = hash % 2 === 0 ? 'a' : 'b';
  
  sessionStorage.setItem('flipimmo_landing_variant', variant);
  return variant;
}

/**
 * Hash simple pour répartition A/B
 */
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

/**
 * Détecte le type d'appareil
 */
export function getDeviceType(): 'desktop' | 'mobile' | 'tablet' {
  if (typeof window === 'undefined') return 'desktop';

  const width = window.innerWidth;
  const userAgent = navigator.userAgent.toLowerCase();

  if (/(ipad|tablet|(android(?!.*mobile)))/.test(userAgent)) {
    return 'tablet';
  }

  if (/mobile|android|iphone/.test(userAgent) || width < 768) {
    return 'mobile';
  }

  return 'desktop';
}

/**
 * Stocke les événements de tracking dans localStorage
 */
function storeEvent(event: LandingViewEvent): void {
  if (typeof window === 'undefined') return;

  const storageKey = 'flipimmo_landing_events';
  const existingEvents = localStorage.getItem(storageKey);
  const events: LandingViewEvent[] = existingEvents ? JSON.parse(existingEvents) : [];
  
  events.push(event);
  
  // Garder seulement les 1000 derniers événements
  if (events.length > 1000) {
    events.splice(0, events.length - 1000);
  }
  
  localStorage.setItem(storageKey, JSON.stringify(events));
}

/**
 * Track la vue de la landing page
 * 
 * @param variant - Variante A ou B
 */
export function trackLandingView(variant: LandingVariant): void {
  const event: LandingViewEvent = {
    variant,
    timestamp: new Date(),
    sessionId: getSessionId(),
    deviceType: getDeviceType(),
    url: typeof window !== 'undefined' ? window.location.href : '',
  };

  // Stocker localement
  storeEvent(event);

  // Log en développement
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Landing View Tracked:', {
      variant,
      sessionId: event.sessionId,
      deviceType: event.deviceType,
    });
  }

  // TODO: Envoyer vers API ou Vercel Analytics
  // await fetch('/api/track/landing-view', {
  //   method: 'POST',
  //   body: JSON.stringify(event),
  // });
}

/**
 * Récupère tous les événements stockés localement
 */
export function getStoredEvents(): LandingViewEvent[] {
  if (typeof window === 'undefined') return [];

  const storageKey = 'flipimmo_landing_events';
  const stored = localStorage.getItem(storageKey);
  
  if (!stored) return [];

  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

/**
 * Calcule les stats A/B depuis les événements stockés
 */
export function calculateABStats() {
  const events = getStoredEvents();
  
  const variantAViews = events.filter(e => e.variant === 'a').length;
  const variantBViews = events.filter(e => e.variant === 'b').length;
  
  return {
    totalViews: events.length,
    variantA: {
      views: variantAViews,
      percentage: events.length > 0 ? (variantAViews / events.length) * 100 : 0,
    },
    variantB: {
      views: variantBViews,
      percentage: events.length > 0 ? (variantBViews / events.length) * 100 : 0,
    },
  };
}

/**
 * Efface tous les événements (pour reset)
 */
export function clearEvents(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('flipimmo_landing_events');
  sessionStorage.removeItem('flipimmo_landing_variant');
  sessionStorage.removeItem('flipimmo_landing_session');
}

