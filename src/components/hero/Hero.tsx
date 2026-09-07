"use client";

import { ArrowRight } from "lucide-react";

import { GITHUB_URL } from "@/components/links";
import { HeroNav } from "@/components/hero/HeroNav";
import { HeroVideo } from "@/components/hero/HeroVideo";
import { ShinyText } from "@/components/hero/ShinyText";
import type { SiteCopy } from "@/content/types";

export function Hero({
  copy,
  videoSrc,
}: {
  copy: SiteCopy;
  videoSrc?: string;
}) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-ink">
      <HeroVideo src={videoSrc} />

      <div className="relative z-10 flex min-h-screen flex-col">
        <HeroNav copy={copy} />

        {/* Top rail: what it is, and what it isn't, before the headline. */}
        <div className="mx-auto w-full max-w-page px-5 pt-4 sm:px-8">
          <div className="flex flex-col gap-4 border-t border-white/10 pt-5 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <p className="max-w-xl text-sm leading-relaxed text-white/70">
              {copy.hero.topLeft}
            </p>
            <p className="eyebrow shrink-0 text-white/50 lg:text-right">
              {copy.hero.topRight}
            </p>
          </div>
        </div>

        {/* Headline block, left-aligned so long Japanese lines have room. */}
        <div className="mx-auto flex w-full max-w-page flex-1 flex-col justify-center px-5 py-20 sm:px-8">
          <p className="eyebrow text-accent">{copy.hero.eyebrow}</p>

          <h1
            className={`mt-6 font-medium ${copy.hero.headingClass}`}
            style={{ textWrap: "balance" }}
          >
            <span className="block text-white">{copy.hero.headingLine1}</span>
            <ShinyText
              text={copy.hero.headingShine}
              baseColor="#9FE3FF"
              shineColor="#FFFFFF"
              speed={3}
              spread={100}
              className="block"
            />
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {copy.hero.sub}
          </p>

          <div className="mt-10">
            <a
              href={GITHUB_URL}
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-200 hover:bg-accent md:px-8 md:py-4 md:text-base"
            >
              {copy.hero.cta}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
