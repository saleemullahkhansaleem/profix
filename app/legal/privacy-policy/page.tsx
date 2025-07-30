"use client";

import { Lock, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { useLegalHero } from "../layout";
import { generateWhatsAppLink, whatsappMessages } from "@/lib/utils/whatsapp";

export default function PrivacyPolicyContent() {
  const { setHero } = useLegalHero();

  useEffect(() => {
    setHero({
      icon: <Lock className="w-4 h-4 mr-1" />,
      title: "Privacy Policy",
      subtitle:
        "Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you use our services.",
    });
  }, [setHero]);

  return (
    <section className="py-8 bg-background">
      <div className="container max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <ul className="list-disc pl-6 mb-6 text-muted-foreground">
          <li>
            Personal identification information (Name, email address, phone
            number, etc.)
          </li>
          <li>Usage data and cookies for analytics and service improvement</li>
          <li>
            Financial and transactional information as required for our services
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">
          How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 mb-6 text-muted-foreground">
          <li>To provide and maintain our services</li>
          <li>To communicate with you about your account or transactions</li>
          <li>To improve our website and offerings</li>
          <li>To comply with legal obligations</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <ul className="list-disc pl-6 mb-6 text-muted-foreground">
          <li>Access, update, or delete your personal information</li>
          <li>Opt out of marketing communications</li>
          <li>Request information about our data practices</li>
        </ul>
        <p className="mb-2 text-muted-foreground">
          For privacy-related questions, contact us at{" "}
          <a
            href="mailto:info@profixmarketing.com"
            className="text-teal-600 underline"
          >
            info@profixmarketing.com
          </a>{" "}
          or{" "}
          <a
            href={generateWhatsAppLink({
              service: "Legal Support",
              page: "Privacy Policy",
              button: "Contact Information",
              customMessage:
                "I have questions about the privacy policy and would like clarification.",
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 underline flex items-center gap-1 inline-flex"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  );
}
