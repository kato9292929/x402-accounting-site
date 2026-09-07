import type { SiteCopy } from "@/content/types";

export const en: SiteCopy = {
  lang: "en",
  altHref: "/ja",
  altLabel: "日本語",
  metaTitle: "x402 Accounting Bridge — put agent per-call payments on the books",
  metaDescription:
    "An accounting and spend-control layer for AI-agent payments. Enforces spending limits before each payment, records every payment as double-entry bookkeeping, exports to your accounting software and reconciles monthly. Open-source proof of concept, running on a sample ledger.",

  nav: [
    { label: "Overview", href: "#overview" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Why", href: "#why" },
    { label: "Status", href: "#status" },
  ],
  navGithub: "GitHub",

  hero: {
    topRight: "Open-source proof of concept · MIT",
    eyebrow: "Runs on a sample ledger · Not a live integration",
    headingLine1: "Put agent per-call payments",
    headingShine: "on the books.",
    headingClass: "h1-en",
    sub: "Agents pay per API call in USDC. Each payment is capped before signing, then booked as a double-entry journal.",
    cta: "View on GitHub",
  },

  what: {
    title: "What this is",
    body: "An accounting layer for the money your AI agents spend. Agents increasingly pay external vendors per API call — small USDC payments, many times a day. Today those payments sit outside your books as untracked crypto outflows. This turns each one into a proper journal entry, holds it to a spending limit before the money leaves, and reconciles it monthly — so agent spending appears in your accounts like any other expense.",
  },

  how: {
    title: "How it works",
    steps: [
      {
        name: "payment log (JSONL)",
        body: "Per-call payment events, as the agent's client writes them.",
      },
      {
        name: "normalize",
        body: "One schema. Duplicate transactions dropped, currencies normalized, vendor mapped to an expense account and agent to a cost center.",
      },
      {
        name: "control",
        body: "Per-transaction, per-category and per-cost-center limits, evaluated in that order, before anything is signed.",
        key: true,
      },
      {
        name: "journal",
        body: "Two lines per payment: debit the expense account, credit USDC. Debits and credits have to match, and they are checked.",
      },
      {
        name: "export",
        body: "journal.csv and journal.json, in the column format the accounting software expects.",
      },
      {
        name: "reconcile",
        body: "Who spent what, on what — with utilization against each limit and a count of violations.",
      },
    ],
    caption:
      "The spend limit is enforced at the signing boundary — an over-limit payment is never signed.",
    note: "never signed / never leaves",
  },

  why: {
    title: "Why",
    points: [
      {
        title: "Spend control before signing",
        body: "Per-transaction, per-category and per-cost-center limits are checked in a wrapper in front of the payment client. Over the limit, no signature is produced.",
      },
      {
        title: "Books, not just logs",
        body: "Every payment becomes a balanced double-entry journal (decimal amounts) and exports to your accounting software's column format. Swap the mapping, no code change.",
      },
      {
        title: "Monthly reconciliation",
        body: "Who spent, on what, how much — with limit utilization and violation counts. The non-executed records are the evidence the control held.",
      },
    ],
  },

  status: {
    title: "Honest status",
    rows: [
      {
        tag: "WORKS",
        tone: "works",
        body: "Core pipeline (normalize, spend control, double-entry journal, CSV/JSON export, monthly reconciliation). Runs on the sample ledger; 153 tests green.",
      },
      {
        tag: "NEEDS KEYS",
        tone: "keys",
        body: "x402 signing · freee / MF export: adapters implemented against public specs. Set env vars to connect; unset, they refuse without touching the network.",
      },
      {
        tag: "NOT SUPPORTED",
        tone: "no",
        body: "Ramp: investigated and dropped (no confirmed account eligibility for Japanese entities; no public API to write an external payment as a transaction). Reference implementation only.",
      },
    ],
  },

  quickstart: {
    title: "Quickstart",
    commands: `pip install -r requirements.txt
PYTHONPATH=src python3 -m x402_ramp run-all`,
    note: "Spend policy lives in config/ — limits, category and cost-center maps, and the export column format. No thresholds hard-coded, no secrets in the repo.",
  },

  footer: {
    github: "GitHub",
    license: "MIT License",
    disclaimer:
      "A proof of concept built against public specifications (x402, freee / Money Forward APIs). Runs on sample data; amounts, accounts and tax treatment are unverified samples, not accounting or tax advice. Not affiliated with, endorsed by, or connected to Ramp, freee, Money Forward, or Coinbase.",
  },
};
