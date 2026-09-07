import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "x402 Accounting Bridge",
  description:
    "An accounting and spend-control layer for AI-agent payments. Open-source proof of concept, running on a sample ledger.",
  openGraph: { title: "x402 Accounting Bridge", type: "website" },
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
      <body className="bg-ink">{children}</body>
    </html>
  );
}
