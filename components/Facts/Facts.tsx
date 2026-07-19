import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import styles from "./Facts.module.scss";

export default function Facts({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className={styles.facts} aria-labelledby="facts-heading">
      <div className={styles.inner}>
        <h2 id="facts-heading" className={styles.heading} data-reveal>
          {dict.facts.heading}
        </h2>
        <dl className={styles.grid} data-reveal>
          {dict.facts.rows.map((row) => (
            <div key={row.label} className={styles.row}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
