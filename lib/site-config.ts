// 本番ドメインは https://miuraya.yuge-zao.com に確定。
// 環境変数 NEXT_PUBLIC_SITE_URL が設定されていればそちらを優先する（プレビュー環境等向け）。
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://miuraya.yuge-zao.com";
