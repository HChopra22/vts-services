// app/(site)/contact/page.tsx
import type { Metadata } from "next";
import { site } from "@/lib/site";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact VTS Services for quotations, site support and fire alarm service enquiries.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
          <p className="mt-3 text-vts-muted">
            Send your project details and we’ll come back with a clear scope and next steps.
          </p>

          <div className="mt-8 rounded-3xl border border-vts-border bg-vts-surface p-7 text-sm text-vts-text shadow-soft">
            <div className="font-semibold">{site.name}</div>
            <div className="mt-2 text-vts-muted">{site.locationLine}</div>

            <div className="mt-4 space-y-2">
              <div>
                <span className="font-medium">Email:</span>{" "}
                <a className="hover:text-vts-accent transition-colors" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
              {/* <div>
                <span className="font-medium">Phone:</span>{" "}
                <a className="hover:text-vts-accent transition-colors" href={`tel:${site.phone}`}>
                  {site.phone}
                </a>
              </div> */}
            </div>

            <div className="mt-6 text-vts-muted">Typical response: within 1 business day.</div>
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}