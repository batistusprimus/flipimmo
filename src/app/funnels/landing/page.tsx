'use client';

import Image from 'next/image';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLandingABTracking } from './hooks';
import formConfig from './formConfig.json';
import Script from 'next/script';

const FORM_TOKEN = 'GLFT-RNLWSRPR86OKPJTWLZ76KL73BB1';
const LEADBOT_SCRIPT_SRC = 'https://api.useleadbot.com/lead-bots/get-pixel-script.js';

function LandingPageContent() {
  const searchParams = useSearchParams();
  const variant = useLandingABTracking(searchParams.get('v'));
  

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
      {/* Pixel puis token comme dans la doc LeadCapture */}
      <Script id="leadcapture-pixel" src={LEADBOT_SCRIPT_SRC} strategy="afterInteractive" />
      <Script id="leadcapture-token" strategy="afterInteractive">{`window.form_token = "${FORM_TOKEN}";`}</Script>

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

            {/* JSON offline settings dans le body, comme recommandé */}
            <script
              id="leadFormOfflineSettings"
              type="application/json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(formConfig) }}
            />
            {/* Conteneur d'embed */}
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
