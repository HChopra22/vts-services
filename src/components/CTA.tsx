// components/CTA.tsx
import Link from "next/link";

export default function CTA() {
  return (
    <section className="rounded-3xl border border-vts-border bg-vts-surface p-8 md:p-10 shadow-soft">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Need a compliant handover, fast response, or an AMC plan?
          </h2>
          <p className="mt-3 text-vts-muted">
            Send your project details and we’ll come back with a clear scope, timeline, and next steps.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-2xl bg-vts-accent px-6 py-3 text-white hover:bg-vts-accentHover transition-colors"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}