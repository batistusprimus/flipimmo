import Script from "next/script";

import Calculator from "@/components/Calculator";
import FAQ from "@/components/FAQ";
import SimpleDownloadForm from "@/components/SimpleDownloadForm";

export default function Home() {
  return (
    <div>
      <Script id="meta-viewcontent" strategy="afterInteractive">{`fbq('track', 'ViewContent');`}</Script>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1E3A8A]/5 to-transparent">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-8rem] h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-[#1E3A8A]/10 blur-3xl" />
          <svg className="absolute -bottom-10 left-1/2 -z-10 -translate-x-1/2" width="1200" height="240" viewBox="0 0 1200 240" fill="none" aria-hidden>
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(30,58,138,0.08)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="1200" height="240" fill="url(#grid)" />
          </svg>
        </div>
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">Guide 100% gratuit • Sans engagement</span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-[#1E3A8A] to-[#F59E0B] bg-clip-text text-transparent">Devenez Marchand de Biens : Le Guide Complet pour Réussir Votre Première Opération</h1>
              <p className="mt-4 text-slate-600">Formation gratuite complète, outils professionnels et mise en relation avec des experts certifiés. Nous vous accompagnons de A à Z dans la concrétisation de votre projet immobilier.</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#formulaire" className="inline-flex items-center justify-center rounded-md bg-[#F59E0B] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]">
                  Télécharger la Formation Gratuite
                </a>
                <a href="/parler-a-un-expert" className="inline-flex items-center justify-center rounded-md border border-[#1E3A8A] bg-white px-5 py-3 text-sm font-semibold text-[#1E3A8A] shadow-sm transition hover:bg-[#1E3A8A]/5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A]">
                  Parler à un Expert
                </a>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#1E3A8A]/10 px-3 py-1 text-xs font-medium text-[#1E3A8A]">⭐ 500+ accompagnés • Note 4.8/5</span>
              </div>
              <ul className="mt-6 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Données sécurisées</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Conforme RGPD</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Information objective</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Désinscription en un clic</li>
              </ul>
            </div>
            <div className="relative hidden md:block">
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-xl ring-1 ring-slate-200/60 backdrop-blur">
                <div className="text-sm font-medium text-slate-900">Aperçu du calculateur</div>
                <div className="mt-4">
                  <Calculator />
                </div>
                <div className="mt-3 text-xs text-slate-500">Hypothèse: 20% du capital investi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos partenaires certifiés */}
      <section className="bg-white border-t border-slate-200">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="sr-only">Nos partenaires certifiés</h2>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">Nos partenaires certifiés</div>
            <div className="mt-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-center gap-8">
                <img src="/LogosPartenaires/la_relve_incubateur_mdb_cover.jpeg" alt="La Relève (Incubateur MDB)" loading="lazy" className="h-8 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition" />
                <img src="/LogosPartenaires/65d5b161937acbd76be801bc_Logo Greenbull Campus.webp" alt="Greenbull Campus" loading="lazy" className="h-8 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition" />
                <img src="/LogosPartenaires/B3-35b772eb-640w.png" alt="B3" loading="lazy" className="h-8 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition" />
                <img src="/LogosPartenaires/Logo-Axio-1.png" alt="Axio" loading="lazy" className="h-8 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Le Problème (Identification) */}
      <section className="relative bg-white overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-[-7rem] top-[-7rem] h-80 w-80 rounded-full bg-[#1E3A8A]/10 blur-3xl" />
          <div className="absolute left-[-9rem] bottom-[-9rem] h-80 w-80 rounded-full bg-[#F59E0B]/10 blur-3xl" />
        </div>
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">Vous Rêvez de Liberté Financière grâce à l'Immobilier ?</h2>
          <p className="mt-3 text-slate-600">Peut-être vous reconnaissez-vous dans l'une de ces situations :</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { t: 'La frustration du salariat', p: "Votre carrière est stable, mais vous ressentez un manque de sens et un plafond de verre. Vous aspirez à plus d'autonomie et à être le seul maître de vos revenus." },
              { t: "L'envie d'entreprendre", p: "Vous avez l'âme d'un entrepreneur et le secteur de l'immobilier vous attire, mais la complexité du métier et les risques financiers vous freinent." },
              { t: 'Le besoin de concret', p: 'Vous cherchez un projet tangible, où vous pouvez créer de la valeur, transformer le réel et voir le fruit de vos efforts de manière concrète et rapide.' }
            ].map((b) => (
              <div key={b.t} className="rounded-xl border border-slate-200 bg-white/90 p-6 shadow-sm ring-1 ring-slate-200/60 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <div className="text-sm font-semibold text-[#1E3A8A]">{b.t}</div>
                <div className="mt-2 text-sm text-slate-700">{b.p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storytelling du Fondateur */}
      <section className="relative bg-white overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-6rem] top-[-6rem] h-72 w-72 rounded-full bg-[#1E3A8A]/10 blur-3xl" />
          <div className="absolute right-[-8rem] bottom-[-8rem] h-72 w-72 rounded-full bg-[#F59E0B]/10 blur-3xl" />
        </div>
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">Fondateur</div>
          <h2 className="mt-3 text-2xl font-bold text-slate-900">Pourquoi J'ai Créé FlipImmo</h2>
          <blockquote className="mt-4 relative overflow-hidden rounded-xl border border-slate-200 bg-white/80 p-6 text-sm text-slate-700 backdrop-blur ring-1 ring-slate-200/60 border-l-4 border-l-[#1E3A8A]">
            <div className="pointer-events-none absolute -top-2 -left-1 text-6xl leading-none text-[#1E3A8A]/10">“</div>
            <p>"Bonjour, je suis Jean De Villiers, le fondateur de FlipImmo.fr.</p>
            <p className="mt-3">Après plus de dix ans passés à réaliser des opérations d'achat-revente, j'ai constaté deux choses. La première, c'est que ce métier est l'un des leviers les plus puissants pour atteindre l'indépendance financière. La seconde, c'est que trop de personnes s'y lancent sans préparation, attirées par des promesses irréalistes, et y perdent leurs économies.</p>
            <p className="mt-3">J'ai créé FlipImmo pour une raison simple : offrir une source d'information fiable, transparente et indépendante. Mon objectif n'est pas de vous vendre une formation miracle, mais de vous transmettre une vision réaliste et entrepreneuriale du métier. Je veux vous donner les clés pour que vous puissiez prendre la meilleure décision pour VOUS, en toute connaissance de cause.</p>
            <p className="mt-3">Notre mission est de vous éduquer, de vous outiller et, si vous le souhaitez, de vous orienter vers des partenaires de formation dont nous avons validé le sérieux et la qualité.</p>
            <p className="mt-3">Bienvenue dans l'immobilier entrepreneurial."</p>
          </blockquote>
        </div>
      </section>

      {/* Transparence */}
      <section className="relative bg-slate-50 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-[-6rem] top-[-6rem] h-72 w-72 rounded-full bg-[#1E3A8A]/10 blur-3xl" />
          <div className="absolute left-[-8rem] bottom-[-8rem] h-72 w-72 rounded-full bg-[#F59E0B]/10 blur-3xl" />
        </div>
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">Transparence</div>
          <h2 className="mt-3 text-2xl font-bold text-slate-900">Notre Mission : Vous Orienter vers la Meilleure Formation, en Toute Transparence</h2>
          <p className="mt-3 text-sm text-slate-700">FlipImmo.fr n'est pas un organisme de formation. Nous sommes un guide indépendant et un apporteur d'affaires. Notre modèle économique est simple et transparent : nous vous fournissons gratuitement du contenu et des outils de la plus haute qualité. Si vous décidez de passer à l'étape supérieure et de parler à un expert, nous vous mettons en relation avec l'un de nos organismes de formation partenaires, certifiés pour leur excellence. Si cette mise en relation aboutit à une inscription, nous percevons une commission de la part de ce partenaire. Ce modèle nous permet de garder notre service 100% gratuit pour vous, tout en vous garantissant l'accès aux meilleurs acteurs du marché.</p>
        </div>
      </section>

      {/* Ressources Gratuites */}
      <section className="relative bg-white overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-[-7rem] top-[-7rem] h-72 w-72 rounded-full bg-[#1E3A8A]/10 blur-3xl" />
          <div className="absolute left-[-9rem] bottom-[-9rem] h-72 w-72 rounded-full bg-[#F59E0B]/10 blur-3xl" />
        </div>
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">Ressources</div>
          <h2 className="mt-3 text-2xl font-bold text-slate-900">Explorez Toutes Nos Ressources pour Vous Lancer</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#1E3A8A]"><span>📰</span>Le Blog</div>
              <div className="mt-2 text-sm text-slate-700">Stratégie, fiscalité, financement... Explorez des articles détaillés pour maîtriser chaque aspect du métier.</div>
              <div className="mt-4"><a href="/blog" className="inline-flex items-center justify-center rounded-md border border-[#1E3A8A] bg-white px-4 py-2 text-xs font-semibold text-[#1E3A8A] shadow-sm transition hover:bg-[#1E3A8A]/5">Consulter le Blog</a></div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#1E3A8A]"><span>🧰</span>Les Outils</div>
              <div className="mt-2 text-sm text-slate-700">Utilisez nos calculateurs, simulateurs de financement et checklists pour structurer votre projet.</div>
              <div className="mt-4"><a href="/outils-gratuits" className="inline-flex items-center justify-center rounded-md border border-[#1E3A8A] bg-white px-4 py-2 text-xs font-semibold text-[#1E3A8A] shadow-sm transition hover:bg-[#1E3A8A]/5">Accéder aux Outils</a></div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#1E3A8A]"><span>❓</span>La FAQ</div>
              <div className="mt-2 text-sm text-slate-700">Nous répondons aux questions les plus fréquentes pour lever les freins rapidement.</div>
              <div className="mt-4"><a href="/faq" className="inline-flex items-center justify-center rounded-md border border-[#1E3A8A] bg-white px-4 py-2 text-xs font-semibold text-[#1E3A8A] shadow-sm transition hover:bg-[#1E3A8A]/5">Lire la FAQ</a></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1E3A8A]/5 to-transparent">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">Prêt à Passer à l'Action ?</h2>
          <p className="mt-2 text-slate-600">Chaque grand projet commence par une première étape. La vôtre est à portée de clic.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 justify-center md:justify-start">
            <a href="#formulaire" className="inline-flex items-center justify-center rounded-md bg-[#F59E0B] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]">Télécharger la Formation Gratuite
              <svg aria-hidden viewBox="0 0 20 20" className="ml-2 h-4 w-4"><path fill="currentColor" d="M12.293 3.293a1 1 0 0 1 1.414 0l4 4A1 1 0 0 1 17 9h-3v6a1 1 0 1 1-2 0V9H9a1 1 0 0 1-.707-1.707l4-4Z"/></svg>
            </a>
            <a href="/parler-a-un-expert" className="inline-flex items-center justify-center rounded-md border border-[#1E3A8A] bg-white px-5 py-3 text-sm font-semibold text-[#1E3A8A] shadow-sm transition hover:bg-[#1E3A8A]/5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A]">Parler à un Expert
              <svg aria-hidden viewBox="0 0 20 20" className="ml-2 h-4 w-4"><path fill="currentColor" d="M7 10a1 1 0 0 1 1-1h5.586l-1.293-1.293A1 1 0 0 1 13.707 6.293l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 12.293 12.293L13.586 11H8a1 1 0 0 1-1-1Z"/></svg>
            </a>
          </div>
        </div>
      </section>
      <section id="formulaire" className="relative bg-slate-50 py-14 md:py-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-[-6rem] top-[-6rem] h-72 w-72 rounded-full bg-[#1E3A8A]/10 blur-3xl" />
          <div className="absolute left-[-8rem] bottom-[-8rem] h-72 w-72 rounded-full bg-[#F59E0B]/10 blur-3xl" />
        </div>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="badge shadow-sm ring-1 ring-slate-200/60">Gratuit • Conforme RGPD</div>
          <h2 className="mt-3 text-2xl font-bold text-slate-900">Commencez par les Fondamentaux : Téléchargez notre Guide Complet (Gratuit)</h2>
          <p className="mt-2 text-slate-600">Répondez à quelques questions clés (prénom, email, téléphone, code postal, capital, situation, expérience, délai et motivation). Vous recevrez le guide PDF immédiatement après l'envoi.</p>

          <div className="mt-8 grid items-start gap-8 md:grid-cols-3">
            <div className="md:order-2">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Au programme du guide</div>
                <ul className="mt-4 grid gap-3 text-sm text-slate-700">
                  <li className="flex items-start gap-3"><span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span><span><span className="font-medium">Module 1 :</span> Comprendre le Marché de 2025</span></li>
                  <li className="flex items-start gap-3"><span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span><span><span className="font-medium">Module 2 :</span> Maîtriser le Cadre Juridique et Fiscal</span></li>
                  <li className="flex items-start gap-3"><span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span><span><span className="font-medium">Module 3 :</span> Structurer le Financement de vos Opérations</span></li>
                  <li className="flex items-start gap-3"><span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span><span><span className="font-medium">Module 4 :</span> Analyser les Marchés Régionaux (5 régions à la loupe)</span></li>
                  <li className="flex items-start gap-3"><span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span><span><span className="font-medium">Module 5 :</span> Les 7 Étapes Clés d'une Opération Réussie</span></li>
                  <li className="flex items-start gap-3"><span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span><span><span className="font-medium">Module 6 :</span> Étude de Cas Concrète (Marge de 199 600€)</span></li>
                </ul>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm"><span>🔒</span><span>Données sécurisées</span></div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm"><span>📩</span><span>Désinscription à tout moment</span></div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm"><span>⏱️</span><span>5 minutes</span></div>
              </div>
            </div>

            <div className="card relative overflow-hidden p-6 md:order-1 md:col-span-2 shadow-md ring-1 ring-[#1E3A8A]/10 lg:p-8 bg-white/90 backdrop-blur">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500" aria-hidden />
              <SimpleDownloadForm />
              <p className="mt-3 text-xs text-slate-500">Vos données sont utilisées uniquement pour vous envoyer le guide et l'évaluation demandés. Elles ne sont jamais transmises à des tiers.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Études de Cas */}
      <section id="etudes-de-cas" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">Études de Cas</div>
        <h2 className="mt-3 text-2xl font-bold text-slate-900">Des Parcours Inspirants, des Résultats Concrets</h2>
        <p className="mt-2 text-slate-600">Le métier de marchand de biens est accessible à ceux qui se forment et appliquent une méthode rigoureuse. Voici des stratégies gagnantes sur le marché actuel.</p>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
            { title: "Rénovation d'un T3 à Nantes : +13 700€ de Marge Nette", resume: "Analyse d'une opération classique avec maîtrise du budget travaux et revente rapide (5 mois)." },
            { title: "Division d'une Maison à Toulouse : +54 000€ de Marge Nette", resume: "Décryptage d'une division parcellaire pour maximiser la rentabilité et gérer les défis administratifs." },
            { title: "Premier Achat-Revente à Lille avec 10 000€ d'Apport", resume: "Preuve qu'on peut se lancer avec un capital modeste : montage financier et effet de levier." }
          ].map((c) => (
            <div key={c.title} className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-md hover:ring-[#1E3A8A]/20">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500" aria-hidden />
              <div className="text-sm font-semibold text-[#1E3A8A]">{c.title}</div>
              <div className="mt-2 text-sm text-slate-700">{c.resume}</div>
              <div className="mt-4">
                <a href="/success-stories" className="inline-flex items-center justify-center rounded-md border border-[#1E3A8A] bg-white px-4 py-2 text-xs font-semibold text-[#1E3A8A] shadow-sm transition hover:bg-[#1E3A8A]/5 group-hover:shadow-md">Lire l'analyse complète
                  <svg aria-hidden viewBox="0 0 20 20" className="ml-2 h-4 w-4"><path fill="currentColor" d="M7 10a1 1 0 0 1 1-1h5.586l-1.293-1.293A1 1 0 0 1 13.707 6.293l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 12.293 12.293L13.586 11H8a1 1 0 0 1-1-1Z"/></svg>
                </a>
                </div>
                </div>
          ))}
        </div>
        <div className="mt-8">
          <a href="/success-stories" className="inline-flex items-center justify-center rounded-md bg-[#F59E0B] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95">Découvrir plus d'études de cas</a>
        </div>
      </section>

      {/* Pourquoi demander le guide ? */}
      <section className="relative bg-white overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-6rem] top-[-6rem] h-80 w-80 rounded-full bg-[#F59E0B]/10 blur-3xl" />
          <svg className="absolute right-[-8rem] bottom-[-8rem] -z-10" width="420" height="420" viewBox="0 0 420 420" fill="none" aria-hidden>
            <defs>
              <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(245,158,11,0.08)" />
                <stop offset="100%" stopColor="rgba(30,58,138,0.08)" />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="400" height="400" rx="24" stroke="url(#grad2)" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">Ce que vous obtenez</div>
          <h2 className="mt-3 text-2xl font-bold text-slate-900">Pourquoi demander le guide ?</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { icon: '🧭', h: 'Vision claire', p: 'Comprenez les mécanismes du métier et évaluez objectivement si votre profil correspond aux exigences de cette activité.' },
              { icon: '🧮', h: 'Chiffrages & checklists', p: 'Accédez aux grilles de calcul, budgets types et listes de vérification pour structurer votre approche.' },
              { icon: '🗺️', h: 'Feuille de route personnalisée', p: "Recevez un plan d'action adapté à votre situation pour éviter les erreurs courantes." },
            ].map((b) => (
              <div key={b.h} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-md hover:ring-[#1E3A8A]/20">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A8A]/10 text-lg shadow-sm">{b.icon}</div>
                  <div className="text-sm font-semibold text-[#1E3A8A]">{b.h}</div>
                </div>
                <div className="mt-2 text-sm text-slate-700">{b.p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="metier" className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-[-6rem] top-[-6rem] h-80 w-80 rounded-full bg-[#1E3A8A]/10 blur-3xl" />
          <svg className="absolute bottom-[-6rem] left-[-6rem] -z-10" width="400" height="400" viewBox="0 0 400 400" fill="none" aria-hidden>
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(30,58,138,0.08)" />
                <stop offset="100%" stopColor="rgba(245,158,11,0.08)" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="180" stroke="url(#grad)" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div className="">
            <h2 className="text-2xl font-bold text-slate-900">Le métier de Marchand de Biens expliqué simplement</h2>
            <p className="mt-4 text-slate-600">Le marchand de biens achète des biens immobiliers pour les revendre après valorisation, généralement sous 5 ans. Cette activité commerciale permet de créer de la valeur en optimisant le potentiel d'un bien : rénovation, division, changement d'usage ou simple remise sur le marché à un prix juste.</p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
                <span><span className="font-medium">Création de valeur</span> : Révéler le potentiel caché d'un bien immobilier</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
                <span><span className="font-medium">Gestion des risques</span> : Maîtriser les coûts et délais pour sécuriser la marge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
                <span><span className="font-medium">Financement</span> : Optimiser l'effet de levier pour maximiser la rentabilité</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#formulaire" className="inline-flex items-center justify-center rounded-md bg-[#F59E0B] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95">Évaluer mon potentiel</a>
              <a href="#calculateur" className="inline-flex items-center justify-center rounded-md border border-[#1E3A8A] bg-white px-5 py-3 text-sm font-semibold text-[#1E3A8A] shadow-sm transition hover:bg-[#1E3A8A]/5">Tester le calculateur</a>
            </div>
          </div>
          <div className="">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Cycle en 3 étapes</div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[{ title: 'Dénicher', icon: '🔎', desc: 'Acheter un bien en dessous du prix du marché grâce au sourcing et à la négociation' }, { title: 'Transformer', icon: '🛠️', desc: 'Créer de la valeur par des travaux, divisions ou optimisations juridiques' }, { title: 'Revendre', icon: '📈', desc: 'Céder le bien transformé avec une plus-value en 6 à 24 mois' }].map((s) => (
                <div key={s.title} className="group rounded-xl border border-slate-200 bg-white p-5 text-left shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-md hover:ring-[#1E3A8A]/20">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A8A]/10 text-lg shadow-sm">{s.icon}</div>
                <div className="text-sm font-semibold text-[#1E3A8A]">{s.title}</div>
                  </div>
                <div className="mt-2 text-xs text-slate-600">{s.desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-slate-500">Une opération bien menée peut générer une marge nette de 15 000€ à 50 000€.</div>
          </div>
        </div>
      </section>

      


      {/* À qui s’adresse cette évaluation ? */}
      <section className="relative bg-slate-50 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-[-6rem] top-[-6rem] h-72 w-72 rounded-full bg-[#1E3A8A]/10 blur-3xl" />
          <div className="absolute left-[-8rem] bottom-[-8rem] h-72 w-72 rounded-full bg-[#F59E0B]/10 blur-3xl" />
        </div>
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">Pour qui ?</div>
          <h2 className="mt-3 text-2xl font-bold text-slate-900">À qui s’adresse cette évaluation ?</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { icon: '🧑‍💼', h: 'Les entrepreneurs en reconversion', p: "Cadres, commerciaux ou consultants qui souhaitent créer leur propre activité dans l'immobilier avec un capital de départ." },
              { icon: '🏢', h: 'Les investisseurs immobiliers', p: "Propriétaires de biens locatifs qui veulent diversifier vers l'achat-revente pour optimiser leur rentabilité." },
              { icon: '✨', h: "Les passionnés d'immobilier", p: 'Personnes attirées par la rénovation et la valorisation immobilière qui cherchent à en faire une activité professionnelle.' },
            ].map((t) => (
              <div key={t.h} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-md hover:ring-[#1E3A8A]/20">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A8A]/10 text-lg shadow-sm">{t.icon}</div>
                  <div className="text-sm font-semibold text-[#1E3A8A]">{t.h}</div>
                </div>
                <div className="mt-2 text-sm text-slate-700">{t.p}</div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a href="#formulaire" className="inline-flex items-center justify-center rounded-md bg-[#1E3A8A] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110">Recevoir le guide gratuit</a>
          </div>
        </div>
      </section>

      {/* Exemple chiffré indicatif */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">Exemple chiffré indicatif</h2>
          <p className="mt-4 text-sm text-slate-700">Voici un exemple théorique pour illustrer le principe : un appartement de 60m² acheté 160 000€ dans une ville moyenne. Après 20 000€ de travaux de rénovation et 6 mois de portage, une revente à 220 000€ pourrait générer une marge nette d'environ 19 200€.</p>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-transparent">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500" aria-hidden />
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-900"><span className="h-1.5 w-1.5 rounded-full bg-[#1E3A8A]" />Coûts d'acquisition</div>
              <dl className="divide-y divide-slate-200 text-sm text-slate-700">
                <div className="flex items-center justify-between py-1.5"><dt>Prix d'achat</dt><dd className="font-medium">160 000€</dd></div>
                <div className="flex items-center justify-between py-1.5"><dt>Frais de notaire</dt><dd className="font-medium">11 200€</dd></div>
                <div className="flex items-center justify-between py-1.5 font-semibold text-slate-900"><dt>Total</dt><dd>171 200€</dd></div>
              </dl>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-transparent">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500" aria-hidden />
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-900"><span className="h-1.5 w-1.5 rounded-full bg-[#1E3A8A]" />Travaux & valorisation</div>
              <dl className="divide-y divide-slate-200 text-sm text-slate-700">
                <div className="flex items-center justify-between py-1.5"><dt>Rénovation complète</dt><dd className="font-medium">20 000€</dd></div>
                <div className="flex items-center justify-between py-1.5"><dt>Frais de portage (6 mois)</dt><dd className="font-medium">3 000€</dd></div>
                <div className="flex items-center justify-between py-1.5 font-semibold text-slate-900"><dt>Total</dt><dd>23 000€</dd></div>
              </dl>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-transparent">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500" aria-hidden />
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-900"><span className="h-1.5 w-1.5 rounded-full bg-[#1E3A8A]" />Prix de revente</div>
              <dl className="divide-y divide-slate-200 text-sm text-slate-700">
                <div className="flex items-center justify-between py-1.5"><dt>Prix de vente</dt><dd className="font-medium">220 000€</dd></div>
                <div className="flex items-center justify-between py-1.5"><dt>Frais d'agence</dt><dd className="font-medium">6 600€</dd></div>
                <div className="flex items-center justify-between py-1.5 font-semibold text-slate-900"><dt>Net vendeur</dt><dd>213 400€</dd></div>
              </dl>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-xs uppercase tracking-wide text-slate-500">Résultat indicatif</div>
            <div className="mt-1 text-2xl font-extrabold text-slate-900">Marge nette : 19 200€</div>
            <div className="mt-1 text-xs text-slate-500">Cet exemple est donné à titre purement indicatif et ne constitue aucune garantie de résultat.</div>
          </div>
        </div>
      </section>

      {/* Processus en 3 étapes */}
      <section className="relative bg-slate-50 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-6rem] top-[-6rem] h-72 w-72 rounded-full bg-[#1E3A8A]/10 blur-3xl" />
          <div className="absolute right-[-8rem] bottom-[-8rem] h-72 w-72 rounded-full bg-[#F59E0B]/10 blur-3xl" />
        </div>
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">En 3 étapes</div>
          <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-start">
            <h2 className="text-2xl font-bold text-slate-900">Comment FlipImmo Vous Accompagne vers la Réussite</h2>
            <a href="#formulaire" className="md:ml-auto inline-flex items-center justify-center whitespace-nowrap rounded-md bg-[#F59E0B] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95">Commencer maintenant</a>
          </div>
          <div className="relative mt-6 md:pl-8">
            <div className="pointer-events-none absolute left-4 top-0 hidden h-full w-px bg-slate-200 md:block" />
            <ol className="space-y-5 list-none">
              <li className="relative pl-12">
                <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#1E3A8A] text-white text-sm font-semibold ring-4 ring-slate-50">1</span>
                <div className="font-medium text-slate-900">Vous vous informez</div>
                <div className="text-sm text-slate-700">Découvrez les fondamentaux à votre rythme : formation gratuite, articles et outils.</div>
              </li>
              <li className="relative pl-12">
                <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#1E3A8A] text-white text-sm font-semibold ring-4 ring-slate-50">2</span>
                <div className="font-medium text-slate-900">Vous qualifiez votre projet</div>
                <div className="text-sm text-slate-700">Évaluez votre profil en 5 minutes grâce à notre questionnaire confidentiel.</div>
              </li>
              <li className="relative pl-12">
                <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#1E3A8A] text-white text-sm font-semibold ring-4 ring-slate-50">3</span>
                <div className="font-medium text-slate-900">Nous vous orientons</div>
                <div className="text-sm text-slate-700">Un expert vous contacte et vous oriente vers la meilleure formation partenaire.</div>
              </li>
            </ol>
          </div>
          <div className="mt-4 text-xs text-slate-500">Gratuit et sans engagement</div>
        </div>
      </section>

      

      {/* Glossaire express */}
      <section className="relative bg-slate-50 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-[-6rem] top-[-6rem] h-72 w-72 rounded-full bg-[#1E3A8A]/10 blur-3xl" />
          <div className="absolute left-[-8rem] bottom-[-8rem] h-72 w-72 rounded-full bg-[#F59E0B]/10 blur-3xl" />
        </div>
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">Glossaire</div>
          <h2 className="mt-3 text-2xl font-bold text-slate-900">Glossaire express</h2>
          <dl className="mt-6 grid gap-x-10 gap-y-6 md:grid-cols-2">
            <div>
              <dt className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs shadow-sm">i</span>
                Portage
              </dt>
              <dd className="mt-1 text-sm text-slate-700">Période pendant laquelle vous êtes propriétaire du bien (charges, assurances, taxes) avant sa revente.</dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs shadow-sm">≃</span>
                Comparables
              </dt>
              <dd className="mt-1 text-sm text-slate-700">Biens similaires vendus récemment dans le secteur, utilisés pour estimer la valeur de marché.</dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs shadow-sm">%</span>
                Marge d'aléa
              </dt>
              <dd className="mt-1 text-sm text-slate-700">Réserve financière (généralement 10–15% du budget travaux) pour faire face aux imprévus de chantier.</dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs shadow-sm">€</span>
                Frais de commercialisation
              </dt>
              <dd className="mt-1 text-sm text-slate-700">Coûts liés à la mise en vente: photos, annonces, home staging, honoraires éventuels.</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Neutre, clair et sans spam */}
      <section className="relative bg-white overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-6rem] top-[-6rem] h-72 w-72 rounded-full bg-[#F59E0B]/10 blur-3xl" />
          <div className="absolute right-[-8rem] bottom-[-8rem] h-72 w-72 rounded-full bg-[#1E3A8A]/10 blur-3xl" />
        </div>
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">Réassurance</div>
          <h2 className="mt-3 text-2xl font-bold text-slate-900">Neutre, clair et sans spam</h2>
          <ul className="mt-6 grid gap-4 text-sm text-slate-700 md:grid-cols-2">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
              <span><span className="font-medium">Approche informative</span> : Ce site fournit des informations objectives sur le métier, sans promotion commerciale</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
              <span><span className="font-medium">Désinscription facile</span> : Vous pouvez vous désabonner de nos communications à tout moment en un clic</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
              <span><span className="font-medium">Respect RGPD</span> : Vos données personnelles sont protégées</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
              <span><span className="font-medium">Vision réaliste</span> : Nous présentons les opportunités comme les risques de cette activité professionnelle</span>
            </li>
          </ul>
        </div>
      </section>

      <section id="calculateur" className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-xl ring-1 ring-slate-200/60 backdrop-blur">
            <h2 className="text-2xl font-bold text-slate-900">Calculez votre potentiel de gains</h2>
            <p className="mt-2 text-slate-600">Estimation théorique basée sur une hypothèse de marge de 20% du capital investi, variable selon le marché local et votre expertise.</p>
            <div className="mt-6"><Calculator /></div>
            <div className="mt-3 text-xs text-slate-500">Hypothèses simplifiées, à ajuster selon vos comparables et votre contexte local.</div>
          </div>
        </div>
      </section>

      


      <section id="faq" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <FAQ />
      </section>
    </div>
  );
}
