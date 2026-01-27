// app/(site)/about/page.tsx
import type { Metadata } from "next";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About VTS Services — specialist supplier of certified fire alarm and life safety technologies for regulated projects.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">About {site.name}</h1>
      <p className="mt-3 max-w-3xl text-vts-muted">
        {site.name} is a specialist supplier of certified fire alarm and life safety technologies, supporting regulated and high-risk projects across the UAE and international markets. We operate exclusively at technology and systems level, supplying EN 54 / CPR-compliant products backed by full manufacturer documentation and authority-ready submissions. VTS does not undertake installation, commissioning, or maintenance activities.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "How we work",
            items: [
              "Technology-first scope with no installation role",
              "Approved manufacturer coordination",
              "Certified product supply with full traceability",
              "Clear documentation aligned to authority approval processes",
            ],
          },
          {
            title: "What we prioritise",
            items: [
              "Life safety and regulatory compliance",
              "Reduction of false and unwanted alarms",
              "Operational clarity during incidents",
              "Long-term system reliability",
            ],
          },
          {
            title: "Who we support",
            items: [
              "Civil Defence and authorities",
              "Consultants and designers",
              "Developers and asset owners",
              "Main contractors and integrators",
            ],
          },
        ].map((c) => (
          <div key={c.title} className="rounded-3xl border border-vts-border bg-vts-surface p-7 shadow-soft transition-transform hover:-translate-y-0.5">
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

      <div className="mt-14">
        <CTA />
      </div>
    </main>
  );
}