import styles from "./About.module.scss";

export default function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className={styles.inner}>
        <h2 id="about-heading">三浦屋について</h2>
        <p>
          三浦屋は、蔵王温泉・高湯通りに残る旧旅館を活かして再生した、全7室の素泊まり宿です。外湯へ歩き、温泉街の店に立ち寄り、街を巡るための滞在拠点として運営しています。
        </p>
      </div>
    </section>
  );
}
