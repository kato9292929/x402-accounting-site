import { Section } from "@/components/sections/Section";
import type { SiteCopy } from "@/content/types";

export function HowItWorks({ copy }: { copy: SiteCopy }) {
  const { steps } = copy.how;

  return (
    <Section id="how-it-works" index="02" title={copy.how.title}>
      {/* The pipeline as a rail: each step on a line, the control step lifted
          out of it because that is where the money is actually stopped. */}
      <ol className="relative">
        {steps.map((step, i) => (
          <li
            key={step.name}
            className={
              step.key
                ? "relative rounded-lg border border-accent/40 bg-accent/[0.06] px-5 py-6 md:px-7"
                : "relative border-b border-line-soft px-0 py-6"
            }
          >
            <div className="grid gap-3 md:grid-cols-[3rem_13rem_1fr] md:items-baseline md:gap-6">
              <span
                className={`eyebrow ${step.key ? "text-accent" : "text-faint"}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className={`font-mono text-sm font-semibold ${
                  step.key ? "text-accent" : "text-fg"
                }`}
              >
                {step.name}
              </h3>
              <p className="max-w-2xl leading-relaxed text-muted">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <figure className="mt-10 border-l-2 border-accent pl-6">
        <p className="max-w-2xl text-lg leading-relaxed text-fg md:text-xl">
          {copy.how.caption}
        </p>
        <figcaption className="eyebrow mt-3 text-accent">
          {copy.how.note}
        </figcaption>
      </figure>
    </Section>
  );
}
