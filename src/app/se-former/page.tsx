export const metadata = {
  title: 'Se Former | FlipImmo',
  description: "Bien choisir sa formation : critères, partenaires et mise en relation.",
};

export default function SeFormerPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <span className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">Formation</span>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Comment Choisir la Bonne Formation</h1>
      <p className="mt-2 max-w-3xl text-slate-700">Le succès n'est pas une question de chance, mais de méthode. Voici notre grille de lecture pour sélectionner un organisme sérieux.</p>

      {/* Pourquoi se former */}
      <section className="mt-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Se Lancer Sans Formation : 4 Risques Coûteux</h2>
        <ul className="mt-3 grid gap-4 sm:grid-cols-2">
          <li className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700"><b>Dépassement de budget travaux</b> — Une erreur de 20% sur 50 000€ = 10 000€ de perte.</li>
          <li className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700"><b>Redressement fiscal</b> — Mauvaise maîtrise de la TVA/IS = 10 000€ de trou possible.</li>
          <li className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700"><b>Mauvais montage juridique</b> — Mauvaise structure = fiscalité défavorable et risques.</li>
          <li className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700"><b>Refus de prêt</b> — Dossier bancal = opportunités manquées.</li>
        </ul>
      </section>

      {/* 7 critères */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">7 Critères pour Choisir une Bonne Formation</h2>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <Critere n="1" title="Le Formateur" good="En activité, opérations vérifiables" bad="Théoricien ou influenceur" />
          <Critere n="2" title="Le Contenu" good="Programme complet (juridique, fiscal, travaux, sourcing, revente)" bad="Survole les sujets complexes" />
          <Critere n="3" title="Certification" good="Qualiopi" bad="Non certifié" />
          <Critere n="4" title="Accompagnement" good="Coaching individuel, relectures" bad="100% en ligne sans interaction" />
          <Critere n="5" title="Communauté" good="Active et utile" bad="Absente" />
          <Critere n="6" title="Transparence" good="Études de cas, CGV claires" bad="Promesses irréalistes" />
          <Critere n="7" title="Financement" good="CPF possible" bad="Paiement unique uniquement" />
        </div>
      </section>

      {/* Partenaires (cartes génériques) */}
      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <PartnerCard name="Le Cercle des Marchands" points={["Formateurs en activité","Coaching individuel","Communauté 500+","Éligible CPF"]} />
        <PartnerCard name="Académie Achat-Revente" points={["Spécialiste rénovation","Suivi 12 mois","Études de cas","Qualiopi"]} />
        <PartnerCard name="Institut du Marchand de Biens" points={["Division & immeubles","Hotline experts","Ateliers pratiques","CPF"]} />
      </section>

      {/* Nos partenaires certifiés */}
      <section className="mt-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Nos partenaires certifiés</h2>
        <div className="mt-4 flex flex-wrap items-center gap-6">
          <img src="/LogosPartenaires/la_relve_incubateur_mdb_cover.jpeg" alt="La Relève (Incubateur MDB)" className="h-8 w-auto" />
          <img src="/LogosPartenaires/65d5b161937acbd76be801bc_Logo Greenbull Campus.webp" alt="Greenbull Campus" className="h-8 w-auto" />
          <img src="/LogosPartenaires/B3-35b772eb-640w.png" alt="B3" className="h-8 w-auto" />
          <img src="/LogosPartenaires/Logo-Axio-1.png" alt="Axio" className="h-8 w-auto" />
        </div>
        <p className="mt-3 text-xs text-slate-500">Partenaires sélectionnés, certifiés Qualiopi.</p>
      </section>

      {/* Transparence + CTA */}
      <section className="mt-12 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Transparence</h2>
        <p className="mt-2 text-sm text-slate-700">Lorsque vous demandez une mise en relation, nous transmettons votre projet à un partenaire adapté. Si vous vous formez avec lui, nous percevons une commission. Ce modèle finance la plateforme tout en gardant le service gratuit pour vous.</p>
        <div className="mt-4"><a href="/parler-a-un-expert" className="rounded-md bg-[#1E3A8A] px-4 py-2 text-sm font-semibold text-white">Parler à un Expert pour Trouver ma Formation</a></div>
      </section>
    </div>
  );
}

function Critere({ n, title, good, bad }: { n: string; title: string; good: string; bad: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-xs font-medium text-[#1E3A8A]">Critère {n}</div>
      <div className="mt-1 font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-700"><b>✅ À rechercher :</b> {good}</div>
      <div className="text-sm text-slate-700"><b>❌ À éviter :</b> {bad}</div>
    </div>
  )
}
function PartnerCard({ name, points }: { name: string; points: string[] }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-lg font-semibold text-slate-900">{name}</div>
      <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
        {points.map((p) => (<li key={p}>{p}</li>))}
      </ul>
      <div className="mt-4"><a href="/parler-a-un-expert" className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700">Découvrir cet Organisme</a></div>
    </div>
  )
}


