// app/(site)/services/page.tsx
import type { Metadata } from "next";
import CTA from "@/components/CTA";
import { ServiceCard } from "@/components/ServiceCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Fire alarm installation, maintenance, testing and troubleshooting for commercial and large-scale projects.",
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Services</h1>
      <p className="mt-3 max-w-3xl text-vts-muted">
        We support large-scale delivery with clear scope, structured reporting, and reliable response.
        Use the service pages below to understand what’s included and what we need from you to start.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {site.services.map((s) => (
          <ServiceCard
            key={s.slug}
            title={s.title}
            excerpt={s.excerpt}
            bullets={s.bullets}
            href={`/services/${s.slug}`}
          />
        ))}
      </div>

      <div className="mt-14">
        <CTA />
      </div>
    </main>
  );
}