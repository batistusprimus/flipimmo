'use client'

import Script from 'next/script'
import ConfettiOnce from '@/components/ConfettiOnce'

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10">
      <ConfettiOnce pieces={180} />
      <div className="mb-6 text-center">
        <img src="/images_funnels/Flipmmologotransparentrectangle.svg" alt="FlipImmo" className="mx-auto h-12 w-auto" />
      </div>
      <h1 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
        <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">Votre plan d’action</span> est prêt
      </h1>
      <p className="mt-3 text-center text-slate-800">Merci pour votre intérêt.</p>
      <p className="mt-1 text-center text-slate-700">Vous allez recevoir votre guide du Marchand de Biens par email dans les prochaines minutes.</p>
      <div className="mt-4 text-center">
        <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">Gratuit et sans engagement</span>
      </div>
      <div className="mt-6 text-center">
        <img src="/LogosPartenaires/65d5b161937acbd76be801bc_Logo Greenbull Campus.webp" alt="Greenbull" className="mx-auto h-10 w-auto" />
        <div className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-500">Partenaire officiel FlipImmo × Greenbull Campus</div>
      </div>
      <div className="mx-auto mt-6 flex max-w-xl flex-col items-center justify-center gap-3 sm:flex-row">
        <a href="#rdv" className="inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 sm:w-auto">Réserver mon créneau</a>
        <a href="#pourquoi" className="inline-flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 sm:w-auto">Pourquoi Greenbull ?</a>
      </div>

      <h2 className="mx-auto mt-8 max-w-2xl text-center text-xl font-semibold text-slate-900">Étape suivante : bénéficiez d’un retour personnalisé sur votre projet</h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-slate-700">Greenbull Campus met à votre disposition un expert Marchand de Biens pour :</p>
      <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="text-sm font-semibold text-slate-900">Analyse</div>
          <p className="mt-1 text-sm text-slate-700">Analyser votre situation actuelle.</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="text-sm font-semibold text-slate-900">Leviers</div>
          <p className="mt-1 text-sm text-slate-700">Identifier vos leviers d’action.</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="text-sm font-semibold text-slate-900">Stratégies</div>
          <p className="mt-1 text-sm text-slate-700">Présenter les meilleures stratégies.</p>
        </div>
      </div>
      <p className="mx-auto mt-3 max-w-xl text-center text-emerald-700">Cet échange est gratuit et sans engagement.</p>

      <h2 id="rdv" className="mt-10 text-center text-2xl font-bold text-slate-900">Réservez dès maintenant votre créneau</h2>
      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <iframe
          src="https://calendly.com/d/csm9-nf9-stn/candidature-incubateur-entretien-de-45-min"
          className="h-[900px] w-full"
          title="Calendly GreenBull"
        />
      </div>

      <h3 className="mx-auto mt-10 max-w-2xl text-center text-xl font-semibold text-slate-900">Ce que vous allez découvrir pendant l’appel</h3>
      <ul className="mx-auto mt-4 max-w-2xl list-disc space-y-2 pl-6 text-left text-slate-900">
        <li><span className="font-semibold">Structuration & financement</span> des opérations des marchands de biens,</li>
        <li><span className="font-semibold">Erreurs à éviter</span> pour vos premiers achats-reventes,</li>
        <li><span className="font-semibold">Écosystème Greenbull Campus</span> et Incubateur Marchand de Biens,</li>
        <li><span className="font-semibold">Outils, mentors et financements</span> pour accélérer.</li>
      </ul>

      <h3 id="pourquoi" className="mx-auto mt-10 max-w-2xl text-center text-xl font-semibold text-slate-900">Pourquoi Greenbull Campus</h3>
      <p className="mx-auto mt-3 max-w-2xl text-center text-slate-700">Greenbull Campus est un organisme de formation et d’accompagnement immobilier fondé par Yann Darwin.</p>
      <p className="mx-auto mt-2 max-w-2xl text-center text-slate-700">L’Incubateur Marchand de Biens aide chaque membre à passer de la théorie à la pratique, à sécuriser ses opérations et à rejoindre un réseau national de professionnels.</p>
      <div className="mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
          <div className="text-2xl font-extrabold text-slate-900">+1 400</div>
          <div className="mt-1 text-sm text-slate-600">membres actifs</div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
          <div className="text-2xl font-extrabold text-slate-900">+780</div>
          <div className="mt-1 text-sm text-slate-600">projets audités</div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
          <div className="text-2xl font-extrabold text-slate-900">+1,8 M€</div>
          <div className="mt-1 text-sm text-slate-600">CA moyen / membre</div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
          <div className="text-2xl font-extrabold text-slate-900">+20&nbsp;%</div>
          <div className="mt-1 text-sm text-slate-600">bénéfice moyen / opération</div>
        </div>
        <div className="col-span-2 rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm sm:col-span-1">
          <div className="text-2xl font-extrabold text-slate-900">22</div>
          <div className="mt-1 text-sm text-slate-600">mentors disponibles 7j/7</div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-xl rounded-lg bg-amber-50 p-4 text-amber-900 ring-1 ring-amber-200">
        <div className="font-semibold">Important</div>
        <p className="mt-2 text-sm">BPCORP (FlipImmo) réalise la mise en relation qualifiée entre investisseurs et organismes partenaires.</p>
        <p className="mt-1 text-sm">Votre suivi, vos conseils et votre accompagnement seront assurés directement par Greenbull Campus.</p>
      </div>

      <div className="mx-auto mt-8 max-w-xl text-center">
        <div className="font-semibold text-slate-900">Vous n’avez pas reçu votre guide&nbsp;?</div>
        <p className="mt-1 text-slate-700">Vérifiez vos spams ou recherchez “FlipImmo – Plan d’action Marchand de Biens” dans votre boîte mail.</p>
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


