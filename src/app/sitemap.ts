import type { MetadataRoute } from "next";
import { categoryToProductSlug } from "@/data/site";
import { SITE_URL } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/produk`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/tentang-kami`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/tracking-order`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  const productRoutes: MetadataRoute.Sitemap = Object.keys(categoryToProductSlug).map((slug) => ({
    url: `${SITE_URL}/produk/${slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes];
}
