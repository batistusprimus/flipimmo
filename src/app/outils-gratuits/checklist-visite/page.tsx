export const metadata = {
  title: 'Checklist de Visite (PDF) | FlipImmo',
  description: 'Téléchargez la checklist complète pour inspecter un bien sans rien oublier.',
}

export default function ChecklistVisitePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Checklist de Visite</h1>
      <p className="mt-2 text-slate-700">Téléchargez notre checklist complète de 50+ points à vérifier.</p>
      <div className="mt-6">
        <a href="/docs/checklist-visite.pdf" className="rounded-md bg-[#1E3A8A] px-4 py-2 text-sm font-semibold text-white">Télécharger le PDF</a>
      </div>
    </div>
  )
}


