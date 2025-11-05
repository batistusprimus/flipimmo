# Dashboard Analytics des Tunnels

## Vue d'ensemble

Ce dashboard affiche les statistiques de performance de tous les tunnels de conversion du site FlipImmo.

## Fonctionnalités actuelles

- ✅ Interface visuelle complète
- ✅ Filtres par tunnel, période et variante A/B/C
- ✅ Métriques principales (visites, conversions, taux de conversion)
- ✅ Graphique de conversion page par page
- ✅ Répartition par device (Desktop/Mobile/Tablet)
- ✅ Timeline des conversions
- ✅ Suivi des tests A/B/C
- ⏳ Connexion aux données réelles (à venir)

## Accès

Le dashboard est accessible à l'URL : `/funnels/analytics`

## Métriques disponibles

### 1. Vue d'ensemble
- **Total Visits** : Nombre total de visiteurs entrés dans le tunnel
- **New Conversions** : Nombre de conversions (leads générés)
- **Conversion Rate** : Taux de conversion global (conversions / visites)

### 2. Tests A/B/C
- Comparaison des performances entre variantes
- Taux de conversion par variante
- Distribution du trafic

### 3. Conversion par étape
- Visualisation du funnel étape par étape
- Taux de drop-off entre chaque page
- Identification des points de friction

### 4. Analyses complémentaires
- Répartition par type d'appareil
- Évolution des conversions dans le temps
- Filtres par période (jour, semaine, mois, trimestre, année)

## Prochaines étapes : Connexion aux données réelles

### 1. Intégration Vercel Analytics

```typescript
// À implémenter dans /app/funnels/analytics/api.ts
import { track } from '@vercel/analytics';

export async function trackFunnelStep(data: {
  funnel: string;
  step: string;
  variant?: string;
}) {
  await track('funnel_step', data);
}
```

### 2. Système d'événements personnalisés

Chaque tunnel devra émettre des événements à chaque étape :

```typescript
// Exemple dans un composant de tunnel
'use client';
import { useEffect } from 'react';

export default function FormationStep1() {
  useEffect(() => {
    // Track page view
    trackFunnelStep({
      funnel: 'formation',
      step: 'landing',
      variant: getCurrentVariant(),
    });
  }, []);
  
  const handleSubmit = () => {
    // Track conversion
    trackFunnelConversion({
      funnel: 'formation',
      step: 'landing',
      variant: getCurrentVariant(),
    });
  };
}
```

### 3. API de récupération des données

Créer une API route pour agréger les données :

```typescript
// /app/api/funnels/analytics/route.ts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const funnel = searchParams.get('funnel');
  const timeframe = searchParams.get('timeframe');
  const variant = searchParams.get('variant');
  
  // Récupérer les données depuis Vercel Analytics
  // ou depuis une base de données
  const data = await fetchAnalyticsData({ funnel, timeframe, variant });
  
  return Response.json(data);
}
```

### 4. Base de données (optionnel)

Pour un contrôle total, vous pouvez stocker les événements dans une base de données :

- **Option 1** : Vercel Postgres
- **Option 2** : Supabase
- **Option 3** : MongoDB

### 5. Variables d'environnement nécessaires

```env
# À ajouter dans .env.local
VERCEL_ANALYTICS_ID=your_analytics_id
DATABASE_URL=your_database_url (si base de données)
```

## Structure des données

Voir `types.ts` pour les interfaces TypeScript complètes.

## Personnalisation

Pour ajouter un nouveau tunnel au dashboard :

1. Ajouter l'option dans le sélecteur de tunnel
2. Créer les données mockées correspondantes
3. Implémenter le tracking dans le tunnel
4. Les vraies données s'afficheront automatiquement une fois connectées

## Notes techniques

- Le dashboard utilise **React Server Components** avec un mode `'use client'` pour l'interactivité
- Les graphiques sont en **SVG natif** pour de meilleures performances
- Le design est **responsive** et optimisé pour mobile
- Prêt pour l'intégration avec **Vercel Analytics** et autres outils



