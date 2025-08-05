import type { Metadata } from "next";
import Header from "@/components/header";
import { ReactNode } from "react";
import ClientLegalLayout from "@/components/legal/client-legal-hero";

export const metadata: Metadata = {
  title: "Legal Information | PROFIX MARKETING",
  description:
    "Legal information, policies, and compliance details for PROFIX MARKETING services.",
  keywords: ["Legal", "Policies", "Compliance", "Terms", "Privacy"],
  robots: {
    index: true,
    follow: true,
  },
};

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <ClientLegalLayout>{children}</ClientLegalLayout>
    </div>
  );
}
