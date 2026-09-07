import type { Metadata } from "next";

import { Site } from "@/components/Site";
import { ja } from "@/content/ja";

export const metadata: Metadata = {
  title: ja.metaTitle,
  description: ja.metaDescription,
  alternates: { canonical: "/ja", languages: { en: "/", ja: "/ja" } },
};

export default function JaPage() {
  return <Site copy={ja} />;
}
