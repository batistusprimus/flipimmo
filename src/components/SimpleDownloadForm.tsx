"use client"
import React from 'react'

export default function SimpleDownloadForm() {
  return (
    <form onSubmit={async (e) => {
      e.preventDefault()
      const form = e.currentTarget as HTMLFormElement
      const fd = new FormData(form)
      const payload = Object.fromEntries(fd.entries()) as Record<string, any>
      const mapped = {
        // GHL-friendly
        first_name: payload.prenom,
        email: payload.email,
        phone: payload.telephone,
        postal_code: payload.codePostal,
        capital_bracket: payload.capital,
        employment_status: payload.situation,
        real_estate_experience: payload.experience,
        start_timeline: payload.delai,
        motivation: payload.motivation,
        optin_date: new Date().toISOString(),
        form_name: 'SimpleDownloadForm',
        ...payload,
      }
      try {
        await fetch('/api/lead-webhook', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(mapped),
        })
      } catch {}
      window.location.href = '/merci'
    }} className="grid gap-4 md:grid-cols-2">
      <div>
        <label className="block text-sm font-medium text-slate-700">Prénom</label>
        <input name="prenom" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Adresse email</label>
        <input name="email" required type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Téléphone</label>
        <input name="telephone" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Code postal</label>
        <input name="codePostal" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-slate-700">Capital disponible</label>
        <select name="capital" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2">
          <option value="">Choisir…</option>
          <option>10 000€ — 20 000€</option>
          <option>20 000€ — 50 000€</option>
          <option>50 000€ — 100 000€</option>
          <option>+100 000€</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Situation professionnelle</label>
        <select name="situation" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2">
          <option value="">Choisir…</option>
          <option>Salarié(e)</option>
          <option>Indépendant(e) / Chef d'entreprise</option>
          <option>Sans emploi</option>
          <option>En reconversion</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Expérience en immobilier</label>
        <select name="experience" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2">
          <option value="">Choisir…</option>
          <option>Aucune</option>
          <option>Propriétaire RP</option>
          <option>Investissements locatifs</option>
          <option>Professionnel</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Délai pour se lancer</label>
        <select name="delai" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2">
          <option value="">Choisir…</option>
          <option>Immédiatement</option>
          <option>1 à 3 mois</option>
          <option>3 à 6 mois</option>
          <option>Plus de 6 mois</option>
        </select>
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-slate-700">Pourquoi voulez-vous devenir marchand de biens ?</label>
        <textarea name="motivation" required rows={4} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
      </div>
      <label className="md:col-span-2 mt-2 flex items-start gap-3">
        <input name="rgpd" value="true" required type="checkbox" className="mt-1" />
        <span className="text-sm text-slate-600">J'accepte de recevoir le guide et des emails de suivi. Politique de confidentialité acceptée.</span>
      </label>
      <div className="md:col-span-2 mt-2">
        <button type="submit" className="btn-primary inline-flex items-center justify-center rounded-md bg-[#F59E0B] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-95">Recevoir la Formation Gratuitement</button>
      </div>
    </form>
  )
}


