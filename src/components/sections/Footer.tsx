import { GITHUB_URL, LICENSE_URL } from "@/components/links";
import type { SiteCopy } from "@/content/types";

export function Footer({ copy }: { copy: SiteCopy }) {
  return (
    <footer className="border-t border-line-soft py-14">
      <div className="mx-auto grid max-w-page gap-8 px-5 sm:px-8 lg:grid-cols-[7rem_1fr] lg:gap-16">
        <div className="flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-fg">
            <span className="h-2 w-2 rounded-full bg-fg" />
          </span>
        </div>
        <div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href={GITHUB_URL}
              className="text-fg underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {copy.footer.github}
            </a>
            <a
              href={LICENSE_URL}
              className="text-fg underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {copy.footer.license}
            </a>
          </div>
          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-faint">
            {copy.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
