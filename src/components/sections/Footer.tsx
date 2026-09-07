import { GITHUB_URL, LICENSE_URL } from "@/components/links";
import type { SiteCopy } from "@/content/types";

export function Footer({ copy }: { copy: SiteCopy }) {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a
            href={GITHUB_URL}
            className="underline underline-offset-4 hover:text-accent"
          >
            {copy.footer.github}
          </a>
          <a
            href={LICENSE_URL}
            className="underline underline-offset-4 hover:text-accent"
          >
            {copy.footer.license}
          </a>
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted">
          {copy.footer.disclaimer}
        </p>
      </div>
    </footer>
  );
}
