"use client";

// Full-screen autoplaying, looping, muted background video, plus a light scrim
// so the white hero text stays readable over any frame.
//
// `src` is optional: with none set the black ground renders on its own, so the
// build and the page hold up without a video configured.
export function HeroVideo({ src }: { src?: string }) {
  return (
    <>
      {src ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          style={{ backgroundColor: "#000000" }}
        />
      ) : (
        <div aria-hidden className="absolute inset-0 h-full w-full bg-hero" />
      )}
      <div aria-hidden className="absolute inset-0 bg-black/40" />
    </>
  );
}
