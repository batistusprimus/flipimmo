"use client"
import React from 'react'

export default function ContactForm() {
  return (
    <section className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white/90 p-6 shadow-sm ring-1 ring-slate-200">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500" aria-hidden="true" />
      <h2 className="text-lg font-semibold text-slate-900">Envoyez-Nous un Message</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const fd = new FormData(e.currentTarget as HTMLFormElement)
          if (fd.get('website')) { return }
          window.location.href = '/merci'
        }}
        className="mt-4 grid gap-4"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Prénom *">
            <input name="prenom" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm outline-none transition focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20" />
          </Field>
          <Field label="Nom *">
            <input name="nom" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm outline-none transition focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20" />
          </Field>
        </div>
        <Field label="Adresse Email *">
          <input name="email" required type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm outline-none transition focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20" />
        </Field>
        <Field label="Sujet *">
          <select name="sujet" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm outline-none transition focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20">
            <option>Question sur le site</option>
            <option>Problème technique</option>
            <option>Proposition de partenariat</option>
            <option>Autre</option>
          </select>
        </Field>
        <Field label="Votre message *">
          <textarea name="message" required rows={5} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm outline-none transition focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20" />
        </Field>
        {/* Honeypot anti-spam (champ masqué) */}
        <div className="hidden" aria-hidden="true">
          <label className="block text-sm font-medium text-slate-700">Site web
            <input name="website" autoComplete="off" tabIndex={-1} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
          </label>
        </div>
        <label className="mt-2 flex items-start gap-3">
          <input required type="checkbox" className="mt-1" />
          <span className="text-sm text-slate-600">J'ai lu les informations ci-dessus et j'accepte la politique de confidentialité du site.</span>
        </label>
        <div>
          <button className="btn-primary inline-flex items-center justify-center rounded-md bg-[#1E3A8A] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#182c70] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30">Envoyer le Message
            <svg aria-hidden="true" viewBox="0 0 20 20" className="ml-2 h-4 w-4"><path fill="currentColor" d="M2.94 3.94a.75.75 0 0 1 .78-.18l12 4a.75.75 0 0 1 0 1.4l-12 4A.75.75 0 0 1 2 12.5v-9a.75.75 0 0 1 .94-.56Z"/></svg>
          </button>
          <p className="mt-2 text-xs text-slate-500">Réponse sous 24–48h (lun–ven). Anti‑spam actif ; vos données ne sont jamais revendues.</p>
        </div>
      </form>
    </section>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block text-sm font-medium text-slate-700">{label}{children}</label>
  )
}


