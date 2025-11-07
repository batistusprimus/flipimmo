'use client'

import ConfettiOnce from '@/components/ConfettiOnce'

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10">
      <ConfettiOnce pieces={160} />
      <div className="mb-6 text-center">
        <img src="/images_funnels/Flipmmologotransparentrectangle.svg" alt="FlipImmo" className="mx-auto h-12 w-auto" />
      </div>
      <div className="mb-2 text-center">
        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-200">Confirmation</span>
      </div>
      <h1 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
        <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Votre demande de formation</span> est bien enregistrée
      </h1>
      <p className="mt-3 text-center text-slate-700">Merci pour votre intérêt.</p>
      <p className="mt-1 text-center text-slate-700">Vous allez recevoir votre <span className="font-semibold">guide du Marchand de Biens</span> par email dans les prochaines minutes.</p>

      <div className="mt-4 text-center">
        <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 ring-1 ring-inset ring-orange-200">Formation certifiée RNCP • Finançable CPF</span>
      </div>

      <div className="mx-auto mt-6 flex max-w-xl flex-col items-center justify-center gap-3 sm:flex-row">
        <a href="#etape" className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto">Étape suivante</a>
        <a href="#apropos" className="inline-flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 sm:w-auto">À propos</a>
        <a href="#programme" className="inline-flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 sm:w-auto">Programme</a>
      </div>

      <div className="mt-6 rounded-lg bg-blue-50 p-4 text-blue-900 ring-1 ring-blue-200">
        <div className="flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-2">
          <div className="inline-flex items-center gap-2 font-semibold">
            <svg className="h-5 w-5 text-blue-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C11.4 21 3 12.6 3 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z"/></svg>
            <span>On vous appelle sous 30 minutes</span>
          </div>
          <span className="text-blue-800">(lun–ven, 9h–18h)</span>
        </div>
        <p className="mt-1 text-sm">En dehors de ces horaires, rappel le lendemain matin.</p>
      </div>

      <div className="mt-8 grid gap-6 text-slate-900">
        <div className="text-center">
          <img src="/LogosPartenaires/Logo-Axio-1.png" alt="AXIO Formation" className="mx-auto h-10 w-auto" />
          <div className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-500">Partenaire formation — Axio</div>
        </div>

        <div className="mx-auto max-w-2xl">
          <h2 id="etape" className="text-xl font-bold tracking-tight">Lors de cet appel, vous découvrirez comment</h2>
          <div className="mx-auto mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <div className="text-sm font-semibold text-blue-900">Financer via CPF</div>
              </div>
              <p className="mt-2 text-sm text-slate-700">100 % des démarches prises en charge.</p>
            </div>
            <div className="rounded-xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-orange-600" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
                <div className="text-sm font-semibold text-orange-900">Programme 105h</div>
              </div>
              <p className="mt-2 text-sm text-slate-700">Cursus complet certifié RNCP.</p>
            </div>
            <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/></svg>
                <div className="text-sm font-semibold text-blue-900">Formats flexibles</div>
              </div>
              <p className="mt-2 text-sm text-slate-700">Distanciel, présentiel ou hybride.</p>
            </div>
            <div className="rounded-xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-orange-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <div className="text-sm font-semibold text-orange-900">Certification</div>
              </div>
              <p className="mt-2 text-sm text-slate-700">Titre RNCP Marchand de Biens.</p>
            </div>
          </div>
          </div>

        <div className="mx-auto max-w-2xl">
          <h2 id="apropos" className="text-xl font-bold tracking-tight">À propos d'Axio Formation</h2>
          <p className="mt-2 leading-relaxed">
            Axio Formation est un organisme agréé spécialisé dans les formations professionnelles en immobilier, bureautique et gestion. Toutes les formations sont certifiées et finançables, et incluent un accompagnement administratif complet pour simplifier vos démarches CPF ou OPCO.
          </p>
          <div className="mx-auto mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
              <div className="text-2xl font-extrabold text-blue-600">96 %</div>
              <div className="mt-1 text-sm text-slate-600">satisfaction 2024</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
              <div className="text-2xl font-extrabold text-orange-600">105h</div>
              <div className="mt-1 text-sm text-slate-600">de formation</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
              <div className="text-2xl font-extrabold text-blue-600">RNCP</div>
              <div className="mt-1 text-sm text-slate-600">certifié</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
              <div className="text-2xl font-extrabold text-orange-600">100 %</div>
              <div className="mt-1 text-sm text-slate-600">CPF pris en charge</div>
            </div>
            <div className="col-span-2 rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm sm:col-span-1">
              <div className="text-2xl font-extrabold text-blue-600">3</div>
              <div className="mt-1 text-sm text-slate-600">formats disponibles</div>
            </div>
          </div>
          <div className="mt-4 rounded-lg bg-slate-50 p-4 ring-1 ring-slate-200">
            <div className="font-semibold">Points forts :</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.757 9.8l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"/></svg>Formation reconnue France Compétences (RNCP 38896 – Négociateur Gestionnaire Immobilier)</li>
              <li className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 text-orange-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.757 9.8l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"/></svg>Aucun prérequis demandé</li>
              <li className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.757 9.8l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"/></svg>Intervenants professionnels du secteur</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-2xl">
          <h2 id="programme" className="text-xl font-bold tracking-tight">Ce que vous allez apprendre</h2>
          <p className="mt-2 leading-relaxed">Cette formation de 105 heures vous permettra de :</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.757 9.8l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"/></svg><span className="font-semibold">analyser un marché</span> et repérer les meilleures opportunités,</li>
            <li className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 text-orange-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.757 9.8l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"/></svg><span className="font-semibold">négocier efficacement</span> vos acquisitions,</li>
            <li className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.757 9.8l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"/></svg><span className="font-semibold">maîtriser fiscalité et financements</span>,</li>
            <li className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 text-orange-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.757 9.8l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"/></svg><span className="font-semibold">sécuriser juridiquement</span> vos opérations,</li>
            <li className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.757 9.8l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"/></svg><span className="font-semibold">revendre avec rentabilité</span>.</li>
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


