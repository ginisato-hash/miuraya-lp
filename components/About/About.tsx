import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import JaText from "@/components/JaText/JaText";
import styles from "./About.module.scss";

export default function About({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className={styles.inner} data-reveal>
        <div className="prose">
          <h2 id="about-heading">{dict.about.heading}</h2>
          <p>
            <JaText text={dict.about.body} locale={locale} />
          </p>
        </div>
      </div>
    </section>
  );
}
