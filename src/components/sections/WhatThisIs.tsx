import { Section } from "@/components/sections/Section";
import type { SiteCopy } from "@/content/types";

export function WhatThisIs({ copy }: { copy: SiteCopy }) {
  return (
    <Section id="overview" index="01" title={copy.what.title}>
      <p className="max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
        {copy.what.body}
      </p>
    </Section>
  );
}
