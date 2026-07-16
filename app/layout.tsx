import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { shipporiMincho } from "./fonts/shippori-mincho";
import "./globals.scss";

export const metadata: Metadata = {
  title: "三浦屋 MIURAYA｜蔵王温泉・高湯通り",
  description:
    "山形県山形市蔵王温泉・高湯通り。築70年以上の木造建築を活かした、全7室の素泊まり宿「三浦屋」の公式サイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={shipporiMincho.variable}>
      <body>
        <a className="skip-link" href="#main-content">
          本文へスキップ
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
