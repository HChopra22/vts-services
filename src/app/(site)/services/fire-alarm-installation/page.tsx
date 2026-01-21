// app/(site)/services/fire-alarm-installation/page.tsx
import type { Metadata } from "next";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Fire Alarm Installation",
  description:
    "End-to-end fire alarm installation for new builds and refurbishments with clean handover documentation.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Fire Alarm Installation</h1>
      <p className="mt-3 max-w-3xl text-vts-muted">
        We deliver installation for large-scale projects with structured coordination, disciplined quality checks,
        and handover packs that reduce snagging and delays.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "What we do",
            items: ["Survey & scope alignment", "Install & integrate devices", "Support testing/commissioning", "Handover packs"],
          },
          {
            title: "Best for",
            items: ["New builds", "Refurbishments", "Multi-site rollouts", "Fast-track programmes"],
          },
          {
            title: "What we need from you",
            items: ["Drawings/specs (latest)", "Access plan & permits", "Programme milestones", "Points of contact"],
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
        <h2 className="text-xl font-semibold">Typical deliverables</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            "Installation checklist and QA sign-offs",
            "As-built updates (where applicable)",
            "Snag list support and close-out",
            "Handover documentation pack",
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