# Formulaires natifs FlipImmo

Ce dossier regroupe la brique « formulaire multi-étapes » utilisable sur tous les funnels. L’objectif : builder des formulaires maison, traqués et raccordables à GHL en quelques minutes.

## Architecture

- `core/FormWizard.tsx` : orchestrateur de steps (logique, analytics, envoi final).
- `core/types.ts` : définition des types de step configurables.
- `lib/analytics/*` : helpers Mixpanel, GrowthBook, Meta Pixel, CAPI, génération d’`eventId`.
- `lib/webhooks/ghl.ts` : helper pour poster vers un webhook GoHighLevel.
- `components/providers/AppProviders.tsx` : init Mixpanel, GrowthBook et Meta Pixel + `PageView` sur chaque navigation.

## Variables d’environnement attendues

| Clé | Description |
| --- | --- |
| `NEXT_PUBLIC_MIXPANEL_TOKEN` | Token projet Mixpanel |
| `NEXT_PUBLIC_MIXPANEL_API_HOST` (optionnel) | URL API custom Mixpanel |
| `NEXT_PUBLIC_MIXPANEL_DEBUG` (optionnel) | `true` pour log en dev |
| `GROWTHBOOK_CLIENT_KEY` ou `NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY` | Clé client GrowthBook |
| `GROWTHBOOK_API_HOST` ou `NEXT_PUBLIC_GROWTHBOOK_API_HOST` (optionnel) | CDN GrowthBook alternatif |
| `NEXT_PUBLIC_FB_PIXEL_ID` ou `FB_PIXEL_ID` | ID Meta Pixel |
| `FB_ACCESS_TOKEN` | Access token Meta CAPI (System User) |
| `NEXT_PUBLIC_GHL_WEBHOOK_URL` | Webhook GoHighLevel par défaut |

## Comment créer un nouveau formulaire

1. **Configurer les steps**
   - Créer un fichier `config.ts` dans le funnel (`src/app/funnels/mon-funnel/config.ts`).
   - Définir un objet `FormWizardConfig` :

```ts
import type { FormWizardConfig } from '@/features/forms/core';

export const monFormConfig: FormWizardConfig = {
  steps: [
    {
      id: 'situation',
      kind: 'single-choice',
      title: 'Quelle est votre situation actuelle ?',
      variable: 'situation',
      options: [
        { label: 'Salarié', value: 'salarie', next: 'capital' },
        { label: 'Sans activité', value: 'sans_activite', next: 'reject' },
      ],
    },
    {
      id: 'contact',
      kind: 'contact',
      title: 'Vos coordonnées',
      variable: 'contact',
      fields: [
        { name: 'firstName', label: 'Prénom', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
      ],
    },
  ],
  successRedirect: '/typ',
  rejectRedirect: '/not-qualified',
};
```

2. **Brancher le wizard**
   - Créer un composant client (ex. `FormContainer.tsx`) et utiliser `FormWizard` :

```tsx
'use client';

import { FormWizard } from '@/features/forms/core';
import { sendToGhlWebhook } from '@/lib/webhooks/ghl';
import type { FormLeadPayload } from '@/features/forms/core';

import { monFormConfig } from './config';

export default function FormContainer() {
  const handleLead = async ({ answers, contact, eventId }: FormLeadPayload) => {
    await sendToGhlWebhook({
      form_name: 'MonFormulaire',
      event_id: eventId,
      ...answers,
      ...contact,
    });
  };

  return <FormWizard config={monFormConfig} onSubmitLead={handleLead} />;
}
```

3. **Créer la page du funnel** (`page.tsx`) et référencer le composant.

## Tracking & événements

- Chaque step : `mixpanel.track('form_step_completed', …)` + `fbq('trackCustom', 'FormStep', …)` avec un `eventID` unique.
- Soumission arrivée : `mixpanel.track('lead_submitted', …)` + `fbq('track', 'Lead', …)` + envoi auto vers `/api/fb-capi`.
- `AppProviders` déclenche `PageView` (Mixpanel + Meta) sur chaque changement de route.

## Intégration GHL

Le helper `sendToGhlWebhook` poste vers :
- l’URL passée en option (`webhookUrl`)
- sinon `NEXT_PUBLIC_GHL_WEBHOOK_URL`

Pour des webhooks multiples (ex. formation / contact / expert), surcharger `webhookUrl` depuis le funnel.

## Funnel de test

`/funnels/native-test` illustre la structure complète :
- questions qualificatives
- contact step
- envoi GHL
- tracking Mixpanel + Meta + CAPI

Dupliquer ce dossier pour créer un nouveau funnel, puis adapter `config.ts` et la fonction `handleLead`.


