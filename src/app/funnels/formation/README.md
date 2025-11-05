# Tunnel « formation » — Quiz multi‑étapes

- Slug: `formation`
- Titre: `Accès à la Formation Gratuite - Marchand de Biens`
- Webhook: `/api/lead-webhook`
- Variantes: `a` (optin + niveau + budget), `b` (optin + objectif + disponibilités)
- Redirection finale: `https://calendly.com/client/rdv`

## Modifier ce tunnel
1) Ouvrir `config.ts` et ajuster: textes, options, ordre des étapes, URL Calendly.
2) Pour A/B, dupliquer la section `variants[0]` en modifiant `key: 'b'` et les étapes.
3) Aucun changement requis dans `page.tsx` tant que le moteur n’est pas branché.
4) Test: ajouter `?v=a` ou `?v=b` à l’URL. Ajouter `utm_source=test` pour vérifier la capture.

## Étapes (variante A)
- optin → q1 (niveau) → q2 (budget) → final (redirection Calendly)

## Notes
- Le formulaire d’optin doit envoyer `form_name` pertinent si posté côté client (ex: `SimpleDownloadForm`).
- Les événements recommandés: `quiz_optin_submitted`, `quiz_step_submitted`, `quiz_completed`.
