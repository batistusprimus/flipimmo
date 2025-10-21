export const metadata = {
  title: 'Politique de Confidentialité | FlipImmo',
  description: 'Informations sur la collecte, l’utilisation et la protection de vos données.',
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Politique de Confidentialité</h1>
      <p className="mt-2 text-slate-700">Cette page résume notre approche de protection des données. Vous pouvez nous contacter pour toute question ou demande d’accès/suppression.</p>
      <div className="mt-6 space-y-4 text-sm text-slate-700">
        <p>1. Responsable du traitement : FlipImmo.fr.</p>
        <p>2. Données collectées : coordonnées et informations projet via formulaires. Finalités : envoi du guide, prise de contact, qualification.</p>
        <p>3. Base légale : consentement et intérêt légitime (information/qualification).</p>
        <p>4. Durées de conservation : limitées au nécessaire pour les finalités indiquées.</p>
        <p>5. Partage : uniquement avec un partenaire unique pertinent après votre accord.</p>
        <p>6. Vos droits : accès, rectification, effacement, opposition, portabilité.</p>
        <p>7. Contact : <a className="text-[#1E3A8A] hover:underline" href="mailto:jean@flipimmo.fr">jean@flipimmo.fr</a></p>
      </div>
    </div>
  )
}


