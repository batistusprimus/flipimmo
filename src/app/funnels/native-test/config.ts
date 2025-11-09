import type { FormWizardConfig } from '@/features/forms/core';

export const nativeTestFormConfig: FormWizardConfig = {
  steps: [
    {
      id: 'situation',
      kind: 'single-choice',
      title: 'Quelle est votre situation actuelle ?',
      variable: 'situation',
      options: [
        { label: 'Salarié', value: 'salarie', next: 'capital' },
        { label: 'Indépendant', value: 'independant', next: 'capital' },
        { label: 'Sans activité', value: 'sans_activite', next: 'reject' },
      ],
    },
    {
      id: 'capital',
      kind: 'single-choice',
      title: 'Quel capital avez-vous disponible ?',
      variable: 'capital',
      options: [
        { label: 'Moins de 10 000 €', value: 'moins_10k', next: 'reject' },
        { label: 'Entre 10 000 € et 50 000 €', value: '10k_50k', next: 'timeline' },
        { label: 'Plus de 50 000 €', value: 'plus_50k', next: 'timeline' },
      ],
    },
    {
      id: 'timeline',
      kind: 'single-choice',
      title: 'Quand souhaitez-vous démarrer ?',
      variable: 'timeline',
      options: [
        { label: 'Immédiatement', value: 'immediat', next: 'contact' },
        { label: 'Dans 1 à 3 mois', value: '1_3_mois', next: 'contact' },
        { label: 'Dans plus de 3 mois', value: 'plus_3_mois', next: 'contact' },
      ],
    },
    {
      id: 'contact',
      kind: 'contact',
      title: 'Vos coordonnées',
      subtitle: 'Nous utilisons ces informations pour vous envoyer votre plan personnalisé.',
      variable: 'contact',
      submitLabel: 'Recevoir mon plan personnalisé',
      fields: [
        { name: 'firstName', label: 'Prénom', placeholder: 'Jean', required: true, autoComplete: 'given-name' },
        { name: 'lastName', label: 'Nom', placeholder: 'Dupont', required: true, autoComplete: 'family-name' },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'jean.dupont@email.fr', required: true, autoComplete: 'email' },
        { name: 'phone', label: 'Téléphone', type: 'tel', placeholder: '06 12 34 56 78', required: true, autoComplete: 'tel' },
      ],
    },
  ],
  successRedirect: '/merci',
};


