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
      <h1 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Cap sur la prochaine étape — sécurisez votre créneau</h1>
      <p className="mt-3 text-center text-slate-700">Prenez un rendez‑vous <span className="font-semibold">Gratuit</span> avec notre partenaire La Relève pour :</p>
      <div className="mt-4 text-center">
        <img src="/LogosPartenaires/la_relve_incubateur_mdb_cover.jpeg" alt="La Relève" className="mx-auto h-10 w-auto" />
      </div>
      <div className="mx-auto mt-4 max-w-xl space-y-4 text-base leading-relaxed text-slate-900">
        <div className="flex items-start gap-3"><svg className="mt-1 h-5 w-5 text-[#f59e0b]" viewBox="0 0 24 24" fill="currentColor"><path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/></svg><div>Valider votre stratégie d’investissement et la prochaine action à forte valeur.</div></div>
        <div className="flex items-start gap-3"><svg className="mt-1 h-5 w-5 text-[#1E3A8A]" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v4H4V4zm0 6h10v10H4V10zm12 0h4v10h-4V10z"/></svg><div>Accéder à des opportunités <span className="font-semibold">qualifiées</span> via leur réseau de marchands financés.</div></div>
        <div className="flex items-start gap-3"><svg className="mt-1 h-5 w-5 text-emerald-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l9 6v12H3V9l9-6zm0 2.2L5 10v9h14v-9l-7-4.8z"/></svg><div>Structurer un financement crédible pour un véritable effet de levier.</div></div>
      </div>
      <div className="mx-auto mt-4 max-w-xl rounded-lg bg-sky-50 p-4 text-sm text-sky-900 ring-1 ring-sky-200">
        <div className="font-semibold">Pas un appel de vente — un audit de 30 minutes :</div>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>30 min pour détecter vos angles morts (marché, financement, travaux).</li>
          <li>Un plan simple en 3 actions pour avancer sans se disperser.</li>
        </ul>
      </div>

      <div className="mx-auto mt-5 max-w-xl text-center">
        <p className="text-slate-800">Vous serez rappelé rapidement — <span className="font-semibold">gagnez du temps</span>: choisissez votre créneau ci‑dessous pour verrouiller l’échange.</p>
      </div>
      <p className="mt-2 text-center text-sm italic text-slate-600">Votre guide gratuit vous a été envoyé par e-mail.</p>
      <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <iframe
          src="https://calendly.com/remaoun/30min?back=1"
          className="h-[900px] w-full"
          title="Calendly La Relève"
        />
      </div>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </div>
  )
}


