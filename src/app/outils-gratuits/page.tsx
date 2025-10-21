export const metadata = {
  title: 'Outils Gratuits | FlipImmo',
  description: "Simulateurs et ressources pour fiabiliser vos projets d'achat-revente.",
};

export default function OutilsGratuitsPage() {
  return (
    <div className="relative mx-auto w-full max-w-7xl bg-gradient-to-b from-slate-50 to-white px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[#1E3A8A] ring-1 ring-[#1E3A8A]/20 shadow-sm backdrop-blur transition hover:shadow">Outils</span>
      <h1 className="mt-3 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl">Les Outils Indispensables du Marchand de Biens</h1>
      <p className="mt-2 max-w-3xl text-slate-600 sm:text-lg">Passez de la théorie à la pratique avec nos simulateurs et ressources pour analyser, chiffrer et structurer vos projets comme un professionnel.</p>

      {/* Calculateur de rentabilité */}
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="order-2 rounded-2xl bg-white/90 p-6 ring-1 ring-slate-200 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md md:order-1">
        <h2 className="text-2xl font-semibold text-slate-900">Calculateur de Rentabilité d'Opération</h2>
        <p className="mt-2 text-sm text-slate-600">Intègre notaire, travaux, portage, impôts… Calcule marge brute, IS et marge nette.</p>
        <div className="mt-4">
          <a href="/outils-gratuits/calculateur-rentabilite" className="inline-flex items-center gap-2 rounded-lg bg-[#1E3A8A] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] focus-visible:ring-offset-2">Utiliser le Calculateur de Rentabilité →</a>
        </div>
        </div>
        <div className="order-1 flex items-center justify-center overflow-hidden rounded-2xl bg-white/90 p-3 ring-1 ring-slate-200 shadow-sm md:order-2">
          <img src="/Visuels/Calculateur.png" alt="Aperçu du calculateur" loading="lazy" className="h-auto w-full max-h-64 rounded-md object-contain transition-transform duration-500 hover:scale-105" />
        </div>
      </section>

      {/* Simulateur de financement */}
      <section className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white/90 p-6 ring-1 ring-slate-200 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
        <h2 className="text-2xl font-semibold text-slate-900">Simulateur de Financement Professionnel</h2>
        <p className="mt-2 text-sm text-slate-600">Estime capacité d'emprunt, mensualité et coût du crédit pro adapté au marchand de biens.</p>
        <div className="mt-4">
          <a href="/outils-gratuits/simulateur-financement" className="inline-flex items-center gap-2 rounded-lg bg-[#1E3A8A] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] focus-visible:ring-offset-2">Lancer le Simulateur de Financement →</a>
        </div>
        </div>
        <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-white/90 p-3 ring-1 ring-slate-200 shadow-sm">
          <img src="/Visuels/Banque.png" alt="Aperçu du simulateur de financement" loading="lazy" className="h-auto w-full max-h-64 rounded-md object-contain transition-transform duration-500 hover:scale-105" />
        </div>
      </section>

      {/* Ressources à télécharger */}
      <section className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white/90 p-6 ring-1 ring-slate-200 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
          <h3 className="text-xl font-semibold text-slate-900">Checklist de Visite (PDF)</h3>
          <p className="mt-2 text-sm text-slate-600">Plus de 50 points à vérifier pour une visite structurée et sans oubli.</p>
          <div className="mt-4"><a href="/outils-gratuits/checklist-visite" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50">Télécharger la Checklist ↗</a></div>
        </div>
        <div className="rounded-2xl bg-white/90 p-6 ring-1 ring-slate-200 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
          <h3 className="text-xl font-semibold text-slate-900">Template de Business Plan (PDF)</h3>
          <p className="mt-2 text-sm text-slate-600">Structure attendue par les banques : projet, marché, budget, plan de financement.</p>
          <div className="mt-4"><a href="/outils-gratuits/template-business-plan" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50">Télécharger le Template ↗</a></div>
      </div>
      </section>

      {/* CTA final */}
      <section className="mt-12 rounded-2xl bg-gradient-to-r from-[#1E3A8A] to-[#1E3A8A]/80 p-8 text-center shadow-md">
        <h2 className="text-2xl font-semibold text-white">Vous Voulez Aller Plus Loin ?</h2>
        <p className="mt-2 text-sm text-white/90">Parlez à un expert pour être accompagné dans l'utilisation de ces outils et la structuration de votre première opération.</p>
        <div className="mt-4"><a href="/parler-a-un-expert" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#1E3A8A] shadow-sm transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E3A8A]">Parler à un Expert →</a></div>
      </section>
    </div>
  );
}


