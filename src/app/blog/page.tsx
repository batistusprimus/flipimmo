export const metadata = {
  title: "Blog • FlipImmo.fr",
  description: "Conseils et ressources pour devenir Marchand de Biens.",
};

import { getAllPosts } from "./posts";

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Blog
      </h1>
      <p className="mt-3 text-slate-600">
        Conseils pratiques, retours d'expérience et outils pour réussir vos opérations.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-lg border border-slate-200 bg-white p-5 transition hover:shadow-md"
          >
            <div className="text-xs text-slate-500">{new Date(post.date).toLocaleDateString("fr-FR")}</div>
            <h2 className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-[#1E3A8A]">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
            <span className="mt-4 inline-block text-sm font-medium text-[#1E3A8A]">Lire →</span>
          </a>
        ))}
      </div>
    </div>
  );
}


