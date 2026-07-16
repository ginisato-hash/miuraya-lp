import styles from "./Facilities.module.scss";

export default function Facilities() {
  return (
    <section
      id="facilities"
      className={styles.section}
      aria-labelledby="facilities-heading"
    >
      <div className={styles.inner}>
        <h2 id="facilities-heading">館内と共用設備</h2>
        <p>トイレとシャワーは共用設備をご利用いただきます。</p>
        <p>
          1階には、宿泊者が利用できるスペースを設けています。また、冬季には乾燥室を営業します。
        </p>
      </div>
    </section>
  );
}
