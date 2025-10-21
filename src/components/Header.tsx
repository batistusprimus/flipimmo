"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="FlipImmo.fr">
      <img src="/FliImmologotransparent.png" alt="FlipImmo.fr" className="h-10 sm:h-12 md:h-14 w-auto" />
      <span className="sr-only">FlipImmo.fr</span>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
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
            <div className="invisible absolute left-0 top-full z-40 mt-2 w-56 rounded-lg border border-slate-200 bg-white p-2 text-sm text-slate-700 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
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
      </div>
    </header>
  );
}


