'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import FloatingCTA from './FloatingCTA';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Ne pas afficher Header, FloatingCTA et Footer sur les pages de funnels
  const isFunnelPage = pathname?.startsWith('/funnels/');

  return (
    <>
      {!isFunnelPage && (
        <>
          <FloatingCTA />
          <Header />
        </>
      )}
      {children}
      {!isFunnelPage && (
        <footer className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-8 text-sm text-slate-600 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <div className="font-semibold text-slate-900">FlipImmo.fr</div>
              <p className="mt-2">FlipImmo.fr est un site d&apos;information neutre sur le métier de marchand de biens. Nous fournissons des ressources éducatives pour aider les entrepreneurs à évaluer cette opportunité professionnelle en toute objectivité.</p>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/mentions-legales" className="hover:text-[#1E3A8A]">Mentions légales</a>
              <a href="/politique-de-confidentialite" className="hover:text-[#1E3A8A]">Politique de confidentialité</a>
              <a href="/contact" className="hover:text-[#1E3A8A]">Contact</a>
            </div>
            <div className="md:text-right">© {new Date().getFullYear()} FlipImmo.fr - Tous droits réservés</div>
          </div>
        </footer>
      )}
    </>
  );
}

