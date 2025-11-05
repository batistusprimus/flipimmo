'use client';

import { useState } from 'react';
import { MetricCard } from '../components';
import { useABStats } from '../../landing/hooks';

export default function ABTestPage() {
  const [timeframe, setTimeframe] = useState('all');
  const stats = useABStats();

  // Calculs des données A/B
  const abTestData = {
    totalVisits: stats.totalViews,
    originalVisits: stats.variantA.views,
    variantVisits: stats.variantB.views,
    originalConversion: 0, // Pas encore tracké
    variantConversion: 0, // Pas encore tracké
  };

  const globalStats = {
    totalVisits: stats.totalViews,
    conversions: 0,
    conversionRate: 0,
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Metrics</h1>
          
          <div className="flex gap-4">
            {/* Sélecteur de période */}
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            >
              <option value="today">Aujourd&apos;hui</option>
              <option value="week">7 derniers jours</option>
              <option value="month">30 derniers jours</option>
              <option value="all">All time</option>
            </select>

            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              + Ajouter
            </button>
          </div>
        </div>

        {/* A/B Test Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold text-gray-900">A/B Test</h2>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                Live
              </span>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              See Details
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-1">
                {abTestData.totalVisits}
              </div>
              <div className="text-sm text-gray-500">Total Visits</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-1">
                {abTestData.originalConversion}%
              </div>
              <div className="text-sm text-gray-500">Original Conversion</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-1">
                {abTestData.variantConversion}%
              </div>
              <div className="text-sm text-gray-500">Variant Conversion</div>
            </div>
          </div>
        </div>

        {/* Main Metrics */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-500">Funnel Visits</h3>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
            <div className="text-4xl font-bold text-gray-900">{globalStats.totalVisits}</div>
            <div className="text-sm text-gray-400 mt-2">No comparison data</div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-500">New Conversions</h3>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
            <div className="text-4xl font-bold text-gray-900">{globalStats.conversions}</div>
            <div className="text-sm text-gray-400 mt-2">No comparison data</div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-500">Conversion Rate</h3>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </button>
            </div>
            <div className="text-4xl font-bold text-gray-900">{globalStats.conversionRate}%</div>
            <div className="text-sm text-gray-400 mt-2">No comparison data</div>
          </div>
        </div>

        {/* Note d'information */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="font-medium text-blue-900 mb-1">Test A/B en cours</h4>
              <p className="text-sm text-blue-700">
                Ce dashboard affiche les résultats du test A/B sur la landing page Formation.
                Les données sont mises à jour en temps réel à chaque visite et conversion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

