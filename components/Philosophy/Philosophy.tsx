import styles from "./Philosophy.module.scss";

export default function Philosophy() {
  return (
    <section className={styles.philosophy} aria-labelledby="philosophy-heading">
      <div className={styles.inner}>
        <h2 id="philosophy-heading">
          泊まり、歩き、
          <br />
          浸る。
        </h2>
        <p className={styles.lead}>
          三浦屋は、宿の中だけで旅を完結させる場所ではありません。外湯へ歩き、店に立ち寄り、高湯通りを巡る。蔵王温泉の街そのものを楽しむための、小さな滞在拠点です。
        </p>
        <div className={styles.rule}>
          <span className={styles.line} />
          <span className={styles.label}>STAY. WALK. SOAK.</span>
        </div>
      </div>
    </section>
  );
}
