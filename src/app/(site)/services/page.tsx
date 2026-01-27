// app/(site)/services/page.tsx
import type { Metadata } from "next";
import CTA from "@/components/CTA";
import { ServiceCard } from "@/components/ServiceCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Certified fire alarm and life safety technology supply, specification support and authority-ready documentation for regulated projects.",
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Technology & Supply Services</h1>
      <p className="mt-3 max-w-3xl text-vts-muted">
        VTS supplies certified fire alarm and life safety technologies for large-scale and regulated projects. We operate exclusively at technology and systems level, supporting consultants, contractors and authorities with EN 54 / CPR-compliant products, specification support, and documentation aligned to approval processes. VTS does not provide installation, commissioning, or maintenance services.
      </p>

      <div className="mt-8 max-w-4xl rounded-3xl border border-vts-border bg-vts-surface p-6 text-sm text-vts-text">
        <p className="font-medium">Scope clarity</p>
        <p className="mt-2 text-vts-muted">
          VTS is a fire protection technology supplier. Our scope is limited to certified product supply,
          system-level technical support, and compliance documentation. Installation, commissioning,
          and maintenance activities are carried out by appointed contractors and integrators.
        </p>
      </div>

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