import Image from "next/image";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import JaText from "@/components/JaText/JaText";
import styles from "./Bar.module.scss";

export default function Bar({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section id="kansoshitsu" className={styles.section} aria-labelledby="kansoshitsu-heading">
      <div className={styles.inner}>
        <div className={`${styles.textBlock} prose`} data-reveal>
          <h2 id="kansoshitsu-heading">{dict.bar.heading}</h2>
          <p>
            <JaText text={dict.bar.body} locale={locale} />
          </p>
          <p className={styles.emphasis}>{dict.bar.seasonNote}</p>
        </div>
        <div className={styles.gallery} data-reveal>
          <div className={styles.photoLarge}>
            <Image
              src="/images/photos/bar-counter.jpg"
              alt={dict.bar.photoAltCounter}
              width={2000}
              height={1428}
              sizes="(min-width: 768px) 58vw, 100vw"
            />
          </div>
          <div className={styles.photoDetail}>
            <Image
              src="/images/photos/bar-cocktail-making.jpg"
              alt={dict.bar.photoAltCocktail}
              width={2000}
              height={3000}
              sizes="(min-width: 768px) 30vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
