import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import styles from "./StayStyle.module.scss";

export default function StayStyle({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section
      id="stay-style"
      className={styles.section}
      aria-labelledby="stay-style-heading"
    >
      <div className={styles.inner}>
        <div className="prose" data-reveal>
          <h2 id="stay-style-heading">{dict.stayStyle.heading}</h2>
          <p className={styles.lead}>{dict.stayStyle.lead}</p>
        </div>
        <ol className={styles.timeline} data-reveal>
          {dict.stayStyle.steps.map((step) => (
            <li key={step.id} className={styles.step}>
              <span className={styles.stepNumber} aria-hidden="true">
                {step.number}
              </span>
              <h3>{step.heading}</h3>
              {step.body && <p>{step.body}</p>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
