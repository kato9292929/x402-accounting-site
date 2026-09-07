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
    <section className="relative h-screen w-full overflow-hidden bg-hero">
      <HeroVideo src={videoSrc} />

      <div className="relative z-10 flex h-full flex-col">
        <HeroNav copy={copy} />

        {/* Top section */}
        <div className="mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <p className="max-w-xl text-sm text-white/80 md:text-base">
              {copy.hero.topLeft}
            </p>
            <p className="text-sm text-white/80 md:text-base lg:max-w-xs lg:text-right">
              {copy.hero.topRight}
            </p>
          </div>
        </div>

        {/* Hero */}
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-tight text-white/80 md:text-sm">
            {copy.hero.eyebrow}
          </p>

          <h1
            className={`mt-4 font-medium leading-[0.85] tracking-tighter ${copy.hero.headingClass}`}
          >
            <span className="block text-white">{copy.hero.headingLine1}</span>
            <ShinyText
              text={copy.hero.headingShine}
              baseColor="#64CEFB"
              shineColor="#ffffff"
              speed={3}
              spread={100}
              className="block"
            />
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
            {copy.hero.sub}
          </p>

          <a
            href={GITHUB_URL}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm text-white transition-colors duration-200 hover:bg-gray-900 md:px-8 md:py-4 md:text-base"
          >
            {copy.hero.cta}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
