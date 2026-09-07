import { Section } from "@/components/sections/Section";
import type { SiteCopy } from "@/content/types";

export function Quickstart({ copy }: { copy: SiteCopy }) {
  const lines = copy.quickstart.commands.split("\n");

  return (
    <Section index="05" title={copy.quickstart.title}>
      <div className="overflow-hidden rounded-lg border border-line bg-surface">
        <div className="flex items-center gap-2 border-b border-line-soft px-4 py-3">
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-line" />
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-line" />
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
        <pre className="overflow-x-auto px-5 py-5 font-mono text-sm leading-loose">
          <code>
            {lines.map((line) => (
              <span key={line} className="block">
                <span aria-hidden className="select-none text-accent-dim">
                  ${" "}
                </span>
                <span className="text-fg">{line}</span>
              </span>
            ))}
          </code>
        </pre>
      </div>
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-faint">
        {copy.quickstart.note}
      </p>
    </Section>
  );
}
