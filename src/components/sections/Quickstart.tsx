import type { SiteCopy } from "@/content/types";

export function Quickstart({ copy }: { copy: SiteCopy }) {
  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          {copy.quickstart.title}
        </h2>
        <pre className="mt-6 overflow-x-auto rounded border border-border bg-surface p-5 font-mono text-sm leading-relaxed">
          <code>{copy.quickstart.commands}</code>
        </pre>
        <p className="mt-4 max-w-2xl font-mono text-xs leading-relaxed text-muted">
          {copy.quickstart.note}
        </p>
      </div>
    </section>
  );
}
