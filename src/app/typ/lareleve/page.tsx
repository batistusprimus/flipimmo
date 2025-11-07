'use client'

import Script from 'next/script'
import ConfettiOnce from '@/components/ConfettiOnce'

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10">
      <ConfettiOnce pieces={180} />
      <div className="mb-6 text-center">
        <img src="/images_funnels/Flipmmologotransparentrectangle.svg" alt="FlipImmo" className="mx-auto h-12 w-auto" />
      </div>
      <h1 className="text-center text-2xl font-extrabold text-slate-900">Bravo !</h1>
      <p className="mt-2 text-center text-slate-600">Planifiez votre rendez-vous gratuit avec La Relève :</p>
      <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <iframe
          src="https://calendly.com/remaoun/30min?back=1"
          className="h-[900px] w-full"
          title="Calendly La Relève"
        />
      </div>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </div>
  )
}


