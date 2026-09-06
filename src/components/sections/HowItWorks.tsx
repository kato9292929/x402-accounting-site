type Step = { name: string; body: string; key?: boolean };

const STEPS: Step[] = [
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
];

export function HowItWorks() {
  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>

        {/* The pipeline, with control carrying the weight. */}
        <div className="mt-6 overflow-x-auto">
          <div className="flex w-max items-center gap-2 font-mono text-xs">
            {STEPS.map((step, i) => (
              <span key={step.name} className="flex items-center gap-2">
                <span
                  className={
                    step.key
                      ? "rounded border border-accent bg-accent px-3 py-2 font-semibold text-white"
                      : "rounded border border-border bg-surface px-3 py-2 text-muted"
                  }
                >
                  {step.name}
                </span>
                {i < STEPS.length - 1 ? (
                  <span className="text-muted" aria-hidden>
                    →
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </div>

        <dl className="mt-10 border-t border-border">
          {STEPS.map((step) => (
            <div
              key={step.name}
              className="grid gap-2 border-b border-border py-4 sm:grid-cols-[14rem_1fr] sm:gap-6"
            >
              <dt
                className={
                  step.key
                    ? "font-mono text-sm font-semibold text-accent"
                    : "font-mono text-sm font-semibold"
                }
              >
                {step.name}
              </dt>
              <dd className="text-base leading-relaxed text-muted">
                {step.body}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 max-w-2xl text-base leading-relaxed">
          The spend limit is enforced at the signing boundary — an over-limit
          payment is never signed.
        </p>
        <p className="mt-2 font-mono text-sm text-muted">
          never signed / never leaves
        </p>
      </div>
    </section>
  );
}
