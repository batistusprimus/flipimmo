export const metadata = {
  title: 'Parler à un Expert | FlipImmo',
  description: "Remplissez un questionnaire (5 min). Un expert vous rappelle sous 24-48h.",
};

export default function ParlerAUnExpertPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <span className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm">Conseil</span>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-[#1E3A8A] to-[#F59E0B] bg-clip-text text-transparent">Parlons de Votre Projet avec un Expert Certifié</h1>
      <p className="mt-2 max-w-3xl text-slate-700">Vous avez un projet de marchand de biens mais vous ne savez pas par où commencer ? Remplissez notre questionnaire en 5 minutes. Nous analysons votre profil et vous mettons en relation avec l'organisme de formation le plus adapté. Un expert vous contacte sous 24 à 48h.</p>

      {/* Timeline des 3 étapes */}
      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <Step n={1} title="Vous Remplissez le Questionnaire" desc="5 minutes pour nous parler de vous : capital, expérience, objectifs." img="/Visuels/%C3%A9tape%201.png" />
        <Step n={2} title="Nous Analysons Votre Profil" desc="Nous trouvons l'organisme partenaire le plus pertinent pour votre situation." img="/Visuels/%C3%89tape%202.png" />
        <Step n={3} title="Un Expert Vous Contacte" desc="Échange gratuit et personnalisé sous 24-48h pour valider la faisabilité." img="/Visuels/%C3%89tape%203.png" />
      </section>

      {/* Formulaire (iframe GHL si disponible) */}
      <section className="mt-14 border-t border-slate-200 pt-10">
        <h2 className="text-2xl font-bold text-slate-900">Parlez-nous de Votre Projet</h2>
        <p className="mt-2 max-w-3xl text-slate-700">Ces quelques questions sont indispensables pour vous mettre en relation avec l'expert le plus qualifié pour vous accompagner.</p>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-xl ring-1 ring-slate-200/60 backdrop-blur">
          <FallbackQualifForm />
        </div>
        <p className="mt-3 text-xs text-slate-500">En soumettant ce formulaire, vous acceptez d'être recontacté(e) par téléphone par un conseiller d'un organisme partenaire. Échange gratuit, sans engagement. Données confidentielles.</p>
      </section>

      {/* Transparence */}
      <section className="mt-14 border-t border-slate-200 pt-10">
        <h2 className="text-2xl font-bold text-slate-900">Notre Engagement de Transparence</h2>
        <p className="mt-2 max-w-3xl text-slate-700">Notre service de mise en relation est 100% gratuit pour vous. Nous sommes rémunérés par nos organismes de formation partenaires via une commission pour chaque lead qualifié. Ce modèle nous permet de vous offrir un service d'orientation de qualité, sans aucun frais.</p>
      </section>

      {/* Nos partenaires certifiés */}
      <section className="mt-10 rounded-xl border border-slate-200 bg-white/80 p-6 shadow-sm ring-1 ring-slate-200/60 backdrop-blur">
        <h2 className="text-xl font-semibold text-slate-900">Nos partenaires certifiés</h2>
        <div className="mt-4 flex flex-wrap items-center gap-6">
          <img src="/LogosPartenaires/la_relve_incubateur_mdb_cover.jpeg" alt="La Relève (Incubateur MDB)" loading="lazy" className="h-8 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition" />
          <img src="/LogosPartenaires/65d5b161937acbd76be801bc_Logo Greenbull Campus.webp" alt="Greenbull Campus" loading="lazy" className="h-8 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition" />
          <img src="/LogosPartenaires/B3-35b772eb-640w.png" alt="B3" loading="lazy" className="h-8 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition" />
          <img src="/LogosPartenaires/Logo-Axio-1.png" alt="Axio" loading="lazy" className="h-8 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition" />
        </div>
        <p className="mt-3 text-xs text-slate-500">Partenaires sélectionnés, certifiés Qualiopi.</p>
      </section>
    </div>
  );
}

function Step({ n, title, desc, img }: { n: number; title: string; desc: string; img?: string }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-md hover:ring-[#1E3A8A]/20">
      <div className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/20 bg-white/80 backdrop-blur px-2.5 py-0.5 text-[10px] font-medium text-[#1E3A8A] shadow-sm">Étape {n}</div>
      <div className="mt-2 font-semibold text-slate-900">{title}</div>
      <p className="mt-1 text-sm text-slate-700">{desc}</p>
      {img && (
        <div className="mt-3 overflow-hidden rounded-md border">
          <img src={img} alt={title} loading="lazy" className="h-auto w-full object-cover transition group-hover:scale-[1.01]" />
        </div>
      )}
    </div>
  )
}

function FallbackQualifForm() {
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


