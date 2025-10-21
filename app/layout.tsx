import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  title: {
    default: "Onyxbulls - Forex Trading Education in Pakistan",
    template: "%s - Onyxbulls",
  },
  description: "Master forex trading with professional courses in Pakistan. Let every trade bring you closer to financial freedom with expert guidance and proven strategies.",
  keywords: ["forex trading", "trading education", "forex course", "pakistan", "financial freedom", "trading strategies"],
  authors: [{ name: "Onyxbulls" }],
  creator: "Onyxbulls",
  publisher: "Onyxbulls",
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#00ffaa' }, // neon-500
    { media: '(prefers-color-scheme: dark)', color: '#00cc88' }, // neon-600
  ],
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    title: "Onyxbulls - Forex Trading Education in Pakistan",
    description: "Master forex trading with professional courses in Pakistan. Let every trade bring you closer to financial freedom with expert guidance and proven strategies.",
    siteName: "Onyxbulls",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Onyxbulls - Forex Trading Education",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-neon-500 text-black px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
