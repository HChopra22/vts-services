// components/CTA.tsx
import Link from "next/link";

export default function CTA() {
  return (
    <section className="rounded-3xl border border-vts-border bg-vts-surface p-8 md:p-10 shadow-soft">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Need certified fire alarm technologies or authority-ready documentation?
          </h2>
          <p className="mt-3 text-vts-muted">
            Share your project requirements and we’ll support with product selection, compliance documentation,
            and submission-ready details. No installation role.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 md:justify-end">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl bg-vts-accent px-6 py-3 text-sm font-semibold text-white hover:bg-vts-accentHover transition-colors"
          >
            Contact us
          </Link>

          <Link
            href="/contact?type=callback"
            className="inline-flex items-center justify-center rounded-2xl border border-vts-border px-6 py-3 text-sm font-semibold text-vts-text hover:bg-vts-surface transition-colors"
          >
            Request a callback
          </Link>
        </div>
      </div>
    </section>
  );
}