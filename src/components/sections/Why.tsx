import { Section } from "@/components/sections/Section";
import type { SiteCopy } from "@/content/types";

export function Why({ copy }: { copy: SiteCopy }) {
  return (
    <Section id="why" index="03" title={copy.why.title}>
      <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
        {copy.why.points.map((point, i) => (
          <div key={point.title} className="bg-surface p-6 md:p-7">
            <span className="eyebrow text-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-lg font-medium leading-snug text-fg">
              {point.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {point.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
