import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "FlipImmo.fr – Marchand de biens, guide gratuit et évaluation",
  description:
    "Découvrez le métier de Marchand de Biens : évaluez votre potentiel en 5 minutes et recevez un guide complet gratuit.",
  icons: {
    icon: "/FliImmologotransparent.png",
    apple: "/FliImmologotransparent.png",
    shortcut: "/FliImmologotransparent.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="h-full bg-white text-slate-800" suppressHydrationWarning>
      <body className="min-h-full">
        <FloatingCTA />
        <Header />
        <main>{children}</main>
        <footer className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-8 text-sm text-slate-600 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <div className="font-semibold text-slate-900">FlipImmo.fr</div>
              <p className="mt-2">FlipImmo.fr est un site d'information neutre sur le métier de marchand de biens. Nous fournissons des ressources éducatives pour aider les entrepreneurs à évaluer cette opportunité professionnelle en toute objectivité.</p>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:text-[#1E3A8A]">Mentions légales</a>
              <a href="#" className="hover:text-[#1E3A8A]">Politique de confidentialité</a>
              <a href="#" className="hover:text-[#1E3A8A]">Contact</a>
            </div>
            <div className="md:text-right">© {new Date().getFullYear()} FlipImmo.fr - Tous droits réservés</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
