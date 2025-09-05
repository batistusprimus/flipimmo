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
          <a href="/#metier" className="hover:text-[#1E3A8A]">Le métier</a>
          <a href="/#calculateur" className="hover:text-[#1E3A8A]">Calculateur</a>
          <a href="/#temoignages" className="hover:text-[#1E3A8A]">Témoignages</a>
          <a href="/#faq" className="hover:text-[#1E3A8A]">FAQ</a>
          <Link href="/blog" className="hover:text-[#1E3A8A]">Blog</Link>
        </nav>
        <a href="/#formulaire" className="hidden md:inline-flex items-center justify-center rounded-md bg-[#F59E0B] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95">
          Évaluez votre potentiel
        </a>
      </div>
    </header>
  );
}


