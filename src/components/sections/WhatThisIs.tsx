import type { SiteCopy } from "@/content/types";

export function WhatThisIs({ copy }: { copy: SiteCopy }) {
  return (
    <section id="overview" className="scroll-mt-8 border-t border-border py-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          {copy.what.title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          {copy.what.body}
        </p>
      </div>
    </section>
  );
}
