export const metadata = {
  title: 'Qui Sommes-Nous | FlipImmo',
  description: "Notre mission : rendre le métier accessible avec une information fiable et actionnable.",
};

export default function QuiSommesNousPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <span className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">À propos</span>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Notre Mission : Rendre le Métier de Marchand de Biens Accessible à Tous</h1>
      <p className="mt-2 max-w-3xl text-slate-700">Nous sommes un guide indépendant, fondé par un entrepreneur pour les futurs entrepreneurs. Objectif : vous donner une information fiable, transparente et actionnable pour vous lancer.</p>

      {/* Histoire */}
      <section className="mt-12 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">L'Histoire Derrière le Guide</h2>
        <p className="mt-2 text-sm text-slate-700">FlipImmo.fr est né d'un constat simple : un métier passionnant mais une jungle d'informations contradictoires. Notre réponse : un guide indépendant qui ne vend pas de formation et se concentre sur l'essentiel.</p>
      </section>

      {/* Valeurs */}
      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <Value title="Expertise du Terrain" desc="Contenu ancré dans la réalité des opérations : conseils, stratégies et chiffres validés par l'expérience." />
        <Value title="Transparence" desc="Modèle économique simple et affiché : apporteur d'affaires, service gratuit pour l'utilisateur." />
        <Value title="Indépendance" desc="Sélection objective des partenaires sur des critères de qualité et de résultats." />
      </section>

      {/* Fondateur */}
      <section className="mt-12 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Rencontrez Jean De Villiers</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <img src="/Visuels/JDV.png" alt="Jean De Villiers" loading="lazy" className="h-auto w-full rounded-md border object-cover" />
          </div>
          <div className="md:col-span-2">
            <blockquote className="border-l-2 border-slate-200 pl-4 text-sm text-slate-700">"Pendant 10 ans, j'ai été à votre place. [...] Le succès ne tient pas à la chance, mais à la méthode, la rigueur et la qualité de l'information."</blockquote>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Stat k="12 ans" v="d'expérience en achat-revente" />
              <Stat k="23" v="opérations réalisées" />
              <Stat k="+1.5M€" v="de marge brute générée" />
              <Stat k="Spécialiste" v="rénovation et division urbaine" />
            </ul>
          </div>
        </div>
      </section>

      {/* Engagement qualité */}
      <section className="mt-12 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Notre Promesse : Un Accompagnement de Qualité</h2>
        <ul className="mt-3 grid gap-4 sm:grid-cols-2">
          <li className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700">Contenu fiable et sourcé, mis à jour en continu.</li>
          <li className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700">Partenaires certifiés Qualiopi, sélectionnés pour leur excellence.</li>
          <li className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700">Respect des données, aucune pression commerciale.</li>
          <li className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700">Mise en relation gratuite et sans engagement.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-12 text-center">
        <div className="inline-flex gap-3">
          <a href="/formation-gratuite" className="rounded-md bg-[#F59E0B] px-4 py-2 text-sm font-semibold text-white">Télécharger la Formation Gratuite</a>
          <a href="/parler-a-un-expert" className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Parler à un Expert</a>
        </div>
      </section>
    </div>
  );
}

function Value({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-700">{desc}</div>
    </div>
  )
}
function Stat({ k, v }: { k: string; v: string }) {
  return (
    <li className="rounded-lg border border-slate-200 bg-white p-4 text-center shadow-sm">
      <div className="text-lg font-bold text-slate-900">{k}</div>
      <div className="text-xs text-slate-600">{v}</div>
    </li>
  )
}


