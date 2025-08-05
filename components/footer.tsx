import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { partners } from "@/lib/data/partners";
import { generateWhatsAppLink, whatsappMessages } from "@/lib/utils/whatsapp";
import MrCard from "./MrCard";

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
              Trusted by over 1,200 satisfied clients, with more than 800 active
              traders confidently navigating the markets with us.
            </p>
          </div>
          {[
            {
              heading: "Contact",
              links: [
                {
                  label: "info@profixmarketing.com",
                  href: "mailto:info@profixmarketing.com",
                },
                {
                  label: "+971 54 582 7355",
                  href: generateWhatsAppLink(whatsappMessages.footer),
                  isWhatsApp: true,
                },
                { label: "Dubai, UAE" },
                { label: "Abu Dhabi, UAE" },
                { label: "Sharjah, UAE" },
                { label: "Ajman, UAE" },
              ],
            },
            {
              heading: "Services",
              links: [
                {
                  label: "Client Education",
                  href: "/services/client-education",
                },
                { label: "Market Insights", href: "/services/market-insights" },
                {
                  label: "Customer-Centric",
                  href: "/services/customer-centric",
                },
                {
                  label: "Dedicated Managers",
                  href: "/services/dedicated-managers",
                },
              ],
            },
            {
              heading: "Legal",
              links: [
                {
                  label: "Privacy Policy",
                  href: "/legal/privacy-policy",
                },
                {
                  label: "Terms of Service",
                  href: "/legal/terms-of-service",
                },
                {
                  label: "Risk Disclosure",
                  href: "/legal/risk-disclosure",
                },
                { label: "Compliance", href: "/legal/compliance" },
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
                    {section.heading === "Contact" ? (
                      link.label.includes("@") ? (
                        <Mail size={16} />
                      ) : "isWhatsApp" in link && link.isWhatsApp ? (
                        <MessageCircle size={16} />
                      ) : (
                        <MapPin size={16} />
                      )
                    ) : (
                      <ArrowRight size={16} />
                    )}
                    {"href" in link && link.href ? (
                      <Link
                        href={link.href}
                        target={link.isWhatsApp ? "_blank" : undefined}
                        rel={
                          link.isWhatsApp ? "noopener noreferrer" : undefined
                        }
                      >
                        {link.label}
                      </Link>
                    ) : (
                      link.label
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Company Logos Section */}
        <div className="border-t border-slate-800 mt-8 pt-6">
          <div className="text-center mb-6">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {partners.map((partner) => (
                <div key={partner.id} className="group">
                  {partner.href ? (
                    <Link
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-100 transition-opacity duration-300"
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.alt}
                        width={96}
                        height={48}
                        className="h-12 w-auto"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={partner.logo}
                      alt={partner.alt}
                      width={96}
                      height={48}
                      className="h-12 w-auto"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-6 pt-4 text-center text-sm text-slate-400 flex items-center justify-between gap-2">
          <p>&copy; 2024 PROFIX MARKETING. All rights reserved.</p>
          <MrCard />
        </div>
      </div>
    </footer>
  );
}
