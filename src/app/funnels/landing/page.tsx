'use client';

import Image from 'next/image';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLandingABTracking } from './hooks';
import formConfig from './formConfig.json';
import Script from 'next/script';

const FORM_TOKEN = 'GLFT-CS0KX7L8X717S68QV365GCMO7II';
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
      {/* Définir le token AVANT de charger le pixel */}
      <Script id="leadcapture-token" strategy="beforeInteractive">{`window.form_token = "${FORM_TOKEN}";`}</Script>
      <Script id="leadcapture-pixel" src={LEADBOT_SCRIPT_SRC} strategy="afterInteractive" />

      <div className="min-h-screen bg-gray-100 py-2 px-3">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg p-3 md:p-5">
            <div className="mb-1">
              <div className="relative w-full h-16 md:h-20 lg:h-24">
                <Image
                  src="/images_funnels/Flipmmologotransparentrectangle.svg"
                  alt="FlipImmo.fr"
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-contain"
                  priority
                />
              </div>
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

            <div className="mt-8">
              <div className="logo-marquee">
                <div className="logo-marquee-track">
                  <div className="flex-shrink-0 w-32 h-16 relative transition-all">
                    <Image
                      src="/LogosPartenaires/65d5b161937acbd76be801bc_Logo Greenbull Campus.webp"
                      alt="Greenbull Campus"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-shrink-0 w-32 h-16 relative transition-all">
                    <Image
                      src="/LogosPartenaires/Logo-Axio-1.png"
                      alt="Axio"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-shrink-0 w-32 h-16 relative transition-all">
                    <Image
                      src="/images_funnels/logo-republique-francaise.png"
                      alt="République française"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-shrink-0 w-32 h-16 relative transition-all">
                    <Image
                      src="/LogosPartenaires/la_relve_incubateur_mdb_cover.jpeg"
                      alt="La Relève"
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* duplication pour un défilement continu */}
                  <div className="flex-shrink-0 w-32 h-16 relative transition-all">
                    <Image
                      src="/LogosPartenaires/65d5b161937acbd76be801bc_Logo Greenbull Campus.webp"
                      alt="Greenbull Campus"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-shrink-0 w-32 h-16 relative transition-all">
                    <Image
                      src="/LogosPartenaires/Logo-Axio-1.png"
                      alt="Axio"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-shrink-0 w-32 h-16 relative transition-all">
                    <Image
                      src="/images_funnels/logo-republique-francaise.png"
                      alt="République française"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-shrink-0 w-32 h-16 relative transition-all">
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
            <a href="/politique-de-confidentialite" className="underline">Politique de confidentialité</a>
            {' '}
            ·
            {' '}
            <a href="/mentions-legales" className="underline">Mentions légales</a>
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
