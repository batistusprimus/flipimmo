import fs from "fs";
import path from "path";
import { marked } from "marked";

export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO string YYYY-MM-DD
  excerpt: string;
  content: string; // HTML rendu depuis le Markdown
  status: "published" | "draft";
};

// Emplacement des fichiers Markdown fournis par l'utilisateur
const BLOG_MD_DIR = path.resolve(process.cwd(), "..", "Blog Post");

// Mapping explicite entre slug et nom de fichier réel (avec accents/espaces)
const SLUG_TO_FILENAME: Array<{ slug: string; filename: string }> = [
  { slug: "combien-gagne-vraiment-un-marchand-de-biens-en-2025", filename: "Combien Gagne VRAIMENT un Marchand de Biens en 2025 ?.md" },
  { slug: "comment-choisir-sa-formation-de-marchand-de-biens-guide-ultime", filename: "Comment Choisir sa Formation de Marchand de Biens : Le Guide Ultime.md" },
  { slug: "comment-devenir-marchand-de-biens-en-2025-guide-complet-de-a-a-z", filename: "Comment Devenir Marchand de Biens en 2025 : Le Guide Complet de A à Z.md" },
  { slug: "comment-trouver-des-biens-decotes-7-canaux-ignores", filename: "Comment Trouver des Biens Décotés : 7 Canaux que les Particuliers Ignorent.md" },
  { slug: "etude-de-cas-199600-eur-de-marge-sur-un-immeuble-a-lisieux", filename: "Étude de Cas : 199 600€ de Marge sur un Immeuble à Lisieux.md" },
  { slug: "financement-marchand-de-biens-obtenir-votre-credit", filename: "Financement Marchand de Biens : Le Guide pour Obtenir Votre Crédit.md" },
  { slug: "les-7-erreurs-fatales-du-marchand-de-biens-debutant", filename: "Les 7 Erreurs Fatales du Marchand de Biens Débutant (et Comment les Éviter).md" },
  { slug: "marchand-de-biens-vs-investisseur-locatif-le-match", filename: "Marchand de Biens vs Investisseur Locatif : Le Match pour Votre Liberté Financière.md" },
  { slug: "sas-ou-sarl-pour-un-marchand-de-biens-comparatif-ultime-2025", filename: "SAS ou SARL pour un Marchand de Biens : Le Comparatif Ultime 2025.md" },
  { slug: "tva-sur-marge-super-pouvoir-fiscal", filename: "TVA sur Marge : Le Super-Pouvoir Fiscal du Marchand de Biens.md" },
];

function readMarkdownFileAbsolute(absolutePath: string): string {
  try {
    return fs.readFileSync(absolutePath, "utf8");
  } catch {
    return "";
  }
}

function extractTitleFromMarkdown(markdown: string): string {
  const lines = markdown.split(/\r?\n/);
  for (const rawLine of lines) {
    const line = rawLine.trim().replace(/^>\s*/, "");
    if (line.startsWith("# ")) {
      return line.replace(/^#\s+/, "").trim();
    }
    if (line.startsWith("## ")) {
      // fallback si pas de H1
      return line.replace(/^##\s+/, "").trim();
    }
  }
  return "Article";
}

function extractExcerptFromMarkdown(markdown: string): string {
  const lines = markdown.split(/\r?\n/);
  for (const rawLine of lines) {
    const line = rawLine.trim().replace(/^>\s*/, "");
    const match = line.match(/\*\*M[ée]ta-description\s*:\s*\*\*\s*(.+)$/i);
    if (match) return match[1].trim();
  }
  // Fallback: première phrase significative
  const noHeading = markdown
    .replace(/^>\s*/gm, "")
    .replace(/^#{1,6}\s.*$/gm, "")
    .replace(/^---$/m, "")
    .trim();
  const firstParagraph = noHeading.split(/\n\n+/)[0] || "";
  return firstParagraph.replace(/\*|`|#/g, "").slice(0, 220).trim();
}

function toIsoDateFromFile(absolutePath: string): string {
  try {
    const stats = fs.statSync(absolutePath);
    const d = new Date(stats.mtime);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

function renderMarkdownToHtml(markdown: string): string {
  return marked.parse(markdown);
}

function loadPost(slug: string, filename: string): BlogPost | null {
  const absolutePath = path.join(BLOG_MD_DIR, filename);
  const md = readMarkdownFileAbsolute(absolutePath);
  if (!md) return null;

  const title = extractTitleFromMarkdown(md);
  const excerpt = extractExcerptFromMarkdown(md);
  const contentHtml = renderMarkdownToHtml(md);
  const date = toIsoDateFromFile(absolutePath);

  return {
    slug,
    title,
    date,
    excerpt,
    content: contentHtml,
    status: "published",
  };
}

function loadAllPosts(): BlogPost[] {
  const items: BlogPost[] = [];
  for (const { slug, filename } of SLUG_TO_FILENAME) {
    const post = loadPost(slug, filename);
    if (post) items.push(post);
  }
  return items
    .filter((p) => p.status === "published")
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPosts(): BlogPost[] {
  return loadAllPosts();
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const map = new Map(SLUG_TO_FILENAME.map((m) => [m.slug, m.filename] as const));
  const filename = map.get(slug);
  if (!filename) return undefined;
  const post = loadPost(slug, filename);
  return post ?? undefined;
}

export function getAllSlugs(): string[] {
  return SLUG_TO_FILENAME.map((m) => m.slug);
}
