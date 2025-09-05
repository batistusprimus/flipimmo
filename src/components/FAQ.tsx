"use client"
import { useMemo, useState } from 'react'

const ITEMS = [
  {
    q: 'Quel capital est nécessaire pour commencer ?',
    a: "Le capital minimum recommandé est généralement de 20 000€ pour une première opération, incluant l'apport personnel (10-20% du prix d'achat), les frais de notaire, une réserve pour les travaux et les frais de portage. Avec moins de capital, il est possible de commencer par du portage ou des partenariats.",
  },
  {
    q: 'Combien de temps faut-il consacrer à cette activité ?',
    a: "Pour une première opération, il faut généralement prévoir 5 à 10 heures par semaine : recherche de biens, visites, négociations, suivi des travaux et commercialisation. Une fois l'expérience acquise, le temps peut être optimisé ou l'activité développée à temps plein.",
  },
  {
    q: 'Quels sont les principaux risques ?',
    a: "Les risques incluent la difficulté de revente (marché, prix), les dépassements de travaux, les problèmes de financement et les aspects fiscaux. Une bonne préparation, des études de marché sérieuses et une réserve financière permettent de les limiter.",
  },
  {
    q: 'Faut-il créer une société ?',
    a: "Le statut dépend de votre situation et de vos objectifs. L'activité peut être exercée en nom propre (BIC) pour débuter, puis évoluer vers une société (SARL, SAS) selon le volume d'affaires et l'optimisation fiscale souhaitée.",
  },
  {
    q: 'Comment se finance une opération ?',
    a: "Le financement combine généralement apport personnel (10-30%), crédit bancaire classique ou spécialisé, et parfois des solutions alternatives (crowdfunding, partenaires). Les banques financent habituellement 70-80% de l'acquisition selon votre profil.",
  },
  {
    q: 'En combien de temps réaliser sa première opération ?',
    a: "Il faut généralement compter 3 à 6 mois pour identifier, acquérir et démarrer les travaux de votre premier bien. La durée totale (achat à revente) varie de 6 à 18 mois selon l'ampleur des travaux et les conditions de marché.",
  },
  {
    q: 'Peut-on démarrer en parallèle d’un emploi ?',
    a: "Oui, beaucoup commencent en conservant leur activité principale. L'organisation et la délégation (artisans, agents immobiliers) sont essentielles. Certaines étapes nécessitent cependant votre présence (visites, négociations).",
  },
  {
    q: 'Faut-il être bricoleur pour réussir ?',
    a: "Non, les compétences techniques ne sont pas indispensables. L'important est de savoir évaluer les travaux, choisir les bons artisans et coordonner les interventions. Beaucoup de marchands de biens délèguent entièrement la réalisation.",
  },
]

function toSlug(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

export default function FAQ() {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]))
  const allOpen = useMemo(() => open.size === ITEMS.length, [open])
  const toggle = (idx: number) => {
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx)
      else next.add(idx)
      return next
    })
  }
  const openAll = () => setOpen(new Set(ITEMS.map((_, i) => i)))
  const closeAll = () => setOpen(new Set())
  return (
    <div>
      <div className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">FAQ</div>
      <div className="mt-3 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Questions fréquentes</h2>
          <p className="mt-2 text-sm text-slate-600">Des réponses claires et courtes aux questions que l'on nous pose souvent.</p>
        </div>
        <div className="hidden gap-2 sm:flex">
          {!allOpen ? (
            <button onClick={openAll} className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm hover:bg-slate-50">Tout ouvrir</button>
          ) : (
            <button onClick={closeAll} className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm hover:bg-slate-50">Tout fermer</button>
          )}
        </div>
      </div>

      <div className="mt-6">
        {ITEMS.map((item, idx) => {
          const isOpen = open.has(idx)
          const panelId = `faq-panel-${idx}`
          const btnId = `faq-button-${idx}`
          const slug = toSlug(item.q)
          return (
            <div key={item.q} id={`faq-${slug}`} className="relative border-b border-slate-200">
              {isOpen && <span aria-hidden className="absolute left-0 top-0 h-full w-0.5 bg-[#1E3A8A]" />}
              <button
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-start justify-between gap-4 px-1 py-4 text-left transition hover:bg-slate-50 focus:outline-none focus-visible:bg-slate-50 sm:px-2"
                onClick={() => toggle(idx)}
              >
                <span className="pl-3 font-medium text-slate-900">
                  {item.q}
                  <a href={`#faq-${slug}`} className="ml-2 hidden align-middle text-xs text-slate-400 hover:text-slate-500 sm:inline">#</a>
                </span>
                <svg
                  className={`mt-0.5 h-5 w-5 shrink-0 transform text-[#1E3A8A] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 111.04 1.08l-4.24 3.36a.75.75 0 01-.94 0L5.21 8.31a.75.75 0 01.02-1.1z" clipRule="evenodd" />
                </svg>
              </button>
              {isOpen && (
                <div id={panelId} role="region" aria-labelledby={btnId} className="pl-3 pr-2 pb-5 text-slate-700 sm:pl-5">
                  {item.a}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}


