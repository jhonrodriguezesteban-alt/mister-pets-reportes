import type { MetadataRoute } from "next";
import { landings } from "@/landings";

const base = "https://misterpets.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/catalogo`, changeFrequency: "weekly", priority: 0.8 },
    ...landings.map((l) => ({ url: `${base}/${l.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
  ];
}
