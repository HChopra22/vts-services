// app/(site)/services/intelligent-detection-solutions/page.tsx
import type { Metadata } from "next";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Intelligent Detection Solutions",
  description:
    "Advanced fire detection technologies designed to reduce false and unwanted alarms in regulated environments.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Intelligent Detection Solutions</h1>
      <p className="mt-3 max-w-3xl text-vts-muted">
        VTS supplies advanced fire detection technologies designed to improve alarm credibility and reduce false and
        unwanted alarms in regulated and high-risk environments. Our scope is limited to certified product supply and
        system-level technical support. VTS does not undertake testing, commissioning, or maintenance activities.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-vts-border bg-vts-surface p-8 shadow-soft">
          <h2 className="text-xl font-semibold">Detection technologies supplied</h2>
          <ul className="mt-4 space-y-2 text-sm text-vts-text">
            {[
              "Multi-sensor smoke and heat detection",
              "Wireless and wired detection options",
              "EN 54-certified intelligent devices",
              "Environment-specific detector selection",
              "Long-life, supervised detection devices",
            ].map((i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-vts-accent" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-vts-border bg-vts-surface p-8 shadow-soft">
          <h2 className="text-xl font-semibold">Key benefits</h2>
          <ul className="mt-4 space-y-2 text-sm text-vts-text">
            {[
              "Significant reduction in false and nuisance alarms",
              "Improved alarm credibility for authorities",
              "Clearer decision-making during incidents",
              "Suitability for occupied and sensitive sites",
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