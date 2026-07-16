import styles from "./Precautions.module.scss";

const precautionItems = [
  {
    id: "cooling",
    heading: "冷房設備について",
    body: "蔵王温泉は硫黄成分を含む温泉地で、設備が腐食の影響を受けやすいため、三浦屋の客室には冷房設備を設けておりません。夏季は網戸と自然換気、扇風機でお過ごしいただきます。暑さに敏感な方や冷房を必須とされる方は、あらかじめご留意ください。",
  },
  {
    id: "sound",
    heading: "木造建築の音について",
    body: "築年数を重ねた木造建築のため、廊下や階段、隣室などの音が伝わる場合があります。現代的なホテルと同等の防音性能はありません。",
  },
  {
    id: "shared-facilities",
    heading: "共用設備について",
    body: "トイレとシャワーは共用設備をご利用いただきます。館内に温泉浴場はありません。",
  },
  {
    id: "self-service",
    heading: "セルフ方式について",
    body: "チェックインおよびチェックアウトはセルフ方式です。",
  },
  {
    id: "yukata",
    heading: "浴衣について",
    body: "浴衣のご用意はありません。必要な室内着はご持参ください。",
  },
];

export default function Precautions() {
  return (
    <section
      id="precautions"
      className={styles.section}
      aria-labelledby="precautions-heading"
    >
      <div className={styles.inner}>
        <h2 id="precautions-heading">ご宿泊前に知っていただきたいこと</h2>
        <div className={styles.itemList}>
          {precautionItems.map((item) => (
            <div key={item.id} className={styles.item}>
              <h3>{item.heading}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
