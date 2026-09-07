export type Lang = "en" | "ja";

export interface Step {
  name: string;
  body: string;
  /** The step the page is built around: spend control, before signing. */
  key?: boolean;
}

export interface StatusRow {
  tag: string;
  tone: "works" | "keys" | "no";
  body: string;
}

export interface SiteCopy {
  lang: Lang;
  /** Path of the other locale, for the language toggle. */
  altHref: string;
  altLabel: string;
  metaTitle: string;
  metaDescription: string;

  nav: { label: string; href: string }[];
  navGithub: string;

  hero: {
    topRight: string;
    eyebrow: string;
    headingLine1: string;
    /** Rendered with the sweeping shine. */
    headingShine: string;
    /** Locale-specific type scale: Japanese needs fewer, wider glyphs to fit. */
    headingClass: string;
    sub: string;
    cta: string;
  };

  what: { title: string; body: string };
  how: { title: string; steps: Step[]; caption: string; note: string };
  why: { title: string; points: { title: string; body: string }[] };
  status: { title: string; rows: StatusRow[] };
  quickstart: { title: string; commands: string; note: string };
  footer: { github: string; license: string; disclaimer: string };
}
