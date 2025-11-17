# 🧪 Guide des Tests A/B - Landing Page FlipImmo

## ✅ Système Complet Créé

Un système de tests A/B est maintenant opérationnel sur la landing page Formation.

---

## 🎯 Comment Ça Marche

### Répartition Automatique
- **50% des visiteurs** → Variante A (Original)
- **50% des visiteurs** → Variante B (Nouveau)
- Attribution automatique au premier chargement
- Persistance pendant toute la session (sessionStorage)

### Tracking
- ✅ **Vue de landing** trackée automatiquement
- 📊 Données stockées dans localStorage
- 🔄 Dashboard mis à jour en temps réel

---

## 🚀 URLs de Test

### Variante A (Original)
```
http://localhost:3000/funnels/landing
http://localhost:3000/funnels/landing?v=a
```

**Contenu Variante A :**
- Titre : "Devenir **Marchand de Biens** en 5 questions"
- Sous-titre : "Guide Marchand de Biens 2025"

### Variante B (Nouveau)
```
http://localhost:3000/funnels/landing?v=b
```

**Contenu Variante B :**
- Titre : "Formation Gratuite **Marchand de Biens** 2025"
- Sous-titre : "Générer 50k€/an dans l'immobilier"

### Dashboard A/B
```
http://localhost:3000/funnels/analytics/ab-test
```

---

## 📊 Métriques Trackées

### Actuellement
- ✅ **Vues de la landing** (variante A vs B)
- ✅ **Total des visites**
- ✅ **Répartition par variante** (% A vs % B)

### Bientôt
- ⏳ Conversions par variante
- ⏳ Taux de conversion A vs B
- ⏳ Gagnant automatique

---

## 🔧 Comment Tester

### Test Manuel

1. **Ouvrir la landing en navigation privée**
   ```
   http://localhost:3000/funnels/landing
   ```

2. **Vérifier la variante assignée**
   - En bas à droite en mode dev : badge noir "Variante: A" ou "B"
   - Ou dans la console : vérifier les logs `📊 Landing View Tracked`

