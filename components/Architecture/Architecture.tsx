import Image from "next/image";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import JaText from "@/components/JaText/JaText";
import styles from "./Architecture.module.scss";

export default function Architecture({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section
      id="architecture"
      className={styles.section}
      aria-labelledby="architecture-heading"
    >
      <div className={styles.inner}>
        <div className="prose" data-reveal>
          <h2 id="architecture-heading">{dict.architecture.heading}</h2>
          <p>
            <JaText text={dict.architecture.body} locale={locale} />
          </p>
        </div>
        <div className={styles.gallery} data-reveal>
          <div className={styles.photoItem}>
            <Image
              src="/images/photos/staircase.jpg"
              alt={dict.architecture.photoAltStaircase}
              width={2000}
              height={1333}
              sizes="(min-width: 768px) 35vw, 90vw"
            />
          </div>
          <div className={styles.photoItem}>
            <Image
              src="/images/photos/corridor-painting.jpg"
              alt={dict.architecture.photoAltCorridor}
              width={2000}
              height={1333}
              sizes="(min-width: 768px) 35vw, 90vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
