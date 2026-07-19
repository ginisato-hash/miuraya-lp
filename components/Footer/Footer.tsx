import Image from "next/image";
import site from "@/data/site.json";
import type { SiteInfo } from "@/types/site";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import styles from "./Footer.module.scss";

const siteInfo: SiteInfo = site;

export default function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const isEn = locale === "en";

  const logoSrc = isEn
    ? "/images/logo/miuraya-logo-white-full.svg"
    : "/images/logo/miuraya-logo-white-mark.svg";
  const logoWrapClass = isEn ? styles.brandLogoWrapFull : styles.brandLogoWrap;
  const logoImgClass = isEn ? styles.brandLogoFull : styles.brandLogo;

  const prefecture = isEn ? siteInfo.prefectureEn : siteInfo.prefecture;
  const addressLine = isEn ? siteInfo.addressLineEn : siteInfo.addressLine;
  const operator = isEn ? siteInfo.operatorEn : siteInfo.operator;

  return (
    <footer className={styles.footer} aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        {dict.footer.footerHeading}
      </h2>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={logoWrapClass}>
            <Image
              src={logoSrc}
              alt={isEn ? siteInfo.nameEnFull : siteInfo.name}
              width={1123}
              height={794}
              className={logoImgClass}
            />
          </span>
          <p className={styles.tagline}>{dict.hero.tagline}</p>
        </div>
        <div className={styles.details}>
          <address className={styles.address}>
            〒{siteInfo.postalCode}
            <br />
            {isEn ? (
              <>
                {addressLine}
                <br />
                {prefecture}, Japan
              </>
            ) : (
              <>
                {prefecture}
                {addressLine}
              </>
            )}
          </address>
          <p className={styles.operator}>
            {dict.footer.operatorLabel}
            {operator}
          </p>
          <a className={styles.contactLink} href={`mailto:${siteInfo.contactEmail}`}>
            {siteInfo.contactEmail}
          </a>
          <a className={styles.topLink} href="#hero-heading">
            {dict.footer.topLinkLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}
