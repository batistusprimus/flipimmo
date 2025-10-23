import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import FloatingCTA from "@/components/FloatingCTA";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://flipimmo.fr"),
  title: {
    default: "FlipImmo.fr – Marchand de biens, guide gratuit et évaluation",
    template: "%s • FlipImmo.fr",
  },
  description:
    "Découvrez le métier de Marchand de Biens : évaluez votre potentiel en 5 minutes et recevez un guide complet gratuit.",
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "https://flipimmo.fr/blog/rss" },
  },
  openGraph: {
    type: "website",
    url: "https://flipimmo.fr/",
    title: "FlipImmo.fr – Marchand de biens, guide gratuit et évaluation",
    description:
      "Découvrez le métier de Marchand de Biens : évaluez votre potentiel en 5 minutes et recevez un guide complet gratuit.",
    siteName: "FlipImmo.fr",
    images: [
      { url: "/flipimmo_logo.png", width: 1200, height: 630, alt: "FlipImmo.fr" },
    ],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    site: "@flipimmo",
    title: "FlipImmo.fr – Marchand de biens, guide gratuit et évaluation",
    description:
      "Découvrez le métier de Marchand de Biens : évaluez votre potentiel en 5 minutes et recevez un guide complet gratuit.",
    images: ["/flipimmo_logo.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="h-full bg-white text-slate-800" suppressHydrationWarning>
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "FlipImmo.fr",
              url: "https://flipimmo.fr/",
              logo: "https://flipimmo.fr/flipimmo_logo.png",
              sameAs: [],
            }),
          }}
        />
        <Script id="meta-pixel" strategy="afterInteractive">{`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1881006839146788');
fbq('track', 'PageView');
        `}</Script>
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=1881006839146788&ev=PageView&noscript=1" />
        </noscript>
        <Script
          id="plausible-script"
          strategy="afterInteractive"
          data-domain="flipimmo.fr"
          src="https://plausible.io/js/script.file-downloads.hash.outbound-links.pageview-props.tagged-events.js"
        />
        <Script id="plausible-init" strategy="afterInteractive">{`
window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
        `}</Script>
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
              <a href="/mentions-legales" className="hover:text-[#1E3A8A]">Mentions légales</a>
              <a href="/politique-de-confidentialite" className="hover:text-[#1E3A8A]">Politique de confidentialité</a>
              <a href="/contact" className="hover:text-[#1E3A8A]">Contact</a>
            </div>
            <div className="md:text-right">© {new Date().getFullYear()} FlipImmo.fr - Tous droits réservés</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
