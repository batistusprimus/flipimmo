const CALENDLY_URL = "https://calendly.com/flipimmo/appel-15min";

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
          <span className="text-emerald-600">✓</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Bravo — vous y êtes presque</h1>
        <p className="mt-3 text-slate-600">Votre guide arrive dans quelques minutes. En attendant, gagnez 3 semaines en réservant un mini-diagnostic offert :</p>
        <ul className="mx-auto mt-4 max-w-xl list-disc space-y-1 text-left text-sm text-slate-700 pl-6">
          <li>Votre guide complet du marchand de biens</li>
          <li>Votre évaluation personnalisée selon vos réponses</li>
          <li>Une feuille de route adaptée à votre profil</li>
          <li>Des outils pratiques (calculateurs, checklists)</li>
        </ul>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-5">
        <div className="md:col-span-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#1E3A8A]/10 px-3 py-1 text-xs font-medium text-[#1E3A8A]">15 min • Gratuit • Sans vente</div>
          <h2 className="mt-3 text-xl font-bold text-slate-900">Réservez un appel d’orientation et repartez avec un plan simple</h2>
          <p className="mt-2 text-slate-600">En 15 minutes, nous validons la faisabilité de votre projet et vous repartez avec 2–3 actions concrètes pour avancer sereinement.</p>

          <ul className="mt-6 grid gap-3">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#1E3A8A]" />
              <div>
                <div className="font-medium text-slate-900">Clarté immédiate</div>
                <div className="text-sm text-slate-600">On détecte les angles morts (travaux, financement, marge) avant qu’ils coûtent cher.</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#1E3A8A]" />
              <div>
                <div className="font-medium text-slate-900">Plan d’action en 3 étapes</div>
                <div className="text-sm text-slate-600">Une mini feuille de route sur 30 jours pour avancer sans se disperser.</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#1E3A8A]" />
              <div>
                <div className="font-medium text-slate-900">Regard extérieur neutre</div>
                <div className="text-sm text-slate-600">Un avis pragmatique et indépendant pour valider vos hypothèses.</div>
              </div>
            </li>
          </ul>

          <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#F59E0B] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
            >
              Réserver mon appel gratuit
            </a>
            <div className="text-xs text-slate-500">Créneaux limités chaque semaine</div>
          </div>

          <div className="mt-8 overflow-hidden rounded-md border border-slate-200">
            <iframe
              title="Calendly - Appel 15 minutes"
              src={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1`}
              className="h-[720px] w-full"
              frameBorder="0"
            />
          </div>

          <div className="mt-6 grid gap-3 rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
            <div className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
              Appel 100% informatif: aucun pitch de vente, zéro pression.
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
              Votre situation reste confidentielle.
            </div>
          </div>
        </div>

        <aside className="md:col-span-2 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold text-slate-900">Ce que disent les lecteurs</div>
          <div className="mt-4 grid gap-4">
            <div className="rounded-lg border border-slate-200 p-4">
              <div className="text-sm text-slate-700">“L’appel m’a évité une erreur qui m’aurait coûté des milliers d’euros.”</div>
              <div className="mt-2 text-xs text-slate-500">— Julien, premier projet</div>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <div className="text-sm text-slate-700">“Je repars avec un plan clair et atteignable pour les 30 prochains jours.”</div>
              <div className="mt-2 text-xs text-slate-500">— Sarah, passage à l’action</div>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-slate-50 p-4 text-xs text-slate-600">
            <div><span className="font-semibold text-slate-900">Transparence:</span> il n’y a rien à acheter à la fin de l’appel.</div>
          </div>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-[#1E3A8A] bg-white px-4 py-2 text-sm font-semibold text-[#1E3A8A] shadow-sm transition hover:bg-[#1E3A8A]/5"
          >
            Choisir un créneau
          </a>
        </aside>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-30 block border-t border-slate-200 bg-white p-3 shadow-[-4px_0_12px_rgba(0,0,0,0.05)] md:hidden">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3">
          <div className="text-xs text-slate-600">15 min • Gratuit • Sans vente</div>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[#F59E0B] px-4 py-2 text-sm font-semibold text-white shadow-sm"
          >
            Réserver
          </a>
        </div>
      </div>
    </div>
  )
}

