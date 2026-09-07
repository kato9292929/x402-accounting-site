# x402 Accounting Bridge — site

[x402 Accounting Bridge](https://github.com/kato9292929/x402-Ramp) のランディングページ。
このリポジトリはサイトだけで、会計 PoC 本体は `kato9292929/x402-Ramp` にあります。

Next.js 15（App Router）· React 19 · Tailwind CSS 3.4 · TypeScript 5.7 · Node >= 20。
Vercel 配信。

```bash
npm install
npm run dev     # http://localhost:3000  ( /ja で日本語版 )
npm run build
```

## どこに何があるか

```
src/app/
  page.tsx            英語版（/）
  ja/page.tsx         日本語版（/ja）
  layout.tsx          <html> と Inter の読み込み
  globals.css         配色の地と、見出しのタイポスケール（h1-en / h1-ja / h2-section / eyebrow）
src/components/
  Site.tsx            ページの組み立て。HERO_VIDEO 定数はここ
  hero/Hero.tsx       ヒーロー本体（ナビ / 見出し / サブ / CTA）
  hero/HeroNav.tsx    ロゴ・ナビ・言語トグル・ハンバーガー
  hero/HeroVideo.tsx  背景動画とスクリム
  hero/ShinyText.tsx  見出し2行目のスイープアニメ
  sections/           Section（器）と 01〜05 の各セクション
  links.ts            GitHub / MIT の URL
src/content/
  types.ts            コピーの型（SiteCopy）
  en.ts / ja.ts       全文言。ページの文字を直すのはこの2ファイルだけ
tailwind.config.ts    色トークン（ink / surface / line / fg / muted / faint / accent / ok / warn / stop）
```

**文言を直すときは `src/content/en.ts` と `ja.ts` を編集してください。**
コンポーネント側に文字列は書かれていません。

## 背景動画

`HERO_VIDEO`（`src/components/Site.tsx`）に CloudFront の URL が入っています。
差し替えはこの1行だけ。空文字にすると `HeroVideo` が黒地にフォールバックし、動画なしでも
ビルドと表示が壊れません。

## 注意（一度踏んだ罠）

`src/content/*.ts` に書いたクラス名（`h1-en` など）も Tailwind のスキャン対象です。
`tailwind.config.ts` の `content` から `./src/content/**` を外すと、`@layer components` の
該当ルールが purge で消え、**見出しが本文と同じ大きさで表示されます**。

## 変えてはいけない文言

このサイトは意図して次を明示しています。編集時に消さないでください。

- サンプル台帳で動作する PoC であり、実サービスとは未接続であること
- x402 実署名と freee / MF 出力は「アダプタ実装済み・鍵が要る・未接続」であること
- Ramp は非対応（参考実装として残置）であること
- フッターの免責（他社との無関係・会計/税務の助言ではない）

`live` / `production-ready` / `processing real payments` は使いません。
