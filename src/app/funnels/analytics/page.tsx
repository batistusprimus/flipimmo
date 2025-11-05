'use client';

import { useState } from 'react';
import { useFunnelAnalytics, useAvailableFunnels } from './hooks';
import type { TimeframeOption, VariantOption } from './types';
import { MetricCard, FunnelChart, TimelineChart, DeviceSplit } from './components';

export default function FunnelAnalytics() {
  const [selectedFunnel, setSelectedFunnel] = useState('formation');
  const [timeframe, setTimeframe] = useState<TimeframeOption>('all');
  const [selectedVariant, setSelectedVariant] = useState<VariantOption>('all');

  // Récupération des données via le hook
  const { data, loading, error } = useFunnelAnalytics(selectedFunnel, timeframe, selectedVariant);
  const availableFunnels = useAvailableFunnels();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des données...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <h2 className="text-red-800 font-semibold mb-2">Erreur de chargement</h2>
          <p className="text-red-600">{error?.message || 'Données non disponibles'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          
          <div className="flex gap-4">
            {/* Sélecteur de tunnel */}
            <select
              value={selectedFunnel}
              onChange={(e) => setSelectedFunnel(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            >
              {availableFunnels.map((funnel) => (
                <option key={funnel.id} value={funnel.id}>
                  {funnel.name}
                </option>
              ))}
            </select>

            {/* Sélecteur de période */}
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value as TimeframeOption)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            >
              <option value="today">Aujourd&apos;hui</option>
              <option value="week">7 derniers jours</option>
              <option value="month">30 derniers jours</option>
              <option value="quarter">3 mois</option>
              <option value="year">1 an</option>
              <option value="all">Tout le temps</option>
            </select>

            {/* Sélecteur de variante */}
            <select
              value={selectedVariant}
              onChange={(e) => setSelectedVariant(e.target.value as VariantOption)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            >
              <option value="all">Toutes variantes</option>
              <option value="original">Original</option>
              <option value="variant_a">Variante A</option>
              <option value="variant_b">Variante B</option>
              <option value="variant_c">Variante C</option>
            </select>
          </div>
        </div>

        {/* A/B Test Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold text-gray-900">A/B Test</h2>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">Live</span>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Voir Détails
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-1">
                {data.variants.original.visits + data.variants.variant_a.visits}
              </div>
              <div className="text-sm text-gray-500">Total Visits</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-1">
                {data.variants.original.rate}%
              </div>
              <div className="text-sm text-gray-500">Original Conversion</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-1">
                {data.variants.variant_a.rate}%
              </div>
              <div className="text-sm text-gray-500">Variant Conversion</div>
            </div>
          </div>
        </div>

        {/* Main Metrics */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <MetricCard 
            title="Funnel Visits" 
            value={data.totalVisits} 
            subtitle="No comparison data"
          />
          <MetricCard 
            title="New Conversions" 
            value={data.conversions} 
            subtitle="No comparison data"
          />
          <MetricCard 
            title="Conversion Rate" 
            value={`${data.conversionRate}%`} 
            subtitle="No comparison data"
          />
        </div>

        {/* Page to Page Conversion Rate */}
        <FunnelChart steps={data.pageConversions} />

        {/* Device Split & Contacts over Time */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <DeviceSplit data={data.deviceSplit} />
          <TimelineChart data={data.contactsOverTime} />
        </div>

        {/* Note d'information */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="font-medium text-blue-900 mb-1">Dashboard en construction</h4>
              <p className="text-sm text-blue-700">
                Ce tableau de bord affiche actuellement des données mockées. 
                La connexion aux vraies données (Vercel Analytics, événements des tunnels) sera implémentée prochainement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

