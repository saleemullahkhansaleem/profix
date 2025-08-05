import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { homePageSEO } from "@/lib/seo";
import {
  ProfixOrganizationSchema,
  ProfixWebSiteSchema,
} from "@/components/seo/structured-data";
import { ClientCoreWebVitalsMonitor } from "@/components/seo/client-monitor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...homePageSEO,
  generator: "Next.js",
  applicationName: "PROFIX MARKETING",
  referrer: "origin-when-cross-origin",
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
  manifest: "/site.webmanifest",
  category: "Finance",
  classification: "Business",
  other: {
    "msapplication-TileColor": "#00cc88",
    "theme-color": "#00cc88",
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
      <head>
        <ProfixOrganizationSchema />
        <ProfixWebSiteSchema />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientCoreWebVitalsMonitor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
