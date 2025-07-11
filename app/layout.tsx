import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PROFIX MARKETING - Expert Financial Trading",
  description:
    "Navigate financial markets with expert precision. 7+ years of experience in stocks, forex, commodities, and cryptocurrencies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "PROFIX MARKETING - Expert Financial Trading",
//   description:
//     "Navigate financial markets with expert precision. 7+ years of experience in stocks, forex, commodities, and cryptocurrencies.",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }
