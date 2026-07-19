import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import styles from "./Reservation.module.scss";

export default function Reservation({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section
      id="reservation"
      className={styles.section}
      aria-labelledby="reservation-heading"
    >
      <div className={`${styles.inner} prose`} data-reveal>
        <h2 id="reservation-heading">{dict.reservation.heading}</h2>
        <p className={styles.lead}>{dict.reservation.lead}</p>
        <div className={styles.linkList}>
          <a
            className={styles.link}
            href="https://www.jalan.net/yad302145/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.reservation.jalanLabel}
          </a>
          <a
            className={styles.link}
            href="https://www.booking.com/hotel/jp/japanese-hostel-miuraya.ja.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.reservation.bookingLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
