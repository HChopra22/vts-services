// components/Footer.tsx
import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-vts-border bg-vts-bg">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-semibold">{site.name}</div>
            <p className="mt-3 text-sm text-vts-muted">{site.description}</p>
          </div>

          <div>
            <div className="text-sm font-semibold">Pages</div>
            <ul className="mt-3 space-y-2 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link className="text-vts-muted hover:text-vts-text transition-colors" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Contact</div>
            <div className="mt-3 space-y-2 text-sm text-vts-muted">
              <div>{site.locationLine}</div>
              <div>
                <span className="font-medium text-vts-text">Email:</span>{" "}
                <a className="hover:text-vts-accent transition-colors" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
              {/* <div>
                <span className="font-medium text-vts-text">Phone:</span>{" "}
                <a className="hover:text-vts-accent transition-colors" href={`tel:${site.phone}`}>
                  {site.phone}
                </a>
              </div> */}
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-vts-muted">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}