import Image from "next/image";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import styles from "./Hero.module.scss";

export default function Hero({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const isEn = locale === "en";
  const logoSrc = isEn
    ? "/images/logo/miuraya-logo-white-full.svg"
    : "/images/logo/miuraya-logo-white-mark.svg";
  const logoWrapClass = isEn ? styles.logoWrapFull : styles.logoWrap;
  const logoImgClass = isEn ? styles.logoFull : styles.logo;

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.photo}>
        <Image
          src="/images/photos/exterior-street.jpg"
          alt={dict.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className={styles.photoImg}
          data-motion
        />
        <div className={styles.scrim} aria-hidden="true" />
      </div>
      <div className={styles.content}>
        <span className={logoWrapClass} data-motion>
          <Image
            src={logoSrc}
            alt=""
            width={1123}
            height={794}
            className={logoImgClass}
          />
        </span>
        <h1 id="hero-heading" className={styles.tagline} data-motion>
          {dict.hero.tagline}
        </h1>
      </div>
      <div className={styles.scrollIndicator} aria-hidden="true" data-motion>
        <span>{dict.hero.scrollLabel}</span>
        <span className={styles.scrollLine} data-motion />
      </div>
    </section>
  );
}
