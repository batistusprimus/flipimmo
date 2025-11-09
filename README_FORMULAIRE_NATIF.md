# Déploiement du formulaire natif FlipImmo

> Synthèse complète des actions réalisées le 9 novembre 2025 pour remplacer LeadCapture par la brique formulaire maison et préparer la duplication vers les autres marques.

---

## 1. Contexte & objectifs

- Supprimer la dépendance au script LeadCapture sur le funnel `/funnels/landing`.
- Utiliser le composant `FormWizard` (formulaire multi-étapes natif) en production.
- Garantir l’envoi webhook GHL des réponses normalisées (`stepX_*`) ainsi que des champs contact standards.
- Conserver la logique A/B, le tracking Mixpanel + Meta (pixel & CAPI) et la redirection rapide vers les pages TYP.

---

## 2. Structure créée / modifiée

```
src/app/funnels/landing/
├── config.ts                # FormWizardConfig réutilisant la version native
├── LandingForm.tsx          # Conteneur client : FormWizard + webhook + tracking
├── page.tsx                 # Remplacement de l'embed LeadCapture par LandingForm
├── hooks.ts                 # useLandingABTracking & useABStats pour le tracking A/B
└── ab-tracking.ts           # Fonctions de tracking A/B (vues, conversions, stats)

src/app/funnels/analytics/ab-test/
└── page.tsx                 # Dashboard des statistiques A/B en temps réel

src/app/funnels/native-test/
├── config.ts                # FormWizardConfig (id: "native-test", name: "Formulaire natif FlipImmo")
├── TestForm.tsx             # Alimente GHL avec les libellés humains
└── page.tsx                 # Mise en page prototypage + branding FlipImmo

src/features/forms/core/
└── FormWizard.tsx           # Progression, branding, validations temps réel & mapping contact
```

---

## 3. Pré-requis techniques

- Variables d’environnement déjà en place :  
  `NEXT_PUBLIC_GHL_WEBHOOK_URL`, `NEXT_PUBLIC_MIXPANEL_TOKEN`, `FB_PIXEL_ID` (+ CAPI).
- AppProviders initialisent Mixpanel / GrowthBook / Meta Pixel (déjà opérationnel).
- Webhook GHL configuré pour recevoir le JSON standard.

---

## 4. Procédure implémentée

### 4.1 Créer / réutiliser une configuration de formulaire

1. Importer `FormWizardConfig`.
2. Dupliquer la configuration du prototype (`native-test`) si besoin.
3. Définir chaque étape :
   - `single-choice` : `id`, `variable`, `options` avec `label`, `value`, `next`.
   - `contact` : `fields` (`firstName`, `phone`, `email`, etc.), `optinType`, `successRedirect`.
4. Exporter la config (ex. `landingFormConfig`).

### 4.2 Créer le conteneur client

`LandingForm.tsx` :
- Constantes : `FORM_NAME`, `FORM_SOURCE_BASE`.
- Fonctions utilitaires :
  - `stringValue()` : normalise toute valeur.
- `buildLeadPayload()` :
  - Construit `flattenedContact`.
  - Normalise chaque step en chaîne de caractères et les expose via les champs `stepX_*`.
  - Concatène les métadonnées (optin, tracking, contexte navigateur) et renvoie un JSON prêt pour GHL.
  - Déverse également `answers` et `answers_json` pour conserver la structure complète côté CRM.
- Handlers :
  - `handleLead` : `sendToGhlWebhook(body)` + `trackLandingConversion`.
  - `handleReject` : log soft en dev.

### 4.3 Brancher sur la page

`landing/page.tsx` :
- Suppression du script LeadCapture (`useEffect` injectant `useleadbot`).
- Rendu du composant `<LandingForm variant={variant} />` dans l’UI existante.
- Conservation de la logique A/B (`useLandingABTracking`) pour adapter titres & sous-titres.

### 4.4 Mise à jour du core

