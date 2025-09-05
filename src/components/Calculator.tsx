"use client"
import { useMemo, useState } from 'react'

export default function Calculator() {
  const MIN_CAPITAL = 20000
  const MAX_CAPITAL = 200000
  const STEP = 1000

  const [capital, setCapital] = useState<number>(MIN_CAPITAL)

  const estimatedMargin = useMemo(() => Math.round(capital * 0.2), [capital])
  const monthlyMargin = useMemo(() => Math.round(estimatedMargin / 12), [estimatedMargin])
  const progressPercent = useMemo(
    () => Math.round(((capital - MIN_CAPITAL) / (MAX_CAPITAL - MIN_CAPITAL)) * 100),
    [capital]
  )

  const presetValues = [20000, 50000, 100000, 150000, 200000]

  return (
    <div className="card p-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm text-slate-600">Calculez votre potentiel</div>
          <div className="mt-1 text-lg font-semibold text-slate-900">Capital disponible</div>
        </div>
        <span className="badge">Hypothèse 20%</span>
      </div>

      <div className="mt-5 grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700" htmlFor="capital-range">
            Sélectionnez un montant
          </label>
          <input
            id="capital-range"
            type="range"
            min={MIN_CAPITAL}
            max={MAX_CAPITAL}
            step={STEP}
            value={capital}
            onChange={(e) => setCapital(Number(e.target.value))}
            className="mt-3 w-full accent-[#F59E0B]"
            aria-label="Capital disponible"
          />

          <div className="mt-3 flex items-center gap-3">
            <input
              type="number"
              min={MIN_CAPITAL}
              max={MAX_CAPITAL}
              step={STEP}
              value={capital}
              onChange={(e) => setCapital(Number(e.target.value))}
              className="w-40 rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            />
            <span className="text-sm text-slate-600">€</span>
          </div>

          <div className="mt-3 h-1.5 w-full rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-[#F59E0B] transition-all"
              style={{ width: `${progressPercent}%` }}
              aria-hidden
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {presetValues.map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setCapital(v)}
                className={`rounded-full border px-3 py-1 text-xs transition ${
                  capital === v
                    ? 'border-[#F59E0B] bg-[#F59E0B]/10 text-[#7a4e03]'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                {v.toLocaleString('fr-FR')} €
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
          <div className="text-sm text-slate-600">Marge théorique annuelle</div>
          <div className="mt-1 text-3xl font-extrabold text-slate-900">
            {estimatedMargin.toLocaleString('fr-FR')} €
          </div>
          <div className="mt-2 text-xs text-slate-500">soit environ {monthlyMargin.toLocaleString('fr-FR')} € / mois</div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-md bg-white p-3 text-center shadow-sm">
              <div className="text-slate-500">Capital</div>
              <div className="font-semibold text-slate-900">{capital.toLocaleString('fr-FR')} €</div>
            </div>
            <div className="rounded-md bg-white p-3 text-center shadow-sm">
              <div className="text-slate-500">Taux appliqué</div>
              <div className="font-semibold text-slate-900">20%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


