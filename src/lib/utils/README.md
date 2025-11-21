# 🔧 Utilitaires FlipImmo

## 📋 Système "empty" - Règle CRITIQUE

### ⚠️ Pourquoi ce système existe ?

**LeadProsper** (et de nombreux CRM) ont un **problème technique** : leurs systèmes de filtrage et de routing ne savent **pas gérer les valeurs vides** (`""`, `null`, `undefined`).

**Conséquences sans le système :**
- ❌ Les filtres LeadProsper ne fonctionnent pas
- ❌ Les leads ne sont pas routés correctement
- ❌ Les champs vides cassent les automatisations
- ❌ Le CRM peut rejeter le lead

### ✅ La Solution

**Remplacer TOUTES les valeurs vides par la chaîne `"empty"`** avant d'envoyer les données.

### 💻 Utilisation

```typescript
import { replaceEmptyWithKeyword } from '@/lib/utils/empty-values';

// ❌ AVANT (ne fonctionnera pas)
const payload = {
  first_name: 'Jean',
  last_name: 'Dupont',
  email: 'jean@email.fr',
  phone: '',              // ❌ Valeur vide
  step1_age: undefined,   // ❌ Undefined
  step2_situation: null,  // ❌ Null
};

await sendToLeadProsper(payload); // ❌ Les filtres ne fonctionneront pas

// ✅ APRÈS (fonctionnera)
const cleanedPayload = replaceEmptyWithKeyword(payload);
// Résultat :
// {
//   first_name: 'Jean',
//   last_name: 'Dupont',
//   email: 'jean@email.fr',
//   phone: 'empty',           // ✅ Remplacé
//   step1_age: 'empty',       // ✅ Remplacé
//   step2_situation: 'empty', // ✅ Remplacé
// }

await sendToLeadProsper(cleanedPayload); // ✅ Fonctionnera correctement
```

### 🚀 Intégration dans un Formulaire

```typescript
'use client';

import { FormWizard } from '@/features/forms/core';
import type { FormLeadPayload } from '@/features/forms/core';
import { replaceEmptyWithKeyword } from '@/lib/utils/empty-values';
import { sendToLeadProsper } from '@/lib/webhooks/leadprosper';
import { sendToGhlWebhook } from '@/lib/webhooks/ghl';

export default function MonFormulaire() {
  const handleLead = async (payload: FormLeadPayload) => {
    const { answers, contact, eventId } = payload;
    
    // 1. Construire le payload brut
    const rawPayload = {
      first_name: contact.firstName || '',
      last_name: contact.lastName || '',
      phone: contact.phone || '',
      email: contact.email || '',
      zip_code: contact.postalCode || '',
      step1_age: answers.age,
      step2_situation: answers.situation,
      // ... autres champs
    };
    
    // 2. ⚠️ CRITIQUE : Nettoyer AVANT l'envoi
    const cleanedPayload = replaceEmptyWithKeyword(rawPayload);
    
    // 3. Envoyer vers LeadProsper
    await sendToLeadProsper(cleanedPayload);
    
    // 4. Envoyer vers GHL (aussi besoin de "empty")
    await sendToGhlWebhook(cleanedPayload);
  };
  
  return <FormWizard onSubmitLead={handleLead} />;
}
```

### ⚠️ Règles CRITIQUES

1. **TOUJOURS nettoyer AVANT l'envoi**
   ```typescript
   // ❌ MAUVAIS
   await sendToLeadProsper(payload);
   
   // ✅ BON
   const cleanedPayload = replaceEmptyWithKeyword(payload);
   await sendToLeadProsper(cleanedPayload);
   ```

2. **Nettoyer pour TOUS les CRM**
   - LeadProsper ✅
   - GoHighLevel (GHL) ✅
   - Autres CRM ✅

3. **Ne PAS modifier la fonction**
   - Elle doit remplacer `''`, `null` ET `undefined`
   - Elle doit utiliser exactement la chaîne `"empty"`

4. **Envoyer TOUS les champs**
   - Même si vides (ils seront `"empty"`)
   - Nécessaire pour les filtres et le routing

### 📚 Exemples Concrets

#### Formulaire multi-étapes avec questions conditionnelles

```typescript
// L'utilisateur n'a pas répondu à step4 (question conditionnelle)
const answers = {
  step1_age: '35',
  step2_situation: 'marie',
  step3_enfants: '2',
  step4_revenus: undefined,  // ❌ Question pas affichée
};

const cleaned = replaceEmptyWithKeyword(answers);
// step4_revenus: 'empty' ✅
```

#### Champs optionnels

```typescript
const contact = {
  firstName: 'Marie',
  lastName: 'Martin',
  email: 'marie@email.fr',
  phone: '0612345678',
  postalCode: '',  // ❌ Optionnel, pas rempli
};

const cleaned = replaceEmptyWithKeyword(contact);
// postalCode: 'empty' ✅
```

### 🔍 Exemples de Filtres LeadProsper

Sans le système `"empty"`, ces filtres ne fonctionneraient **pas** :

```
Filtre 1 : step6_capital = "empty" → Rejeter le lead
Filtre 2 : step6_capital = "50k-plus" → Router vers Acheteur Premium (50€)
Filtre 3 : step7_besoin = "formation" → Router vers Acheteur Formation (30€)
```

### 📖 Documentation Complète

Pour plus de détails, voir :
- [`/README_LEADPROSPER.md`](/README_LEADPROSPER.md) - Documentation complète LeadProsper
- Exemples d'implémentation :
  - `/src/app/funnels/landing/LandingForm.tsx`
  - `/src/app/funnels/native-test/TestForm.tsx`

---

**Règle d'Or :**
> **TOUTES les valeurs doivent être non-vides. Remplacer par "empty" si nécessaire.**

*Sans ce système, les leads ne seront pas distribués correctement et vous perdrez de l'argent.* 💰

