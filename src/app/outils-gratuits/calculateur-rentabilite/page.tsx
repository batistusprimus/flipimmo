import dynamic from 'next/dynamic'

export const metadata = {
  title: "Calculateur de Rentabilité d'Opération | FlipImmo",
  description: "Estimez votre marge nette prévisionnelle en intégrant tous les coûts.",
}

const Calculator = dynamic(() => import('@/components/Calculator'), { ssr: false })

export default function CalculateurRentabilitePage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <span className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">Outil</span>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Calculateur de Rentabilité</h1>
      <p className="mt-2 max-w-3xl text-slate-700">Ajustez votre capital et estimez la marge théorique. Version simple pour démarrer.</p>
      <div className="mt-8">
        <Calculator />
      </div>
    </div>
  )
}


