'use client'

import ConfettiOnce from '@/components/ConfettiOnce'

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10">
      <ConfettiOnce pieces={160} />
      <div className="mb-6 text-center">
        <img src="/images_funnels/Flipmmologotransparentrectangle.svg" alt="FlipImmo" className="mx-auto h-12 w-auto" />
      </div>
      <h1 className="text-center text-2xl font-extrabold text-slate-900">Bravo !</h1>
      <p className="mt-2 text-center text-slate-600">AXIO va vous contacter très prochainement pour l’audit offert.</p>
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
        <img src="/LogosPartenaires/Logo-Axio-1.png" alt="AXIO Formation" className="mx-auto h-10 w-auto" />
        <p className="mt-4 text-sm text-slate-600">Gardez votre téléphone disponible dans les prochaines heures.</p>
      </div>
    </div>
  )
}


