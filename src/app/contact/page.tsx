import ContactForm from "@/components/ContactForm"
export const metadata = {
  title: 'Contact | FlipImmo',
  description: 'Contactez-nous. Réponse sous 24-48h.'
}

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <h1 className="text-2xl font-bold text-slate-900">Contactez-Nous</h1>
      <p className="mt-2 text-slate-600">Une question sur notre site, notre démarche ou un partenariat ? Utilisez le formulaire ci-dessous. Nous nous engageons à vous répondre sous 24 à 48 heures.</p>

      {/* Infos avant contact */}
      <section className="mt-8 space-y-4">
        <InfoCard icon="❓" title="Vous avez une question sur le métier ?" desc={
          <span>La réponse se trouve probablement dans notre <a className="text-[#1E3A8A] hover:underline" href="/faq">FAQ complète</a>. Pour des questions spécifiques sur votre projet, le plus efficace est de <a className="text-[#1E3A8A] hover:underline" href="/parler-a-un-expert">parler à un expert</a>.</span>
        } />
        <InfoCard icon="🧭" title="Vous souhaitez être accompagné ?" desc={
          <span>Nous ne faisons pas de conseil personnalisé directement. Remplissez notre <a className="text-[#1E3A8A] hover:underline" href="/parler-a-un-expert">questionnaire de mise en relation</a>.</span>
        } />
        <InfoCard icon="🤝" title="Partenariats" desc={
          <span>Vous êtes un organisme de formation ? Précisez "Partenariat" dans l'objet de votre message.</span>
        } />
      </section>

      {/* Formulaire (composant client) */}
      <ContactForm />

      {/* Coordonnées */}
      <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white/90 p-5 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200">
        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500" aria-hidden="true" />
        <div className="flex items-start gap-3">
          <span className="mt-0.5 text-lg" aria-hidden="true">📧</span>
          <div>
            <div className="font-semibold text-slate-900">Email</div>
            <a href="mailto:jean@flipimmo.fr" className="text-[#1E3A8A] hover:underline">jean@flipimmo.fr</a>
            <p className="mt-2 text-xs text-slate-500">Nous ne recevons pas de public à nos bureaux. Privilégiez l'email ou le formulaire.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block text-sm font-medium text-slate-700">{label}{children}</label>
  )
}

function InfoCard({ title, desc, icon }: { title: string; desc: React.ReactNode; icon?: string }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white/90 p-5 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500" aria-hidden="true" />
      <div className="flex items-start gap-3">
        {icon ? (<span className="mt-0.5 text-lg" aria-hidden="true">{icon}</span>) : null}
        <div>
          <div className="font-semibold text-slate-900">{title}</div>
          <div className="mt-1">{desc}</div>
        </div>
      </div>
    </div>
  )
}


