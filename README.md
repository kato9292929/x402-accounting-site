# x402 Accounting Bridge — site

Landing page for [x402 Accounting Bridge](https://github.com/kato9292929/x402-Ramp),
an open-source proof of concept. This repository is the site only; the accounting
PoC itself lives in `kato9292929/x402-Ramp`.

## Stack

Next.js 15 (App Router) · React 19 · Tailwind CSS 3.4 · TypeScript 5.7 · Node >= 20.
Deployed on Vercel.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Background video

`HERO_VIDEO` in `src/app/page.tsx` is empty by default. `HeroVideo` then renders a
solid fallback ground, so the site builds and reads correctly with no video set.
Put the CloudFront URL in that constant to turn the hero into the video hero —
nothing else changes.

```ts
const HERO_VIDEO = "https://…cloudfront.net/….mp4";
```

## Copy

The page states, on purpose, that the PoC runs on bundled sample data and is not a
live integration; that x402 signing and freee / Money Forward export are adapters
that need keys and are not connected; and that Ramp is not supported. Keep those
statements intact when editing.
