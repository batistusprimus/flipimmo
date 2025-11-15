# Formulaires natifs BPC — Source de vérité

> Ce document est la référence unique pour concevoir, déployer et maintenir les formulaires natifs de toutes les marques du groupe BPC. Il décrit la configuration, l’intégration aux pages marketing, le tracking analytics, la gestion d’A/B tests et l’envoi des leads vers GHL.

---

## 1. Objectifs & périmètre multi-marques

- Remplacer systématiquement toute intégration LeadCapture ou script tiers par le composant `FormWizard` natif.
- Couvrir l’ensemble des parcours funnel des marques BPC (FlipImmo, BPC Academy, etc.).
- Normaliser le mapping des réponses (`stepX_*`), des champs contact et des métadonnées avant l’envoi GHL.
- Offrir un cadre unique pour le tracking Mixpanel, Meta Pixel & CAPI, et pour la gestion des tests A/B.
- Rendre chaque duplication de formulaire prédictible grâce à un processus documenté et vérifiable.

---

## 2. Gouvernance du référentiel

- **Responsabilité** : toute mise à jour de `FormWizard`, d’un `Form.tsx`, d’un `config.ts` ou des utilitaires GHL doit être reflétée ici.
- **PR checklist** : l’auteur d’une PR touchant les formulaires doit vérifier que le README reste exact. Si une divergence apparaît, mettre à jour le fichier dans la même PR.
- **Suivi des marques** : compléter le tableau ci-dessous à chaque nouvelle implémentation ou évolution majeure.

| Marque        | Funnel principal              | Statut             | Particularités                                                |
|--------------|--------------------------------|--------------------|---------------------------------------------------------------|
| FlipImmo     | `src/app/funnels/landing`      | ✅ Prod            | A/B actif, redirection `/merci`, tracking complet en place    |
| BPC Academy  | _à définir_                    | 🚧 Planification   | Opt-in formation spécifique, hooks GrowthBook à valider       |
| …            | _ajouter ici_                  | _mettre à jour_    | Documenter redirections, alias CRM, variantes créatives       |

---

## 3. Architecture des fichiers

```
src/app/funnels/<marque>/
├── config.ts                # Définition du formulaire (FormWizardConfig)
├── Form.tsx                 # Conteneur client : FormWizard + webhook + tracking
└── page.tsx                 # Page marketing intégrant le formulaire (et AB tests)

src/app/funnels/native-test/
├── config.ts                # Sandbox de référence
├── TestForm.tsx             # Conteneur de test (payload identique aux formulaires prod)
└── page.tsx                 # Prototype interne pour QA

src/features/forms/core/
├── FormWizard.tsx           # Composant multi-étapes partagé
├── types.ts                 # Types et contrats de config
└── utils/                   # Normalisation valeurs, validations, tracking, GHL
```

- `native-test` reste la base de duplication pour toute nouvelle marque.
- Les assets marketing (preuves sociales, textes) doivent vivre dans la page de marque, jamais dans `FormWizard`.

---

## 4. Pré-requis techniques globaux

- Variables d’environnement : `NEXT_PUBLIC_GHL_WEBHOOK_URL`, `NEXT_PUBLIC_MIXPANEL_TOKEN`, `FB_PIXEL_ID` (et config CAPI).
- `AppProviders` initialise Mixpanel, GrowthBook et Meta Pixel. Ne pas dupliquer ces initialisations côté page.
- Le webhook GHL doit être configuré pour accepter le JSON documenté au §13.
- Les accès aux dashboards (`/funnels/analytics/ab-test`, Mixpanel, Pixel Helper) sont nécessaires pour la QA.

---

## 5. Workflow de déploiement standard

1. **Kick-off**
   - cartographier le funnel existant (scripts tiers, embed, etc.) ;
   - recenser les opt-ins requis (standard, formation, incubateur…).
2. **Configuration du formulaire**
   - dupliquer `src/app/funnels/native-test/config.ts` ;
   - ajuster steps, conditions et `optinType` (cf. §6).
