import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // One dark world, carried from the hero video through the whole page.
        ink: "#05070A",        // page ground
        surface: "#0D1117",    // cards, code
        line: "#1E2732",       // hairlines
        "line-soft": "#161D26",
        fg: "#E8ECF1",         // primary text
        muted: "#97A3B4",      // secondary text
        faint: "#6B7787",      // tertiary / captions
        accent: "#64CEFB",     // the ShinyText blue — the single accent
        "accent-dim": "#2B7A9B",
        ok: "#5AD1A0",         // status: works
        warn: "#E5B567",       // status: needs keys
        stop: "#E8836F",       // status: not supported
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
