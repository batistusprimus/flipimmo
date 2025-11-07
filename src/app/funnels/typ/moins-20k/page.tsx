'use client'

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10">
      <div className="mb-6 text-center">
        <img src="/images_funnels/Flipmmologotransparentrectangle.svg" alt="FlipImmo" className="mx-auto h-12 w-auto" />
      </div>
      <h1 className="text-center text-2xl font-extrabold text-slate-900">Désolé…</h1>
      <p className="mt-2 text-center text-slate-600">Tu n’as pas encore le capital suffisant pour te lancer.</p>
      <p className="mt-4 text-center italic text-slate-500">Les opérations de marchand de biens exigent un minimum de fonds pour être crédible auprès des banques et partenaires.</p>
      <p className="mt-4 text-center text-slate-700">À ce stade, l’objectif n’est pas d’investir — mais de te préparer sérieusement.</p>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-base text-slate-900">Utilise cette période pour :</div>
        <ul className="mt-3 grid gap-3 text-slate-700">
          <li>• Constituer ton capital personnel (épargne, ventes, prêts d’honneur).</li>
          <li>• Te former sur les bases du montage d’opérations.</li>
          <li>• Comprendre les leviers bancaires et fiscaux du métier.</li>
        </ul>
        <p className="mt-4 text-slate-700">Dès que tu auras dépassé les <span className="font-semibold">20.000 €</span>, tu pourras prétendre à un accompagnement concret.</p>
        <p className="mt-2 text-slate-700">Tu vas recevoir un guide PDF gratuit pour commencer à structurer ton projet.</p>
        <a
          href="https://flipimmo.fr"
          className="mt-6 inline-block rounded-lg bg-[#f59e0b] px-5 py-3 text-white"
        >
          Visite FlipImmo.fr pour te former gratuitement
        </a>
      </div>
      <p className="mt-10 text-center text-xs text-slate-500">
        <a href="/politique-de-confidentialite" className="underline">Politique de confidentialité</a>
        {' '}
        ·
        {' '}
        <a href="/mentions-legales" className="underline">Mentions légales</a>
      </p>
    </div>
  )
}


