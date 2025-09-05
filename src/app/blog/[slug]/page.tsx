import { getAllSlugs, getPostBySlug } from "../posts";
import type { Metadata } from "next";

type Params = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article non trouvé • FlipImmo.fr" };
  return {
    title: `${post.title} • FlipImmo.fr`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt },
  };
}

export default function BlogPostPage({ params }: Params) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return (
      <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <h1 className="text-2xl font-bold">Article introuvable</h1>
        <p className="mt-2 text-slate-600">Le contenu que vous cherchez n'existe pas.</p>
      </div>
    );
  }

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="text-xs text-slate-500">
        {new Date(post.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}
      </div>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{post.title}</h1>
      <div className="prose prose-slate mt-6 max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}


