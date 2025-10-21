export const metadata = {
  title: 'Template de Business Plan (PDF) | FlipImmo',
  description: 'Téléchargez la structure attendue par les banques pour votre dossier.',
}

export default function TemplateBusinessPlanPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Template de Business Plan</h1>
      <p className="mt-2 text-slate-700">Modèle prêt à l'emploi : chapitres, attentes et structure de présentation.</p>
      <div className="mt-6">
        <a href="/docs/template-business-plan.pdf" className="rounded-md bg-[#1E3A8A] px-4 py-2 text-sm font-semibold text-white">Télécharger le PDF</a>
      </div>
    </div>
  )
}


