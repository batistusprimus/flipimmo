export const metadata = {
  title: 'Success Stories | FlipImmo',
  description: "Études de cas marché : opérations réelles décryptées, chiffres et enseignements.",
};

export default function SuccessStoriesPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <span className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">Études de cas</span>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Analyse de Marché : Des Opérations d'Achat-Revente Réussies</h1>
      <p className="mt-2 max-w-3xl text-slate-700">Découvrez des études de cas concrètes et chiffrées qui illustrent le potentiel du métier. Nous décryptons des opérations représentatives pour en tirer des enseignements clés.</p>

      {/* Bandeau chiffres clés */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Stat k="+35%" v="Marge brute moyenne (rénovation 2024)" />
        <Stat k="8 mois" v="Durée moyenne d'une opération (T3)" />
        <Stat k="x2.5" v="Levier bancaire moyen sur l'apport" />
      </div>

      {/* Étude de cas 1 */}
      <section className="mt-12 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Étude de Cas 1 : Rénovation d'un Appartement T3 à Nantes</h2>
        <p className="mt-2 text-sm text-slate-700">Analyse d'une opération classique : +16 023€ de marge nette en 5 mois.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <img src="/Visuels/Avant-Apres.png" alt="Avant/Après rénovation" loading="lazy" className="h-auto w-full rounded-md border object-cover" />
          <img src="/Visuels/Avant-Apres2.png" alt="Avant/Après cuisine" loading="lazy" className="h-auto w-full rounded-md border object-cover" />
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-[640px] text-left text-sm">
            <thead className="text-slate-500">
              <tr>
                <th className="py-2 pr-6">Poste</th>
                <th className="py-2 pr-6">Montant</th>
                <th className="py-2">Détails</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="py-2 pr-6 font-medium text-slate-900">Prix d'Achat (FAI)</td><td className="py-2 pr-6">155 000 €</td><td className="py-2">Négocié 8% sous affichage</td></tr>
              <tr><td className="py-2 pr-6">Frais de Notaire</td><td className="py-2 pr-6">4 650 €</td><td className="py-2">Réduits (≈3%)</td></tr>
              <tr><td className="py-2 pr-6">Coût des Travaux</td><td className="py-2 pr-6">22 000 €</td><td className="py-2">Devis artisans</td></tr>
              <tr><td className="py-2 pr-6">Frais Annexes</td><td className="py-2 pr-6">4 500 €</td><td className="py-2">Intérêts, charges, assurance</td></tr>
              <tr className="border-t"><td className="py-2 pr-6 font-medium text-slate-900">Coût Total de Revient</td><td className="py-2 pr-6">186 150 €</td><td className="py-2"></td></tr>
              <tr><td className="py-2 pr-6 font-medium text-slate-900">Prix de Revente</td><td className="py-2 pr-6">205 000 €</td><td className="py-2">Vendu en 3 semaines</td></tr>
              <tr><td className="py-2 pr-6">Marge Brute</td><td className="py-2 pr-6">18 850 €</td><td className="py-2"></td></tr>
              <tr><td className="py-2 pr-6">IS (15%)</td><td className="py-2 pr-6">- 2 827 €</td><td className="py-2"></td></tr>
              <tr className="border-t"><td className="py-2 pr-6 font-semibold text-slate-900">Marge Nette</td><td className="py-2 pr-6 font-semibold text-slate-900">16 023 €</td><td className="py-2">8.6% de rentabilité nette</td></tr>
            </tbody>
          </table>
        </div>
        <ul className="mt-4 list-disc pl-6 text-sm text-slate-700">
          <li>Bien acheter avec décote et connaître le marché local.</li>
          <li>Maîtrise du budget travaux et imprévus (≈10%).</li>
          <li>Prix de revente basé sur comparables pour une vente rapide.</li>
        </ul>
      </section>

      {/* Étude de cas 2 */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Étude de Cas 2 : Division d'une Maison à Toulouse</h2>
        <p className="mt-2 text-sm text-slate-700">Stratégie avancée : +51 085€ de marge nette grâce à la division.</p>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-[640px] text-left text-sm">
            <thead className="text-slate-500">
              <tr>
                <th className="py-2 pr-6">Poste</th>
                <th className="py-2 pr-6">Montant</th>
                <th className="py-2">Détails</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="py-2 pr-6 font-medium text-slate-900">Prix d'Achat (FAI)</td><td className="py-2 pr-6">230 000 €</td><td className="py-2">Vendeurs pressés</td></tr>
              <tr><td className="py-2 pr-6">Frais de Notaire</td><td className="py-2 pr-6">6 900 €</td><td className="py-2"></td></tr>
              <tr><td className="py-2 pr-6">Travaux</td><td className="py-2 pr-6">55 000 €</td><td className="py-2">Comptages, isolation phonique</td></tr>
              <tr><td className="py-2 pr-6">Géomètre & Copro</td><td className="py-2 pr-6">4 000 €</td><td className="py-2"></td></tr>
              <tr><td className="py-2 pr-6">Frais Annexes</td><td className="py-2 pr-6">9 000 €</td><td className="py-2">Portage (12 mois)</td></tr>
              <tr className="border-t"><td className="py-2 pr-6 font-medium text-slate-900">Coût Total de Revient</td><td className="py-2 pr-6">304 900 €</td><td className="py-2"></td></tr>
              <tr><td className="py-2 pr-6 font-medium text-slate-900">Revente (Lot 1)</td><td className="py-2 pr-6">185 000 €</td><td className="py-2"></td></tr>
              <tr><td className="py-2 pr-6 font-medium text-slate-900">Revente (Lot 2)</td><td className="py-2 pr-6">180 000 €</td><td className="py-2"></td></tr>
              <tr className="border-t"><td className="py-2 pr-6 font-medium text-slate-900">Prix de Revente Total</td><td className="py-2 pr-6">365 000 €</td><td className="py-2"></td></tr>
              <tr><td className="py-2 pr-6">Marge Brute</td><td className="py-2 pr-6">60 100 €</td><td className="py-2"></td></tr>
              <tr><td className="py-2 pr-6">IS</td><td className="py-2 pr-6">- 9 015 €</td><td className="py-2"></td></tr>
              <tr className="border-t"><td className="py-2 pr-6 font-semibold text-slate-900">Marge Nette</td><td className="py-2 pr-6 font-semibold text-slate-900">51 085 €</td><td className="py-2">16.7% de rentabilité nette</td></tr>
            </tbody>
          </table>
        </div>
        <ul className="mt-4 list-disc pl-6 text-sm text-slate-700">
          <li>Création de valeur par la division (somme des parties &gt; tout).</li>
          <li>Anticiper les autorisations et la copropriété.</li>
          <li>Opportunité off-market via notaire.</li>
        </ul>
      </section>

      {/* Étude de cas 3 */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Étude de Cas 3 : Premier Achat-Revente à Lille avec un Petit Budget</h2>
        <p className="mt-2 text-sm text-slate-700">Se lancer avec 10 000€ d'apport : démonstration de l'effet de levier.</p>
        <div className="mt-4">
          <img src="/Visuels/ETC3.png" alt="Étude de cas 3 (avant/après)" loading="lazy" className="max-h-80 w-auto rounded-md border object-contain" />
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-[640px] text-left text-sm">
            <thead className="text-slate-500">
              <tr>
                <th className="py-2 pr-6">Poste</th>
                <th className="py-2 pr-6">Montant</th>
                <th className="py-2">Détails</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="py-2 pr-6 font-medium text-slate-900">Prix d'Achat (FAI)</td><td className="py-2 pr-6">70 000 €</td><td className="py-2"></td></tr>
              <tr><td className="py-2 pr-6">Frais de Notaire</td><td className="py-2 pr-6">2 100 €</td><td className="py-2"></td></tr>
              <tr><td className="py-2 pr-6">Travaux</td><td className="py-2 pr-6">12 000 €</td><td className="py-2">Optimisés petits espaces</td></tr>
              <tr><td className="py-2 pr-6">Frais Annexes</td><td className="py-2 pr-6">2 500 €</td><td className="py-2"></td></tr>
              <tr className="border-t"><td className="py-2 pr-6 font-medium text-slate-900">Coût Total de Revient</td><td className="py-2 pr-6">86 600 €</td><td className="py-2"></td></tr>
              <tr><td className="py-2 pr-6 font-medium text-slate-900">Financement Bancaire</td><td className="py-2 pr-6">78 600 €</td><td className="py-2">100% hors apport</td></tr>
              <tr><td className="py-2 pr-6">Apport Personnel</td><td className="py-2 pr-6">8 000 €</td><td className="py-2"></td></tr>
              <tr><td className="py-2 pr-6 font-medium text-slate-900">Prix de Revente</td><td className="py-2 pr-6">98 000 €</td><td className="py-2">Vendu à investisseur</td></tr>
              <tr><td className="py-2 pr-6">Marge Brute</td><td className="py-2 pr-6">11 400 €</td><td className="py-2"></td></tr>
              <tr><td className="py-2 pr-6">IS (15%)</td><td className="py-2 pr-6">- 1 710 €</td><td className="py-2"></td></tr>
              <tr className="border-t"><td className="py-2 pr-6 font-semibold text-slate-900">Marge Nette</td><td className="py-2 pr-6 font-semibold text-slate-900">9 690 €</td><td className="py-2">&gt;120% de ROI sur l'apport</td></tr>
            </tbody>
          </table>
        </div>
        <ul className="mt-4 list-disc pl-6 text-sm text-slate-700">
          <li>Dossier de financement solide et crédible.</li>
          <li>Choisir un actif liquide pour rassurer la banque.</li>
          <li>Illustration de l'effet de levier sur petit apport.</li>
        </ul>
      </section>

      {/* CTA final */}
      <section className="mt-12 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Vous aussi, Écrivez Votre Propre Succès</h2>
        <p className="mt-2 text-sm text-slate-700">Téléchargez la formation gratuite pour comprendre les stratégies analysées ci-dessus, ou parlez à un expert pour évaluer votre projet.</p>
        <div className="mt-4 flex justify-center gap-3">
          <a href="/formation-gratuite" className="rounded-md bg-[#F59E0B] px-4 py-2 text-sm font-semibold text-white">Télécharger la Formation Gratuite</a>
          <a href="/parler-a-un-expert" className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Parler à un Expert</a>
        </div>
      </section>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 text-center shadow-sm">
      <div className="text-2xl font-bold text-slate-900">{k}</div>
      <div className="text-xs text-slate-600">{v}</div>
    </div>
  )
}


