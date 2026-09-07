import type { ReactNode } from "react";

/**
 * One section. The index sits above the heading rather than in a left rail —
 * the rail left a wide empty column and pushed everything off-centre.
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
      className="scroll-mt-16 border-t border-line-soft py-16 md:py-24"
    >
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <div className="flex items-baseline gap-4">
          <span className="eyebrow text-faint">{index}</span>
          <h2 className="h2-section font-medium text-fg">{title}</h2>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
