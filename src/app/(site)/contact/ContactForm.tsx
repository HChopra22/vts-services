// app/(site)/contact/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      message: formData.get("message"),
      // honeypot (basic spam trap)
      website: formData.get("website"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
      return;
    }

    const data = await res.json().catch(() => null);
    setStatus("error");
    setError(data?.error || "Failed to send. Try again.");
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-vts-border bg-vts-surface p-7 shadow-soft">
      {/* Honeypot field (hidden) */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-vts-text">Name *</label>
          <input name="name" required className="mt-2 w-full rounded-xl border border-vts-border bg-vts-bg px-4 py-3 text-vts-text placeholder:text-vts-muted focus:outline-none focus:ring-2 focus:ring-vts-accent" />
        </div>
        <div>
          <label className="text-sm font-medium text-vts-text">Email *</label>
          <input
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-vts-border bg-vts-bg px-4 py-3 text-vts-text placeholder:text-vts-muted focus:outline-none focus:ring-2 focus:ring-vts-accent"
          />
        </div>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-vts-text">Phone</label>
          <input name="phone" className="mt-2 w-full rounded-xl border border-vts-border bg-vts-bg px-4 py-3 text-vts-text placeholder:text-vts-muted focus:outline-none focus:ring-2 focus:ring-vts-accent" />
        </div>
        <div>
          <label className="text-sm font-medium text-vts-text">Company</label>
          <input name="company" className="mt-2 w-full rounded-xl border border-vts-border bg-vts-bg px-4 py-3 text-vts-text placeholder:text-vts-muted focus:outline-none focus:ring-2 focus:ring-vts-accent" />
        </div>
      </div>

      <div className="mt-5">
        <label className="text-sm font-medium text-vts-text">Message *</label>
        <textarea
          name="message"
          required
          rows={7}
          className="mt-2 w-full rounded-xl border border-vts-border bg-vts-bg px-4 py-3 text-vts-text placeholder:text-vts-muted focus:outline-none focus:ring-2 focus:ring-vts-accent"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-xl bg-vts-accent px-6 py-3 text-white hover:bg-vts-accentHover transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      {status === "sent" && (
        <p className="mt-4 text-sm text-vts-text">Sent. We’ll get back to you shortly.</p>
      )}
      {status === "error" && <p className="mt-4 text-sm text-vts-accent">{error}</p>}
    </form>
  );
}