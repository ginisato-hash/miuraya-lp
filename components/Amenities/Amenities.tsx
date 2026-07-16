import amenitiesData from "@/data/amenities.json";
import type { Amenity } from "@/types/amenity";
import styles from "./Amenities.module.scss";

const amenities: Amenity[] = amenitiesData;

export default function Amenities() {
  return (
    <section
      id="amenities"
      className={styles.section}
      aria-labelledby="amenities-heading"
    >
      <div className={styles.inner}>
        <h2 id="amenities-heading">アメニティ</h2>
        <p>
          各客室にバスタオルをご用意しています。歯ブラシはご希望の方へリクエストベースで提供します。浴衣のご用意はありません。
        </p>
        <dl className={styles.amenityList}>
          {amenities.map((amenity) => (
            <div key={amenity.id}>
              <dt>{amenity.name}</dt>
              <dd>{amenity.available ? amenity.note : "なし"}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
