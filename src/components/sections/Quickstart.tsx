const COMMANDS = `pip install -r requirements.txt
PYTHONPATH=src python3 -m x402_ramp run-all`;

export function Quickstart() {
  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Quickstart</h2>
        <pre className="mt-6 overflow-x-auto rounded border border-border bg-surface p-5 font-mono text-sm leading-relaxed">
          <code>{COMMANDS}</code>
        </pre>
        <p className="mt-4 max-w-2xl font-mono text-xs leading-relaxed text-muted">
          Spend policy lives in config/ — limits, category and cost-center maps,
          and the export column format. No thresholds hard-coded, no secrets in
          the repo.
        </p>
      </div>
    </section>
  );
}
