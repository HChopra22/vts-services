// app/(site)/services/fire-alarm-technology-supply/page.tsx
import type { Metadata } from "next";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Fire Alarm Technology Supply",
  description:
    "Supply of EN 54 / CPR-certified fire alarm and life safety technologies for regulated and high-risk projects.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Fire Alarm Technology Supply</h1>
      <p className="mt-3 max-w-3xl text-vts-muted">
        VTS supplies certified fire alarm and life safety technologies for regulated and high-risk projects. Our scope
        is limited to EN 54 / CPR-compliant product supply, system-level technical support, and documentation aligned
        to authority approval processes. VTS does not undertake installation, commissioning, or maintenance activities.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "What we supply",
            items: [
              "EN 54 / CPR-certified fire alarm products",
              "Addressable control panels and devices",
              "Wired and wireless detection technologies",
              "Manufacturer-approved system components",
            ],
          },
          {
            title: "Best suited for",
            items: [
              "Regulated and authority-led projects",
              "High-occupancy and complex buildings",
              "Retrofit, heritage, and live environments",
              "Projects requiring reduced false alarms",
            ],
          },
          {
            title: "What we support",
            items: [
              "Product selection and compliance alignment",
              "System architecture and scalability guidance",
              "Authority-ready technical submissions",
              "Coordination with consultants and integrators",
            ],
          },
        ].map((c) => (
          <div key={c.title} className="rounded-3xl border border-vts-border bg-vts-surface p-7 shadow-soft">
            <h2 className="text-lg font-semibold">{c.title}</h2>
            <ul className="mt-4 space-y-2 text-sm text-vts-text">
              {c.items.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-vts-accent" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-3xl border border-vts-border bg-vts-surface p-8 shadow-soft">
        <h2 className="text-xl font-semibold">Typical supply outputs</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            "Certified product data sheets and declarations",
            "EN 54 / CPR compliance documentation",
            "Technical schedules and equipment lists",
            "Authority-ready submission support",
          ].map((d) => (
            <div key={d} className="rounded-2xl border border-vts-border bg-vts-bg p-4 text-sm text-vts-text">
              {d}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <CTA />
      </div>
    </main>
  );
}