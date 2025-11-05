/**
 * EXEMPLE D'INTÉGRATION DU TRACKING
 * 
 * Ce fichier montre comment intégrer le système de tracking
 * dans le tunnel de formation une fois que le moteur de quiz sera prêt.
 * 
 * NE PAS UTILISER CE FICHIER DIRECTEMENT - C'est juste un exemple !
 */

'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  trackPageView,
  trackFormSubmit,
  trackConversion,
  getSessionId,
  getVariant,
} from './tracking';

// Exemple de structure d'un tunnel de formation avec tracking intégré
export default function FormationTunnelExample() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [sessionId, setSessionId] = useState('');
  const [variant, setVariant] = useState<string>('original');

  // Étapes du tunnel
  const steps = [
    { id: 'landing', name: 'Landing Page' },
    { id: 'metier', name: 'Quel est votre métier ?' },
    { id: 'capital', name: 'Capital de départ' },
    { id: 'delai', name: 'Délai de projet' },
    { id: 'cpf', name: 'Avez-vous du CPF ?' },
    { id: 'optin', name: 'Coordonnées' },
    { id: 'final', name: 'Soumission finale' },
  ];

  // ========================================
  // INITIALISATION DU TRACKING
  // ========================================
  useEffect(() => {
    // Récupérer ou créer un sessionId
    const sid = getSessionId();
    setSessionId(sid);
    
    // Déterminer la variante A/B/C
    // Option 1: Depuis l'URL (?v=a)
    const urlVariant = searchParams.get('v');
    // Option 2: Automatique basé sur le sessionId
    const autoVariant = getVariant(sid);
    
    const finalVariant = urlVariant || autoVariant;
    setVariant(finalVariant);
    
    // Tracker la vue de la landing page
    trackPageView('formation', 'landing', finalVariant);
  }, [searchParams]);

  // ========================================
  // TRACKING DES CHANGEMENTS D'ÉTAPE
  // ========================================
  useEffect(() => {
    if (currentStep > 0) {
      const step = steps[currentStep];
      trackPageView('formation', step.id, variant);
    }
  }, [currentStep, variant]);

  // ========================================
  // HANDLER DE SOUMISSION D'ÉTAPE
  // ========================================
  const handleStepSubmit = async (stepData: Record<string, string>) => {
    const step = steps[currentStep];
    
    // Mettre à jour les données du formulaire
    const newFormData = { ...formData, ...stepData };
    setFormData(newFormData);

    // Tracker la soumission de l'étape
    trackFormSubmit('formation', step.id, variant, {
      step_number: currentStep,
      field_count: Object.keys(stepData).length,
      ...stepData,
    });

    // Si c'est la dernière étape, soumettre le lead et tracker la conversion
    if (currentStep === steps.length - 1) {
      try {
        // Soumettre le lead à votre système (GHL, etc.)
        await submitLead(newFormData);
        
        // Tracker la conversion finale
        trackConversion('formation', 'final', variant, {
          funnel_completed: true,
          total_steps: steps.length,
          has_cpf: newFormData.cpf === 'oui',
          capital_range: newFormData.capital,
        });

        // Rediriger vers la page de remerciement
        router.push('/merci');
      } catch (error) {
        console.error('Erreur lors de la soumission:', error);
        // Vous pourriez tracker l'erreur aussi
        // trackEvent({ funnel: 'formation', step: 'final', action: 'error' });
      }
    } else {
      // Passer à l'étape suivante
      setCurrentStep(currentStep + 1);
    }
  };

  // ========================================
  // CONTENU VARIANT PAR VARIANTE A/B/C
  // ========================================
  const getLandingHeadline = () => {
    switch (variant) {
      case 'variant_a':
        return "🚀 Devenez Marchand de Biens en 90 Jours";
      case 'variant_b':
        return "📚 Formation Gratuite : Marchand de Biens";
      case 'variant_c':
        return "💰 Gagnez 50k€ par An dans l'Immobilier";
      default:
        return "Formation Marchand de Biens Gratuite";
    }
  };

  const getButtonText = () => {
    switch (variant) {
      case 'variant_a':
        return "Je commence maintenant →";
      case 'variant_b':
        return "Accéder à la formation →";
      case 'variant_c':
        return "Je veux en savoir plus →";
      default:
        return "Commencer →";
    }
  };

  // ========================================
  // RENDER (EXEMPLE SIMPLIFIÉ)
  // ========================================
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Étape {currentStep + 1} sur {steps.length}</span>
            <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Landing Page */}
        {currentStep === 0 && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold mb-4">
              {getLandingHeadline()}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Découvrez comment créer votre activité de marchand de biens,
              même sans argent ni expérience.
            </p>
            <button
              onClick={() => handleStepSubmit({ action: 'start' })}
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {getButtonText()}
            </button>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Variante de test : {variant}
            </p>
          </div>
        )}

        {/* Étape 1: Métier */}
        {currentStep === 1 && (
          <StepMetier onSubmit={handleStepSubmit} />
        )}

        {/* Étape 2: Capital */}
        {currentStep === 2 && (
          <StepCapital onSubmit={handleStepSubmit} />
        )}

        {/* ... autres étapes ... */}

        {/* Étape Finale: Optin */}
        {currentStep === steps.length - 1 && (
          <StepOptin onSubmit={handleStepSubmit} formData={formData} />
        )}
      </div>
    </div>
  );
}

