'use client';

import Image from 'next/image';
import Script from 'next/script';
import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLandingABTracking } from './hooks';
import formConfig from './formConfig.json';

const FORM_TOKEN = 'GLFT-RNLWSRPR86OKPJTWLZ76KL73BB1';
const LEADBOT_SCRIPT_SRC = 'https://widget.prod.getleadforms.com/';

function LandingPageContent() {
  const searchParams = useSearchParams();
  const variant = useLandingABTracking(searchParams.get('v'));

  // Injection du token et de la config côté client au cas où (en complément de l'injection inline SSR)
  useEffect(() => {
    // Token global requis par le widget
    const tokenScript = document.createElement('script');
    tokenScript.textContent = `window.form_token = "${FORM_TOKEN}";`;
    document.head.appendChild(tokenScript);

    // Configuration JSON attendue par le widget
    const rawConfig = document.createElement('script');
    rawConfig.type = 'application/json';
    rawConfig.id = 'leadFormOfflineSettings';
    rawConfig.textContent = JSON.stringify(formConfig);
    document.body.appendChild(rawConfig);

    return () => {
      try { document.head.removeChild(tokenScript); } catch {}
      try { document.body.removeChild(rawConfig); } catch {}
    };
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
    <>
      <script
        id="leadFormOfflineSettings"
        type="application/json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(formConfig).replace(/</g, '\\u003c') }}
      />
      <script
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: `window.form_token = "${FORM_TOKEN}";` }}
      />

      <Script
        id="leadbot-loader"
        src={LEADBOT_SCRIPT_SRC}
        strategy="afterInteractive"
        onLoad={() => { console.log('LeadBot script chargé'); }}
        onError={() => { console.error('Erreur lors du chargement du script LeadBot'); }}
      />
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

            <div className="overflow-x-auto hide-scrollbar" style={{ contentVisibility: 'auto' }}>
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
    </>
  );
}

export default function LandingPage() {
  return (
    <Suspense fallback={null}>
      <LandingPageContent />
    </Suspense>
  );
}
