import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls = [
    "why-confidence-matters-more-than-grammar",
    "speak-english-confidently-beginner",
    "top-25-hr-interview-questions",
    "7-daily-habits-improve-english",
    "self-introduction-interview-guide",
  ];

  return [
    {
      url: "https://www.unmutepro.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.unmutepro.com/resources",
      lastModified: new Date("2026-08-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.unmutepro.com/assessment",
      lastModified: new Date("2026-08-02"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.unmutepro.com/blog",
      lastModified: new Date("2026-08-01"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogUrls.map((slug) => ({
      url: `https://www.unmutepro.com/blog/${slug}`,
      lastModified: new Date("2026-08-01"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

