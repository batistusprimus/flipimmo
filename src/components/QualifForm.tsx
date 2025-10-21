"use client"
import React from 'react'

export default function QualifForm() {
  return (
    <form onSubmit={(e) => { e.preventDefault(); window.location.href = '/merci' }} className="grid gap-4 md:grid-cols-2">
      <div>
        <label className="block text-sm font-medium text-slate-700">Prénom</label>
        <input required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Nom</label>
        <input required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Adresse email</label>
        <input required type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Téléphone</label>
        <input required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]" />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-slate-700">Capital disponible</label>
        <select required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]">
          <option value="">Choisir…</option>
          <option>Moins de 10 000€</option>
          <option>10 000€ — 30 000€</option>
          <option>30 000€ — 50 000€</option>
          <option>Plus de 50 000€</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Situation professionnelle</label>
        <select required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]">
          <option value="">Choisir…</option>
          <option>Salarié(e)</option>
          <option>Indépendant(e) / Chef d'entreprise</option>
          <option>Sans emploi</option>
          <option>Étudiant(e)</option>
          <option>Retraité(e)</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Expérience en immobilier</label>
        <select required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]">
          <option value="">Choisir…</option>
          <option>Aucune</option>
          <option>Propriétaire RP</option>
          <option>Investissements locatifs</option>
          <option>Professionnel</option>
        </select>
      </div>
      <label className="md:col-span-2 mt-2 flex items-start gap-3">
        <input required type="checkbox" className="mt-1" />
        <span className="text-sm text-slate-600">J'accepte d'être recontacté(e) par téléphone par un conseiller d'un de vos organismes partenaires, pour un échange gratuit et sans engagement. J'ai lu et j'accepte la politique de confidentialité.</span>
      </label>
      <div className="md:col-span-2 mt-2">
        <button type="submit" className="btn-primary inline-flex items-center justify-center rounded-md bg-[#1E3A8A] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A]">Envoyer ma Demande et Parler à un Expert</button>
      </div>
    </form>
  )
}


