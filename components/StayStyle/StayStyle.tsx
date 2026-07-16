import styles from "./StayStyle.module.scss";

export default function StayStyle() {
  return (
    <section
      id="stay-style"
      className={styles.section}
      aria-labelledby="stay-style-heading"
    >
      <div className={styles.inner}>
        <h2 id="stay-style-heading">滞在スタイル</h2>
        <p>
          事前の案内に沿ってご自身で手続きを行う、セルフチェックイン・セルフチェックアウト方式です。
        </p>
      </div>
    </section>
  );
}
