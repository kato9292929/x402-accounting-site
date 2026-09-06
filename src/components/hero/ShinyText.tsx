"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface ShinyTextProps {
  /** Text rendered with the sweeping shine. */
  text: string;
  /** Seconds for one full sweep. */
  speed?: number;
  /** Resting color of the text. */
  baseColor?: string;
  /** Color of the highlight that sweeps across. */
  shineColor?: string;
  /** Gradient angle, in degrees. */
  spread?: number;
  className?: string;
}

/**
 * Gradient-masked text with a highlight that sweeps left to right, forever.
 *
 * The gradient is three times the width of the text, so animating
 * background-position from 100% to 0% walks the shine band across the glyphs.
 * backgroundClip: "text" with a transparent fill is what lets the gradient show
 * through the letterforms instead of the box behind them.
 */
export function ShinyText({
  text,
  speed = 3,
  baseColor = "#64CEFB",
  shineColor = "#ffffff",
  spread = 100,
  className = "",
}: ShinyTextProps) {
  const prefersReducedMotion = useReducedMotion();

  const gradient = `linear-gradient(${spread}deg, ${baseColor} 0%, ${baseColor} 35%, ${shineColor} 50%, ${baseColor} 65%, ${baseColor} 100%)`;

  return (
    <motion.span
      className={`inline-block ${className}`}
      style={{
        backgroundImage: gradient,
        backgroundSize: "300% 100%",
        backgroundRepeat: "no-repeat",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
      }}
      initial={{ backgroundPosition: "100% 50%" }}
      animate={
        prefersReducedMotion
          ? { backgroundPosition: "50% 50%" }
          : { backgroundPosition: "0% 50%" }
      }
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: speed, ease: "linear", repeat: Infinity, repeatType: "loop" }
      }
    >
      {text}
    </motion.span>
  );
}
