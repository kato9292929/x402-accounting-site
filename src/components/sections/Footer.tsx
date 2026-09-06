import { GITHUB_URL, LICENSE_URL } from "@/components/links";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href={GITHUB_URL} className="underline underline-offset-4 hover:text-accent">
            GitHub
          </a>
          <a href={LICENSE_URL} className="underline underline-offset-4 hover:text-accent">
            MIT License
          </a>
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted">
          A proof of concept built against public specifications (x402, freee /
          Money Forward APIs). Runs on sample data; amounts, accounts and tax
          treatment are unverified samples, not accounting or tax advice. Not
          affiliated with, endorsed by, or connected to Ramp, freee, Money
          Forward, or Coinbase.
        </p>
      </div>
    </footer>
  );
}
