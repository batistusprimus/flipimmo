export const metadata = {
  title: 'Formation Gratuite | FlipImmo',
  description: "Téléchargez le guide complet 2025 pour devenir marchand de biens (PDF).",
};

export default function FormationGratuitePage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      {/* Hero */}
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">Formation gratuite</span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">La Formation Gratuite pour Devenir Marchand de Biens en 2025</h1>
        <p className="mt-3 max-w-3xl text-slate-700">Un guide complet de 742 lignes avec des analyses de marché, des cadres juridiques, des stratégies éprouvées et des études de cas réelles. Tout ce dont vous avez besoin pour comprendre le métier et structurer votre projet.</p>
        <div className="mt-6">
          <a href="#telechargement" className="inline-flex items-center justify-center rounded-md bg-[#F59E0B] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95">Télécharger Maintenant (100% Gratuit)</a>
        </div>
      </div>

      {/* Ce que vous allez apprendre */}
      <section className="mt-14 border-t border-slate-200 pt-10">
        <h2 className="text-2xl font-bold text-slate-900">6 Modules pour Maîtriser les Fondamentaux du Métier</h2>
        <p className="mt-2 max-w-3xl text-slate-700">Ce guide n'est pas un simple aperçu. C'est un véritable cours d'introduction qui plonge en profondeur dans les aspects les plus importants du métier.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="font-semibold text-slate-900">Module 1 — Le Contexte et les Opportunités en 2025</div>
            <p className="mt-1 text-sm text-slate-700">Différence entre marchand de biens et investisseur locatif. Pourquoi la période actuelle est propice.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="font-semibold text-slate-900">Module 2 — Cadre Juridique et Fiscal</div>
            <p className="mt-1 text-sm text-slate-700">SAS vs SARL, TVA sur marge, frais de notaire réduits.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="font-semibold text-slate-900">Module 3 — Financement</div>
            <p className="mt-1 text-sm text-slate-700">Monter un dossier solide, attentes des banques, effet de levier.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="font-semibold text-slate-900">Module 4 — Analyse des Marchés Régionaux</div>
            <p className="mt-1 text-sm text-slate-700">5 régions analysées avec prix au m² actualisés et stratégies locales.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="font-semibold text-slate-900">Module 5 — Les 7 Étapes Clés</div>
            <p className="mt-1 text-sm text-slate-700">Méthodologie pas à pas : sourcing, négo, financement, travaux, revente.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="font-semibold text-slate-900">Module 6 — Étude de Cas Transparente</div>
            <p className="mt-1 text-sm text-slate-700">Analyse d'une opération à 199 600€ de marge : chiffres, risques, clés.</p>
          </div>
        </div>
      </section>

      {/* Pourquoi cette formation est différente */}
      <section className="mt-14 border-t border-slate-200 pt-10">
        <h2 className="text-2xl font-bold text-slate-900">Une Approche Concrète, Transparente et Sans Blabla</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="font-semibold text-slate-900">Des Chiffres Réels</div>
            <p className="mt-1 text-sm text-slate-700">Basé sur des données 2025 sourcées. Des informations factuelles pour construire votre jugement.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="font-semibold text-slate-900">Études de Cas Transparentes</div>
            <p className="mt-1 text-sm text-slate-700">Les succès comme les échecs (mérule, préemption, litiges) pour préparer la réalité du terrain.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="font-semibold text-slate-900">Contenu Actionnable</div>
            <p className="mt-1 text-sm text-slate-700">Des actions concrètes à mettre en place. Objectif : passer à l'exécution.</p>
          </div>
        </div>
      </section>

      {/* Formulaire de téléchargement */}
      <section id="telechargement" className="mt-14 border-t border-slate-200 pt-10">
        <h2 className="text-2xl font-bold text-slate-900">Recevez Votre Accès Instantané à la Formation</h2>
        <p className="mt-2 max-w-3xl text-slate-700">Entrez simplement votre prénom et votre adresse email. Le guide PDF vous sera envoyé immédiatement.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <SimpleDownloadForm />
            <p className="mt-3 text-xs text-slate-500">100% gratuit. En téléchargeant ce guide, vous acceptez de recevoir nos conseils par email. Vous pouvez vous désinscrire à tout moment.</p>
          </div>
          <div className="hidden items-center justify-center rounded-lg border border-slate-200 bg-white p-3 md:flex">
            <img src="/Visuels/Formation%20gratuite.png" alt="Couverture du guide PDF" loading="lazy" className="h-auto w-full max-h-80 rounded-md object-contain" />
          </div>
        </div>
      </section>

      {/* Et après ? */}
      <section className="mt-14 border-t border-slate-200 pt-10">
        <h2 className="text-2xl font-bold text-slate-900">Vous Souhaitez Aller Plus Loin et Passer à l'Action ?</h2>
        <p className="mt-2 max-w-3xl text-slate-700">Ce guide vous donnera des bases solides. Une fois lu, si vous souhaitez être accompagné par un expert pour structurer votre projet, nous pouvons vous aider.</p>
        <div className="mt-6">
          <a href="/parler-a-un-expert" className="inline-flex items-center justify-center rounded-md bg-[#1E3A8A] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110">Parler à un Expert</a>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="mt-14 border-t border-slate-200 pt-10">
        <h2 className="text-2xl font-bold text-slate-900">Vos Questions sur la Formation Gratuite</h2>
        <div className="mt-6 space-y-4">
          <FaqItem q="C'est vraiment 100% gratuit ?" a="Oui. Aucun frais caché. Nous vous offrons ce guide complet en échange de votre adresse email." />
          <FaqItem q="Vais-je recevoir du spam ?" a="Non. Vous recevrez le guide, puis quelques emails de suivi utiles. Désinscription en 1 clic." />
          <FaqItem q="Que contient exactement la formation ?" a="Un document PDF de plus de 700 lignes, structuré en 6 modules couvrant marché, juridique, fiscal, financement, stratégie et étude de cas." />
          <FaqItem q="Dois-je avoir des connaissances préalables ?" a="Non. Le guide est conçu pour débuter, tout en restant utile si vous avez déjà une première expérience." />
          <FaqItem q="Que se passe-t-il après le téléchargement ?" a="Vous recevez le guide immédiatement par email. Vous pouvez ensuite demander à parler à un expert si vous souhaitez un accompagnement." />
        </div>
      </section>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="font-medium text-slate-900">{q}</div>
      <div className="mt-1 text-sm text-slate-700">{a}</div>
    </div>
  )
}

function SimpleDownloadForm() {
  return (
    <form onSubmit={(e) => { e.preventDefault(); window.location.href = '/merci' }} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700">Prénom</label>
        <input required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Adresse email</label>
        <input required type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
      </div>
      <button type="submit" className="btn-primary inline-flex items-center justify-center rounded-md bg-[#F59E0B] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-95">Recevoir la Formation Gratuitement</button>
    </form>
  )
}


