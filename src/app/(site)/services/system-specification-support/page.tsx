// app/(site)/services/system-specification-support/page.tsx
import type { Metadata } from "next";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "System Specification & Technical Support",
  description:
    "System-level specification and technical support for certified fire alarm and life safety technologies.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">System Specification & Technical Support</h1>
      <p className="mt-3 max-w-3xl text-vts-muted">
        VTS provides system-level specification and technical support for certified fire alarm and life safety
        technologies. We support consultants, contractors, and authorities with compliant system design input,
        product selection, and documentation aligned to approval processes. VTS does not undertake installation,
        commissioning, or maintenance activities.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "What we support",
            items: [
              "System architecture and design intent",
              "Product selection and compliance alignment",
              "Wired and wireless system strategies",
              "Scalability for large or complex sites",
            ],
          },
          {
            title: "Best suited for",
            items: [
              "Consultant-led design stages",
              "Authority and Civil Defence submissions",
              "Complex or high-occupancy buildings",
              "Projects requiring clear scope separation",
            ],
          },
          {
            title: "Typical outputs",
            items: [
              "Technical schedules and equipment lists",
              "System narratives and design clarifications",
              "Authority-ready technical documentation",
              "Coordination notes for contractors and integrators",
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
        <h2 className="text-xl font-semibold">Clear, authority-ready documentation</h2>
        <p className="mt-3 text-vts-muted">
          Our outputs are structured to support regulatory review, consultant coordination, and contractor delivery.
          Documentation is clear, traceable, and aligned with EN 54 / CPR requirements, reducing friction during
          approvals and handover between stakeholders.
        </p>
      </div>

      <div className="mt-14">
        <CTA />
      </div>
    </main>
  );
}