3. **Construction du conteneur**
   - dupliquer `LandingForm.tsx` → `src/app/funnels/<marque>/Form.tsx` ;
   - mettre à jour `FORM_NAME`, `FORM_SOURCE_BASE`, redirections, tracking (cf. §7).
4. **Intégration page**
   - mettre à jour `page.tsx` pour rendre `<Form variant={variant} />` ;
   - supprimer scripts historiques et veiller au SEO (cf. §8).
5. **Tracking & A/B**
   - vérifier les hooks analytics, GrowthBook et Mixpanel ;
   - configurer/valider le test A/B si la marque en possède un (cf. §9).
6. **QA complète**
   - dérouler la checklist (§11), valider GHL et analytics ;
   - consigner toute particularité dans le tableau §2.
7. **Release & suivi**
   - merger, déployer et surveiller les dashboards ;
   - informer marketing/CRM des événements collectés et des redirections.

---

## 6. Configuration du formulaire (`config.ts`)

### 6.1 Conventions

- `id` des steps : `step<number>_<variable>` (`step2_transactions`, `step7_besoin`, etc.).
- `variable` sert de clé fonctionnelle exploitable dans les dashboards.
- `options.value` correspond à la valeur envoyée dans `stepX_*` et utilisée par les équipes métier.
- `contact` doit préciser `optinType` (`standard`, `formation`, `incubateur`, …) et `successRedirect`.

### 6.2 Structure type

```ts
import { FormWizardConfig } from '@/features/forms/core/types';

export const marqueFormConfig: FormWizardConfig = {
  formName: 'BPC Marque – Formulaire',
  steps: [
    {
      id: 'step1_mdb',
      type: 'single-choice',
      variable: 'mdb',
      options: [
        { label: 'Oui', value: 'oui', next: 'step2_transactions' },
        { label: 'Non', value: 'non', next: 'step2_transactions' },
      ],
    },
    // …
    {
      id: 'contact',
      type: 'contact',
      optinType: 'standard',
      successRedirect: '/merci',
      fields: ['firstName', 'phone', 'email', 'postalCode'],
    },
  ],
};
```

### 6.3 Points d’attention

- Vérifier que chaque `next` pointe vers un step existant (ou `undefined` pour terminer).
- Centraliser les textes marketing dans les pages, pas dans la config.
- Ajouter les nouveaux champs contact dans `extractContactData` si nécessaire (coordonner avec l’équipe CRM).

---

## 7. Conteneur client (`Form.tsx`)

- Déclarer `FORM_NAME`, `FORM_SOURCE_BASE`, `FORM_ID` si besoin (pour Mixpanel).
- `buildLeadPayload()` :
  - construit `flattenedContact` ;
  - normalise les steps en `stepX_*` ;
  - ajoute les métadonnées : `form_variant`, `source`, `optin_type`, `optin_page`, `page_url`, `referrer`, `user_agent`, `query_string`, `submitted_at`.
  - fournit `answers` (objet) et `answers_json` (stringifié) pour audit CRM.
- `handleLead` : `await sendToGhlWebhook(body)` n’est **pas** bloquant (appel en `void`) ; fire-and-forget + `trackLandingConversion`.
- `handleReject` : log clair en dev, instrumentation (Sentry) si erreurs récurrentes.
- Les hooks analytics (`useMixpanel`, `useMetaPixel`, `useLandingABTracking`) sont centralisés ici pour éviter la duplication côté page.

---

## 8. Intégration page (`page.tsx`)

- Retirer toute injection de script tiers (`useleadbot`, `<script>` inline).
- Rendre `<Form variant={variant} />` à l’endroit souhaité.
- Conserver/ajuster le SEO : H1/H2, meta tags, schema éventuel.
- Si test A/B : `const variant = useLandingABTracking({ testId: 'flipimmo_landing' });`
- Les éléments marketing (héros, témoignages) restent libres mais doivent supporter la présence du formulaire natif sans CLS.

---

## 9. Tracking & analytics

