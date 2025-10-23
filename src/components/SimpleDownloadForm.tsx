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
        first_name: payload.prenom,
        email: payload.email,
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
    }} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700">Prénom</label>
        <input name="prenom" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Adresse email</label>
        <input name="email" required type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
      </div>
      <button type="submit" className="btn-primary inline-flex items-center justify-center rounded-md bg-[#F59E0B] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-95">Recevoir la Formation Gratuitement</button>
    </form>
  )
}


