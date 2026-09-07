"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

import { GITHUB_URL } from "@/components/links";
import type { SiteCopy } from "@/content/types";

export function HeroNav({ copy }: { copy: SiteCopy }) {
  const [open, setOpen] = useState(false);

  const links = (
    <>
      {copy.nav.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={() => setOpen(false)}
          className="text-sm text-white/80 transition-colors duration-200 hover:text-white"
        >
          {link.label}
        </a>
      ))}
      <a
        href={GITHUB_URL}
        className="group flex items-center gap-1 text-sm text-white/80 transition-colors duration-200 hover:text-white"
      >
        {copy.navGithub}
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
      <Link
        href={copy.altHref}
        onClick={() => setOpen(false)}
        className="text-sm text-white/80 transition-colors duration-200 hover:text-white"
        lang={copy.lang === "en" ? "ja" : "en"}
      >
        {copy.altLabel}
      </Link>
    </>
  );

  return (
    <nav className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <Link
          href={copy.lang === "en" ? "/" : "/ja"}
          className="flex items-center gap-2.5 text-sm text-white"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white">
            <span className="h-2.5 w-2.5 rounded-full bg-white" />
          </span>
          <span className="font-medium tracking-tight">
            x402 Accounting Bridge
          </span>
        </Link>

        <div className="hidden items-center gap-6 rounded-full border border-gray-700 px-6 py-2.5 lg:flex">
          {links}
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-gray-700 p-2 text-white/80 transition-colors duration-200 hover:text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="mt-4 flex flex-col gap-3 rounded-3xl border border-gray-700 px-6 py-5 lg:hidden">
          {links}
        </div>
      ) : null}
    </nav>
  );
}
