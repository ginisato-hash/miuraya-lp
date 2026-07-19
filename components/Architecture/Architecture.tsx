import Image from "next/image";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import JaText from "@/components/JaText/JaText";
import styles from "./Architecture.module.scss";

// 日本語版の1文目のみ、読点の後で意図した位置に改行が入るよう表示を制御する。
// 文字列自体(lib/i18n/ja.ts)は変更せず、この定数はJSX側の表示分割にのみ使う。
const JA_LEAD_BREAK_AFTER = "受け継ぎながら、";

export default function Architecture({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [leadParagraph, ...restParagraphs] = dict.architecture.paragraphs;
  const breakIndex =
    locale === "ja" ? leadParagraph.indexOf(JA_LEAD_BREAK_AFTER) : -1;
  const leadFirstHalf =
    breakIndex > -1 ? leadParagraph.slice(0, breakIndex + JA_LEAD_BREAK_AFTER.length) : null;
  const leadSecondHalf = breakIndex > -1 ? leadParagraph.slice(breakIndex + JA_LEAD_BREAK_AFTER.length) : null;

  return (
    <section
      id="architecture"
      className={styles.section}
      aria-labelledby="architecture-heading"
    >
      <div className={styles.inner}>
        <div className="prose" data-reveal>
          <h2 id="architecture-heading">{dict.architecture.heading}</h2>
          {leadFirstHalf !== null && leadSecondHalf !== null ? (
            <p>
              <span>{leadFirstHalf}</span>
              <br className={styles.leadBreak} />
              <span>{leadSecondHalf}</span>
            </p>
          ) : (
            <p>
              <JaText text={leadParagraph} locale={locale} />
            </p>
          )}
          {restParagraphs.map((paragraph) => (
            <p key={paragraph}>
              <JaText text={paragraph} locale={locale} />
            </p>
          ))}
        </div>
        <div className={styles.gallery} data-reveal>
          <div className={styles.photoItem}>
            <Image
              src="/images/photos/staircase.jpg"
              alt={dict.architecture.photoAltStaircase}
              width={2000}
              height={1333}
              sizes="(min-width: 768px) 35vw, 90vw"
            />
          </div>
          <div className={styles.photoItem}>
            <Image
              src="/images/photos/corridor-painting.jpg"
              alt={dict.architecture.photoAltCorridor}
              width={2000}
              height={1333}
              sizes="(min-width: 768px) 35vw, 90vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