// ========================================
// COMPOSANTS D'ÉTAPES (EXEMPLES)
// ========================================

function StepMetier({ onSubmit }: { onSubmit: (data: Record<string, string>) => void }) {
  const [selected, setSelected] = useState('');

  const options = [
    { value: 'vivre', label: 'Vivre de l\'immobilier' },
    { value: 'complement', label: 'Développer une activité secondaire' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">Vous souhaitez :</h2>
      <div className="space-y-4">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => {
              setSelected(option.value);
              onSubmit({ metier: option.value });
            }}
            className={`w-full p-4 border-2 rounded-lg text-left transition ${
              selected === option.value
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function StepCapital({ onSubmit }: { onSubmit: (data: Record<string, string>) => void }) {
  const options = [
    { value: '10-20k', label: '10 000€ - 20 000€' },
    { value: '20-50k', label: '20 000€ - 50 000€' },
    { value: '50k+', label: '+ 50 000€' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">Quel est votre capital de départ ?</h2>
      <div className="space-y-4">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onSubmit({ capital: option.value })}
            className="w-full p-4 border-2 border-gray-200 rounded-lg text-left hover:border-blue-600 transition"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function StepOptin({ 
  onSubmit, 
  formData 
}: { 
  onSubmit: (data: Record<string, string>) => void;
  formData: Record<string, string>;
}) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, phone, name });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-4">Dernière étape !</h2>
      <p className="text-gray-600 mb-6">
        Recevez votre formation gratuite par email
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Votre nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-4 border border-gray-300 rounded-lg"
        />
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-4 border border-gray-300 rounded-lg"
        />
        <input
          type="tel"
          placeholder="Votre téléphone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full p-4 border border-gray-300 rounded-lg"
        />
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Accéder à la formation →
        </button>
      </form>

      {/* Récapitulatif */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
        <strong>Vos choix :</strong>
        <ul className="mt-2 space-y-1">
          {Object.entries(formData).map(([key, value]) => (
            <li key={key}>• {key}: {value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ========================================
// FONCTION UTILITAIRE (À ADAPTER)
// ========================================
async function submitLead(data: Record<string, string>) {
  // Exemple: envoyer à GoHighLevel, Make.com, ou votre API
  const response = await fetch('/api/lead-webhook', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Erreur lors de la soumission du lead');
  }

  return response.json();
}

/**
 * NOTES D'INTÉGRATION :
 * 
 * 1. Ce fichier est un EXEMPLE complet mais simplifié
 * 2. Adaptez-le à votre moteur de quiz existant
 * 3. Les points clés à intégrer :
 *    - trackPageView() au chargement de chaque étape
 *    - trackFormSubmit() à chaque soumission
 *    - trackConversion() à la fin du tunnel
 *    - getVariant() pour les tests A/B/C
 * 
 * 4. Pour le tunnel de formation existant (/funnels/formation/page.tsx) :
 *    - Importer les fonctions de tracking
 *    - Ajouter les appels aux bons endroits
 *    - Tester avec console.log activé
 *    - Vérifier dans le dashboard /funnels/analytics
 */



