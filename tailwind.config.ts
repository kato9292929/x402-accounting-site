import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#fafafa",       // page background (near-white)
        surface: "#ffffff",  // cards / code blocks
        border: "#e6e8e6",   // hairline borders
        accent: "#1c6b50",   // ledger green
        muted: "#6b6a70",    // secondary text
        hero: "#eeecec",     // fallback ground behind the hero video
      },
      fontFamily: {
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
