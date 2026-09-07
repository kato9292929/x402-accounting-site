import type { SiteCopy } from "@/content/types";

export function Why({ copy }: { copy: SiteCopy }) {
  return (
    <section id="why" className="scroll-mt-8 border-t border-border py-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          {copy.why.title}
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {copy.why.points.map((point) => (
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
