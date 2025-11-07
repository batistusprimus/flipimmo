'use client'

import ConfettiOnce from '@/components/ConfettiOnce'

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10">
      <ConfettiOnce pieces={160} />
      <div className="mb-6 text-center">
        <img src="/images_funnels/Flipmmologotransparentrectangle.svg" alt="FlipImmo" className="mx-auto h-12 w-auto" />
      </div>
      <h1 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">15 minutes maintenant pour éviter 15 000€ plus tard</h1>
      <p className="mt-3 text-center text-slate-700">Anthony, expert Marchand de Biens chez <span className="font-semibold">AXIO</span>, vous appelle sous peu. Décrochez : pas de blabla — des décisions qui vous font gagner des semaines.</p>
      <div className="mt-6 grid gap-5 text-slate-800">
        <div className="text-center">
          <img src="/LogosPartenaires/Logo-Axio-1.png" alt="AXIO Formation" className="mx-auto h-10 w-auto" />
        </div>
        <div className="mx-auto max-w-xl space-y-4 text-base leading-relaxed text-slate-900">
          <div className="flex items-start gap-3">
            <svg className="mt-1 h-5 w-5 text-[#f59e0b]" viewBox="0 0 24 24" fill="currentColor"><path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/></svg>
            <div><span className="font-semibold">Validez votre stratégie</span> (capital, timing, zone) sans tourner en rond.</div>
          </div>
          <div className="flex items-start gap-3">
            <svg className="mt-1 h-5 w-5 text-[#1E3A8A]" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v4H4V4zm0 6h10v10H4V10zm12 0h4v10h-4V10z"/></svg>
            <div>Accédez à des <span className="font-semibold">dossiers réservés</span> aux marchands financés.</div>
          </div>
          <div className="flex items-start gap-3">
            <svg className="mt-1 h-5 w-5 text-emerald-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l9 6v12H3V9l9-6zm0 2.2L5 10v9h14v-9l-7-4.8z"/></svg>
            <div>Activez un <span className="font-semibold">effet de levier bancaire</span> avec un montage propre.</div>
          </div>
        </div>
        <div className="mx-auto mt-4 max-w-xl rounded-lg bg-amber-50 p-4 text-sm text-amber-900 ring-1 ring-amber-200">
          <div className="font-semibold">Pourquoi cet appel est crucial (et pas un appel de vente) :</div>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Diagnostic gratuit, <span className="font-semibold">0 pitch</span> — un plan en 3 actions, clair.</li>
            <li>Gagnez souvent <span className="font-semibold">3 semaines</span> en évitant l’erreur n°1 des débutants.</li>
            <li>Numéro inconnu = probablement Anthony (AXIO). Décrochez.</li>
          </ul>
          <div className="mt-2 text-xs opacity-80">Preuves & crédibilité : programme structuré (analyse marché, fiscalité, financement) + études de cas réelles, délivré par des praticiens du métier.</div>
        </div>
        <div className="mx-auto mt-5 max-w-xl text-center">
          <p className="text-slate-800"><span className="font-semibold">N’attendez pas</span> — gardez votre téléphone à portée. Si l’appel tombe, décrochez.</p>
        </div>
        <p className="mt-3 text-center text-sm italic text-slate-600">Votre guide gratuit vous a été envoyé par e‑mail.</p>
      </div>
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


