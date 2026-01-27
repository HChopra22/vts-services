// app/(site)/sectors/page.tsx
import type { Metadata } from "next";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sectors",
  description: "Certified fire alarm and life safety technology supply across regulated and high-risk sectors.",
};

export default function SectorsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Sectors</h1>
      <p className="mt-3 max-w-3xl text-vts-muted">
        VTS supplies certified fire alarm and life safety technologies across a range of regulated and high-risk sectors. Our role is focused on compliant product supply, system-level technical support, and authority-ready documentation, supporting consultant design, contractor delivery, and regulatory approval.
      </p>

      <div className="mt-8 max-w-4xl rounded-3xl border border-vts-border bg-vts-surface p-6 text-sm text-vts-text">
        <p className="font-medium">Sector approach</p>
        <p className="mt-2 text-vts-muted">
          Each sector presents unique fire risk, occupancy profiles, and authority requirements. VTS supports
          these environments by supplying EN 54 / CPR-compliant fire alarm technologies selected for reliability,
          clarity during incidents, and long-term operational confidence. VTS does not undertake installation,
          commissioning, or maintenance activities.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {site.sectors.map((s) => (
          <div
            key={s}
            className="rounded-3xl border border-vts-border bg-vts-surface p-6 shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <div className="text-sm font-semibold">{s}</div>
            <p className="mt-2 text-sm text-vts-muted">
              Certified technology supply aligned to sector-specific risk, occupancy, and regulatory requirements.
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