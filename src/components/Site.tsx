import { Hero } from "@/components/hero/Hero";
import { Footer } from "@/components/sections/Footer";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Quickstart } from "@/components/sections/Quickstart";
import { Status } from "@/components/sections/Status";
import { WhatThisIs } from "@/components/sections/WhatThisIs";
import { Why } from "@/components/sections/Why";
import type { SiteCopy } from "@/content/types";

// CloudFront background video for the hero. Empty turns the hero into its solid
// black ground — the page still builds and reads.
export const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4";

export function Site({ copy }: { copy: SiteCopy }) {
  // The document is served with lang="en"; mark this subtree with the locale it
  // is actually written in so browsers and screen readers get it right on /ja.
  return (
    <div lang={copy.lang}>
      <Hero copy={copy} videoSrc={HERO_VIDEO} />

      <div className="bg-ink">
        <WhatThisIs copy={copy} />
        <HowItWorks copy={copy} />
        <Why copy={copy} />
        <Status copy={copy} />
        <Quickstart copy={copy} />
        <Footer copy={copy} />
      </div>
    </div>
  );
}
