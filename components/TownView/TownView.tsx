import Image from "next/image";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import JaText from "@/components/JaText/JaText";
import styles from "./TownView.module.scss";

export default function TownView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section id="town" className={styles.section} aria-labelledby="town-heading">
      <div className={styles.textWrap}>
        <div className={`${styles.textBlock} prose`} data-reveal>
          <h2 id="town-heading">{dict.townView.heading}</h2>
          {dict.townView.paragraphs.map((paragraph) => (
            <p key={paragraph}>
              <JaText text={paragraph} locale={locale} />
            </p>
          ))}
        </div>
      </div>
      <div className={styles.fullBleed} data-reveal>
        <Image
          src="/images/photos/town-window-view.jpg"
          alt={dict.townView.photoAlt}
          width={2000}
          height={1333}
          sizes="100vw"
          className={styles.fullBleedImg}
          data-motion
        />
      </div>
    </section>
  );
}
