import type { ReactNode } from "react";

/**
 * One section: a monospace index in the left rail, the heading and body in the
 * main column. The index is the reading order of the page, not decoration.
 */
export function Section({
  id,
  index,
  title,
  children,
}: {
  id?: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-16 border-t border-line-soft py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-page gap-8 px-5 sm:px-8 lg:grid-cols-[7rem_1fr] lg:gap-16">
        <div className="lg:pt-2">
          <span className="eyebrow text-faint">{index}</span>
        </div>
        <div>
          <h2 className="h2-section font-medium text-fg">{title}</h2>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </section>
  );
}
