// app/page.tsx
import Link from "next/link";
import CTA from "@/components/CTA";
import { ServiceCard } from "@/components/ServiceCard";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      <section className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(255,46,46,0.14),transparent_55%),radial-gradient(900px_circle_at_85%_20%,rgba(246,177,0,0.10),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium text-vts-muted">
              UAE-based • Fire protection technology supplier
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Certified fire alarm & life safety technologies for large-scale projects.
            </h1>
            <p className="mt-4 text-lg text-vts-muted">
              We supply EN 54 / CPR-compliant fire alarm systems — wired and wireless detection, intelligent control, and command interfaces — backed by documentation fit for authority approvals. No installation role.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-2xl bg-vts-accent px-6 py-3 text-white hover:bg-vts-accentHover transition-colors"
              >
                Request a callback
              </Link>
              <Link
                href="/services"
                className="rounded-2xl border border-vts-border px-6 py-3 text-vts-text hover:bg-vts-surface transition-colors"
              >
                View services
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { k: "EN 54 / CPR", v: "Certified products" },
                { k: "Authority-ready", v: "Submittals & docs" },
                { k: "Scalable", v: "Modular architecture" },
              ].map((x) => (
                <div key={x.k} className="rounded-2xl border border-vts-border bg-vts-surface p-4 shadow-soft">
                  <div className="text-sm font-semibold">{x.k}</div>
                  <div className="text-sm text-vts-muted">{x.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-vts-border bg-vts-surface p-8 shadow-soft">
            <div className="text-sm font-semibold">What you get</div>
            <ul className="mt-4 space-y-3 text-sm text-vts-text">
              {[
                "Certified, traceable products with manufacturer documentation.",
                "Specification support and authority-ready submissions.",
                "Intelligent detection designed to reduce false and unwanted alarms.",
                "A technology partner focused on reliability — no installation or construction activities.",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-vts-accent" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
            <p className="mt-2 text-vts-muted">
              Technology supply and specification support for consultants, contractors and authorities.
            </p>
          </div>
          <Link href="/services" className="hidden text-sm font-medium text-vts-accent hover:text-vts-accentHover transition-colors md:block">
            All services →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {site.services.map((s) => (
            <ServiceCard
              key={s.slug}
              title={s.title}
              excerpt={s.excerpt}
              bullets={s.bullets}
              href={`/services/${s.slug}`}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <CTA />
      </section>
    </main>
  );
}