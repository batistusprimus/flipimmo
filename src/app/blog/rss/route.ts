import { NextResponse } from "next/server";
import { getAllPosts } from "../posts";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = "https://flipimmo.fr";
  const posts = getAllPosts();

  const items = posts
    .map((p) => {
      const url = `${baseUrl}/blog/${p.slug}`;
      return `\n    <item>\n      <title><![CDATA[${p.title}]]></title>\n      <link>${url}</link>\n      <guid isPermaLink="true">${url}</guid>\n      <pubDate>${new Date(p.date).toUTCString()}</pubDate>\n      <description><![CDATA[${p.excerpt}]]></description>\n    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>FlipImmo.fr – Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Articles sur le métier de Marchand de Biens</description>
    <language>fr-fr</language>${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}


