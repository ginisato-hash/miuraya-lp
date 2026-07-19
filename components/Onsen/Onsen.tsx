import Image from "next/image";
import bathhousesData from "@/data/bathhouses.json";
import type { Bathhouse } from "@/types/bathhouse";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import JaText from "@/components/JaText/JaText";
import styles from "./Onsen.module.scss";

const bathhouses: Bathhouse[] = bathhousesData;

export default function Onsen({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const isEn = locale === "en";

  return (
    <section id="onsen" className={styles.section} aria-labelledby="onsen-heading">
      <div className={styles.inner}>
        <div className="prose" data-reveal>
          <h2 id="onsen-heading">{dict.onsen.heading}</h2>
          <p className={styles.emphasis}>{dict.onsen.emphasis}</p>
          <p className={styles.voucher}>{dict.onsen.voucher}</p>
          <p>
            <JaText text={dict.onsen.intro} locale={locale} />
          </p>
          <ul className={styles.bathhouseList}>
            {bathhouses.map((bathhouse) => (
              <li key={bathhouse.id}>
                {isEn ? bathhouse.nameEn : bathhouse.name}
                {bathhouse.adjacentToMiuraya && (
                  <span className={styles.note}>{dict.onsen.adjacentNote}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.gallery} data-reveal>
          <div className={styles.photoMain}>
            <Image
              src="/images/photos/bath-outdoor.jpg"
              alt={dict.onsen.photoAltOutdoor}
              width={2000}
              height={1125}
              sizes="(min-width: 768px) 58vw, 100vw"
            />
          </div>
          <div className={styles.photoSub}>
            <Image
              src="/images/photos/bath-indoor.jpg"
              alt={dict.onsen.photoAltIndoor}
              width={2000}
              height={1125}
              sizes="(min-width: 768px) 35vw, 100vw"
            />
          </div>
        </div>
        <p className={`${styles.caption} prose`}>
          <JaText text={dict.onsen.caption} locale={locale} />
        </p>
        <p className={`${styles.caution} prose`}>
          <JaText text={dict.onsen.caution} locale={locale} />
        </p>
      </div>
    </section>
  );
}
