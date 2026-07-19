import type { Metadata } from "next";
import AppShell from "@/components/AppShell/AppShell";
import { shipporiMincho } from "../fonts/shippori-mincho";
import { getDictionary } from "@/lib/i18n";
import { siteUrl } from "@/lib/site-config";
import "../globals.scss";

const dict = getDictionary("en");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: dict.meta.title,
  description: dict.meta.description,
  alternates: {
    canonical: "/en/",
    languages: {
      ja: "/",
      en: "/en/",
    },
  },
  openGraph: {
    title: dict.meta.title,
    description: dict.meta.description,
    url: "/en/",
    locale: dict.meta.ogLocale,
    type: "website",
  },
};

export default function EnRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={shipporiMincho.variable}>
      <body>
        <AppShell locale="en">{children}</AppShell>
      </body>
    </html>
  );
}