`FormWizard.tsx` :
- Soumission du lead en arrière-plan (pas de `await` bloquant).
- Tracking Mixpanel / Pixel / CAPI conservé (émet les mêmes events).
- `extractContactData` fusionne désormais tous les steps contact.
- Ajout de `displayValue` dans le tracking (sans impacter le webhook).
- Redirection TYP immédiate (`router.push` non retardé).
- Barre de progression native (calculée sur la liste des steps) + stylage FlipImmo.
- Boutons/options remis aux couleurs maison (combo bleu marine / orange, hover states).
- Bandeau “267 Marchands de Biens…” animé à chaque step (ease-out cubic).

### 4.5 Validation temps réel & normalisation des inputs

Toujours dans `FormWizard.tsx` :
- `handleContactChange` utilise `sanitizeContactFieldValue` pour ajuster la saisie en direct :
  - Téléphone : ne garde que les chiffres, limite à 10 caractères (`0XXXXXXXXX`).
  - Code postal : chiffres uniquement, limite 5.
  - Email : trimming + désactive les auto-capitalisations.
- `validateContactField` renvoie immédiatement les erreurs (`mode = 'change'`) :
  - Téléphone : message “Format attendu : 10 chiffres…” puis “numéro valide” si check regex.
  - Email : même logique avec message “Merci de saisir une adresse email valide”.
  - Code postal : message “5 chiffres” si incomplet.
- Attributs HTML alignés (`pattern`, `inputMode`, `maxLength`, `title`) pour renforcer la validation côté navigateur.
- Les erreurs sont purgées dès que l’entrée redevient valide (UX sans frottement).

### 4.6 Harmonisation du funnel de test

`native-test/TestForm.tsx` :
- Payload identique à `LandingForm` (même structure `stepX_*`).
- `config.ts` : routage corrigé (`accompagnement`, `reseau` → `optin-standard`).

### 4.7 Page merci

`src/app/merci/page.tsx` :
- Suppression du `fbq('track', 'Lead')` injecté côté client pour éviter un doublon avec l’événement émis par `FormWizard`.
- La page reste purement informative, le tracking Lead est désormais centralisé dans la soumission du formulaire + CAPI.

---

## 5. Tracking & analytics

- **Mixpanel**  
  `form_start`, `form_step_completed`, `lead_submitted`, `redirect_typ` avec `eventId` unique.
- **Meta Pixel + CAPI**  
  `Lead` envoyé immédiatement par `FormWizard` (page URL, referrer, optinType, stepId) avec `eventID` unique, sans second `Lead` sur la page TYP.  
  Le hashage email / phone reste géré dans `sendMetaEvent`.  
  `trackPixelPageView()` est rejoué sur chaque navigation SPA via `AppProviders`, garantissant les `PageView` sans recharger la page.
- **A/B Landing**  
  - `trackLandingConversion(variant)` appelé lors de la soumission pour alimenter les stats locales.
  - Dashboard disponible sur `/funnels/analytics/ab-test` pour visualiser les métriques en temps réel.
  - Le hook `useABStats()` récupère les données depuis localStorage et se met à jour automatiquement toutes les 5 secondes.
  - **Fix (9 nov 2025)** : Initialisation sécurisée du hook avec valeurs par défaut pour éviter les erreurs SSR (commit `f080295`).

---

## 6. Vérifications / QA

1. Tester chaque parcours utilisateur (variation A & B).
2. Vérifier les payloads dans GHL :
   - Métadonnées principales : `form_name`, `form_variant`, `source`, `optin_type`, `optin_page`, `submitted_at`.
   - Champs contact : `first_name`, `last_name` (optionnel), `postal_code`, `phone`, `email`.
   - Réponses normalisées : `step1_mdb`, `step2_transactions`, `step3_objective`, `step4_metier`, `step5_delai`, `step6_capital`, `step7_besoin`, `step71_formation`, `step712_confirmation`, `step8_priority`, `step9_high_need`, `step10_high_capital`, `step11_cpf`.
   - Copies structurées : `answers` (objet) et `answers_json` (stringifiée) disponibles pour audit.
