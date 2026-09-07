import type { SiteCopy } from "@/content/types";

export const ja: SiteCopy = {
  lang: "ja",
  altHref: "/",
  altLabel: "EN",
  metaTitle: "x402 Accounting Bridge — エージェントの都度払いを、会計に載せる",
  metaDescription:
    "AIエージェントの支払いのための、会計＋支出統制のレイヤー。支払い前に上限で止め、各支払いを複式簿記の仕訳に起こし、会計ソフト用に書き出し、月次で突合します。サンプル台帳で動作する、オープンソースの概念実証です。",

  nav: [
    { label: "概要", href: "#overview" },
    { label: "仕組み", href: "#how-it-works" },
    { label: "なぜ", href: "#why" },
    { label: "ステータス", href: "#status" },
  ],
  navGithub: "GitHub",

  hero: {
    topRight: "オープンソースの概念実証 · MIT",
    eyebrow: "サンプル台帳で動作 · 実サービスとは未接続",
    headingLine1: "エージェントの都度払いを、",
    headingShine: "会計に載せる。",
    // 日本語は字幅が広く行間も詰めすぎると潰れるので、専用のスケールを使う。
    headingClass: "h1-ja",
    sub: "エージェントがAPI利用ごとに払うUSDC。署名の前に上限で止め、複式簿記の仕訳に起こします。",
    cta: "GitHub を見る",
  },

  what: {
    title: "これは何か",
    body: "AIエージェントが使ったお金のための、会計レイヤー。エージェントは外部ベンダーへAPI利用ごとに少額のUSDCを、1日に何度も払うようになっています。今そうした支払いは帳簿の外にある「追えないクリプトの出金」です。本ツールはその1件ごとを正しい仕訳に変え、お金が出る前に支出上限で止め、月次で突合します。エージェントの支出が、他の経費と同じように会計に現れるようになります。",
  },

  how: {
    title: "仕組み",
    steps: [
      {
        name: "決済ログ (JSONL)",
        body: "エージェントのクライアントが書き出す、都度払いの決済イベント。",
      },
      {
        name: "正規化",
        body: "スキーマを統一。重複取引を除外し通貨を正規化、vendor を費用勘定に・agent をコストセンターに写像。",
      },
      {
        name: "統制",
        body: "1決済・カテゴリ・コストセンターの上限を、この順で、署名の前に評価。",
        key: true,
      },
      {
        name: "仕訳",
        body: "1決済につき2行。借方＝費用勘定、貸方＝USDC。借貸一致を検証。",
      },
      {
        name: "出力",
        body: "会計ソフトが期待する列形式で journal.csv / journal.json。",
      },
      {
        name: "突合",
        body: "誰が何にいくら使ったか。各上限への消化率と違反件数つき。",
      },
    ],
    caption: "支出上限は署名の手前で効く——上限超過の決済は署名されない。",
    note: "never signed / never leaves",
  },

  why: {
    title: "なぜ",
    points: [
      {
        title: "署名の前に支出統制",
        body: "1決済・カテゴリ・コストセンターの上限を、決済クライアントの手前のラッパーで判定。超過なら署名を作らない。",
      },
      {
        title: "ログではなく、帳簿に",
        body: "各決済を借貸一致の複式仕訳（金額はDecimal）に変換し、会計ソフトの列形式に出力。写像を差し替えればコード変更なし。",
      },
      {
        title: "月次突合",
        body: "誰が何にいくら、上限消化率と違反件数つき。実行されなかった記録が「統制が効いた証拠」。",
      },
    ],
  },

  status: {
    title: "ステータス（正直に）",
    rows: [
      {
        tag: "動作",
        tone: "works",
        body: "コアパイプライン（正規化・支出統制・複式仕訳・CSV/JSON出力・月次突合）。サンプル台帳で動作、テスト153件 green。",
      },
      {
        tag: "要・鍵",
        tone: "keys",
        body: "x402実署名・freee/MF出力：公開仕様に対しアダプタ実装済み。環境変数を入れれば接続、無ければ通信せず停止。",
      },
      {
        tag: "非対応",
        tone: "no",
        body: "Ramp：調査の上で見送り（日本法人の口座要件が未確認・外部決済を書き込む公開APIが無い）。参考実装のみ。",
      },
    ],
  },

  quickstart: {
    title: "クイックスタート",
    commands: `pip install -r requirements.txt
PYTHONPATH=src python3 -m x402_ramp run-all`,
    note: "支出ポリシーは config/ にあります——上限、カテゴリ・コストセンターの写像、出力の列形式。しきい値のハードコードなし、秘密情報はリポジトリに置かない。",
  },

  footer: {
    github: "GitHub",
    license: "MIT License",
    disclaimer:
      "本サイトは公開仕様（x402、freee / マネーフォワード API）に対して作った概念実証です。サンプルデータ上で動作し、勘定科目・金額・税務区分は検証用のサンプルで、会計・税務の助言ではありません。Ramp / freee / マネーフォワード / Coinbase とは無関係で、提携・推奨関係もありません。",
  },
};
