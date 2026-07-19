import Image from "next/image";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import JaText from "@/components/JaText/JaText";
import styles from "./CommonSpace.module.scss";

export default function CommonSpace({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section
      id="common-space"
      className={styles.section}
      aria-labelledby="common-space-heading"
    >
      <div className={styles.inner}>
        <div className="prose" data-reveal>
          <h2 id="common-space-heading">{dict.commonSpace.heading}</h2>
          {dict.commonSpace.paragraphs.map((paragraph) => (
            <p key={paragraph}>
              <JaText text={paragraph} locale={locale} />
            </p>
          ))}
        </div>
        <div className={styles.media} data-reveal>
          <Image
            src="/images/photos/lounge-02.jpg"
            alt={dict.commonSpace.photoAlt}
            width={2000}
            height={1333}
            sizes="(min-width: 768px) 70vw, 100vw"
          />
          <p className={styles.caption}>{dict.commonSpace.caption}</p>
        </div>
      </div>
    </section>
  );
}
