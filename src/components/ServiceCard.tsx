// components/ServiceCard.tsx
import Link from "next/link";

export function ServiceCard(props: {
  title: string;
  excerpt: string;
  href: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-3xl border border-vts-border bg-vts-surface p-7 shadow-soft transition-transform hover:-translate-y-0.5">
      <h3 className="text-lg font-semibold">{props.title}</h3>
      <p className="mt-2 text-sm text-vts-muted">{props.excerpt}</p>
      <ul className="mt-4 space-y-2 text-sm text-vts-text">
        {props.bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-vts-accent" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <Link href={props.href} className="mt-6 inline-flex items-center text-sm font-medium text-vts-accent hover:text-vts-accentHover transition-colors">
        Learn more →
      </Link>
    </div>
  );
}