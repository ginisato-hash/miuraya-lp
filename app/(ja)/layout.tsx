import type { Metadata } from "next";
import AppShell from "@/components/AppShell/AppShell";
import { shipporiMincho } from "../fonts/shippori-mincho";
import { getDictionary } from "@/lib/i18n";
import { siteUrl } from "@/lib/site-config";
import "../globals.scss";

const dict = getDictionary("ja");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: dict.meta.title,
  description: dict.meta.description,
  alternates: {
    canonical: "/",
    languages: {
      ja: "/",
      en: "/en/",
    },
  },
  openGraph: {
    title: dict.meta.title,
    description: dict.meta.description,
    url: "/",
    locale: dict.meta.ogLocale,
    type: "website",
  },
};

export default function JaRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={shipporiMincho.variable}>
      <body>
        <AppShell locale="ja">{children}</AppShell>
      </body>
    </html>
  );
}
