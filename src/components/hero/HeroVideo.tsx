"use client";

// Full-screen autoplaying, looping, muted background video.
//
// Two overlays sit on top: a flat scrim that keeps white text readable over any
// frame, and a bottom gradient that dissolves the video into the page ground so
// the hero and the sections below read as one surface instead of two.
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
          style={{ backgroundColor: "#05070A" }}
        />
      ) : (
        <div aria-hidden className="absolute inset-0 h-full w-full bg-ink" />
      )}
      <div aria-hidden className="absolute inset-0 bg-ink/45" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-ink"
      />
    </>
  );
}
