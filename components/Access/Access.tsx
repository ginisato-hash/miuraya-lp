import site from "@/data/site.json";
import type { SiteInfo } from "@/types/site";
import styles from "./Access.module.scss";

const siteInfo: SiteInfo = site;

export default function Access() {
  return (
    <section id="access" className={styles.section} aria-labelledby="access-heading">
      <div className={styles.inner}>
        <h2 id="access-heading">アクセス</h2>
        <address className={styles.address}>
          {siteInfo.name}
          <br />
          〒{siteInfo.postalCode}
          <br />
          {siteInfo.prefecture}
          {siteInfo.addressLine}
        </address>
      </div>
    </section>
  );
}
