import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PROFIX MARKETING - Expert Financial Trading",
  description:
    "Navigate financial markets with expert precision. 7+ years of experience in stocks, forex, commodities, and cryptocurrencies.",
  metadataBase: new URL("https://profixmarketing.vercel.app"),
  generator: "Next.js",
  applicationName: "PROFIX MARKETING",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Profix Marketing",
    "Financial Trading",
    "Forex",
    "Stocks",
    "Cryptocurrencies",
    "CFD Trading",
    "Commodities",
    "Investment",
    "Trading UAE",
  ],
  authors: [
    { name: "PROFIX MARKETING", url: "https://profixmarketing.vercel.app" },
  ],
  creator: "PROFIX MARKETING",
  publisher: "PROFIX MARKETING",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "icon",
      url: "/android-chrome-192x192.png",
    },
  },
  openGraph: {
    title: "PROFIX MARKETING - Expert Financial Trading",
    description:
      "Explore expert trading strategies in Forex, Stocks, Commodities, and Crypto with Profix Marketing. Trusted by clients in UAE and beyond.",
    url: "https://profixmarketing.vercel.app",
    siteName: "PROFIX MARKETING",
    images: [
      {
        url: "https://profixmarketing.vercel.app/og-image.png", // must be absolute
        width: 1200,
        height: 630,
        alt: "PROFIX MARKETING - Expert Financial Trading",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PROFIX MARKETING - Expert Financial Trading",
    description:
      "7+ years of expertise in Forex, Stocks, Crypto & CFD trading. Navigate financial markets with confidence.",
    creator: "https://mrsaleem.vercel.app/",
    images: ["https://profixmarketing.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#00cc88",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
