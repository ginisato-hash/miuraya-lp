"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import site from "@/data/site.json";
import type { SiteInfo } from "@/types/site";
import styles from "./Header.module.scss";

const siteInfo: SiteInfo = site;

const navItems = [
  { href: "#about", label: "三浦屋について" },
  { href: "#rooms", label: "客室" },
  { href: "#precautions", label: "ご宿泊前に" },
  { href: "#access", label: "アクセス" },
];

export default function Header() {
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

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandLogoWrap}>
            <Image
              src="/images/logo/miuraya-logo-dark-mark.svg"
              alt={siteInfo.name}
              width={1123}
              height={794}
              className={styles.brandLogo}
              priority
            />
          </span>
        </Link>
        <nav className={styles.nav} aria-label="サイト内ナビゲーション">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <a className={styles.contactLink} href="#contact">
          お問い合わせ
        </a>
        <button
          ref={toggleRef}
          type="button"
          className={styles.menuButton}
          aria-expanded={isOpen}
          aria-controls={menuId}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="sr-only">{isOpen ? "メニューを閉じる" : "メニューを開く"}</span>
          <span className={styles.menuIcon} data-open={isOpen} aria-hidden="true">
            <span data-motion />
            <span data-motion />
          </span>
        </button>
      </div>
      <div
        id={menuId}
        ref={panelRef}
        className={styles.mobilePanel}
        data-open={isOpen}
        data-motion
        role="dialog"
        aria-modal="true"
        aria-label="サイト内ナビゲーション"
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
              お問い合わせ
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
