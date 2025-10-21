export const metadata = {
  title: 'Simulateur de Financement Professionnel | FlipImmo',
  description: "Estimez rapidement votre capacité d'emprunt et vos mensualités.",
}

export default function SimulateurFinancementPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <span className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">Outil</span>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Simulateur de Financement</h1>
      <p className="mt-2 text-slate-700">Prototype simple (bientôt complet). Entrez apport, durée et taux pour une première estimation.</p>

      <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">Apport (€)
          <input type="number" defaultValue={20000} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
        </label>
        <label className="block text-sm font-medium text-slate-700">Durée (mois)
          <input type="number" defaultValue={24} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
        </label>
        <label className="block text-sm font-medium text-slate-700">Taux (%)
          <input type="number" step="0.01" defaultValue={6} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
        </label>
        <div className="self-end">
          <button className="rounded-md bg-[#1E3A8A] px-4 py-2 text-sm font-semibold text-white">Estimer</button>
        </div>
      </form>

      <div className="mt-6 rounded-lg border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
        Résultats indicatifs à venir (capacité, mensualité, coût du crédit).
      </div>
    </div>
  )
}


