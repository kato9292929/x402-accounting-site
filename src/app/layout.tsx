import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "x402 Accounting Bridge — put agent per-call payments on the books",
  description:
    "An open-source proof of concept that normalizes x402 per-call payments, holds them to a spend limit before signing, posts them as double-entry journals, exports for accounting and reconciles monthly. Runs on bundled sample data.",
  openGraph: {
    title: "x402 Accounting Bridge",
    description:
      "Open-source proof of concept. Spend control before signing, double-entry journals, monthly reconciliation — over a sample ledger.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg">{children}</body>
    </html>
  );
}
