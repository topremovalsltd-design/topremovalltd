import type { MetadataRoute } from "next";
import { SITE_URL, META } from "@/lib/seo";
import { getPostSlugs } from "@/lib/news";
import { getDbPosts, getAreas } from "@/lib/cms";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPaths = Object.values(META)
    .filter((m) => !m.noindex)
    .map((m) => m.path);

  const filePosts = getPostSlugs().map((s) => `/news/${s}`);
  const dbPosts = (await getDbPosts()).map((p) => `/news/${p.slug}`);
  const areas = (await getAreas()).map((a) => `/areas/${a.slug}`);

  const paths = Array.from(new Set([...staticPaths, ...filePosts, ...dbPosts, ...areas]));

  return paths.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
