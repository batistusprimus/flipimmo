"use client"
import { useState } from 'react'
import { useForm, FormProvider, useFormContext, type FieldValues } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'

const step1Schema = z.object({ capital: z.string().min(1), situation: z.string().min(1) })
const step2Schema = z.object({ temps: z.string().min(1), delai: z.string().min(1) })
const step3Schema = z.object({ motivation: z.string().min(1), experience: z.string().min(1) })
const step4Schema = z.object({
  prenom: z.string().min(2),
  nom: z.string().min(2),
  email: z.string().email(),
  telephone: z.string().min(6),
  codePostal: z.string().min(4),
  rgpd: z.literal(true, { message: 'Requis' }),
})

const schema = step1Schema.merge(step2Schema).merge(step3Schema).merge(step4Schema)
type FormValues = z.infer<typeof schema>

const steps = ['Situation financière', 'Disponibilité', 'Motivation & expérience', 'Coordonnées']

export default function LeadForm() {
  const router = useRouter()
  const methods = useForm<FormValues>({ resolver: zodResolver(schema), mode: 'onTouched' })
  const [step, setStep] = useState(0)
  const fieldsByStep: (keyof FormValues)[][] = [
    ['capital', 'situation'],
    ['temps', 'delai'],
    ['motivation', 'experience'],
    ['prenom', 'nom', 'email', 'telephone', 'codePostal', 'rgpd'],
  ]

  const next = async () => {
    const isValid = await methods.trigger(fieldsByStep[step] as any)
    if (!isValid) return
    if (step < steps.length - 1) setStep(step + 1)
  }
  const prev = () => setStep((s) => Math.max(0, s - 1))
  const onSubmit = (data: FormValues) => {
    console.log('Lead data', data)
    router.push('/merci')
  }

  const progress = Math.round(((step + 1) / steps.length) * 100)

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="card p-6">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-slate-700">Progression</div>
            <div className="text-sm text-slate-600">{progress}%</div>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded bg-slate-100">
            <div className="h-full bg-[#F59E0B]" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {step === 0 && <Step1 />}
        {step === 1 && <Step2 />}
        {step === 2 && <Step3 />}
        {step === 3 && <Step4 />}

        <div className="mt-6 flex items-center justify-between">
          <button type="button" onClick={prev} className="text-sm text-slate-600 disabled:opacity-40" disabled={step === 0}>Retour</button>
          {step < steps.length - 1 ? (
            <button type="button" onClick={next} className="btn-secondary">Continuer</button>
          ) : (
            <button type="submit" className="btn-primary">Recevoir mon guide gratuit</button>
          )}
        </div>
      </form>
    </FormProvider>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="text-sm font-medium text-slate-700">{label}</div>
      <div className="mt-2">{children}</div>
    </label>
  )
}
function Error({ name }: { name: keyof FormValues }) {
  const { formState } = useFormContextSafe<FormValues>()
  const msg = formState.errors[name]?.message as string | undefined
  if (!msg) return null
  return <div className="mt-1 text-xs text-red-600">{msg}</div>
}
function useFormContextSafe<T extends FieldValues>() { return useFormContext<T>() }

function Step1() {
  const { register } = useFormContextSafe<FormValues>()
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Field label="Quel capital pourriez-vous mobiliser pour démarrer ?">
        <select {...register('capital')} className="w-full rounded-md border border-slate-300 px-3 py-2">
          <option value="">Choisir…</option>
          <option>10 000€ - 20 000€</option>
          <option>20 000€ - 50 000€</option>
          <option>50 000€ - 100 000€</option>
          <option>Plus de 100 000€</option>
        </select>
        <Error name="capital" />
      </Field>
      <Field label="Quelle est votre situation professionnelle actuelle ?">
        <select {...register('situation')} className="w-full rounded-md border border-slate-300 px-3 py-2">
          <option value="">Choisir…</option>
          <option>Salarié(e)</option>
          <option>Indépendant(e) / Chef d'entreprise</option>
          <option>En recherche d'emploi</option>
          <option>Étudiant(e)</option>
          <option>Retraité(e)</option>
          <option>Autre</option>
        </select>
        <Error name="situation" />
      </Field>
    </div>
  )
}

function Step2() {
  const { register } = useFormContextSafe<FormValues>()
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Field label="Combien de temps pourriez-vous consacrer par semaine ?">
        <select {...register('temps')} className="w-full rounded-md border border-slate-300 px-3 py-2">
          <option value="">Choisir…</option>
          <option>1 à 3 heures</option>
          <option>3 à 5 heures</option>
          <option>5 à 10 heures</option>
          <option>Plus de 10 heures</option>
        </select>
        <Error name="temps" />
      </Field>
      <Field label="Dans quel délai souhaiteriez-vous commencer ?">
        <select {...register('delai')} className="w-full rounded-md border border-slate-300 px-3 py-2">
          <option value="">Choisir…</option>
          <option>Immédiatement</option>
          <option>Dans 1 à 3 mois</option>
          <option>Dans 3 à 6 mois</option>
          <option>Dans plus de 6 mois</option>
        </select>
        <Error name="delai" />
      </Field>
    </div>
  )
}

function Step3() {
  const { register } = useFormContextSafe<FormValues>()
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Field label="Quel est votre objectif principal dans ce métier ?">
        <select {...register('motivation')} className="w-full rounded-md border border-slate-300 px-3 py-2">
          <option value="">Choisir…</option>
          <option>Lancer une activité complémentaire</option>
          <option>Changer de carrière vers l'immobilier</option>
          <option>Maximiser la rentabilité de mon capital</option>
          <option>Développer une activité à plein temps</option>
          <option>Mieux comprendre le métier avant de me lancer</option>
          <option>Autre</option>
        </select>
        <Error name="motivation" />
      </Field>
      <Field label="Quel est votre niveau d'expérience en immobilier ?">
        <select {...register('experience')} className="w-full rounded-md border border-slate-300 px-3 py-2">
          <option value="">Choisir…</option>
          <option>Débutant complet</option>
          <option>Quelques connaissances</option>
          <option>Expérience en investissement locatif</option>
          <option>Professionnel du secteur</option>
        </select>
        <Error name="experience" />
      </Field>
    </div>
  )
}

function Step4() {
  const { register } = useFormContextSafe<FormValues>()
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Field label="Prénom">
        <input {...register('prenom')} className="w-full rounded-md border border-slate-300 px-3 py-2" />
        <Error name="prenom" />
      </Field>
      <Field label="Nom">
        <input {...register('nom')} className="w-full rounded-md border border-slate-300 px-3 py-2" />
        <Error name="nom" />
      </Field>
      <Field label="Email">
        <input type="email" {...register('email')} className="w-full rounded-md border border-slate-300 px-3 py-2" />
        <Error name="email" />
      </Field>
      <Field label="Téléphone">
        <input {...register('telephone')} className="w-full rounded-md border border-slate-300 px-3 py-2" />
        <Error name="telephone" />
      </Field>
      <Field label="Code postal">
        <input {...register('codePostal')} className="w-full rounded-md border border-slate-300 px-3 py-2" />
        <Error name="codePostal" />
      </Field>
      <label className="mt-2 flex items-start gap-3 md:col-span-2">
        <input type="checkbox" {...register('rgpd')} className="mt-1" />
        <span className="text-sm text-slate-600">J’accepte que mes informations soient utilisées pour recevoir le guide gratuit et une évaluation personnalisée.</span>
      </label>
      <Error name="rgpd" />
    </div>
  )
}


