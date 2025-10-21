export const metadata = {
  title: 'FAQ Complète | FlipImmo',
  description: 'Questions fréquentes sur le métier de marchand de biens.'
}

export default function FAQPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <header>
        <div className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">FAQ</div>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Toutes Vos Questions</h1>
        <p className="mt-2 max-w-3xl text-slate-700">Nous avons compilé les interrogations les plus fréquentes pour vous apporter des réponses claires, directes et sans jargon.</p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <Category title="Le Métier">
          <QA q="Qu’est-ce qu’un marchand de biens, concrètement ?" a="Professionnel qui achète, crée de la valeur (rénovation, division…) et revend rapidement pour réaliser une marge. À ne pas confondre avec agent immobilier ou investisseur locatif." />
          <QA q="Combien peut-on espérer gagner ?" a="Pas de salaire fixe : la rémunération est la marge. Une première opération peut viser 15 000€ à 30 000€ nets; les profils expérimentés enchaînent plusieurs opérations par an." />
          <QA q="Faut-il être un expert du bâtiment ?" a="Non. L’essentiel est d’estimer et piloter les travaux, pas de les réaliser soi-même." />
          <QA q="Est-ce risqué ?" a="Risque entrepreneurial maîtrisable par la méthode : bien acheter, chiffrer précisément, connaître le marché, sécuriser la sortie." />
        </Category>
        <Category title="La Formation">
          <QA q="Pourquoi se former ?" a="Pour éviter les erreurs coûteuses (fiscalité, urbanisme, travaux). La formation accélère l’apprentissage et crédibilise votre dossier bancaire." />
          <QA q="Combien ça coûte ?" a="Entre 3 000€ et 10 000€ pour une formation de qualité, souvent avec accompagnement et outils." />
          <QA q="En ligne vs présentiel ?" a="L’important est l’accompagnement (coaching, relectures). Les meilleures formations en ligne offrent flexibilité et suivi durable." />
        </Category>
        <Category title="Financement">
          <QA q="Quel apport personnel ?" a="Souvent 20 000€ à 30 000€ pour être crédible. Des cas à 10 000€ existent si la rentabilité est forte et le dossier solide." />
          <QA q="Sans apport ?" a="Très difficile. Les banques financent rarement 110% en marchand de biens." />
          <QA q="Quel type de prêt ?" a="Crédit professionnel court terme (≈24 mois), différent d’un prêt RP. La banque finance achat et parfois travaux." />
        </Category>
        <Category title="Juridique & Fiscal">
          <QA q="Quel statut pour commencer ?" a="SAS ou SARL pour protéger le patrimoine et bénéficier de l’IS. Le choix dépend de votre situation." />
          <QA q="TVA sur marge ?" a="TVA due uniquement sur la marge (et non le prix total) dans certains cas, améliorant la rentabilité. Mécanisme à bien maîtriser." />
        </Category>
        <Category title="FlipImmo.fr">
          <QA q="Qui êtes-vous ?" a="Un guide indépendant et un apporteur d’affaires. Nous fournissons des ressources gratuites et mettons en relation avec des organismes certifiés." />
          <QA q="Votre modèle économique ?" a="Rémunération par nos partenaires pour chaque mise en relation qualifiée. Service 100% gratuit pour vous." />
          <QA q="Êtes-vous un organisme de formation ?" a="Non. Notre indépendance garantit une orientation objective vers les meilleurs partenaires pour votre profil." />
        </Category>
      </section>

      <section className="mt-14 border-t border-slate-200 pt-10">
        <h2 className="text-2xl font-bold text-slate-900">Vous ne Trouvez Pas Votre Réponse ?</h2>
        <p className="mt-2 max-w-3xl text-slate-700">Le meilleur moyen d'obtenir une réponse personnalisée est de parler à un professionnel.</p>
        <div className="mt-4">
          <a href="/parler-a-un-expert" className="rounded-md bg-[#1E3A8A] px-4 py-2 text-sm font-semibold text-white">Poser ma Question à un Expert</a>
        </div>
      </section>
    </div>
  )
}

function Category({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </div>
  )
}
function QA({ q, a }: { q: string; a: string }) {
  return (
    <div>
      <div className="font-medium text-slate-900">{q}</div>
      <div className="text-sm text-slate-700">{a}</div>
    </div>
  )
}


