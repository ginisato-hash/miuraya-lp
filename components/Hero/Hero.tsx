import Image from "next/image";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.photo}>
        <Image
          src="/images/photos/exterior-street.jpg"
          alt="高湯通りに面した三浦屋の外観。隣に下湯共同浴場が見える街並み"
          fill
          priority
          sizes="100vw"
          className={styles.photoImg}
        />
        <div className={styles.scrim} aria-hidden="true" />
      </div>
      <div className={styles.content}>
        <span className={styles.logoWrap}>
          <Image
            src="/images/logo/miuraya-logo-white-mark.svg"
            alt=""
            width={1123}
            height={794}
            className={styles.logo}
          />
        </span>
        <h1 id="hero-heading" className={styles.tagline}>
          温泉街に泊まり、歩き、浸る。
        </h1>
      </div>
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span>SCROLL</span>
        <span className={styles.scrollLine} data-motion />
      </div>
    </section>
  );
}
