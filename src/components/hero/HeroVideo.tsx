"use client";

// Full-screen autoplaying, looping, muted background video.
//
// `src` is optional on purpose: until the CloudFront URL is set in page.tsx we
// render the fallback ground on its own, so the build and the page hold up with
// no video configured. Dropping the URL in turns this into the video hero with
// no other change.
export function HeroVideo({ src }: { src?: string }) {
  if (!src) {
    return (
      <div
        aria-hidden
        className="fixed inset-0 h-full w-full bg-hero"
        style={{ zIndex: 0 }}
      />
    );
  }

  return (
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden
      className="fixed inset-0 h-full w-full object-cover"
      style={{ zIndex: 0, backgroundColor: "#eeecec" }}
    />
  );
}
