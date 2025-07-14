import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-8 pb-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
      <div className="container max-w-7xl mx-auto px-4 relative">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Image
              src="/images/profix-logo.png"
              alt="PROFIX MARKETING"
              width={180}
              height={60}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-slate-400 leading-relaxed text-sm">
              Navigating financial markets with precision and expertise for over
              7 years.
            </p>
          </div>
          {[
            {
              heading: "Services",
              links: [
                "Forex Trading",
                "Stock Trading",
                "Cryptocurrency",
                "Commodities",
              ],
            },
            {
              heading: "Company",
              links: ["About Us", "Our Team", "Strategies", "Contact"],
            },
            {
              heading: "Legal",
              links: [
                "Privacy Policy",
                "Terms of Service",
                "Risk Disclosure",
                "Compliance",
              ],
            },
          ].map((section, index) => (
            <div key={index}>
              <h4 className="font-bold mb-4 text-white">{section.heading}</h4>
              <ul className="space-y-2 text-slate-400">
                {section.links.map((link, idx) => (
                  <li
                    key={idx}
                    className="hover:text-teal-400 text-sm transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <ArrowRight size={16} />
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-800 mt-6 pt-4 text-center text-sm text-slate-400">
          <p>&copy; 2024 PROFIX MARKETING. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
