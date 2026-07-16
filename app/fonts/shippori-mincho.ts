import localFont from "next/font/local";

// 見出し（h1-h3・kicker）専用。サイト内で実際に使用する見出し文字のみを
// 抽出したサブセット（SemiBold・400文字未満）。本文・UIには適用しない。
// フォントライセンス: SIL Open Font License 1.1（同梱 ShipporiMincho-OFL.txt 参照）
export const shipporiMincho = localFont({
  src: "./shippori-mincho-semibold-subset.woff2",
  weight: "600",
  style: "normal",
  display: "swap",
  variable: "--font-shippori-mincho",
});
