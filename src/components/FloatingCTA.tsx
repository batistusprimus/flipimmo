"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingCTA() {
  const pathname = usePathname();
  if (pathname?.startsWith("/merci") || pathname?.startsWith("/parler-a-un-expert")) {
    return null;
  }
  return (
    <>
      <Link
        href="/funnels/landing"
        className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-95 md:hidden"
      >
        Évaluez votre potentiel
      </Link>
      <div className="fixed bottom-5 right-6 z-40 hidden items-center gap-3 rounded-full border border-slate-200 bg-white/95 px-4 py-2 shadow-lg backdrop-blur md:flex">
        <span className="hidden text-sm text-slate-700 lg:inline">Recevez le guide gratuit + votre analyse</span>
        <Link href="/funnels/landing" className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#F59E0B] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95">
          Commencer
        </Link>
      </div>
    </>
  );
}


