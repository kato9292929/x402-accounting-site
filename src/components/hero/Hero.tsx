import { GITHUB_URL } from "@/components/links";

export function Hero() {
  return (
    <header className="relative z-[1] mx-auto flex w-full max-w-5xl flex-col items-start px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
      <span className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
        Open-source proof of concept · MIT
      </span>

      <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl">
        Put agent per-call payments on the books.
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        x402 outward payments — normalized, held to a spend limit before
        signing, posted as double-entry journals, exported for accounting,
        reconciled monthly. One command, over a sample ledger.
      </p>

      <a
        href={GITHUB_URL}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        View on GitHub
        <span aria-hidden>→</span>
      </a>

      <p className="mt-4 font-mono text-xs text-muted">
        Runs on bundled sample data. Not a live integration.
      </p>
    </header>
  );
}
