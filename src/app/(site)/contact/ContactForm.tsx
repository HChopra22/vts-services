"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        options: {
          sitekey: string;
          theme?: "light" | "dark" | "auto";
          size?: "normal" | "compact";
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        }
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string>("");

  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [turnstileReady, setTurnstileReady] = useState(false);
  const turnstileElRef = useRef<HTMLDivElement | null>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!turnstileReady) return;
    if (!siteKey) {
      // If no site key is configured, leave the form usable (but unprotected)
      return;
    }
    if (!turnstileElRef.current) return;
    if (!window.turnstile?.render) return;

    // Render once
    if (!turnstileWidgetIdRef.current) {
      turnstileWidgetIdRef.current = window.turnstile.render(turnstileElRef.current, {
        sitekey: siteKey,
        theme: "auto",
        callback: (token) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(""),
        "error-callback": () => setTurnstileToken(""),
      });
    }
  }, [turnstileReady, siteKey]);

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
      turnstileToken,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
      setTurnstileToken("");
      if (turnstileWidgetIdRef.current && window.turnstile?.reset) {
        window.turnstile.reset(turnstileWidgetIdRef.current);
      }
      return;
    }

    const data = await res.json().catch(() => null);
    setStatus("error");
    setError(data?.error || `Failed to send (${res.status}). Try again.`);
    // Token might be consumed/expired on failed attempts depending on server config
    setTurnstileToken("");
    if (turnstileWidgetIdRef.current && window.turnstile?.reset) {
      window.turnstile.reset(turnstileWidgetIdRef.current);
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-vts-border bg-vts-surface p-7 shadow-soft">
      {/* Cloudflare Turnstile (bot protection) */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={() => setTurnstileReady(true)}
      />
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

      {siteKey ? (
        <div className="mt-5">
          <div ref={turnstileElRef} />
          {!turnstileToken && (
            <p className="mt-2 text-xs text-vts-muted">Please complete the verification to enable sending.</p>
          )}
        </div>
      ) : (
        <p className="mt-5 text-xs text-vts-muted">
          Bot protection is not configured (missing NEXT_PUBLIC_TURNSTILE_SITE_KEY).
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending" || (siteKey ? !turnstileToken : false)}
        className="mt-6 w-full rounded-xl bg-vts-accent px-6 py-3 text-white hover:bg-vts-accentHover transition-colors disabled:opacity-50"
      >
        {status === "sending"
          ? "Sending..."
          : siteKey && !turnstileToken
          ? "Complete verification"
          : "Send message"}
      </button>

      {status === "sent" && (
        <p className="mt-4 text-sm text-vts-text">Sent. We’ll get back to you shortly.</p>
      )}
      {status === "error" && <p className="mt-4 text-sm text-vts-accent">{error}</p>}
    </form>
  );
}