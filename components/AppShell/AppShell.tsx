import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import RevealObserver from "@/components/RevealObserver/RevealObserver";
import { getDictionary, localePath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site-config";
import site from "@/data/site.json";
import type { SiteInfo } from "@/types/site";

const siteInfo: SiteInfo = site;

export default function AppShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const dict = getDictionary(locale);
  const isEn = locale === "en";
  const pageUrl = `${siteUrl}${localePath(locale)}`;

  // 確定済みの事実(名称・住所・連絡先・URL・写真)のみを記載。
  // チェックイン時刻・設備タグ・SNS等、未確認の情報は追加しない。
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: isEn ? siteInfo.nameEnFull : siteInfo.name,
    alternateName: siteInfo.nameEn,
    description: dict.meta.description,
    url: pageUrl,
    image: `${siteUrl}/images/photos/exterior-street.jpg`,
    email: siteInfo.contactEmail,
    address: {
      "@type": "PostalAddress",
      postalCode: siteInfo.postalCode,
      addressRegion: isEn ? siteInfo.prefectureEn : siteInfo.prefecture,
      streetAddress: isEn ? siteInfo.addressLineEn : siteInfo.addressLine,
      addressCountry: "JP",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a className="skip-link" href="#main-content">
        {dict.skipLinkLabel}
      </a>
      <Header locale={locale} />
      <main id="main-content">{children}</main>
      <Footer locale={locale} />
      <RevealObserver />
      <noscript>
        <style>{`[data-reveal] { opacity: 1 !important; transform: none !important; }`}</style>
      </noscript>
    </>
  );
}
