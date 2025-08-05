"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { Badge } from "@/components/ui/badge";

interface LegalHeroProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const LegalHeroContext = createContext<{
  hero: LegalHeroProps;
  setHero: (hero: LegalHeroProps) => void;
}>({
  hero: {
    icon: <span>📄</span>,
    title: "Legal Page",
    subtitle: "Legal information and policies.",
  },
  setHero: () => {},
});

function LegalHeroSection({ icon, title, subtitle }: LegalHeroProps) {
  return (
    <section className="py-12 bg-gradient-to-b from-primary/5 via-background to-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <Badge
            variant="outline"
            className="mb-4 flex items-center justify-center gap-2 max-w-fit mx-auto"
          >
            {icon}
            {title}
          </Badge>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h1>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

export default function ClientLegalLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [hero, setHero] = useState<LegalHeroProps>({
    icon: <span>📄</span>,
    title: "Legal Page",
    subtitle: "Legal information and policies.",
  });

  return (
    <LegalHeroContext.Provider value={{ hero, setHero }}>
      <div className="min-h-screen bg-background text-foreground">
        <LegalHeroSection {...hero} />
        {children}
      </div>
    </LegalHeroContext.Provider>
  );
}

// Hook to use in pages
export function useLegalHero() {
  return useContext(LegalHeroContext);
}
