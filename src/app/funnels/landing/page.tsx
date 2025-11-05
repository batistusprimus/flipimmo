'use client';

import Image from 'next/image';
import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLandingABTracking } from './hooks';
import formConfig from './formConfig.json';

function LandingPageContent() {
  const searchParams = useSearchParams();
  const variant = useLandingABTracking(searchParams.get('v'));

  useEffect(() => {
    // Injecter le token d'abord
    const tokenScript = document.createElement('script');
    tokenScript.textContent = 'window.form_token = "GLFT-RNLWSRPR86OKPJTWLZ76KL73BB1";';
    document.head.appendChild(tokenScript);

    // Injecter le JSON de configuration avec toutes les étapes
    const rawConfig = document.createElement('script');
    rawConfig.type = 'application/json';
    rawConfig.id = 'leadFormOfflineSettings';
    rawConfig.textContent = JSON.stringify(formConfig);
    document.body.appendChild(rawConfig);

    // Charger le script principal après que le JSON soit injecté
    const pixelScript = document.createElement('script');
    pixelScript.src = 'https://api.useleadbot.com/lead-bots/get-pixel-script.js';
    pixelScript.async = true;
    pixelScript.onload = () => {
      console.log('LeadBot script chargé');
    };
    pixelScript.onerror = () => {
      console.error('Erreur lors du chargement du script LeadBot');
    };
    document.head.appendChild(pixelScript);
  }, []);

  // Contenu par variante
  const getTitle = () => {
    if (variant === 'b') {
      return (
        <>
          Formation Gratuite{' '}
          <span className="text-[#f59e0b]">Marchand de Biens</span> 2025
        </>
      );
    }
    return (
      <>
        Devenir{' '}
        <span className="text-[#f59e0b]">Marchand de Biens</span>
        <br />
        en 5 questions
      </>
    );
  };

  const getSubtitle = () => {
    if (variant === 'b') {
      return (
        <>
          Découvrez comment{' '}
          <span className="text-[#f59e0b] font-semibold not-italic">
            générer 50k€/an dans l&apos;immobilier
          </span>{' '}
          sans argent ni expérience
        </>
      );
    }
    return (
      <>
        Obtenez gratuitement le{' '}
        <span className="text-[#f59e0b] font-semibold not-italic">
          Guide Marchand de Biens 2025
        </span>{' '}
        et Recevez les conseils d&apos;un expert immobilier
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-2 px-3">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-3 md:p-5">
          <div className="flex justify-center mb-1">
            <Image
              src="/flipimmo_logo.png"
              alt="FlipImmo.fr"
              width={300}
              height={80}
              className="w-42 md:w-48 h-auto"
              priority
            />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-center mb-2 leading-tight">
            {getTitle()}
          </h1>

          <p className="text-sm md:text-base text-center mb-4 leading-relaxed text-gray-700 italic">
            {getSubtitle()}
          </p>

          <div className="mb-4" suppressHydrationWarning>
            <div id="leadforms-embd-form" suppressHydrationWarning></div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500 mb-6 font-medium">
              Ils nous font confiance
            </p>
            
            <div className="overflow-x-auto hide-scrollbar">
              <div className="flex gap-8 items-center justify-start md:justify-center min-w-max px-4">
                <div className="flex-shrink-0 w-32 h-16 relative grayscale hover:grayscale-0 transition-all">
                  <Image
                    src="/LogosPartenaires/65d5b161937acbd76be801bc_Logo Greenbull Campus.webp"
                    alt="Greenbull Campus"
                    fill
                    className="object-contain"
                  />
                </div>
                
                <div className="flex-shrink-0 w-32 h-16 relative grayscale hover:grayscale-0 transition-all">
                  <Image
                    src="/LogosPartenaires/Logo-Axio-1.png"
                    alt="Axio"
                    fill
                    className="object-contain"
                  />
                </div>
                
                <div className="flex-shrink-0 w-32 h-16 relative grayscale hover:grayscale-0 transition-all">
                  <Image
                    src="/LogosPartenaires/B3-35b772eb-640w.png"
                    alt="Partenaire B3"
                    fill
                    className="object-contain"
                  />
                </div>
                
                <div className="flex-shrink-0 w-32 h-16 relative grayscale hover:grayscale-0 transition-all">
                  <Image
                    src="/LogosPartenaires/la_relve_incubateur_mdb_cover.jpeg"
                    alt="La Relève"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center mt-6">
          Vos données sont sécurisées et ne seront jamais partagées.
        </p>
      </div>

    </div>
  );
}

export default function LandingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Chargement...</div>
      </div>
    }>
      <LandingPageContent />
    </Suspense>
  );
}
