import { GITHUB_URL } from "@/components/links";

export function HeroNav() {
  return (
    <nav className="relative z-[1] mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-6 sm:px-8">
      <span className="text-sm font-medium tracking-tight">
        x402 Accounting Bridge
      </span>
      <a
        href={GITHUB_URL}
        className="rounded-full border border-border bg-surface px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
      >
        GitHub
      </a>
    </nav>
  );
}
