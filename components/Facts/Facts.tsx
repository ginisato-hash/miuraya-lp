import styles from "./Facts.module.scss";

const factRows = [
  { label: "所在地", value: "蔵王温泉・高湯通り" },
  { label: "客室数", value: "全7室・素泊まり" },
  { label: "浴場", value: "下湯共同浴場に隣接（館内に温泉なし）" },
  { label: "設備", value: "冷房設備なし・木造のため音が伝わる場合あり" },
  { label: "手続き", value: "セルフチェックイン／セルフチェックアウト" },
];

export default function Facts() {
  return (
    <section className={styles.facts} aria-labelledby="facts-heading">
      <div className={styles.inner}>
        <p className={styles.kicker}>01 / 宿の概要</p>
        <h2 id="facts-heading" className="sr-only">
          宿の概要
        </h2>
        <dl className={styles.grid}>
          {factRows.map((row) => (
            <div key={row.label} className={styles.row}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
