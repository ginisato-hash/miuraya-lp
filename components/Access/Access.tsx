import site from "@/data/site.json";
import type { SiteInfo } from "@/types/site";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import styles from "./Access.module.scss";

const siteInfo: SiteInfo = site;

export default function Access({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const isEn = locale === "en";
  const prefecture = isEn ? siteInfo.prefectureEn : siteInfo.prefecture;
  const addressLine = isEn ? siteInfo.addressLineEn : siteInfo.addressLine;

  return (
    <section id="access" className={styles.section} aria-labelledby="access-heading">
      <div className={`${styles.inner} prose`} data-reveal>
        <h2 id="access-heading">{dict.access.heading}</h2>
        <p className={styles.area}>{dict.access.areaLabel}</p>
        <address className={styles.address}>
          {isEn ? siteInfo.nameEn : siteInfo.name}
          <br />
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
        <div className={styles.rule}>
          <span className={styles.line} />
          <p className={styles.adjacency}>{dict.access.adjacencyNote}</p>
        </div>
      </div>
    </section>
  );
}