- **Mixpanel**
  - Événements automatiques : `form_start`, `step_completed`, `form_step_completed`, `lead_submitted`, `redirect_typ`.
  - Propriétés communes : `eventId`, `formId`, `formName`, `variant`, `path`, `stepId`, `variable`, `value`, `optinType`.
  - Ne jamais dupliquer ces événements côté page.
- **Meta Pixel & CAPI**
  - `Lead` émis dès la soumission avec `eventID` unique (rejoué côté CAPI).
  - Hashage email/phone géré dans `sendMetaEvent`.
  - `trackPixelPageView()` rejoué via `AppProviders` sur navigation SPA.
  - Interdiction d’émettre un second `Lead` sur la page TYP.
- **A/B testing**
  - `useLandingABTracking` stocke la conversion par variant (localStorage).
  - Dashboard `/funnels/analytics/ab-test` = monitoring temps réel (rafraîchi toutes les 5 s).
  - `trackLandingConversion(variant)` est invoqué lors de la soumission (garde l’historique local).
- **Autres canaux**
  - Si ajout (Google Ads, TikTok, etc.), documenter le mapping événementiel ici même.

---

## 10. Expérience & validations (`FormWizard.tsx`)

- Redirection TYP immédiate (`router.push`) pendant que le webhook s’exécute en arrière-plan.
- Barre de progression native basée sur le nombre de steps (couleurs BPC).
- Cartouche de preuve sociale (“267 Marchands de Biens…”) affichée sur chaque step ; ajuster le message en fonction de la marque si besoin.
- `handleContactChange` applique `sanitizeContactFieldValue` :
  - Téléphone : chiffres, 10 caractères (`^0[1-9]\d{8}$`).
  - Code postal : chiffres, 5 caractères.
  - Email : trimming + lowercasing.
- `validateContactField` fonctionne en `mode = 'change'` et au submit :
  - Téléphone : “Format attendu : 10 chiffres (ex. 0612345678)”.
  - Email : “Merci de saisir une adresse email valide”.
  - Code postal : “Merci de saisir un code postal français valide (5 chiffres)”.
- Attributs HTML (`pattern`, `inputMode`, `maxLength`, `title`) alignés pour renforcer la validation navigateur.
- Les erreurs disparaissent dès que la valeur redevient valide.

---

## 11. QA & monitoring

1. Tester chaque parcours (variant A/B inclus) sur desktop & mobile.
2. Capturer un lead test et vérifier dans GHL :
   - Métadonnées : `form_name`, `form_variant`, `source`, `optin_type`, `optin_page`, `submitted_at`.
   - Champs contact : `first_name`, `last_name`, `postal_code`, `phone`, `email`.
   - Réponses : `step1_mdb`, `step2_transactions`, `step3_objective`, `step4_metier`, `step5_delai`, `step6_capital`, `step7_besoin`, `step71_formation`, `step712_confirmation`, `step8_priority`, `step9_high_need`, `step10_high_capital`, `step11_cpf`.
   - Copies : `answers`, `answers_json`.
3. Vérifier la redirection TYP (<1 s) et l’absence d’attente visible.
4. Contrôler Mixpanel (Live View) et Pixel Helper (un seul `Lead`).
5. S’assurer qu’aucun webhook GHL ne renvoie d’erreur (logs ou dashboard GHL).
6. Tester les validations live (téléphone, email, code postal).
7. Observer l’animation “267 Marchands de Biens…” (valeurs, easing).
8. Noter toute divergence ou besoin spécifique dans le tableau §2.

---

## 12. Duplication pour une nouvelle marque (checklist)

- [ ] Dupliquer `native-test/config.ts` → `src/app/funnels/<marque>/config.ts` et adapter les steps.
- [ ] Créer `src/app/funnels/<marque>/Form.tsx` (copie de `LandingForm`) :
      - mettre à jour `FORM_NAME`, `FORM_SOURCE_BASE`, `successRedirect`, tracking spécifique.
