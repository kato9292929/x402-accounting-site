import { Section } from "@/components/sections/Section";
import type { SiteCopy, StatusRow } from "@/content/types";

// Status is the most load-bearing section on the page: it is where the site
// says what does not work. Each state gets its own colour so the three read
// apart at a glance, not as one list of claims.
const TONE: Record<StatusRow["tone"], { chip: string; stripe: string }> = {
  works: { chip: "border-ok/40 bg-ok/10 text-ok", stripe: "bg-ok" },
  keys: { chip: "border-warn/40 bg-warn/10 text-warn", stripe: "bg-warn" },
  no: { chip: "border-stop/40 bg-stop/10 text-stop", stripe: "bg-stop" },
};

export function Status({ copy }: { copy: SiteCopy }) {
  return (
    <Section id="status" index="04" title={copy.status.title}>
      <div className="flex flex-col gap-4">
        {copy.status.rows.map((row) => {
          const tone = TONE[row.tone];
          return (
            <div
              key={row.tag}
              className="relative overflow-hidden rounded-lg border border-line bg-surface"
            >
              <span
                aria-hidden
                className={`absolute inset-y-0 left-0 w-1 ${tone.stripe}`}
              />
              <div className="grid gap-4 py-6 pl-7 pr-6 md:grid-cols-[11rem_1fr] md:gap-8">
                <span
                  className={`eyebrow justify-self-start rounded-full border px-3 py-1.5 ${tone.chip}`}
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
