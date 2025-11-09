import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import AppProviders from "@/components/providers/AppProviders";
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
      <head>
        <Script id="truconversion" strategy="beforeInteractive">{`
var _tip = _tip || [];
(function(d,s,id){
    var js, tjs = d.getElementsByTagName(s)[0];
    if(d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.async = true;
    js.src = d.location.protocol + '//app.truconversion.com/ti-js/56918/3e4a3.js';
    tjs.parentNode.insertBefore(js, tjs);
}(document, 'script', 'ti-js'));
        `}</Script>
        <Script id="mixpanel-snippet" strategy="beforeInteractive">{`
(function(e,c){if(!c.__SV){var l,h;window.mixpanel=c;c._i=[];c.init=function(q,r,f){function t(d,a){var g=a.split(".");2==g.length&&(d=d[g[0]],a=g[1]);d[a]=function(){d.push([a].concat(Array.prototype.slice.call(arguments,0)))}}var b=c;"undefined"!==typeof f?b=c[f]=[]:f="mixpanel";b.people=b.people||[];b.toString=function(d){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);d||(a+=" (stub)");return a};b.people.toString=function(){return b.toString(1)+".people (stub)"};l="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders start_session_recording stop_session_recording people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
for(h=0;h<l.length;h++)t(b,l[h]);var n="set set_once union unset remove delete".split(" ");b.get_group=function(){function d(p){a[p]=function(){b.push([g,[p].concat(Array.prototype.slice.call(arguments,0))])}}for(var a={},g=["get_group"].concat(Array.prototype.slice.call(arguments,0)),m=0;m<n.length;m++)d(n[m]);return a};c._i.push([q,r,f])};c.__SV=1.2;var k=e.createElement("script");k.type="text/javascript";k.async=!0;k.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";e=e.getElementsByTagName("script")[0];e.parentNode.insertBefore(k,e)}})(document,window.mixpanel||[]);
mixpanel.init('a91d3ee4f12c360c3c3316f359a3b139', {
  autocapture: true,
  record_sessions_percent: 100,
  api_host: 'https://api-eu.mixpanel.com'
});
        `}</Script>
      </head>
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
        <AppProviders>
          <ClientLayout>
            <main>{children}</main>
          </ClientLayout>
        </AppProviders>
      </body>
    </html>
  );
}
