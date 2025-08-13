import type { MetadataRoute } from "next";
import { SITES } from "@/data/sites";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/map`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/sites`, changeFrequency: "monthly", priority: 0.8 },
  ];

  const siteEntries: MetadataRoute.Sitemap = SITES.map((s) => ({
    url: `${base}/sites/${s.slug}`,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticEntries, ...siteEntries];
}


