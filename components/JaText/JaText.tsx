import { Fragment } from "react";
import type { Locale } from "@/lib/i18n";

// 日本語版のみ、句点(。)の直後で改行する。文の途中で折り返されるのを防ぐための表示専用処理。
// 英語版ではそのままのテキストを返す(英語の文章に句点区切りの改行は適用しない)。
export default function JaText({ text, locale }: { text: string; locale: Locale }) {
  if (locale !== "ja") {
    return <>{text}</>;
  }

  const parts = text.split("。");
  const trailing = parts.pop() ?? "";
  const sentences = parts.map((sentence) => `${sentence}。`);
  if (trailing) {
    sentences.push(trailing);
  }

  return (
    <>
      {sentences.map((sentence, index) => (
        <Fragment key={index}>
          {sentence}
          {index < sentences.length - 1 && <br />}
        </Fragment>
      ))}
    </>
  );
}
