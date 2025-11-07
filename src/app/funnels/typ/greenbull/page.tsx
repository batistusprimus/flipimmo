'use client'

import Script from 'next/script'
import ConfettiOnce from '@/components/ConfettiOnce'

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10">
      <ConfettiOnce pieces={180} />
      <div className="mb-6 text-center">
        <img src="/images_funnels/Flipmmologotransparentrectangle.svg" alt="FlipImmo" className="mx-auto h-12 w-auto" />
      </div>
      <h1 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Bloquez votre créneau — chaque jour compte</h1>
      <p className="mt-3 text-center text-slate-700">Prenez un rendez‑vous <span className="font-semibold">Gratuit</span> avec notre partenaire Green‑Bull pour :</p>
      <div className="mt-4 text-center">
        <img src="/LogosPartenaires/65d5b161937acbd76be801bc_Logo Greenbull Campus.webp" alt="Greenbull" className="mx-auto h-10 w-auto" />
      </div>
      <div className="mx-auto mt-4 max-w-xl space-y-4 text-base leading-relaxed text-slate-900">
        <div className="flex items-start gap-3"><svg className="mt-1 h-5 w-5 text-[#f59e0b]" viewBox="0 0 24 24" fill="currentColor"><path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/></svg><div>Valider votre stratégie et tracer votre trajectoire sur 90 jours.</div></div>
        <div className="flex items-start gap-3"><svg className="mt-1 h-5 w-5 text-[#1E3A8A]" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v4H4V4zm0 6h10v10H4V10zm12 0h4v10h-4V10z"/></svg><div>Accéder à des dossiers <span className="font-semibold">réservés</span> aux marchands financés.</div></div>
        <div className="flex items-start gap-3"><svg className="mt-1 h-5 w-5 text-emerald-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l9 6v12H3V9l9-6zm0 2.2L5 10v9h14v-9l-7-4.8z"/></svg><div>Structurer un financement propre pour un véritable <span className="font-semibold">effet de levier</span>.</div></div>
      </div>
      <div className="mx-auto mt-4 max-w-xl rounded-lg bg-emerald-50 p-4 text-sm text-emerald-900 ring-1 ring-emerald-200">
        <div className="font-semibold">Pourquoi cet appel n’est pas une vente :</div>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Audit court, <span className="font-semibold">0 pitch</span>, 3 actions concrètes.</li>
          <li>Gagnez <span className="font-semibold">des semaines</span> en évitant une erreur de débutant.</li>
          <li>Créneaux limités — bloquez le vôtre maintenant.</li>
        </ul>
      </div>

      <div className="mx-auto mt-5 max-w-xl text-center">
        <p className="text-slate-800">Vous serez appelé rapidement — <span className="font-semibold">mais n’attendez pas</span>. Choisissez votre créneau ci‑dessous et sécurisez l’échange.</p>
      </div>
      <p className="mt-3 text-center text-sm italic text-slate-600">Votre guide gratuit vous a été envoyé par e‑mail.</p>
      <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <iframe
          src="https://calendly.com/d/csm9-nf9-stn/candidature-incubateur-entretien-de-45-min"
          className="h-[900px] w-full"
          title="Calendly GreenBull"
        />
      </div>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      <p className="mt-10 text-center text-xs text-slate-500">
        <a href="/politique-de-confidentialite" className="underline">Politique de confidentialité</a>
        {' '}
        ·
        {' '}
        <a href="/mentions-legales" className="underline">Mentions légales</a>
      </p>
    </div>
  )
}


