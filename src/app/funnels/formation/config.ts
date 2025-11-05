export type Field =
  | { type: 'text'; name: string; label: string; required?: boolean; placeholder?: string }
  | { type: 'email'; name: string; label: string; required?: boolean }
  | { type: 'number'; name: string; label: string; required?: boolean; min?: number; max?: number }
  | { type: 'radio'; name: string; label: string; required?: boolean; options: string[] }
  | { type: 'select'; name: string; label: string; required?: boolean; options: string[] };

export type Step = {
  id: string;
  title: string;
  subtitle?: string;
  fields: Field[];
  next?: (answers: Record<string, any>) => string | null;
  onSubmitEvent?: string;
};

export type Variant = {
  key: 'a' | 'b';
  steps: Step[];
  calendlyUrl: string;
};

export type FunnelConfig = {
  slug: 'formation';
  title: string;
  variants: Variant[];
  leadWebhookPath: '/api/lead-webhook';
};

export const config: FunnelConfig = {
  slug: 'formation',
  title: 'Accès à la Formation Gratuite - Marchand de Biens',
  leadWebhookPath: '/api/lead-webhook',
  variants: [
    {
      key: 'a',
      calendlyUrl: 'https://calendly.com/client/rdv',
      steps: [
        {
          id: 'optin',
          title: 'Recevez la formation gratuite',
          fields: [
            { type: 'text', name: 'firstName', label: 'Prénom', required: true },
            { type: 'email', name: 'email', label: 'Email', required: true },
            { type: 'radio', name: 'rgpd', label: 'Consentement', options: ['Oui'], required: true }
          ],
          onSubmitEvent: 'quiz_optin_submitted',
          next: () => 'q1'
        },
        {
          id: 'q1',
          title: 'Votre niveau',
          fields: [
            { type: 'radio', name: 'level', label: 'Vous êtes…', required: true, options: ['Débutant', 'Intermédiaire', 'Avancé'] }
          ],
          next: () => 'q2'
        },
        {
          id: 'q2',
          title: 'Budget',
          fields: [
            { type: 'number', name: 'budget', label: 'Budget dispo (€)', required: true, min: 0 }
          ],
          next: () => 'final'
        },
        { id: 'final', title: 'Parfait !', fields: [] }
      ]
    },
    {
      key: 'b',
      calendlyUrl: 'https://calendly.com/client/rdv',
      steps: [
        {
          id: 'optin',
          title: 'Accédez dès maintenant à la formation',
          fields: [
            { type: 'text', name: 'firstName', label: 'Prénom', required: true },
            { type: 'email', name: 'email', label: 'Email', required: true }
          ],
          onSubmitEvent: 'quiz_optin_submitted',
          next: () => 'q1'
        },
        {
          id: 'q1',
          title: 'Objectif principal',
          fields: [
            { type: 'select', name: 'goal', label: 'Votre objectif', required: true, options: ['Apprendre', 'Passer à l’action', 'Trouver une formation'] }
          ],
          next: () => 'q2'
        },
        {
          id: 'q2',
          title: 'Disponibilités',
          fields: [
            { type: 'radio', name: 'availability', label: 'Quand souhaitez-vous démarrer ?', required: true, options: ['Maintenant', 'Ce mois‑ci', 'Plus tard'] }
          ],
          next: () => 'final'
        },
        { id: 'final', title: 'C’est parti !', fields: [] }
      ]
    }
  ]
};
