import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#fafafa",        // page background below the hero
        surface: "#ffffff",   // cards / code blocks
        border: "#e6e8e6",    // hairline borders
        accent: "#1c6b50",    // ledger green (links, control emphasis)
        muted: "#6b6a70",     // secondary text
        hero: "#000000",      // hero ground behind the video
        shine: "#64cefb",     // ShinyText base color
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
