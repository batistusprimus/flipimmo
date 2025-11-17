"use client"
import React, { useEffect, useRef } from 'react'

import { identifyUser, trackFormStart, trackFormStep, trackLeadSubmitted } from '@/lib/analytics/mixpanel'
import { createEventId } from '@/lib/analytics/event-id'

const formMeta = {
  id: 'qualif-form',
  name: 'QualifForm',
  firstStepId: 'qualif_step_form',
}

export default function QualifForm() {
  const eventIdRef = useRef(createEventId('qualif-form'))
  const pathRef = useRef<string | undefined>()
  const hasTrackedStartRef = useRef(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      pathRef.current = window.location.pathname
    }
    if (hasTrackedStartRef.current) return

    trackFormStart({
      eventId: eventIdRef.current,
      formId: formMeta.id,
      formName: formMeta.name,
      path: pathRef.current,
      firstStepId: formMeta.firstStepId,
      totalSteps: 1,
    })

    hasTrackedStartRef.current = true
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries()) as Record<string, any>
    const mapped = {
      // GHL-friendly keys
      first_name: payload.prenom,
      last_name: payload.nom,
      email: payload.email,
      phone: payload.telephone,
      postal_code: payload.codePostal,
      capital_bracket: payload.capital,
      employment_status: payload.situation,
      real_estate_experience: payload.experience,
      start_timeline: payload.delai,
      motivation: payload.motivation,
      optin_date: new Date().toISOString(),
      // original french keys kept for flexible mapping
      ...payload,
      form_name: 'Parler à un expert - QualifForm',
    }
    trackFormStep(1, {
      eventId: eventIdRef.current,
      formId: formMeta.id,
      formName: formMeta.name,
      path: pathRef.current,
      stepId: formMeta.firstStepId,
      stepTitle: 'Qualif – Formulaire',
      values: payload,
    })
    identifyUser(payload.email ?? payload.telephone ?? eventIdRef.current, {
      email: payload.email,
      phone: payload.telephone,
      firstName: payload.prenom,
      lastName: payload.nom,
    })
    try {
      await fetch('/api/lead-webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mapped),
      })
    } catch (err) {
      // noop: on redirige quand même
    } finally {
      trackLeadSubmitted({
        ...mapped,
        eventId: eventIdRef.current,
        formId: formMeta.id,
        formName: formMeta.name,
        path: pathRef.current,
        stepId: formMeta.firstStepId,
      })
      window.location.href = '/merci'
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
      <div>
        <label className="block text-sm font-medium text-slate-700">Prénom</label>
        <input name="prenom" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Nom</label>
        <input name="nom" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Adresse email</label>
        <input name="email" required type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Téléphone</label>
        <input name="telephone" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Code postal</label>
        <input name="codePostal" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]" />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-slate-700">Capital disponible</label>
        <select name="capital" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]">
          <option value="">Choisir…</option>
          <option>10 000€ — 20 000€</option>
          <option>20 000€ — 50 000€</option>
          <option>50 000€ — 100 000€</option>
          <option>+100 000€</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Situation professionnelle</label>
        <select name="situation" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]">
          <option value="">Choisir…</option>
          <option>Salarié(e)</option>
          <option>Indépendant(e) / Chef d'entreprise</option>
          <option>Sans emploi</option>
          <option>En reconversion</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Expérience en immobilier</label>
        <select name="experience" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]">
          <option value="">Choisir…</option>
          <option>Aucune</option>
          <option>Propriétaire RP</option>
          <option>Investissements locatifs</option>
          <option>Professionnel</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Délai pour se lancer</label>
        <select name="delai" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]">
          <option value="">Choisir…</option>
          <option>Immédiatement</option>
          <option>1 à 3 mois</option>
          <option>3 à 6 mois</option>
          <option>Plus de 6 mois</option>
        </select>
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-slate-700">Pourquoi voulez-vous devenir marchand de biens ?</label>
        <textarea name="motivation" required rows={4} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]" />
      </div>
      <label className="md:col-span-2 mt-2 flex items-start gap-3">
        <input name="rgpd" value="true" required type="checkbox" className="mt-1" />
        <span className="text-sm text-slate-600">J'accepte d'être recontacté(e) par téléphone par un conseiller d'un de vos organismes partenaires, pour un échange gratuit et sans engagement. J'ai lu et j'accepte la politique de confidentialité.</span>
      </label>
      <div className="md:col-span-2 mt-2">
        <button type="submit" className="btn-primary inline-flex items-center justify-center rounded-md bg-[#1E3A8A] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A]">Envoyer ma Demande et Parler à un Expert</button>
      </div>
    </form>
  )
}


