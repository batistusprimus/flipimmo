# Guide d'Intégration du Tracking dans les Tunnels

## Vue d'ensemble

Ce guide explique comment intégrer le système de tracking dans vos tunnels de conversion existants.

## Étape 1 : Importer les fonctions de tracking

Dans chaque page de votre tunnel, importez les fonctions nécessaires :

```tsx
import { 
  trackPageView, 
  trackFormSubmit, 
  trackConversion,
  getSessionId,
  getVariant 
} from '@/app/funnels/analytics/tracking';
```

## Étape 2 : Tracker la vue de page

Ajoutez le tracking de la vue de page dans un `useEffect` :

```tsx
'use client';

import { useEffect } from 'react';
import { trackPageView, getSessionId, getVariant } from '@/app/funnels/analytics/tracking';

export default function FormationStep1() {
  useEffect(() => {
    const sessionId = getSessionId();
    const variant = getVariant(sessionId);
    trackPageView('formation', 'step1_metier', variant);
  }, []);

  return (
    // ... votre JSX
  );
}
```

## Étape 3 : Tracker les soumissions de formulaire

Ajoutez le tracking lors de la soumission :

```tsx
const handleSubmit = async (data: FormData) => {
  const sessionId = getSessionId();
  const variant = getVariant(sessionId);
  
  // Tracker la soumission
  trackFormSubmit('formation', 'step1_metier', variant, {
    field_count: Object.keys(data).length,
    selected_option: data.metier,
  });

  // Continuer avec votre logique normale
  // ... validation, passage à l'étape suivante, etc.
};
```

## Étape 4 : Tracker la conversion finale

Sur la dernière étape qui génère le lead :

```tsx
const handleFinalSubmit = async (data: LeadData) => {
  try {
    // Soumettre le lead à votre système
    await submitToGHL(data);
    
    // Tracker la conversion
    const sessionId = getSessionId();
    const variant = getVariant(sessionId);
    trackConversion('formation', 'final_submit', variant, {
      lead_type: 'formation',
      has_cpf: data.cpf === 'oui',
    });

    // Rediriger vers la page de remerciement
    router.push('/merci');
  } catch (error) {
    console.error('Erreur:', error);
  }
};
```

## Exemple Complet : Tunnel Formation

Voici un exemple complet d'intégration dans le tunnel de formation :

```tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  trackPageView,
  trackFormSubmit,
  trackConversion,
  getSessionId,
  getVariant,
} from '@/app/funnels/analytics/tracking';

export default function FormationTunnel() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [sessionId, setSessionId] = useState('');
  const [variant, setVariant] = useState<string>('original');

  // Initialiser le tracking au chargement
  useEffect(() => {
    const sid = getSessionId();
    const var = getVariant(sid);
    setSessionId(sid);
    setVariant(var);
    
    // Tracker la première page
    trackPageView('formation', 'landing', var);
  }, []);

  // Tracker les changements d'étape
  useEffect(() => {
    if (currentStep > 0) {
      const stepNames = ['metier', 'capital', 'delai', 'cpf', 'optin', 'final'];
      trackPageView('formation', stepNames[currentStep - 1], variant);
    }
  }, [currentStep, variant]);

  const handleStepSubmit = async (stepData: any) => {
    const stepNames = ['metier', 'capital', 'delai', 'cpf', 'optin', 'final'];
    
    // Tracker la soumission de l'étape
    trackFormSubmit('formation', stepNames[currentStep], variant, {
      step_number: currentStep,
      ...stepData,
    });

    // Si c'est la dernière étape, tracker la conversion
    if (currentStep === stepNames.length - 1) {
      trackConversion('formation', 'final', variant, {
        funnel_completed: true,
      });
      router.push('/merci');
    } else {
      // Passer à l'étape suivante
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div>
      {/* Votre interface de tunnel */}
      <StepComponent
        step={currentStep}
        onSubmit={handleStepSubmit}
        variant={variant}
      />
    </div>
  );
}
```

## Tests A/B/C : Afficher des Variantes Différentes

Pour tester différentes versions de votre tunnel :

```tsx
'use client';

import { useState, useEffect } from 'react';
import { getSessionId, getVariant } from '@/app/funnels/analytics/tracking';

export default function FormationLanding() {
  const [variant, setVariant] = useState<string>('original');

  useEffect(() => {
    const sessionId = getSessionId();
    const userVariant = getVariant(sessionId);
    setVariant(userVariant);
  }, []);

  // Afficher un contenu différent selon la variante
  const getHeadline = () => {
    switch (variant) {
      case 'variant_a':
        return "Devenez Marchand de Biens en 90 Jours";
      case 'variant_b':
        return "Formation Gratuite : Marchand de Biens";
      case 'variant_c':
        return "Gagnez 50k€ par An dans l'Immobilier";
      default:
        return "Formation Marchand de Biens Gratuite";
    }
  };

  return (
    <div>
      <h1>{getHeadline()}</h1>
      {/* Reste de votre page */}
    </div>
  );
}
```

## Personnalisation du Tracking

### Ajouter des métadonnées personnalisées

```tsx
trackFormSubmit('formation', 'capital', variant, {
  capital_range: '20k-50k',
  has_experience: false,
  referrer: document.referrer,
  utm_source: searchParams.get('utm_source'),
});
```

### Tracker des événements personnalisés

```tsx
import { trackEvent } from '@/app/funnels/analytics/tracking';

// Tracker un clic sur un bouton spécifique
trackEvent({
  funnel: 'formation',
  step: 'landing',
  variant,
  action: 'view',
  metadata: {
    button_clicked: 'learn_more',
    section: 'hero',
  },
});
```

## Vérification du Tracking

### En développement

Ouvrez la console du navigateur. Tous les événements trackés apparaîtront avec le préfixe "📊 Tracking Event:".

### En production

Une fois l'API connectée, vérifiez dans :
- Le dashboard analytics (`/funnels/analytics`)
- Vercel Analytics (si configuré)
- Votre base de données (si configurée)

## Checklist d'Intégration

Pour chaque tunnel, assurez-vous de :

- [ ] Importer les fonctions de tracking
- [ ] Tracker la vue de la page de landing
- [ ] Tracker chaque étape du tunnel
- [ ] Tracker la soumission de chaque formulaire
- [ ] Tracker la conversion finale
- [ ] Implémenter les variantes A/B/C (optionnel)
- [ ] Ajouter des métadonnées pertinentes
- [ ] Tester en local (vérifier la console)
- [ ] Vérifier les données dans le dashboard

## Prochaines Étapes

1. ✅ Intégrer le tracking dans tous les tunnels
2. ⏳ Configurer Vercel Analytics
3. ⏳ Créer l'API de persistance des données
4. ⏳ Connecter le dashboard aux vraies données
5. ⏳ Analyser et optimiser les conversions

## Support

En cas de problème :
1. Vérifiez la console du navigateur
2. Vérifiez que les imports sont corrects
3. Vérifiez que `getSessionId()` retourne bien un ID
4. Consultez la documentation dans `README.md`



