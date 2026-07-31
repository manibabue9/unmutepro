import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.unmutepro.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.unmutepro.com/blog",
      lastModified: new Date("2026-08-01"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.unmutepro.com/blog/why-confidence-matters-more-than-grammar",
      lastModified: new Date("2026-08-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
