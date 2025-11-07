'use client'

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10">
      <div className="mb-6 text-center">
        <img src="/images_funnels/Flipmmologotransparentrectangle.svg" alt="FlipImmo" className="mx-auto h-12 w-auto" />
      </div>
      <h1 className="text-center text-2xl font-extrabold text-slate-900">Désolé…</h1>
      <p className="mt-2 text-center text-slate-600">Tu n’as pas encore le capital suffisant pour te lancer.</p>
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <ul className="grid gap-3 text-slate-700">
          <li>• Constituer ton capital personnel (épargne, ventes, prêts d’honneur)</li>
          <li>• Te former aux bases du montage d’opérations</li>
          <li>• Comprendre les leviers bancaires et fiscaux</li>
        </ul>
        <a
          href="https://flipimmo.fr"
          className="mt-6 inline-block rounded-lg bg-[#f59e0b] px-5 py-3 text-white"
        >
          Visite FlipImmo.fr pour te former gratuitement
        </a>
      </div>
    </div>
  )
}


