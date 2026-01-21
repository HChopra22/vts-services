// app/(site)/projects/page.tsx
import type { Metadata } from "next";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected project types and delivery examples for large-scale fire alarm services.",
};

const projects = [
  {
    title: "High-rise residential tower",
    desc: "Planned maintenance + fast-response fault support to reduce nuisance alarms and improve uptime.",
    tags: ["Maintenance", "Troubleshooting", "Reporting"],
  },
  {
    title: "Retail & mall environment",
    desc: "Structured testing and reporting across multiple zones with stakeholder coordination.",
    tags: ["Testing", "Inspection", "Multi-stakeholder"],
  },
  {
    title: "Hospitality / hotel site",
    desc: "Installation support with disciplined handover documentation and close-out.",
    tags: ["Installation", "Handover", "Programme"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-3 max-w-3xl text-vts-muted">
        We’re built for complex delivery—multiple stakeholders, tight programmes, and compliance expectations.
        Below are examples of typical work we support.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <div key={p.title} className="rounded-3xl border border-vts-border bg-vts-surface p-7 shadow-soft transition-transform hover:-translate-y-0.5">
            <h2 className="text-lg font-semibold">{p.title}</h2>
            <p className="mt-2 text-sm text-vts-muted">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-vts-border bg-vts-bg px-3 py-1 text-xs text-vts-text">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <CTA />
      </div>
    </main>
  );
}