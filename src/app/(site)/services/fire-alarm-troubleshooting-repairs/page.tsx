// app/(site)/services/fire-alarm-troubleshooting-repairs/page.tsx
import type { Metadata } from "next";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Troubleshooting & Repairs",
  description:
    "Rapid fire alarm fault finding and repairs to stabilise systems, reduce disruption, and prevent repeat callouts.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Troubleshooting & Repairs</h1>
      <p className="mt-3 max-w-3xl text-vts-muted">
        When alarms go noisy or systems degrade, you need fast diagnosis—not guesswork. We focus on root-cause
        isolation and practical fixes to stop repeat issues.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Common issues",
            items: ["Intermittent faults", "Nuisance alarms", "Device communication errors", "Power/battery issues"],
          },
          {
            title: "Approach",
            items: ["Fault log review", "Isolate by zone/loop", "Root cause confirmation", "Repair + prevention advice"],
          },
          {
            title: "Result",
            items: ["System stabilised", "Reduced repeat callouts", "Clear actions list", "Traceable reporting"],
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

      <div className="mt-14">
        <CTA />
      </div>
    </main>
  );
}