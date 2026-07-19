import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import JaText from "@/components/JaText/JaText";
import styles from "./Philosophy.module.scss";

export default function Philosophy({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className={styles.philosophy} aria-labelledby="philosophy-heading">
      <div className={styles.inner}>
        <div className={`${styles.textBlock} prose`} data-reveal>
          <h2 id="philosophy-heading">
            {dict.philosophy.headingLines[0]}
            <br />
            {dict.philosophy.headingLines[1]}
          </h2>
          <p className={styles.lead}>
            <JaText text={dict.philosophy.lead} locale={locale} />
          </p>
          <div className={styles.rule}>
            <span className={styles.line} />
            <span className={styles.label}>{dict.philosophy.label}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
