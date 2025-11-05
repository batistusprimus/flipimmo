# 🚀 Quick Start - Tracking FlipImmo

## En 2 Minutes : Voir le Dashboard

1. **Le serveur tourne déjà** ✅
   ```
   http://localhost:3000/funnels/analytics
   ```

2. **Ouvrir dans votre navigateur**
   - Vous verrez les métriques du tunnel Formation
   - Changez le tunnel avec le sélecteur en haut
   - Changez la période (jour/semaine/mois/année)
   - Filtrez par variante A/B/C

3. **Données affichées** (mockées pour l'instant)
   - 531 visites totales
   - 50 conversions
   - Taux de conversion : 9.4%
   - Graphique de funnel par étape
   - Répartition Desktop/Mobile (80% mobile !)
   - Timeline des conversions

---

## En 10 Minutes : Intégrer le Tracking

### Étape 1 : Importer dans votre tunnel

```tsx
// Dans /app/funnels/formation/page.tsx (ou votre tunnel)
import { trackPageView, getSessionId, getVariant } from '@/app/funnels/analytics';
import { useEffect } from 'react';
```

### Étape 2 : Tracker la page au chargement

```tsx
export default function FormationPage() {
  useEffect(() => {
    const sessionId = getSessionId();
    const variant = getVariant(sessionId);
    trackPageView('formation', 'landing', variant);
  }, []);

  // ... reste de votre code
}
```

### Étape 3 : Tracker les soumissions

```tsx
const handleSubmit = (data) => {
  const sessionId = getSessionId();
  const variant = getVariant(sessionId);
  
  trackFormSubmit('formation', 'step1', variant, {
    field_count: Object.keys(data).length
  });
  
  // ... votre logique normale
};
```

### Étape 4 : Vérifier que ça marche

1. Ouvrir la console du navigateur
2. Naviguer dans votre tunnel
3. Voir les logs `📊 Tracking Event:`
4. Vérifier les données dans `/funnels/analytics`

**C'est tout ! 🎉**

---

## En 30 Minutes : Tests A/B

### Créer des Variantes

```tsx
const getHeadline = (variant) => {
  switch (variant) {
    case 'variant_a':
      return "🚀 Devenez Marchand de Biens en 90 Jours";
    case 'variant_b':
      return "💰 Gagnez 50k€ par An dans l'Immobilier";
    default:
      return "Formation Marchand de Biens Gratuite";
  }
};

export default function LandingPage() {
  const [variant, setVariant] = useState('original');

  useEffect(() => {
    const sessionId = getSessionId();
    const v = getVariant(sessionId);
    setVariant(v);
    trackPageView('formation', 'landing', v);
  }, []);

  return (
    <div>
      <h1>{getHeadline(variant)}</h1>
      {/* ... reste du contenu */}
    </div>
  );
}
```

### Voir les Résultats

1. Aller sur `/funnels/analytics`
2. Voir la section "A/B Test"
3. Comparer Original vs Variante A vs Variante B

---

## Structure Complète des Fichiers

```
/app/funnels/analytics/
├── 🎯 page.tsx              # ← Le dashboard (déjà prêt)
├── 🔧 tracking.ts           # ← Les fonctions à utiliser
├── 📊 hooks.ts              # ← Les hooks de données
├── 📝 types.ts              # ← Les types TypeScript
│
├── 📚 README.md             # ← Lire en premier
├── 📚 INTEGRATION.md        # ← Guide détaillé
├── 📚 STATUS.md             # ← Roadmap complète
└── 📚 QUICKSTART.md         # ← Vous êtes ici !
```

---

## Fonctions Disponibles

### Tracking
```tsx
trackPageView(funnel, step, variant)       // Vue de page
trackFormSubmit(funnel, step, variant)     // Soumission formulaire
trackConversion(funnel, step, variant)     // Conversion finale
trackAbandon(funnel, step, variant)        // Abandon
```

### Utilitaires
```tsx
getSessionId()                             // ID de session unique
getVariant(sessionId)                      // Variante A/B/C
getDeviceType()                            // desktop/mobile/tablet
```

### Hooks
```tsx
useFunnelAnalytics(funnel, timeframe, variant)  // Récupérer les données
useAvailableFunnels()                           // Liste des tunnels
```

---

## Exemples Complets

Voir le fichier `EXAMPLE_INTEGRATION.tsx` pour :
- ✅ Tunnel complet avec tracking
- ✅ Gestion des étapes
- ✅ Tests A/B intégrés
- ✅ Soumission de lead
- ✅ Redirection après conversion

---

## Prochaines Étapes

### Aujourd'hui
1. ✅ Tester le dashboard
2. ⏳ Intégrer le tracking dans 1 tunnel
3. ⏳ Vérifier les logs console

### Cette Semaine
1. ⏳ Intégrer tous les tunnels
2. ⏳ Créer 2-3 variantes A/B
3. ⏳ Configurer Vercel Analytics

### Ce Mois
1. 🔜 Analyser les données réelles
2. 🔜 Optimiser les pages à fort drop-off
3. 🔜 Améliorer le taux de conversion de 20%

---

## Support Rapide

### Le tracking ne fonctionne pas ?
```bash
# Vérifier les imports
import { trackPageView } from '@/app/funnels/analytics';

# Vérifier la console
console.log('SessionID:', getSessionId());

# Vérifier que 'use client' est présent
'use client'; // En haut du fichier
```

### Les données ne s'affichent pas ?
- Les données sont mockées pour l'instant
- Pour voir de vraies données, il faut :
  1. Configurer Vercel Analytics
  2. Activer l'API route
  3. Connecter les hooks à l'API

### Comment tester les variantes ?
- Ouvrir en navigation privée (nouveau sessionId)
- Ou modifier manuellement : `?v=variant_a`
- Chaque session a sa propre variante

---

## Raccourcis Utiles

| Action | URL/Commande |
|--------|--------------|
| Dashboard | `http://localhost:3000/funnels/analytics` |
| Tunnel Formation | `http://localhost:3000/funnels/formation` |
| Tunnel Expert | `http://localhost:3000/parler-a-un-expert` |
| Documentation | Voir `README.md` |
| Exemples | Voir `EXAMPLE_INTEGRATION.tsx` |

---

**Prêt à tracker ! 🎯**

Le système est opérationnel. Commencez par tester le dashboard, puis intégrez le tracking dans vos tunnels un par un.

Pour toute question : consultez `README.md` et `INTEGRATION.md` 📚



