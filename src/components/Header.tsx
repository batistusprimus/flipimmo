"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="FlipImmo.fr">
      <Image
        src="/FliImmologotransparent.png"
        alt="FlipImmo.fr"
        width={160}
        height={56}
        priority
        sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 160px"
        className="h-10 sm:h-12 md:h-14 w-auto"
      />
      <span className="sr-only">FlipImmo.fr</span>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  // Fermer le menu mobile lors d'un changement de route
  useEffect(() => {
    if (mobileOpen) setMobileOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Fermer avec la touche Échap
  useEffect(() => {
    if (!mobileOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  // Réinitialiser l'accordéon lorsque le menu mobile se ferme
  useEffect(() => {
    if (!mobileOpen && resourcesOpen) setResourcesOpen(false);
  }, [mobileOpen, resourcesOpen]);
  if (pathname?.startsWith("/merci")) {
    return null;
  }
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:py-4 lg:px-8">
        <Logo />
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/formation-gratuite" className="hover:text-[#1E3A8A]">Formation</Link>
          <Link href="/parler-a-un-expert" className="hover:text-[#1E3A8A]">Parler à un expert</Link>
          <Link href="/success-stories" className="hover:text-[#1E3A8A]">Success Stories</Link>
          <Link href="/qui-sommes-nous" className="hover:text-[#1E3A8A]">Qui sommes-nous</Link>
          <Link href="/comment-ca-marche" className="hover:text-[#1E3A8A]">Comment ça marche</Link>
          <div className="relative group">
            <button className="inline-flex items-center gap-1 hover:text-[#1E3A8A]" aria-haspopup="true" aria-expanded="false">
              Ressources
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 1 1 1.04 1.08l-4.24 3.36a.75.75 0 0 1-.94 0L5.21 8.31a.75.75 0 0 1 .02-1.1z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full z-40 w-56 rounded-lg border border-slate-200 bg-white p-2 text-sm text-slate-700 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              <Link href="/faq" className="block rounded-md px-3 py-2 hover:bg-slate-50">FAQ</Link>
              <Link href="/outils-gratuits" className="block rounded-md px-3 py-2 hover:bg-slate-50">Outils</Link>
              <Link href="/ressources" className="block rounded-md px-3 py-2 hover:bg-slate-50">Ressources</Link>
              <Link href="/blog" className="block rounded-md px-3 py-2 hover:bg-slate-50">Blog</Link>
              <Link href="/se-former" className="block rounded-md px-3 py-2 hover:bg-slate-50">Se Former</Link>
            </div>
          </div>
        </nav>
        <a href="/#formulaire" className="hidden md:inline-flex items-center justify-center rounded-md bg-[#F59E0B] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95">
          Évaluez votre potentiel
        </a>
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A]"
          aria-label="Ouvrir le menu"
          aria-controls="mobile-menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            // Icône de fermeture
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Icône hamburger
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
          <span className="sr-only">Menu</span>
        </button>
      </div>
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 left-0 right-0 bg-white border-b border-slate-200 shadow-lg">
            <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
              <nav id="mobile-menu" className="flex flex-col gap-1 text-base font-medium">
                <Link href="/formation-gratuite" className="rounded-md px-3 py-2 hover:bg-slate-50">Formation</Link>
                <Link href="/parler-a-un-expert" className="rounded-md px-3 py-2 hover:bg-slate-50">Parler à un expert</Link>
                <Link href="/success-stories" className="rounded-md px-3 py-2 hover:bg-slate-50">Success Stories</Link>
                <Link href="/qui-sommes-nous" className="rounded-md px-3 py-2 hover:bg-slate-50">Qui sommes-nous</Link>
                <Link href="/comment-ca-marche" className="rounded-md px-3 py-2 hover:bg-slate-50">Comment ça marche</Link>
                <div className="my-2 h-px bg-slate-200" />
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 hover:bg-slate-50"
                  aria-controls="mobile-resources"
                  aria-expanded={resourcesOpen}
                  onClick={() => setResourcesOpen((v) => !v)}
                >
                  <span className="text-left font-semibold text-slate-700">Ressources</span>
                  <svg className={`h-5 w-5 transition-transform ${resourcesOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 1 1 1.04 1.08l-4.24 3.36a.75.75 0 0 1-.94 0L5.21 8.31a.75.75 0 0 1 .02-1.1z" clipRule="evenodd" />
                  </svg>
                </button>
                <div
                  id="mobile-resources"
                  aria-hidden={!resourcesOpen}
                  className={`${resourcesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden transition-all duration-300`}
                >
                  <Link href="/faq" className="block rounded-md px-6 py-2 hover:bg-slate-50">FAQ</Link>
                  <Link href="/outils-gratuits" className="block rounded-md px-6 py-2 hover:bg-slate-50">Outils</Link>
                  <Link href="/ressources" className="block rounded-md px-6 py-2 hover:bg-slate-50">Ressources</Link>
                  <Link href="/blog" className="block rounded-md px-6 py-2 hover:bg-slate-50">Blog</Link>
                  <Link href="/se-former" className="block rounded-md px-6 py-2 hover:bg-slate-50">Se Former</Link>
                </div>
                <a href="/#formulaire" className="mt-2 inline-flex items-center justify-center rounded-md bg-[#F59E0B] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95">
                  Évaluez votre potentiel
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


