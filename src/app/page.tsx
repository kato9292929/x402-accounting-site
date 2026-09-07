import type { Metadata } from "next";

import { Site } from "@/components/Site";
import { en } from "@/content/en";

export const metadata: Metadata = {
  title: en.metaTitle,
  description: en.metaDescription,
  alternates: { canonical: "/", languages: { en: "/", ja: "/ja" } },
};

export default function Page() {
  return <Site copy={en} />;
}
