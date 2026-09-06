import { Hero } from "@/components/hero/Hero";
import { HeroNav } from "@/components/hero/HeroNav";
import { HeroVideo } from "@/components/hero/HeroVideo";
import { Footer } from "@/components/sections/Footer";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Quickstart } from "@/components/sections/Quickstart";
import { Status } from "@/components/sections/Status";
import { WhatThisIs } from "@/components/sections/WhatThisIs";
import { Why } from "@/components/sections/Why";

// CloudFront background video. Empty until the URL is set — HeroVideo falls
// back to a solid ground, so the page builds and reads fine without it.
const HERO_VIDEO = "";

export default function Page() {
  return (
    <>
      <HeroVideo src={HERO_VIDEO} />

      <div className="relative z-[1]">
        <HeroNav />
        <Hero />

        {/* Solid ground so the content scrolls over the fixed video. */}
        <div className="bg-bg">
          <WhatThisIs />
          <HowItWorks />
          <Why />
          <Status />
          <Quickstart />
          <Footer />
        </div>
      </div>
    </>
  );
}
