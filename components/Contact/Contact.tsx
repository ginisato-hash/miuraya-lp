import site from "@/data/site.json";
import type { SiteInfo } from "@/types/site";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import JaText from "@/components/JaText/JaText";
import EmailCopyButton from "@/components/EmailCopyButton/EmailCopyButton";
import styles from "./Contact.module.scss";

const siteInfo: SiteInfo = site;

export default function Contact({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const mailBody = dict.contact.mailBodyLines.join("\n");
  const mailtoHref = `mailto:${siteInfo.contactEmail}?subject=${encodeURIComponent(
    dict.contact.mailSubject,
  )}&body=${encodeURIComponent(mailBody)}`;

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className={`${styles.inner} prose`} data-reveal>
        <h2 id="contact-heading">{dict.contact.heading}</h2>
        <p className={styles.lead}>
          <JaText text={dict.contact.lead} locale={locale} />
        </p>
        <div className={styles.action}>
          <a className={styles.mailButton} href={mailtoHref}>
            {dict.contact.mailButtonLabel}
          </a>
          <p className={styles.emailText}>{siteInfo.contactEmail}</p>
          <EmailCopyButton
            email={siteInfo.contactEmail}
            label={dict.contact.copyButtonLabel}
            copiedLabel={dict.contact.copiedLabel}
          />
        </div>
      </div>
    </section>
  );
}
