import styles from "./Architecture.module.scss";

export default function Architecture() {
  return (
    <section
      id="architecture"
      className={styles.section}
      aria-labelledby="architecture-heading"
    >
      <div className={styles.inner}>
        <h2 id="architecture-heading">建物と時間</h2>
        <p>
          築70年以上の歳月を重ねてきた木造の建物。新しくつくり替えるのではなく、建物が重ねてきた時間を残しながら、現在の宿として使い続けています。
        </p>
      </div>
    </section>
  );
}