- [ ] Injecter `<Form variant={variant} />` dans `page.tsx` en supprimant scripts existants.
- [ ] Ajuster les alias CRM (`source`, `optin_page`, etc.) si la marque diffère.
- [ ] Mettre à jour le tableau §2 (statut, particularités).
- [ ] Réaliser la QA complète (§11) + captures (payload GHL, events Mixpanel, Pixel Helper).
- [ ] Préparer la communication aux équipes marketing/CRM (événements suivis, dashboards).
- [ ] Commit + push après validation, en mentionnant ce README dans la PR.

---

## 13. Mapping GHL de référence

- **Contact** : `first_name`, `last_name`, `postal_code`, `phone`, `email`.
- **Réponses normalisées** : `step1_mdb`, `step2_transactions`, `step3_objective`, `step4_metier`, `step5_delai`, `step6_capital`, `step7_besoin`, `step71_formation`, `step712_confirmation`, `step8_priority`, `step9_high_need`, `step10_high_capital`, `step11_cpf`.
- **Contextes** : `form_name`, `form_variant`, `source`, `optin_type`, `optin_page`, `page_url`, `parent_url`, `referrer`, `user_agent`, `query_string`, `submitted_at`.
- **Copies** : `answers` (objet), `answers_json` (stringifié).

> Tout changement de mapping doit être validé avec le CRM et documenté ici avant déploiement.

---

## 14. Historique des commits clés

- `5ac05f2` — feat: ajouter tracking Mixpanel sur FormWizard.
- `8b701d1` — fix: supprimer ancien config native-test.
- `ea9ebd7` — UI formulaire natif : branding, progression et validations.
- `b0f36db` — Validation live des champs contact.

Mettre à jour cette liste à chaque évolution majeure impactant le scope.

---

## 15. Notes complémentaires

- Les formulaires restent 100 % configurables via `config.ts` ; aucune logique métier ne doit être codée dans `FormWizard`.
- Les dépendances externes (Mixpanel, Meta, GrowthBook, GHL) sont partagées par toutes les marques : vérifier les clés avant déploiement.
- Pour toute question ou besoin d’évolution, se référer à cette documentation puis ouvrir une issue si nécessaire.

> Synthèse complète des actions réalisées le 9 novembre 2025 pour remplacer LeadCapture par la brique formulaire maison et préparer la duplication vers les autres marques.

---

## 1. Contexte & objectifs

- Supprimer la dépendance au script LeadCapture sur le funnel `/funnels/landing`.
- Utiliser le composant `FormWizard` (formulaire multi-étapes natif) en production.
- Garantir l’envoi webhook GHL des réponses normalisées (`stepX_*`) ainsi que des champs contact standards.
- Conserver la logique A/B, le tracking Mixpanel + Meta (pixel & CAPI) et la redirection rapide vers les pages TYP.

---


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
- Barre de progression native (calculée sur la liste des steps) aux couleurs FlipImmo.
- Boutons/options et CTA harmonisés (bleu marine / orange, hover states cohérents).
- Cartouche “267 Marchands de Biens nous ont fait confiance en Octobre 2025” avec compteur animé (ease-out).

### 4.5 Validation temps réel & normalisation des inputs

Toujours dans `FormWizard.tsx` :
- `handleContactChange` applique un `sanitizeContactFieldValue` selon le type :
  - Téléphone : ne conserve que les chiffres, limite à 10 caractères (`0XXXXXXXXX`).
  - Code postal : chiffres uniquement, limite 5 caractères.
  - Email : trimming + suppression des capitalisations automatiques.
- `validateContactField` renvoie l’erreur adéquate dès la saisie (`mode = 'change'`) et au submit :
  - Téléphone : “Format attendu : 10 chiffres...” puis vérification regex `^0[1-9]\d{8}$`.
  - Email : message “Merci de saisir une adresse email valide”.
  - Code postal : “Merci de saisir un code postal français valide (5 chiffres)”.
- Attributs HTML alignés (`pattern`, `inputMode`, `maxLength`, `title`) pour renforcer la validation navigateur.
- Les erreurs sont automatiquement purgées lorsque la valeur redevient valide (UX fluide).