3. **Tester l'autre variante**
   - Ajouter `?v=b` à l'URL
   - Ou ouvrir en nouvelle navigation privée (50% de chance d'avoir B)

4. **Voir les stats dans le dashboard**
   ```
   http://localhost:3000/funnels/analytics/ab-test
   ```
   - Nombre total de vues
   - Vues par variante A et B
   - % de répartition

### Test Automatique

Le système attribue automatiquement A ou B (50/50) :
- Basé sur un hash du sessionId
- Même utilisateur = même variante pendant toute la session
- Nouvelle session = nouvelle attribution

---

## 📂 Fichiers Créés

```
/funnels/landing/
├── page.tsx              # Landing avec variantes A/B
├── ab-tracking.ts        # Fonctions de tracking A/B
├── hooks.ts              # Hooks React (useLandingABTracking, useABStats)
├── AB_TEST_GUIDE.md      # Ce fichier
└── README.md             # Doc landing

/funnels/analytics/ab-test/
└── page.tsx              # Dashboard A/B test
```

---

## 💾 Stockage des Données

### SessionStorage
- `flipimmo_landing_session` : ID de session unique
- `flipimmo_landing_variant` : Variante assignée (a ou b)

### LocalStorage
- `flipimmo_landing_events` : Tous les événements de vue
- Format : `[{variant, timestamp, sessionId, deviceType, url}, ...]`
- Limite : 1000 derniers événements

---

## 🎨 Différences entre Variantes

| Élément | Variante A | Variante B |
|---------|------------|------------|
| **Titre** | "Devenir Marchand de Biens en 5 questions" | "Formation Gratuite Marchand de Biens 2025" |
| **Sous-titre** | "Guide Marchand de Biens 2025" | "Générer 50k€/an dans l'immobilier" |
| **Formulaire** | Identique | Identique |
| **Logos** | Identiques | Identiques |

---

## 🔍 Debug & Vérification

### Vérifier dans la Console

```javascript
// Voir les événements stockés
localStorage.getItem('flipimmo_landing_events')

// Voir la variante actuelle
sessionStorage.getItem('flipimmo_landing_variant')

// Calculer les stats
import { calculateABStats } from './ab-tracking';
console.log(calculateABStats());
```

### Effacer les Données de Test

```javascript
// Dans la console du navigateur
localStorage.removeItem('flipimmo_landing_events');
sessionStorage.removeItem('flipimmo_landing_variant');
sessionStorage.removeItem('flipimmo_landing_session');

// Ou utiliser la fonction
import { clearEvents } from './ab-tracking';
clearEvents();
```

---

## 📈 Voir les Résultats

### Dashboard
1. Ouvrir `http://localhost:3000/funnels/analytics/ab-test`
2. La section "A/B Test" affiche :
   - Total Visits (mis à jour en temps réel)
   - Original Conversion (A)
   - Variant Conversion (B)

### Données en Temps Réel
- Le dashboard se met à jour toutes les 5 secondes
- Pas besoin de rafraîchir la page
- Les stats sont calculées depuis localStorage

---

## 🧪 Exemple de Test Complet

### Scénario
1. Visiteur 1 (navigation normale) → Variante A assignée → Vue trackée
2. Visiteur 2 (navigation privée) → Variante B assignée → Vue trackée  
3. Visiteur 3 (navigation normale) → Variante A déjà assignée → Vue trackée
4. Dashboard affiche : 2 vues A, 1 vue B (66% vs 33%)

### Commandes

```bash
# Terminal 1 : Lancer le serveur
cd flipimmo-next && npm run dev

# Navigateur 1 : Tester variante A
http://localhost:3000/funnels/landing

# Navigateur 2 (navigation privée) : Tester variante B
http://localhost:3000/funnels/landing

# Navigateur 3 : Voir les stats
http://localhost:3000/funnels/analytics/ab-test
```

---

## 🎯 Prochaines Étapes

### Court Terme
1. ⏳ Ajouter le tracking des conversions
2. ⏳ Calculer les taux de conversion A vs B
3. ⏳ Déterminer le gagnant automatiquement

### Moyen Terme
1. ⏳ Envoyer les données vers une API
2. ⏳ Intégrer avec Vercel Analytics
3. ⏳ Créer plus de variantes (C, D, E)

### Long Terme
1. ⏳ Tester différents visuels
2. ⏳ Tester différentes CTA
3. ⏳ Optimisation continue

---

## ⚠️ Important

### Limitations Actuelles
- Les données sont stockées localement (localStorage)
- Pas de synchronisation entre navigateurs/devices
- Les données sont par appareil

### Pour la Production
Il faudra :
1. Envoyer les événements vers une API
2. Stocker dans une vraie base de données
3. Agréger les données de tous les utilisateurs
4. Calculer la significativité statistique

---

## 💡 Conseils

### Taille d'Échantillon
- Minimum 100 visites par variante
- Idéalement 500+ pour significativité
- 1000+ pour être sûr du gagnant

### Durée du Test
- Minimum 1 semaine
- Idéalement 2-4 semaines
- Couvrir différents jours de la semaine

### Confiance Statistique
- Différence significative : > 10% d'écart
- Confiance élevée : > 20% d'écart
- Gagnant clair : > 30% d'écart

---

## 📞 Support

### Fichiers à Consulter
- `/funnels/landing/ab-tracking.ts` : Attribution de variante (sessionStorage) + stats locales
- `/funnels/landing/hooks.ts` : Hook React qui applique la variante et track la vue
- `/funnels/landing/LandingForm.tsx` : Soumission du lead + tracking Mixpanel/Pixel (avec variante)

### Raccourcis utiles
- Forcer une variante : ajouter `?v=a` ou `?v=b` à l’URL (idéal QA/demo)
- Voir la variante courante : console → `sessionStorage.getItem('flipimmo_landing_variant')`
- Remettre à zéro le test : console → `clearEvents()`

---

**Test A/B opérationnel ! 🎉**

Visitez la landing et le dashboard pour voir le système en action.

