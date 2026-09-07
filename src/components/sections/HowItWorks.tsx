import type { SiteCopy } from "@/content/types";

export function HowItWorks({ copy }: { copy: SiteCopy }) {
  const { steps } = copy.how;

  return (
    <section
      id="how-it-works"
      className="scroll-mt-8 border-t border-border py-16"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          {copy.how.title}
        </h2>

        {/* The pipeline, with control carrying the weight. */}
        <div className="mt-6 overflow-x-auto">
          <div className="flex w-max items-center gap-2 font-mono text-xs">
            {steps.map((step, i) => (
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
                {i < steps.length - 1 ? (
                  <span className="text-muted" aria-hidden>
                    →
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </div>

        <dl className="mt-10 border-t border-border">
          {steps.map((step) => (
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
          {copy.how.caption}
        </p>
        <p className="mt-2 font-mono text-sm text-muted">{copy.how.note}</p>
      </div>
    </section>
  );
}