3. Confirmer la redirection TYP immédiate (plus de délai de 7 s).
4. Contrôler les événements Mixpanel / Pixel en dev (console + network).
5. Vérifier dans le Pixel Helper que la page `merci` n'émet plus de `Lead` supplémentaire (un seul `Lead` doit apparaître lors de la soumission).
6. **Tester les statistiques A/B** :
   - Visiter la landing plusieurs fois (avec `?v=a` et `?v=b` ou en navigation privée).
   - Vérifier le localStorage : `flipimmo_landing_events` et `flipimmo_landing_conversions`.
   - Consulter le dashboard `/funnels/analytics/ab-test` pour voir les métriques mises à jour.
   - Confirmer que les stats se rafraîchissent automatiquement toutes les 5 secondes.
   - Vérifier les logs en dev : `📊 Landing View Tracked` et `✅ Landing Conversion Tracked`.
7. Contrôler les validations live :
   - Téléphone : saisie non numérique bloquée, message instantané si < 10 chiffres.
   - Code postal : 5 chiffres max, erreur immédiate si incomplet.
   - Email : message "adresse email valide" lors d'un format invalide.
8. Observer l'animation "267 Marchands de Biens…" à chaque step (compteur doit repartir d'une valeur basse et monter sans à-coups).
9. Optionnel : vérifier que les webhooks GHL ne retournent pas d'erreur 4xx/5xx.

---

## 7. Checklist duplication pour une nouvelle marque

- [ ] Créer `src/app/funnels/<marque>/config.ts` avec les steps adaptés.
- [ ] Générer `<marque>/Form.tsx` en copiant `LandingForm` :
      - Mettre à jour `FORM_NAME`, `FORM_SOURCE_BASE`, redirections, tracking spécifique.
- [ ] Injecter `<Form variant={variant} />` dans la page du funnel (suppression éventuelle de scripts externes).
- [ ] Ajuster les alias CRM si la marque utilise d’autres champs.
- [ ] Tester chaque optin (formation / standard / incubateur) et vérifier GHL / analytics.
- [ ] Commit + push (une fois QA validée).

---

## 8. Commandes Git exécutées

### 8.1 Déploiement initial du formulaire natif

```bash
git status -sb
git add src/app/funnels/landing/page.tsx \
        src/app/funnels/native-test/TestForm.tsx \
        src/app/funnels/native-test/config.ts \
        src/features/forms/core/FormWizard.tsx \
        src/app/funnels/landing/LandingForm.tsx \
        src/app/funnels/landing/config.ts
git commit -m "Remplacer LeadCapture par formulaire natif et normaliser payloads"
git push
```

Commit : `c980d0d Remplacer LeadCapture par formulaire natif et normaliser payloads`.

### 8.2 Correction du système de stats A/B

```bash
git add src/app/funnels/landing/hooks.ts src/app/funnels/landing/page.tsx
git commit -m "fix: correction du hook useABStats pour résoudre les problèmes de stats A/B"
git push
```

Commit : `f080295 fix: correction du hook useABStats pour résoudre les problèmes de stats A/B`.

**Problème résolu** : Le hook `useABStats()` initialisait le state avec `calculateABStats()` directement, causant des erreurs SSR. Solution : initialisation avec une fonction qui retourne des valeurs par défaut côté serveur, puis chargement des vraies données dans `useEffect`.

---

### Notes finales

- Les formulaires restent 100 % configurables via les fichiers `config.ts`.  
- Les seules dépendances externes sont déjà en place (Mixpanel, Meta, GrowthBook, GHL).  
- Pour tout nouveau funnel, se baser sur ce README et sur `LandingForm.tsx` comme blueprint.

---

## 9. Mapping GHL de référence

Référence rapide des champs envoyés par `LandingForm` / `TestForm` :

- Contact : `first_name`, `last_name`, `postal_code`, `phone`, `email`.
- Réponses : `step1_mdb`, `step2_transactions`, `step3_objective`, `step4_metier`, `step5_delai`, `step6_capital`, `step7_besoin`, `step71_formation`, `step712_confirmation`, `step8_priority`, `step9_high_need`, `step10_high_capital`, `step11_cpf`.
- Contextes : `form_name`, `form_variant`, `source`, `optin_type`, `optin_page`, `page_url`, `parent_url`, `referrer`, `user_agent`, `query_string`, `submitted_at`.
- Copies brutes : `answers`, `answers_json`.


