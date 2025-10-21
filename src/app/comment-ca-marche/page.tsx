export const metadata = {
  title: 'Comment Ça Marche | FlipImmo',
  description: "Découvrez notre processus simple et transparent en 3 étapes.",
};

export default function CommentCaMarchePage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <span className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">Processus</span>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">De l'Information à l'Action : Votre Parcours en 3 Étapes Clés</h1>
      <p className="mt-2 max-w-3xl text-slate-700">Un processus simple, transparent et entièrement gratuit pour vous guider de votre première recherche d'information jusqu'à votre mise en relation avec un expert qualifié.</p>

      {/* Étape 1 */}
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white/80 p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500" aria-hidden="true" />
          <div className="inline-flex items-center gap-2 text-xs font-medium text-[#1E3A8A]"><span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1E3A8A] text-[11px] font-bold text-white">1</span> Étape 1</div>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">S'informer et se Former aux Fondamentaux</h2>
          <p className="mt-2 text-sm text-slate-700">Téléchargez la formation gratuite, lisez nos articles et utilisez nos outils pour maîtriser les bases.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="/formation-gratuite" className="inline-flex items-center justify-center rounded-md bg-[#F59E0B] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#D97706] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/30">Télécharger la Formation
              <svg aria-hidden="true" viewBox="0 0 20 20" className="ml-2 h-4 w-4"><path fill="currentColor" d="M12.293 3.293a1 1 0 0 1 1.414 0l4 4A1 1 0 0 1 17 9h-3v6a1 1 0 1 1-2 0V9H9a1 1 0 0 1-.707-1.707l4-4Z"/></svg>
            </a>
            <a href="/blog" className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200">Explorer le Blog
              <svg aria-hidden="true" viewBox="0 0 20 20" className="ml-2 h-4 w-4"><path fill="currentColor" d="M7 10a1 1 0 0 1 1-1h5.586l-1.293-1.293A1 1 0 0 1 13.707 6.293l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 12.293 12.293L13.586 11H8a1 1 0 0 1-1-1Z"/></svg>
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm">
          <div className="text-sm font-semibold text-slate-800">Votre progression</div>
          <div className="mt-4 flex items-center">
            <div className="flex flex-1 items-center">
              <div className="flex flex-1 items-center justify-between">
                <div className="flex w-1/3 flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A8A] text-sm font-bold text-white">1</div>
                  <div className="mt-2 text-xs text-slate-700">S'informer</div>
                </div>
                <div className="mx-2 h-0.5 flex-1 bg-slate-200" />
                <div className="flex w-1/3 flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A8A]/90 text-sm font-bold text-white">2</div>
                  <div className="mt-2 text-xs text-slate-700">Qualifier</div>
                </div>
                <div className="mx-2 h-0.5 flex-1 bg-slate-200" />
                <div className="flex w-1/3 flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A8A]/80 text-sm font-bold text-white">3</div>
                  <div className="mt-2 text-xs text-slate-700">Parler à un expert</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-200/40 to-emerald-200/40 blur-2xl" aria-hidden="true" />
        </div>
      </section>

      {/* Étape 2 */}
      <section className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white/90 p-6 shadow-sm ring-1 ring-slate-200">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500" aria-hidden="true" />
        <div className="inline-flex items-center gap-2 text-xs font-medium text-[#1E3A8A]"><span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1E3A8A] text-[11px] font-bold text-white">2</span> Étape 2</div>
        <h2 className="mt-2 text-xl font-semibold text-slate-900">Qualifier Son Projet</h2>
        <p className="mt-2 text-sm text-slate-700">Répondez à 5 questions clés pour passer d'une idée à un projet clair et actionnable.</p>
        <div className="mt-5">
          <a href="/parler-a-un-expert" className="inline-flex items-center justify-center rounded-md bg-[#1E3A8A] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#182c70] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30">Commencer mon Questionnaire
            <svg aria-hidden="true" viewBox="0 0 20 20" className="ml-2 h-4 w-4"><path fill="currentColor" d="M7 10a1 1 0 0 1 1-1h5.586l-1.293-1.293A1 1 0 0 1 13.707 6.293l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 12.293 12.293L13.586 11H8a1 1 0 0 1-1-1Z"/></svg>
          </a>
        </div>
      </section>

      {/* Étape 3 */}
      <section className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white/90 p-6 shadow-sm ring-1 ring-slate-200">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-500 via-rose-500 to-orange-500" aria-hidden="true" />
        <div className="inline-flex items-center gap-2 text-xs font-medium text-[#1E3A8A]"><span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1E3A8A] text-[11px] font-bold text-white">3</span> Étape 3</div>
        <h2 className="mt-2 text-xl font-semibold text-slate-900">Parler à un Expert</h2>
        <p className="mt-2 text-sm text-slate-700">Soumettez le questionnaire : un expert certifié vous recontacte sous 24-48h pour un échange gratuit et sans engagement.</p>
        <div className="mt-5">
          <a href="/parler-a-un-expert" className="inline-flex items-center justify-center rounded-md bg-[#1E3A8A] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#182c70] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30">Être Recontacté par un Expert
            <svg aria-hidden="true" viewBox="0 0 20 20" className="ml-2 h-4 w-4"><path fill="currentColor" d="M7 10a1 1 0 0 1 1-1h5.586l-1.293-1.293A1 1 0 0 1 13.707 6.293l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 12.293 12.293L13.586 11H8a1 1 0 0 1-1-1Z"/></svg>
          </a>
        </div>
      </section>

      {/* Garanties */}
      <section className="mt-14 border-t border-slate-200 pt-10">
        <h2 className="text-2xl font-bold text-slate-900">Nos Garanties et Engagements</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          <Badge icon="🎁" title="100% Gratuit" desc="De la formation à la mise en relation." />
          <Badge icon="🛟" title="Sans Engagement" desc="Vous gardez le contrôle des décisions." />
          <Badge icon="🔒" title="Confidentialité" desc="Vos données sont protégées et partagées avec un seul partenaire." />
          <Badge icon="✅" title="Partenaires Certifiés" desc="Organismes Qualiopi audités pour leur qualité." />
        </div>
      </section>
    </div>
  );
}

function Badge({ title, desc, icon }: { title: string; desc: string; icon?: string }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white/90 p-5 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500" aria-hidden="true" />
      <div className="flex items-start gap-3">
        {icon ? (
          <span className="mt-0.5 text-lg" aria-hidden="true">{icon}</span>
        ) : null}
        <div>
          <div className="font-semibold text-slate-900">{title}</div>
          <div className="mt-1 text-sm text-slate-700">{desc}</div>
        </div>
      </div>
    </div>
  )
}


