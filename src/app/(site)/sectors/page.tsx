// app/(site)/sectors/page.tsx
import type { Metadata } from "next";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sectors",
  description: "Fire alarm services across commercial, residential, hospitality, industrial and more.",
};

export default function SectorsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Sectors</h1>
      <p className="mt-3 max-w-3xl text-vts-muted">
        We support projects and operational sites across multiple sectors—especially where uptime, safety, and
        documentation matter.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {site.sectors.map((s) => (
          <div
            key={s}
            className="rounded-3xl border border-vts-border bg-vts-surface p-6 shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <div className="text-sm font-semibold">{s}</div>
            <p className="mt-2 text-sm text-vts-muted">
              Delivery tailored to stakeholder needs, access constraints, and programme timelines.
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <CTA />
      </div>
    </main>
  );
}