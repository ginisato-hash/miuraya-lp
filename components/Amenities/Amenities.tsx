import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import JaText from "@/components/JaText/JaText";
import styles from "./Amenities.module.scss";

export default function Amenities({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section
      id="amenities"
      className={styles.section}
      aria-labelledby="amenities-heading"
    >
      <div className={styles.inner}>
        <div className="prose" data-reveal>
          <h2 id="amenities-heading">{dict.amenities.heading}</h2>
          <p className={styles.lead}>
            <JaText text={dict.amenities.lead} locale={locale} />
          </p>
        </div>
      </div>
    </section>
  );
}
