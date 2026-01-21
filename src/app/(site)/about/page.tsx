// app/(site)/about/page.tsx
import type { Metadata } from "next";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About VTS Services — fire alarm service provider based in the UAE with international delivery for large-scale projects.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">About {site.name}</h1>
      <p className="mt-3 max-w-3xl text-vts-muted">
        {site.name} is a fire alarm service provider based in the UAE, built to support large-scale projects and
        complex operational environments. We focus on disciplined delivery, clear reporting, and dependable response.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "How we work",
            items: [
              "Clear scope and deliverables",
              "Stakeholder coordination",
              "Quality checks and traceable records",
              "Practical recommendations (not fluff)",
            ],
          },
          {
            title: "What we prioritise",
            items: ["Compliance and safety", "Site uptime", "Fast, clean communication", "Repeat-fault prevention"],
          },
          {
            title: "Who we support",
            items: ["Contractors", "Consultants", "Facilities teams", "Property managers"],
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