import site from "@/data/site.json";
import type { SiteInfo } from "@/types/site";
import styles from "./Footer.module.scss";

const siteInfo: SiteInfo = site;

export default function Footer() {
  return (
    <footer className={styles.footer} aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        フッター
      </h2>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <p className={styles.brandJa}>{siteInfo.name}</p>
          <p className={styles.brandEn}>{siteInfo.nameEn}</p>
        </div>
        <address className={styles.address}>
          〒{siteInfo.postalCode}
          <br />
          {siteInfo.prefecture}
          {siteInfo.addressLine}
        </address>
        <p className={styles.operator}>運営：{siteInfo.operator}</p>
        <a className={styles.contactLink} href={`mailto:${siteInfo.contactEmail}`}>
          {siteInfo.contactEmail}
        </a>
      </div>
    </footer>
  );
}
