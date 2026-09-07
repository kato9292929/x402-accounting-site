import { Hero } from "@/components/hero/Hero";
import { Footer } from "@/components/sections/Footer";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Quickstart } from "@/components/sections/Quickstart";
import { Status } from "@/components/sections/Status";
import { WhatThisIs } from "@/components/sections/WhatThisIs";
import { Why } from "@/components/sections/Why";

// CloudFront background video for the hero.
const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4";

export default function Page() {
  return (
    <>
      <Hero videoSrc={HERO_VIDEO} />

      <div className="bg-bg">
        <WhatThisIs />
        <HowItWorks />
        <Why />
        <Status />
        <Quickstart />
        <Footer />
      </div>
    </>
  );
}
