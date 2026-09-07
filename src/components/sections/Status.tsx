import type { SiteCopy, StatusRow } from "@/content/types";

const TAG_STYLE: Record<StatusRow["tone"], string> = {
  works: "border-accent text-accent",
  keys: "border-[#96610f] text-[#96610f]",
  no: "border-[#96382b] text-[#96382b]",
};

export function Status({ copy }: { copy: SiteCopy }) {
  return (
    <section id="status" className="scroll-mt-8 border-t border-border py-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          {copy.status.title}
        </h2>
        <div className="mt-8 flex flex-col gap-4">
          {copy.status.rows.map((row) => (
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
