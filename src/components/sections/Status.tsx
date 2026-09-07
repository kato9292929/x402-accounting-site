import { Section } from "@/components/sections/Section";
import type { SiteCopy, StatusRow } from "@/content/types";

// Status is the load-bearing section: it is where the site says what does not
// work. Each state gets its own colour so the three read apart at a glance.
const TONE: Record<StatusRow["tone"], { tag: string; stripe: string }> = {
  works: { tag: "bg-ok/12 text-ok", stripe: "bg-ok" },
  keys: { tag: "bg-warn/12 text-warn", stripe: "bg-warn" },
  no: { tag: "bg-stop/12 text-stop", stripe: "bg-stop" },
};

export function Status({ copy }: { copy: SiteCopy }) {
  return (
    <Section id="status" index="04" title={copy.status.title}>
      <div className="flex flex-col gap-3">
        {copy.status.rows.map((row) => {
          const tone = TONE[row.tone];
          return (
            <div
              key={row.tag}
              className="relative overflow-hidden rounded-md border border-line bg-surface"
            >
              <span
                aria-hidden
                className={`absolute inset-y-0 left-0 w-0.5 ${tone.stripe}`}
              />
              <div className="flex flex-col gap-3 py-5 pl-6 pr-6 sm:flex-row sm:items-baseline sm:gap-6">
                <span
                  className={`eyebrow shrink-0 self-start rounded px-2 py-1 sm:w-36 sm:text-center ${tone.tag}`}
                >
                  {row.tag}
                </span>
                <p className="leading-relaxed text-muted">{row.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
