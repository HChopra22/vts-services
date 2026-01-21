// app/sitemap.ts
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;

  const routes = [
    "",
    "/services",
    "/services/fire-alarm-installation",
    "/services/fire-alarm-maintenance",
    "/services/fire-alarm-testing-inspection",
    "/services/fire-alarm-troubleshooting-repairs",
    "/sectors",
    "/projects",
    "/about",
    "/contact",
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}