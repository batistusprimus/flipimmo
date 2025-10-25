"use client"
import React from 'react'

export default function SimulatorForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-4 sm:grid-cols-2">
      <label className="block text-sm font-medium text-slate-700">Apport (€)
        <input type="number" defaultValue={20000} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
      </label>
      <label className="block text-sm font-medium text-slate-700">Durée (mois)
        <input type="number" defaultValue={24} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
      </label>
      <label className="block text-sm font-medium text-slate-700">Taux (%)
        <input type="number" step="0.01" defaultValue={6} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
      </label>
      <div className="self-end">
        <button className="rounded-md bg-[#1E3A8A] px-4 py-2 text-sm font-semibold text-white">Estimer</button>
      </div>
    </form>
  )
}



