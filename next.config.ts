import type { NextConfig } from "next";

// Cloudflare Pages Free（Static Assetsのみ）で配信するため、完全な静的HTML出力にする。
// Pages Functions/Workersを使わない前提のため、next/imageの最適化サーバーには依存できず、
// images.unoptimized: true で元画像をそのまま配信する（寸法・アスペクト比は<Image>の
// width/height指定により維持され、レイアウトシフトは発生しない）。
// trailingSlash: true は、Cloudflare Pages含む一般的な静的ホスティングで
// ディレクトリ+index.html形式が最も互換性が高いため採用。
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
