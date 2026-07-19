"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import site from "@/data/site.json";
import type { SiteInfo } from "@/types/site";
import { getDictionary, otherLocale, localePath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import styles from "./Header.module.scss";

const siteInfo: SiteInfo = site;

export default function Header({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const targetLocale = otherLocale(locale);
  const targetPath = localePath(targetLocale);

  const navItems = [
    { href: "#about", label: dict.header.nav.about },
    { href: "#town", label: dict.header.nav.town },
    { href: "#rooms", label: dict.header.nav.rooms },
    { href: "#kansoshitsu", label: dict.header.nav.kansoshitsu },
    { href: "#precautions", label: dict.header.nav.precautions },
    { href: "#access", label: dict.header.nav.access },
    { href: "#reservation", label: dict.header.nav.reservation },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const closeMenu = () => {
    setIsOpen(false);
    toggleRef.current?.focus();
  };

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }
      if (event.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusable = panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleLangSwitchClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && window.location.hash) {
      event.preventDefault();
      window.location.href = targetPath + window.location.hash;
    }
  };

  const isEn = locale === "en";
  const logoSrc = isEn
    ? "/images/logo/miuraya-logo-dark-full.svg"
    : "/images/logo/miuraya-logo-dark-mark.svg";
  const logoWrapClass = isEn ? styles.brandLogoWrapFull : styles.brandLogoWrap;
  const logoImgClass = isEn ? styles.brandLogoFull : styles.brandLogo;
  // 英語版はナビ項目+言語切り替えの分だけ横幅が必要なため、デスクトップ表示の
  // 切り替え幅をlgまで引き上げる(日本語版は既存のmdのまま変更しない)。
  const withWide = (base: string) => (isEn ? `${base} ${styles.wide}` : base);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href={localePath(locale)} className={styles.brand}>
          <span className={logoWrapClass}>
            <Image
              src={logoSrc}
              alt={locale === "en" ? siteInfo.nameEnFull : siteInfo.name}
              width={1123}
              height={794}
              className={logoImgClass}
              priority
            />
          </span>
        </Link>
        <nav className={withWide(styles.nav)} aria-label={dict.header.navAriaLabel}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.actions}>
          <a className={styles.contactLink} href="#contact">
            {dict.header.contactLabel}
          </a>
          <a
            className={styles.langSwitch}
            href={targetPath}
            hrefLang={targetLocale}
            lang={targetLocale}
            aria-label={dict.header.langSwitchAriaLabel}
            onClick={handleLangSwitchClick}
          >
            {dict.header.langSwitchLabel}
          </a>
        </div>
        <button
          ref={toggleRef}
          type="button"
          className={withWide(styles.menuButton)}
          aria-expanded={isOpen}
          aria-controls={menuId}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="sr-only">
            {isOpen ? dict.header.menuCloseLabel : dict.header.menuOpenLabel}
          </span>
          <span className={styles.menuIcon} data-open={isOpen} aria-hidden="true">
            <span data-motion />
            <span data-motion />
          </span>
        </button>
      </div>
      <div
        id={menuId}
        ref={panelRef}
        className={withWide(styles.mobilePanel)}
        data-open={isOpen}
        data-motion
        role="dialog"
        aria-modal="true"
        aria-label={dict.header.navAriaLabel}
        aria-hidden={!isOpen}
      >
        <ul className={styles.mobileNavList}>
          {navItems.map((item, index) => (
            <li key={item.href}>
              <Link href={item.href} onClick={closeMenu} ref={index === 0 ? firstLinkRef : undefined}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={closeMenu}>
              {dict.header.contactLabel}
            </a>
          </li>
          <li>
            <a
              href={targetPath}
              hrefLang={targetLocale}
              lang={targetLocale}
              aria-label={dict.header.langSwitchAriaLabel}
              onClick={(event) => {
                handleLangSwitchClick(event);
                closeMenu();
              }}
            >
              {dict.header.langSwitchLabel}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
