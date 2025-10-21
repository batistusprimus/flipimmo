export const metadata = {
  title: 'Ressources | FlipImmo',
  description: "Toutes les ressources pour comprendre, structurer et lancer votre activité.",
};

export default function RessourcesPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <span className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">Ressources</span>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Toutes les Ressources pour Devenir Marchand de Biens</h1>
      <p className="mt-2 max-w-3xl text-slate-700">Formation, articles, outils, checklists... Tout ce dont vous avez besoin pour comprendre, structurer et lancer votre activité d'achat-revente.</p>

      {/* Formation gratuite */}
      <section className="mt-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Le Point de Départ Incontournable</h2>
        <p className="mt-2 text-sm text-slate-700">Guide PDF 700+ lignes : marché, juridique, fiscal, financement, stratégie, étude de cas.</p>
        <div className="mt-4"><a href="/formation-gratuite" className="rounded-md bg-[#F59E0B] px-4 py-2 text-sm font-semibold text-white">Télécharger la Formation Gratuite</a></div>
      </section>

      {/* Blog */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Le Blog</h2>
        <p className="mt-2 text-sm text-slate-700">Approfondissez avec des articles de fond : fiscalité, financement, stratégies, études de cas.</p>
        <div className="mt-4"><a href="/blog" className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Accéder aux Articles</a></div>
      </section>

      {/* Outils */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Les Outils Gratuits</h2>
        <p className="mt-2 text-sm text-slate-700">Calculateur de rentabilité, simulateur de financement, checklist de visite, template de business plan.</p>
        <div className="mt-4"><a href="/outils-gratuits" className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Découvrir les Outils</a></div>
      </section>

      {/* Glossaire + FAQ */}
      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Glossaire du Marchand de Biens</h3>
          <p className="mt-2 text-sm text-slate-700">Maîtrisez le jargon (BIC, TVA sur marge, DPU, condition suspensive…).</p>
          <div className="mt-4"><a href="/glossaire" className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Consulter le Glossaire</a></div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">FAQ Complète</h3>
          <p className="mt-2 text-sm text-slate-700">Des dizaines de questions-réponses claires et directes pour lever vos doutes.</p>
          <div className="mt-4"><a href="/faq" className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Lire la FAQ</a></div>
        </div>
      </section>

      {/* CTA final */}
      <section className="mt-12 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Prêt à Structurer Votre Projet ?</h2>
        <p className="mt-2 text-sm text-slate-700">Parlez à un expert pour valider la faisabilité et découvrir les prochaines étapes. Gratuit et sans engagement.</p>
        <div className="mt-4"><a href="/parler-a-un-expert" className="rounded-md bg-[#1E3A8A] px-4 py-2 text-sm font-semibold text-white">Parler à un Expert</a></div>
      </section>
    </div>
  );
}


