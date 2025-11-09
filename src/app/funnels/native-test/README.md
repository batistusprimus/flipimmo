# Funnel test natif

Ce funnel sert de sandbox pour valider la stack formulaire maison :

- logique conditionnelle (step → step / rejet) ;
- tracking Mixpanel + Meta (Pixel + CAPI) via `FormWizard` ;
- envoi GoHighLevel avec `sendToGhlWebhook`.

## Structure

- `config.ts` : définition des étapes (questions + coordonnées).
- `TestForm.tsx` : composant client qui connecte le `FormWizard` et la fonction d’envoi.
- `page.tsx` : shell visuel de la page.

## Dupliquer pour un nouveau funnel

1. Copier le dossier et renommer (ex. `bpc`).
2. Adapter `config.ts` (questions, options, redirections).
3. Ajuster `TestForm.tsx` (`form_name`, payload GHL, logique rejet si besoin).
4. Brancher la page finale (`page.tsx`) à ton design.

## Points de vérification

- `NEXT_PUBLIC_MIXPANEL_TOKEN` (ou valeur par défaut dans `mixpanel.ts`), `GROWTHBOOK_CLIENT_KEY`, `FB_ACCESS_TOKEN`, `NEXT_PUBLIC_FB_PIXEL_ID` configurés.
- `NEXT_PUBLIC_GHL_WEBHOOK_URL` (ou URL custom) renseigné pour recevoir le lead.
- Vérifier `Test Events` dans Meta Business et funnel Mixpanel pour confirmer la réception.


