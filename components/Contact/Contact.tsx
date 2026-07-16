import site from "@/data/site.json";
import type { SiteInfo } from "@/types/site";
import styles from "./Contact.module.scss";

const siteInfo: SiteInfo = site;

const mailSubject = "三浦屋についての問い合わせ";
const mailBody = [
  "お名前：",
  "",
  "お問い合わせ内容：",
  "",
  "宿泊を検討している時期：",
  "",
  "宿泊予定人数：",
  "",
].join("\n");

const mailtoHref = `mailto:${siteInfo.contactEmail}?subject=${encodeURIComponent(
  mailSubject,
)}&body=${encodeURIComponent(mailBody)}`;

export default function Contact() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <h2 id="contact-heading">問い合わせ</h2>
        <p>
          このサイトでは、空室確認や予約の即時完了は行えません。ご宿泊や施設についてのご質問は、メールにてお問い合わせください。
        </p>
        <a className={styles.mailButton} href={mailtoHref}>
          メールで問い合わせる
        </a>
        <p className={styles.emailText}>{siteInfo.contactEmail}</p>
      </div>
    </section>
  );
}
