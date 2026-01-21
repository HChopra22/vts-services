// app/(site)/services/fire-alarm-testing-inspection/page.tsx
import type { Metadata } from "next";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Testing, Inspection & Reporting",
  description:
    "Routine fire alarm testing and inspection with clear, compliance-ready reporting for facilities teams and auditors.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Testing, Inspection & Reporting</h1>
      <p className="mt-3 max-w-3xl text-vts-muted">
        Routine testing done properly helps you catch issues early, reduce nuisance alarms, and keep documentation
        tight for audits and stakeholders.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-vts-border bg-vts-surface p-8 shadow-soft">
          <h2 className="text-xl font-semibold">What we check</h2>
          <ul className="mt-4 space-y-2 text-sm text-vts-text">
            {[
              "Control panel health checks",
              "Device/loop testing (as agreed)",
              "Sounder/strobe tests",
              "Cause & effect verification (where applicable)",
              "Battery and PSU checks",
            ].map((i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-vts-accent" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-vts-border bg-vts-surface p-8 shadow-soft">
          <h2 className="text-xl font-semibold">What you receive</h2>
          <ul className="mt-4 space-y-2 text-sm text-vts-text">
            {[
              "Visit summary + actions list",
              "Device status / exceptions",
              "Recommendations to reduce repeat faults",
              "Documentation suitable for audits",
            ].map((i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-vts-accent" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14">
        <CTA />
      </div>
    </main>
  );
}