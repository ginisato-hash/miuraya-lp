import bathhousesData from "@/data/bathhouses.json";
import type { Bathhouse } from "@/types/bathhouse";
import styles from "./Town.module.scss";

const bathhouses: Bathhouse[] = bathhousesData;

export default function Town() {
  return (
    <section id="town" className={styles.section} aria-labelledby="town-heading">
      <div className={styles.inner}>
        <h2 id="town-heading">温泉街に泊まる</h2>
        <p>宿を出たところから、三浦屋の滞在が始まります。</p>
        <p>
          三浦屋は、下湯共同浴場に隣接する高湯通りの宿です。温泉街には、下湯共同浴場、上湯共同浴場、川原湯共同浴場があります。
        </p>
        <ul className={styles.bathhouseList}>
          {bathhouses.map((bathhouse) => (
            <li key={bathhouse.id}>
              {bathhouse.name}
              {bathhouse.adjacentToMiuraya && (
                <span className={styles.note}>（三浦屋に隣接）</span>
              )}
            </li>
          ))}
        </ul>
        <p>
          共同浴場を訪れ、温泉街を歩き、周辺の店へ出かける。宿の外で過ごす時間も、三浦屋での滞在の一部です。
        </p>
        <p className={styles.caution}>
          各共同浴場の利用条件は変更される場合があります。ご利用前に最新の公式情報をご確認ください。
        </p>
        <p className={styles.emphasis}>三浦屋の館内に温泉浴場はありません。</p>
      </div>
    </section>
  );
}
