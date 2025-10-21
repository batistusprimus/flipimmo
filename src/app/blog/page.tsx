export const metadata = {
  title: "Le Blog du Marchand de Biens • FlipImmo.fr",
  description: "Stratégies, analyses de marché, fiscalité, retours d'expérience…",
};

import { getAllPosts } from "./posts";

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Le Blog du Marchand de Biens</h1>
      <p className="mt-3 text-slate-600">Stratégies, analyses de marché, conseils fiscaux, retours d'expérience… Toutes les clés pour comprendre et réussir dans l'achat-revente.</p>

      {/* Article à la Une (si dispo = dernier post) */}
      {posts[0] && (
        <a href={`/blog/${posts[0].slug}`} className="mt-10 block rounded-xl border border-slate-200 bg-white p-6 transition hover:shadow-md">
          <div className="text-xs text-slate-500">{new Date(posts[0].date).toLocaleDateString('fr-FR')}</div>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">À la Une — {posts[0].title}</h2>
          <p className="mt-2 text-slate-700">{posts[0].excerpt}</p>
          <span className="mt-4 inline-block text-sm font-medium text-[#1E3A8A]">Lire l'article →</span>
        </a>
      )}

      {/* Liste des derniers articles */}
      <h3 className="mt-12 text-xl font-semibold text-slate-900">Nos Dernières Publications</h3>
      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        {posts.slice(1).map((post) => (
          <a key={post.slug} href={`/blog/${post.slug}`} className="group rounded-lg border border-slate-200 bg-white p-5 transition hover:shadow-md">
            <div className="text-xs text-slate-500">{new Date(post.date).toLocaleDateString('fr-FR')}</div>
            <h4 className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-[#1E3A8A]">{post.title}</h4>
            <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
            <span className="mt-4 inline-block text-sm font-medium text-[#1E3A8A]">Lire →</span>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12">
        <a href="/blog" className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Voir Tous les Articles</a>
      </div>
    </div>
  );
}


