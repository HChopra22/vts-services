// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Fire Alarm Services`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(`https://${site.domain}`),
  openGraph: {
    title: `${site.name} | Fire Alarm Services`,
    description: site.description,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-slate-50 text-slate-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}