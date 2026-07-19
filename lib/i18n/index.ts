import { ja } from "./ja";
import { en } from "./en";
import type { Dictionary, Locale } from "./dictionary";

export type { Dictionary, Locale } from "./dictionary";
export { locales } from "./dictionary";

const dictionaries: Record<Locale, Dictionary> = { ja, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === "ja" ? "en" : "ja";
}

export function localePath(locale: Locale): string {
  return locale === "ja" ? "/" : "/en/";
}
