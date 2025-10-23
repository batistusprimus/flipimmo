import type { MetadataRoute } from "next";
import { getAllSlugs } from "./blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://flipimmo.fr";
  const staticPaths = [
    "",
    "/blog",
    "/formation-gratuite",
    "/parler-a-un-expert",
    "/success-stories",
    "/qui-sommes-nous",
    "/comment-ca-marche",
    "/outils-gratuits",
    "/outils-gratuits/calculateur-rentabilite",
    "/outils-gratuits/checklist-visite",
    "/outils-gratuits/simulateur-financement",
    "/outils-gratuits/template-business-plan",
    "/faq",
    "/glossaire",
    "/ressources",
    "/contact",
    "/mentions-legales",
    "/politique-de-confidentialite",
  ];

  const now = new Date();
  const pages: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${baseUrl}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7,
  }));

  const blogSlugs = getAllSlugs();
  const blogItems: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...pages, ...blogItems];
}


