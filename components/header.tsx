"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Sparkles } from "lucide-react";

export default function Header({ nav = false }: { nav?: Boolean }) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="bg-background/70 backdrop-blur border-b border-muted sticky top-0 z-50 shadow-sm">
      <div className="container max-w-7xl mx-auto px-4 py-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Image
                src="/images/profix-logo.png"
                alt="PROFIX MARKETING"
                width={180}
                height={52}
                priority
                className="h-12 w-auto dark:invert dark:brightness-0"
              />
            </Link>
          </div>
          {nav && (
            <nav className="hidden md:flex space-x-6 text-sm">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm hover:text-teal-600 transition-all duration-300 font-medium bg-transparent border-none cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm hover:text-teal-600 transition-all duration-300 font-medium bg-transparent border-none cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("platforms")}
                className="text-sm hover:text-teal-600 transition-all duration-300 font-medium bg-transparent border-none cursor-pointer"
              >
                Platforms
              </button>
              <button
                onClick={() => scrollToSection("strategies")}
                className="text-sm hover:text-teal-600 transition-all duration-300 font-medium bg-transparent border-none cursor-pointer"
              >
                Strategies
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-sm hover:text-teal-600 transition-all duration-300 font-medium bg-transparent border-none cursor-pointer"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm hover:text-teal-600 transition-all duration-300 font-medium bg-transparent border-none cursor-pointer"
              >
                Contact
              </button>
            </nav>
          )}
          <div className="flex gap-4">
            <ThemeToggle />
            <Button
              size="sm"
              className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="https://sey.portal.equiticlients.com/sc/register/?accountType=Standard&clickid=1125427&affid=C02194992">
                Get Started
                <Sparkles className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
