"use client";

import { ArrowRight } from "lucide-react";

import { GITHUB_URL } from "@/components/links";
import { HeroNav } from "@/components/hero/HeroNav";
import { HeroVideo } from "@/components/hero/HeroVideo";
import { ShinyText } from "@/components/hero/ShinyText";

export function Hero({ videoSrc }: { videoSrc?: string }) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-hero">
      <HeroVideo src={videoSrc} />

      <div className="relative z-10 flex h-full flex-col">
        <HeroNav />

        {/* Top section */}
        <div className="mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <p className="max-w-xl text-sm text-white/80 md:text-base">
              x402 outward payments — normalized, held to a spend limit before
              signing, posted as double-entry journals, exported for accounting,
              reconciled monthly.
            </p>
            <p className="text-sm text-white/80 md:text-base lg:max-w-xs lg:text-right">
              Open-source proof of concept · MIT
            </p>
          </div>
        </div>

        {/* Hero */}
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-tight text-white/80 md:text-sm">
            Runs on a sample ledger · Not a live integration
          </p>

          <h1 className="mt-4 text-5xl font-medium leading-[0.85] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            <span className="block text-white">Put agent per-call payments</span>
            <ShinyText
              text="on the books."
              baseColor="#64CEFB"
              shineColor="#ffffff"
              speed={3}
              spread={100}
              className="block"
            />
          </h1>

          <a
            href={GITHUB_URL}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm text-white transition-colors duration-200 hover:bg-gray-900 md:px-8 md:py-4 md:text-base"
          >
            View on GitHub
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
