# 🎯 TUNNEL README – BPCORP STANDARD STRUCTURE

## 🔧 Objectif
Ce fichier `README.md` sert de **source unique de vérité** pour le tunnel.
- Toutes les modifications (copy, offres, formulaires, redirections, tracking, visuels, animations) doivent être faites **uniquement ici**.
- 100% des indications (textes, règles, assets à intégrer) doivent figurer dans ce `README.md`.
- Le code du tunnel (Next.js/App Router) est conçu pour se synchroniser à partir de ce fichier et rester générique (pas d’édition du moteur nécessaire).

---

## 📁 Structure du tunnel

1. **Landing Page (`/`)**
   - Objectif : Présenter l’offre/la promesse du tunnel.
   - Contenu : titre, sous-titre, preuves sociales, CTA principal.
   - Tracking : Meta Pixel (PageView + ViewContent).

2. **Form Step (`/form`)**
   - Objectif : Collecter les informations clés du lead (quiz multi‑étapes si besoin).
   - Champs : `first_name`, `email`, `phone`, `capital`, `needs`, etc.
   - Validation : regex email + tel.
   - Tracking : `LeadFormStarted` à l’ouverture, `LeadFormSubmitted` à la soumission.

3. **Thank You Page (`/thank-you`)**
   - Objectif : confirmer l’envoi + déclencher la conversion.
   - Tracking : Meta Pixel (`Lead`), GA4 (`lead_submit`), webhook vers GHL.

> Remarque: côté code, ces pages vivent sous `src/app/funnels/<slug>/(routes)` en App Router: `page.tsx` (landing), `form/page.tsx`, `thank-you/page.tsx`.

---

## 🧠 Variables dynamiques

| Variable | Description | Exemple |
|-----------|--------------|----------|
| `{{OFFER_NAME}}` | Nom de l’offre / tunnel | FlipImmo |
| `{{DOMAIN}}` | Domaine utilisé | flipimmo.fr |
| `{{WEBHOOK_URL}}` | URL webhook GHL | https://hooks.leadconnectorhq.com/... |
| `{{PIXEL_META_ID}}` | ID Pixel Meta | 1234567890 |
| `{{GA4_MEASUREMENT_ID}}` | ID GA4 | G-XXXXXXX |
| `{{REDIRECT_SUCCESS}}` | Redirection après lead | /thank-you |

> UTMs: tous les paramètres `utm_*` doivent être propagés jusqu’au webhook et stockés si nécessaire.

---

## 📊 Tracking & Analytics

- Meta Pixel (dans `<head>`):
  - `PageView` → sur toutes les pages
  - `ViewContent` → sur `/`
  - `LeadFormStarted` → sur `/form`
  - `Lead` → sur `/thank-you`
- GA4: `view_page`, `lead_submit`
- GTM (optionnel): centraliser les pixels
- UTM tracking: capturer et envoyer avec le lead
- Webhook GHL: envoyer tous les champs + UTMs + timestamp vers `{{WEBHOOK_URL}}`

---

## 📱 Mobile & performance

- 100% responsive (mobile/tablette/desktop)
- Poids < 1,5 MB (optimiser images/vidéos/JS)
- Aucune librairie externe non utilisée
- PageSpeed cible: 90+ mobile

---

## 🧩 Points de vigilance

- [ ] PixelMeta déclenché sur la page finale
- [ ] Réception du lead dans GHL OK
- [ ] UTMs capturés et transmis
- [ ] Validation email/téléphone opérationnelle
- [ ] Redirection post‑formulaire testée

---

## ⚙️ Instructions de modification

**Important:** Toutes les modifications doivent être faites dans ce `README.md` uniquement. Le moteur du tunnel s’appuie sur ce document pour appliquer:
- contenus des pages (`/`, `/form`, `/thank-you`)
- textes, couleurs, CTA
- variables de tracking et webhooks
- conditions logiques du formulaire/quiz multi‑étapes
- assets visuels (images, animations Lottie/GIF/MP4)

> Ne modifiez pas d’autres fichiers: indiquez ici précisément ce que le tunnel doit afficher ou faire.

---

## ✏️ Brief à remplir (copier/coller et éditer)

### GLOBAL
- `{{OFFER_NAME}}` : 
- `{{DOMAIN}}` : 
- `{{WEBHOOK_URL}}` : 
- `{{PIXEL_META_ID}}` : 
- `{{GA4_MEASUREMENT_ID}}` : 
- `{{REDIRECT_SUCCESS}}` : `/thank-you`

### LANDING (`/`)
- Titre (H1) : 
- Sous‑titre : 
- Preuves sociales (3 bullets ou logos) : 
- CTA principal (label + lien interne vers `/form`) : 
- Visuels/Animations (liste des fichiers à intégrer + emplacement souhaité) : 
- Style (couleurs/boutons, éventuellement hex codes) : 

### FORM (`/form`)
- Type: simple ou quiz multi‑étapes
- Étapes et champs (ordre exact):
  1) Étape id: `optin`
     - `first_name`: text, required
     - `email`: email, required
     - `phone`: tel, optional
     - Consentement (RGPD): radio `Oui` (required)
  2) Étape id: `profil`
     - `capital`: number, required (min/max si utile)
     - `needs`: select [Apprendre, Passer à l’action, Trouver une formation]
  3) Étape id: `final`
     - Récapitulatif + CTA
- Logique conditionnelle (si A alors sauter/montrer étape X) : 
- Textes de CTA (par étape) : 
- Messages d’erreur/validation: 

### THANK‑YOU (`/thank-you`)
- Message de confirmation (H1 + paragraphe) : 
- Secondary CTA (ex: accès calendrier, téléchargement) : 
- Redirection externe (si différente de `{{REDIRECT_SUCCESS}}`) : 

### A/B TESTING
- Variante A: différences (textes, ordre, visuels, CTA) : 
- Variante B: différences (textes, ordre, visuels, CTA) : 
- Répartition souhaitée (50/50 par défaut) : 

### TRACKING SPÉCIFIQUE (facultatif)
- Événements additionnels à logger (ex: `step_view`, `choice_selected`) : 
- Mapping des champs → payload webhook (clé/valeur) : 

### ASSETS
- Images à intégrer (fichiers + alt + emplacements) : 
- Animations (Lottie/GIF/MP4) + paramètres (loop/autoplay) : 
- Contraintes de poids max et tailles responsives : 

---

## 🧪 Exemple court

```md
### HERO
Titre : Devenez investisseur rentable dès 2025
Sous‑titre : Une méthode claire pour bâtir ton patrimoine sans dépendre des banques.
CTA principal : Accéder au guide

### TRACKING
WEBHOOK_URL : https://hooks.leadconnectorhq.com/xxxx
PIXEL_META_ID : 9876543210
GA4_MEASUREMENT_ID : G-ABCD1234
```

---

## ✅ Process d’usage
1) Créez `src/app/funnels/<slug>/README.md` en copiant ce template, puis remplissez le brief.
2) Je lis ce `README.md` et j’applique les modifications au tunnel (contenu, étapes, tracking, assets).
3) Vous testez `/funnels/<slug>/`, `/funnels/<slug>/form`, `/funnels/<slug>/thank-you` avec `?utm_source=...` et (si activé) `?v=a|b`.
