import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import JaText from "@/components/JaText/JaText";
import styles from "./Precautions.module.scss";

export default function Precautions({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section
      id="precautions"
      className={styles.section}
      aria-labelledby="precautions-heading"
    >
      <div className={styles.inner}>
        <h2 id="precautions-heading" data-reveal>
          {dict.precautions.heading}
        </h2>
        <ol className={styles.itemList} data-reveal>
          {dict.precautions.items.map((item) => (
            <li key={item.id} className={styles.item}>
              <h3>{item.heading}</h3>
              <p>
                <JaText text={item.body} locale={locale} />
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
