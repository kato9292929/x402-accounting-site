const POINTS = [
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
];

export function Why() {
  return (
    <section id="why" className="scroll-mt-8 border-t border-border py-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Why</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {POINTS.map((point) => (
            <div key={point.title}>
              <h3 className="text-base font-semibold">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
