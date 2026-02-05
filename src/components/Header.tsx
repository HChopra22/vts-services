// components/Header.tsx
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export default function Header() {
  return (
    <header className="border-b border-vts-border bg-vts-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 font-semibold tracking-tight text-vts-text hover:text-vts-accent transition-colors"
        >
          <Image
            src="/favicon.ico" // change to your real path: /logo.png, /vts-logo.webp, etc.
            alt={`${site.name} logo`}
            width={32}
            height={32}
            priority
          />
          <span>{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-vts-muted hover:text-vts-text transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-xl bg-vts-accent px-4 py-2 text-sm text-white hover:bg-vts-accentHover transition-colors"
          >
            Get a quote
          </Link>
        </nav>

        <Link
          href="/contact"
          className="rounded-xl border border-vts-border px-4 py-2 text-sm text-vts-text md:hidden hover:bg-vts-surface transition-colors"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}