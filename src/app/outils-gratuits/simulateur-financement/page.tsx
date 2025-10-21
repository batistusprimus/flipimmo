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

      <SimulatorForm />

      <div className="mt-6 rounded-lg border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
        Résultats indicatifs à venir (capacité, mensualité, coût du crédit).
      </div>
    </div>
  )
}
import SimulatorForm from '@/components/SimulatorForm'


