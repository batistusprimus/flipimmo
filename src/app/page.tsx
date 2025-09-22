import Image from "next/image";

import Calculator from "@/components/Calculator";
import FAQ from "@/components/FAQ";
import GhlForm from "@/components/GhlForm";

export default function Home() {
  return (
    <div>
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
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Découvrez si le métier de Marchand de Biens est fait pour vous</h1>
              <p className="mt-4 text-slate-600">Évaluez votre potentiel en 5 minutes et recevez un guide complet gratuit avec votre analyse personnalisée. Une approche objective pour explorer cette opportunité professionnelle.</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#formulaire" className="inline-flex items-center justify-center rounded-md bg-[#F59E0B] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95">
                  Commencer l'évaluation gratuite
                </a>
                <a href="#calculateur" className="inline-flex items-center justify-center rounded-md border border-[#1E3A8A] bg-white px-5 py-3 text-sm font-semibold text-[#1E3A8A] shadow-sm transition hover:bg-[#1E3A8A]/5">
                  Tester le calculateur
                </a>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#1E3A8A]/10 px-3 py-1 text-xs font-medium text-[#1E3A8A]">5 minutes • Gratuit</span>
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

      <section id="formulaire" className="relative bg-slate-50 py-14 md:py-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-[-6rem] top-[-6rem] h-72 w-72 rounded-full bg-[#1E3A8A]/10 blur-3xl" />
          <div className="absolute left-[-8rem] bottom-[-8rem] h-72 w-72 rounded-full bg-[#F59E0B]/10 blur-3xl" />
        </div>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="badge">Gratuit • Conforme RGPD</div>
          <h2 className="mt-3 text-2xl font-bold text-slate-900">Recevez votre guide gratuit + évaluation personnalisée</h2>
          <p className="mt-2 text-slate-600">Découvrez en 5 minutes si vous avez le profil pour réussir dans ce métier.</p>

          <div className="mt-8 grid items-start gap-8 md:grid-cols-3">
            <div className="md:order-2">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Ce que vous allez recevoir</div>
                <ul className="mt-4 grid gap-3 text-sm text-slate-700">
                  <li className="flex items-start gap-3"><span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span><span>Le guide PDF avec les fondamentaux du métier</span></li>
                  <li className="flex items-start gap-3"><span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span><span>Votre analyse personnalisée en 5 minutes</span></li>
                  <li className="flex items-start gap-3"><span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span><span>Des modèles: checklists et chiffrages types</span></li>
                  <li className="flex items-start gap-3"><span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span><span>Sans spam, désinscription en un clic</span></li>
                </ul>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm"><span>🔒</span><span>Données sécurisées</span></div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm"><span>📩</span><span>Désinscription à tout moment</span></div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm"><span>⏱️</span><span>5 minutes</span></div>
              </div>
            </div>

            <div className="card p-6 md:order-1 md:col-span-2 shadow-md ring-1 ring-[#1E3A8A]/10 lg:p-8">
              <GhlForm />
              <p className="mt-3 text-xs text-slate-500">Vos données sont utilisées uniquement pour vous envoyer le guide et l'évaluation demandés. Elles ne sont jamais transmises à des tiers.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Témoignages */}
      <section id="temoignages" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">Témoignages</div>
        <h2 className="mt-3 text-2xl font-bold text-slate-900">Ils témoignent</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {[
            { name: 'Sophie', title: 'Reconversion professionnelle', quote: "Après ma formation en marketing, j'ai découvert le métier de marchand de biens. L'approche structurée m'a permis de clarifier mes étapes et de me lancer." },
            { name: 'Mehdi', title: 'Entrepreneur', quote: "Grâce à une méthode rigoureuse, j'ai posé des bases solides pour développer une activité d'achat-revente." },
            { name: 'Laura', title: 'Investisseuse', quote: "Sans expérience au départ, j'ai appris les fondamentaux du métier et structuré mes premiers projets." },
          ].map((t) => (
            <figure key={t.name} className="relative">
              <div className="pointer-events-none absolute -top-2 -left-1 text-5xl leading-none text-[#1E3A8A]/15">“</div>
              <blockquote className="pl-6 text-sm italic text-slate-700">
                {t.quote}
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A8A] text-white text-sm font-semibold">
                  {t.name.charAt(0)}
                </div>
          <div>
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.title}</div>
                </div>
              </figcaption>
            </figure>
          ))}
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
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">Ce que vous obtenez</div>
          <h2 className="mt-3 text-2xl font-bold text-slate-900">Pourquoi demander le guide ?</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { icon: '🧭', h: 'Vision claire', p: 'Comprenez les mécanismes du métier et évaluez objectivement si votre profil correspond aux exigences de cette activité.' },
              { icon: '🧮', h: 'Chiffrages & checklists', p: 'Accédez aux grilles de calcul, budgets types et listes de vérification pour structurer votre approche.' },
              { icon: '🗺️', h: 'Feuille de route personnalisée', p: "Recevez un plan d'action adapté à votre situation pour éviter les erreurs courantes." },
            ].map((b) => (
              <div key={b.h} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-md hover:ring-[#1E3A8A]/20">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A8A]/10 text-lg">{b.icon}</div>
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
            <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Processus clé</div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[{ title: 'Acheter', icon: '🏷️', desc: "Identifier les opportunités, négocier le prix d'acquisition et sécuriser le financement" }, { title: 'Rénover', icon: '🛠️', desc: 'Valoriser le bien par des travaux ciblés et un repositionnement stratégique' }, { title: 'Revendre', icon: '📈', desc: 'Commercialiser au meilleur prix dans les délais optimaux' }].map((s) => (
                <div key={s.title} className="group rounded-xl border border-slate-200 bg-white p-5 text-left shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-md hover:ring-[#1E3A8A]/20">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A8A]/10 text-lg">{s.icon}</div>
                <div className="text-sm font-semibold text-[#1E3A8A]">{s.title}</div>
                  </div>
                <div className="mt-2 text-xs text-slate-600">{s.desc}</div>
                </div>
              ))}
            </div>
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
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">Pour qui ?</div>
          <h2 className="mt-3 text-2xl font-bold text-slate-900">À qui s’adresse cette évaluation ?</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { icon: '🧑‍💼', h: 'Les entrepreneurs en reconversion', p: "Cadres, commerciaux ou consultants qui souhaitent créer leur propre activité dans l'immobilier avec un capital de départ." },
              { icon: '🏢', h: 'Les investisseurs immobiliers', p: "Propriétaires de biens locatifs qui veulent diversifier vers l'achat-revente pour optimiser leur rentabilité." },
              { icon: '✨', h: "Les passionnés d'immobilier", p: 'Personnes attirées par la rénovation et la valorisation immobilière qui cherchent à en faire une activité professionnelle.' },
            ].map((t) => (
              <div key={t.h} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-md hover:ring-[#1E3A8A]/20">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A8A]/10 text-lg">{t.icon}</div>
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
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-900"><span className="h-1.5 w-1.5 rounded-full bg-[#1E3A8A]" />Coûts d'acquisition</div>
              <dl className="divide-y divide-slate-200 text-sm text-slate-700">
                <div className="flex items-center justify-between py-1.5"><dt>Prix d'achat</dt><dd className="font-medium">160 000€</dd></div>
                <div className="flex items-center justify-between py-1.5"><dt>Frais de notaire</dt><dd className="font-medium">11 200€</dd></div>
                <div className="flex items-center justify-between py-1.5 font-semibold text-slate-900"><dt>Total</dt><dd>171 200€</dd></div>
              </dl>
            </div>

            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-900"><span className="h-1.5 w-1.5 rounded-full bg-[#1E3A8A]" />Travaux & valorisation</div>
              <dl className="divide-y divide-slate-200 text-sm text-slate-700">
                <div className="flex items-center justify-between py-1.5"><dt>Rénovation complète</dt><dd className="font-medium">20 000€</dd></div>
                <div className="flex items-center justify-between py-1.5"><dt>Frais de portage (6 mois)</dt><dd className="font-medium">3 000€</dd></div>
                <div className="flex items-center justify-between py-1.5 font-semibold text-slate-900"><dt>Total</dt><dd>23 000€</dd></div>
              </dl>
            </div>

            <div>
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

      {/* Méthode d'évaluation en 5 minutes */}
      <section className="relative bg-slate-50 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-6rem] top-[-6rem] h-72 w-72 rounded-full bg-[#1E3A8A]/10 blur-3xl" />
          <div className="absolute right-[-8rem] bottom-[-8rem] h-72 w-72 rounded-full bg-[#F59E0B]/10 blur-3xl" />
        </div>
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">En 5 étapes</div>
          <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-start">
            <h2 className="text-2xl font-bold text-slate-900">Méthode d'évaluation en 5 minutes</h2>
            <a href="#formulaire" className="md:ml-auto inline-flex items-center justify-center whitespace-nowrap rounded-md bg-[#F59E0B] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95">
              Commencer maintenant
            </a>
          </div>
          <div className="relative mt-6 md:pl-8">
            <div className="pointer-events-none absolute left-4 top-0 hidden h-full w-px bg-slate-200 md:block" />
            <ol className="space-y-5 list-none">
              <li className="relative pl-12">
                <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#1E3A8A] text-white text-sm font-semibold ring-4 ring-slate-50">1</span>
                <div className="font-medium text-slate-900">Analysez votre situation financière</div>
                <div className="text-sm text-slate-700">Évaluez votre capacité d'investissement et votre profil de risque</div>
              </li>
              <li className="relative pl-12">
                <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#1E3A8A] text-white text-sm font-semibold ring-4 ring-slate-50">2</span>
                <div className="font-medium text-slate-900">Définissez votre disponibilité</div>
                <div className="text-sm text-slate-700">Déterminez le temps que vous pouvez consacrer à cette activité</div>
              </li>
              <li className="relative pl-12">
                <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#1E3A8A] text-white text-sm font-semibold ring-4 ring-slate-50">3</span>
                <div className="font-medium text-slate-900">Identifiez vos motivations</div>
                <div className="text-sm text-slate-700">Clarifiez vos objectifs et votre vision à long terme</div>
              </li>
              <li className="relative pl-12">
                <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#1E3A8A] text-white text-sm font-semibold ring-4 ring-slate-50">4</span>
                <div className="font-medium text-slate-900">Évaluez votre expérience</div>
                <div className="text-sm text-slate-700">Mesurez vos compétences actuelles et vos besoins en formation</div>
              </li>
              <li className="relative pl-12">
                <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#1E3A8A] text-white text-sm font-semibold ring-4 ring-slate-50">5</span>
                <div className="font-medium text-slate-900">Recevez votre analyse</div>
                <div className="text-sm text-slate-700">Obtenez un retour personnalisé sur votre potentiel et vos prochaines étapes</div>
              </li>
            </ol>
          </div>
          <div className="mt-4 text-xs text-slate-500">Temps estimé : 5 minutes</div>
        </div>
      </section>

      

      {/* Glossaire express */}
      <section className="relative bg-slate-50 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-[-6rem] top-[-6rem] h-72 w-72 rounded-full bg-[#1E3A8A]/10 blur-3xl" />
          <div className="absolute left-[-8rem] bottom-[-8rem] h-72 w-72 rounded-full bg-[#F59E0B]/10 blur-3xl" />
        </div>
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">Glossaire</div>
          <h2 className="mt-3 text-2xl font-bold text-slate-900">Glossaire express</h2>
          <dl className="mt-6 grid gap-x-10 gap-y-6 md:grid-cols-2">
            <div>
              <dt className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs">i</span>
                Portage
              </dt>
              <dd className="mt-1 text-sm text-slate-700">Période pendant laquelle vous êtes propriétaire du bien (charges, assurances, taxes) avant sa revente.</dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs">≃</span>
                Comparables
              </dt>
              <dd className="mt-1 text-sm text-slate-700">Biens similaires vendus récemment dans le secteur, utilisés pour estimer la valeur de marché.</dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs">%</span>
                Marge d'aléa
              </dt>
              <dd className="mt-1 text-sm text-slate-700">Réserve financière (généralement 10–15% du budget travaux) pour faire face aux imprévus de chantier.</dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs">€</span>
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
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">Réassurance</div>
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
          <h2 className="text-2xl font-bold text-slate-900">Calculez votre potentiel de gains</h2>
          <p className="mt-2 text-slate-600">Estimation théorique basée sur une hypothèse de marge de 20% du capital investi, variable selon le marché local et votre expertise.</p>
          <div className="mt-6"><Calculator /></div>
        </div>
      </section>

      


      <section id="faq" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <FAQ />
      </section>
    </div>
  );
}
