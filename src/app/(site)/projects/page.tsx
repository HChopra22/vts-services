// app/(site)/projects/page.tsx
import type { Metadata } from "next";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Projects",
  description: "Representative project types supported through certified fire alarm and life safety technology supply for regulated projects.",
};

const projects = [
  {
    title: "High-rise residential developments",
    desc: "Supply of EN 54 / CPR-certified fire detection and alarm technologies, supporting compliant system design and authority submissions for high-occupancy residential buildings.",
    tags: ["EN 54", "High-occupancy", "Authority approval"],
  },
  {
    title: "Commercial & retail complexes",
    desc: "Technology supply for large-format commercial environments, including addressable control systems and intelligent detection designed to reduce false and unwanted alarms.",
    tags: ["Intelligent detection", "False alarm reduction", "Scalable systems"],
  },
  {
    title: "Hospitality, healthcare & mixed-use",
    desc: "Certified fire alarm technologies supplied for sensitive and regulated environments, with documentation aligned to consultant specifications and Civil Defence requirements.",
    tags: ["Certified supply", "Consultant-led", "Civil Defence"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-3 max-w-3xl text-vts-muted">
        VTS supports complex and regulated projects by supplying certified fire alarm and life safety technologies. The examples below reflect typical project environments where our products, documentation, and system-level expertise support consultant design, contractor delivery, and authority approval.
      </p>

      <div className="mt-8 max-w-4xl rounded-3xl border border-vts-border bg-vts-surface p-6 text-sm text-vts-text">
        <p className="font-medium">Project scope</p>
        <p className="mt-2 text-vts-muted">
          VTS participates in projects strictly as a fire protection technology supplier. Our role is limited to
          certified product supply, system-level technical support, and compliance documentation. Installation,
          commissioning, and maintenance activities are undertaken by appointed contractors and system integrators.
        </p>
      </div>

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