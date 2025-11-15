'use client'

import Script from 'next/script'
import ConfettiOnce from '@/components/ConfettiOnce'

export default function Page() {
  return (
    <div className="relative mx-auto w-full max-w-5xl px-4 py-10">
      <ConfettiOnce pieces={200} />
      <div className="overflow-hidden rounded-3xl bg-slate-900 text-slate-100 shadow-2xl">
        <div className="relative isolate px-6 py-12 sm:px-12 sm:py-16">
          <div className="absolute inset-0 -z-10 opacity-30">
            <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.45),_transparent_65%)]" />
          </div>
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
            <img src="/LogosPartenaires/la_relve_incubateur_mdb_cover.jpeg" alt="La Relève" className="h-12 w-auto" />
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.4em] text-slate-200/70">Partenaire officiel FlipImmo × La Relève</p>
            <span className="mt-5 inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 ring-1 ring-inset ring-white/20">Votre plan d’action est prêt</span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Merci pour votre intérêt.</h1>
            <p className="mt-4 text-base leading-7 text-slate-200 sm:text-lg">
              Votre guide du Marchand de Biens arrive par email dans les prochaines minutes (vérifiez vos spams). En attendant, bloquez un échange avec La Relève pour valider votre stratégie.
            </p>
            <ul className="mt-6 space-y-3 text-left text-base leading-7 text-slate-100 sm:text-lg">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 flex-none rounded-full bg-[#f97316]" />
                <span>Audit de 30&nbsp;minutes offert pour examiner votre prochaine opération.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 flex-none rounded-full bg-[#0b2545]" />
                <span>Accès au réseau La Relève (financement, travaux, structuration) pour sécuriser vos marges.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 flex-none rounded-full bg-emerald-500" />
                <span>Co-investissement possible jusqu’à 50&nbsp;% des fonds propres sur vos trois premières opérations.</span>
              </li>
            </ul>
            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="#calendly"
                className="inline-flex w-full items-center justify-center rounded-xl bg-[#f97316] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-[#ea580c] sm:w-auto"
              >
                Réserver ma session personnalisée
              </a>
              <a
                href="#programme"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Comprendre l’incubateur
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-200/80">Gratuit · Sans engagement · Réponse rapide de l’équipe La Relève</p>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <div className="mx-auto max-w-3xl space-y-6 rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-xl backdrop-blur">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Ce qui se passe ensuite</h2>
          <ol className="space-y-4 text-base leading-7 text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">1. Guide reçu</span> – l’email FlipImmo avec votre plan d’action arrive sous 5&nbsp;minutes.
            </li>
            <li>
              <span className="font-semibold text-slate-900">2. Appel personnalisé</span> – La Relève vous contacte pour analyser votre projet et clarifier vos prochaines décisions.
            </li>
            <li>
              <span className="font-semibold text-slate-900">3. Plan concret</span> – vous repartez avec trois actions prioritaires et, si pertinent, une proposition de co-investissement.
            </li>
          </ol>
          <p className="text-sm text-slate-600">L’audit est offert et sans engagement. Choisissez votre créneau pour être rappelé rapidement.</p>
        </div>
      </section>

      <section id="programme" className="mt-10 space-y-10">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl backdrop-blur">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">La méthode La Relève</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg">
            Le processus est construit pour former, accompagner, financer et inspirer les marchands de biens ambitieux. Rejoignez un écosystème qui réalise vos trois premières opérations à vos côtés.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-[#0b2545]">01 · On forme</div>
              <div className="mt-3 text-lg font-semibold text-slate-900">Masterclass REBOOT → URBANISME</div>
              <p className="mt-2 text-sm leading-6 text-slate-700">8 ateliers immersifs pour maîtriser sourcing, financement, travaux, fiscalité, comptabilité et urbanisme.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-[#0b2545]">02 · On accompagne</div>
              <div className="mt-3 text-lg font-semibold text-slate-900">Coaching quotidien</div>
              <p className="mt-2 text-sm leading-6 text-slate-700">Analyse de deals, visites terrain, accès au Notion La Relève et réseau d’experts pour sécuriser chaque décision.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-[#0b2545]">03 · On finance</div>
              <div className="mt-3 text-lg font-semibold text-slate-900">Structuration & co-invest</div>
              <p className="mt-2 text-sm leading-6 text-slate-700">Accès privilégié à Audit & Coverage et partage du risque financier pour accélérer vos signatures.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-[#0b2545]">04 · On inspire</div>
              <div className="mt-3 text-lg font-semibold text-slate-900">Communauté élite</div>
              <p className="mt-2 text-sm leading-6 text-slate-700">Rejoignez un cercle d’investisseurs confirmés, gagnez en visibilité et devenez mentor à votre tour.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-xl backdrop-blur">
            <h3 className="text-xl font-semibold text-slate-900">Votre accompagnement personnalisé</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#f97316]" />
                <div>
                  <span className="font-semibold text-slate-900">Tableau de bord Notion</span> pour piloter sourcing, analyse financière et suivi de chantier efficacement.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0b2545]" />
                <div>
                  <span className="font-semibold text-slate-900">Groupe WhatsApp réactif</span> avec les fondateurs et experts La Relève pour des réponses rapides à vos questions.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <div>
                  <span className="font-semibold text-slate-900">Méthodes de structuration</span> pour bâtir des sociétés solides, rédiger vos contrats et sécuriser votre fiscalité.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-500" />
                <div>
                  <span className="font-semibold text-slate-900">Réseau de partenaires</span> en travaux, financement et closing pour accélérer vos opérations et maximiser vos marges.
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-900 p-8 text-slate-100 shadow-2xl">
            <div>
              <h3 className="text-xl font-semibold text-white">Audit stratégique de 30 minutes</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Identifiez vos angles morts (marché, financement, travaux), clarifiez vos marges cibles et repartez avec un plan en trois actions pour passer à l’achat sereinement.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
                <div className="text-sm font-semibold text-white">À qui s’adresse La Relève ?</div>
                <p className="mt-2 text-sm leading-6 text-slate-200">Investisseurs passionnés, prêts à engager des fonds propres et à bâtir un business pérenne d’achat-revente.</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
                <div className="text-sm font-semibold text-white">L’essentiel à prévoir</div>
                <p className="mt-2 text-sm leading-6 text-slate-200">Frais d’inscription de 20&nbsp;k€, co-investissement possible, ambition forte et vision entrepreneuriale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="calendly" className="mt-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b2545]">Passez à l’action</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900">Sécurisez votre créneau avec La Relève</h2>
          <p className="mt-3 text-base leading-7 text-slate-700">Choisissez un rendez-vous gratuit pour valider votre projet et bénéficier d’un retour personnalisé de l’équipe La Relève.</p>
        </div>
        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
        <iframe
          src="https://calendly.com/remaoun/30min?back=1"
          className="h-[900px] w-full"
          title="Calendly La Relève"
        />
      </div>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      </section>

      <p className="mt-10 text-center text-xs text-sky-700/80">
        <a href="/politique-de-confidentialite" className="underline">Politique de confidentialité</a>
        {' '}
        ·
        {' '}
        <a href="/mentions-legales" className="underline">Mentions légales</a>
      </p>
    </div>
  )
}


