'use client'

import ConfettiOnce from '@/components/ConfettiOnce'

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10">
      <ConfettiOnce pieces={160} />
      <div className="mb-6 text-center">
        <img src="/images_funnels/Flipmmologotransparentrectangle.svg" alt="FlipImmo" className="mx-auto h-12 w-auto" />
      </div>
      <div className="mb-2 text-center">
        <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-emerald-100">Confirmation</span>
      </div>
      <h1 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Votre demande de formation est bien enregistrée</h1>
      <p className="mt-3 text-center text-slate-700">Merci pour votre intérêt.</p>
      <p className="mt-1 text-center text-slate-700">Vous allez recevoir votre <span className="font-semibold">guide du Marchand de Biens</span> par email dans les prochaines minutes.</p>

      <div className="mt-5 rounded-md bg-emerald-50 p-4 text-emerald-900 ring-1 ring-emerald-200">
        <div className="flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-2">
          <div className="inline-flex items-center gap-2 font-semibold">
            <svg className="h-5 w-5 text-emerald-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C11.4 21 3 12.6 3 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z"/></svg>
            <span>On vous appelle sous 30 minutes</span>
          </div>
          <span className="text-emerald-800">(lun–ven, 9h–18h)</span>
        </div>
        <p className="mt-1 text-sm">En dehors de ces horaires, rappel le lendemain matin.</p>
      </div>

      <div className="mt-8 grid gap-6 text-slate-900">
        <div className="text-center">
          <img src="/LogosPartenaires/Logo-Axio-1.png" alt="AXIO Formation" className="mx-auto h-10 w-auto" />
        </div>

        <div className="mx-auto max-w-2xl">
          <h2 className="text-xl font-bold tracking-tight">Étape suivante</h2>
          <div className="mt-4 rounded-lg bg-amber-50 p-4 text-amber-900 ring-1 ring-amber-200">
            <div className="font-semibold">Lors de cet appel, vous découvrirez comment :</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 text-amber-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.757 9.8l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"/></svg>financer votre formation grâce au CPF,</li>
              <li className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 text-amber-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.757 9.8l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"/></svg>accéder à un programme complet de 105h,</li>
              <li className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 text-amber-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.757 9.8l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"/></svg>apprendre à votre rythme en distanciel ou présentiel,</li>
              <li className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 text-amber-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.757 9.8l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"/></svg>devenir marchand de biens certifié (titre RNCP n°38896).</li>
            </ul>
          </div>
          </div>

        <div className="mx-auto max-w-2xl">
          <h2 className="text-xl font-bold tracking-tight">À propos d’Axio Formation</h2>
          <p className="mt-2 leading-relaxed">
            Axio Formation est un organisme agréé spécialisé dans les formations professionnelles en immobilier, bureautique et gestion. Toutes les formations sont certifiées et finançables, et incluent un accompagnement administratif complet pour simplifier vos démarches CPF ou OPCO.
          </p>
          <div className="mt-4 rounded-lg bg-slate-50 p-4 ring-1 ring-slate-200">
            <div className="font-semibold">Points forts :</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 text-slate-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.757 9.8l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"/></svg>Formation reconnue France Compétences (RNCP 38896 – Négociateur Gestionnaire Immobilier)</li>
              <li className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 text-slate-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.757 9.8l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"/></svg>Aucun prérequis demandé</li>
              <li className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 text-slate-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.757 9.8l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"/></svg>100 % des démarches CPF prises en charge</li>
              <li className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 text-slate-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.757 9.8l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"/></svg>Taux de satisfaction 2024 : 96 %</li>
              <li className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 text-slate-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.757 9.8l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"/></svg>Intervenants professionnels du secteur</li>
              <li className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 text-slate-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.757 9.8l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"/></svg>3 formats disponibles : e-learning, sessions collectives ou hybrides</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-2xl">
          <h2 className="text-xl font-bold tracking-tight">Ce que vous allez apprendre</h2>
          <p className="mt-2 leading-relaxed">Cette formation de 105 heures vous permettra de :</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.757 9.8l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"/></svg>analyser un marché immobilier et repérer les meilleures opportunités,</li>
            <li className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.757 9.8l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"/></svg>négocier efficacement vos acquisitions,</li>
            <li className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.757 9.8l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"/></svg>maîtriser la fiscalité et les financements,</li>
            <li className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.757 9.8l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"/></svg>sécuriser juridiquement vos opérations,</li>
            <li className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.757 9.8l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"/></svg>valoriser et revendre vos biens avec rentabilité.</li>
          </ul>
          <p className="mt-4 italic text-slate-700">“Une formation passionnante et concrète. J’ai pu lancer ma première opération dès la fin du programme.” — Valérie, investisseuse immobilière
            <span className="ml-2 inline-flex align-middle text-amber-500" aria-label="5 sur 5">
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.176 0l-2.802 2.036c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.17-3.292z"/></svg>
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.176 0l-2.802 2.036c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.17-3.292z"/></svg>
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.176 0l-2.802 2.036c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.17-3.292z"/></svg>
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.176 0l-2.802 2.036c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.17-3.292z"/></svg>
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.176 0l-2.802 2.036c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.17-3.292z"/></svg>
            </span>
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <h2 className="text-xl font-bold tracking-tight">Important</h2>
          <p className="mt-2 leading-relaxed">
            BPCORP (FlipImmo) agit uniquement comme intermédiaire de mise en relation entre porteurs de projets et organismes agréés. Votre accompagnement, votre formation et votre financement seront assurés directement par Axio Formation.
          </p>
        </div>

        <div className="mx-auto max-w-2xl rounded-lg bg-slate-50 p-4 ring-1 ring-slate-200">
          <div className="font-semibold">Vous n’avez pas reçu votre guide ?</div>
          <p className="mt-1 text-sm text-slate-700">Vérifiez vos spams ou recherchez “FlipImmo – Guide du Marchand de Biens” dans votre boîte mail.</p>
        </div>

        <p className="mt-2 text-center text-sm text-slate-600">Votre guide gratuit vous a été envoyé par e‑mail.</p>
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


