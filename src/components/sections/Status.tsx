type Row = { tag: string; tone: "works" | "keys" | "no"; body: string };

const ROWS: Row[] = [
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
];

const TAG_STYLE: Record<Row["tone"], string> = {
  works: "border-accent text-accent",
  keys: "border-[#96610f] text-[#96610f]",
  no: "border-[#96382b] text-[#96382b]",
};

export function Status() {
  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Honest status</h2>
        <div className="mt-8 flex flex-col gap-4">
          {ROWS.map((row) => (
            <div
              key={row.tag}
              className="grid gap-3 rounded border border-border bg-surface p-5 sm:grid-cols-[10rem_1fr] sm:gap-6"
            >
              <span
                className={`justify-self-start rounded border px-2.5 py-1 font-mono text-xs font-semibold ${TAG_STYLE[row.tone]}`}
              >
                {row.tag}
              </span>
              <p className="text-sm leading-relaxed text-muted">{row.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
