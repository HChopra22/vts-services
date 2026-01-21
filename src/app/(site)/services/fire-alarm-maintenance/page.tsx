// app/(site)/services/fire-alarm-maintenance/page.tsx
import type { Metadata } from "next";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Fire Alarm Maintenance (AMC)",
  description:
    "Planned preventative maintenance and AMC plans to reduce faults, keep compliance on track, and avoid downtime.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Fire Alarm Maintenance (AMC)</h1>
      <p className="mt-3 max-w-3xl text-vts-muted">
        Maintenance isn’t a checkbox. We run PPM properly, track repeat faults, and keep your system stable with
        clear reporting and sensible recommendations.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "What’s included",
            items: ["Planned PPM visits", "Panel and device checks", "Fault log review", "Compliance-ready reporting"],
          },
          {
            title: "SLA options",
            items: ["Standard response", "Priority response", "Critical site coverage", "Multi-site coordination"],
          },
          {
            title: "Outcomes",
            items: ["Reduced nuisance alarms", "Fewer repeat callouts", "Clear audit trail", "Better uptime"],
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
        <h2 className="text-xl font-semibold">Reporting you can actually use</h2>
        <p className="mt-3 text-vts-muted">
          We provide clear summaries, outstanding actions, and trend notes—so facilities teams can prioritise fixes
          and reduce repeat faults.
        </p>
      </div>

      <div className="mt-14">
        <CTA />
      </div>
    </main>
  );
}