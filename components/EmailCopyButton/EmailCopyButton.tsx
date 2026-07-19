"use client";

import { useRef, useState } from "react";
import styles from "./EmailCopyButton.module.scss";

async function copyText(text: string): Promise<boolean> {
  if (typeof navigator !== "undefined" && navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // フォールバックへ続行
    }
  }

  // Clipboard APIが使えない環境向けのフォールバック(document.execCommand)。
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.top = "-1000px";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    const succeeded = document.execCommand("copy");
    document.body.removeChild(textarea);
    return succeeded;
  } catch {
    return false;
  }
}

export default function EmailCopyButton({
  email,
  label,
  copiedLabel,
}: {
  email: string;
  label: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | undefined>(undefined);

  const handleClick = async () => {
    const ok = await copyText(email);
    if (!ok) return;
    setCopied(true);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setCopied(false), 2500);
  };

  return (
    <button type="button" className={styles.copyButton} onClick={handleClick}>
      <span role="status" aria-live="polite">
        {copied ? copiedLabel : label}
      </span>
    </button>
  );
}
