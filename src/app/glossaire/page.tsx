export const metadata = {
  title: 'Glossaire du Marchand de Biens | FlipImmo',
  description: "Maîtrisez le jargon : BIC, TVA sur marge, DPU, condition suspensive, etc.",
}

export default function GlossairePage() {
  const items = [
    { t: 'BIC', d: "Bénéfices Industriels et Commerciaux : catégorie fiscale des revenus d'activité commerciale." },
    { t: 'TVA sur marge', d: "Régime où la TVA est calculée uniquement sur la marge réalisée (sous conditions)." },
    { t: 'DPU', d: "Droit de Préemption Urbain : droit d'achat prioritaire de la commune sur certains biens." },
    { t: 'Condition suspensive', d: "Clause d'un compromis d'achat dont dépend la réalisation définitive de la vente." },
  ]
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <span className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">Glossaire</span>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Parlez le Langage de l'Immobilier</h1>
      <p className="mt-2 max-w-3xl text-slate-700">Termes clés et définitions pour échanger avec notaires, agents, banquiers.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((it) => (
          <div key={it.t} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="font-semibold text-slate-900">{it.t}</div>
            <div className="mt-1 text-sm text-slate-700">{it.d}</div>
          </div>
        ))}
      </div>
    </div>
  )
}


