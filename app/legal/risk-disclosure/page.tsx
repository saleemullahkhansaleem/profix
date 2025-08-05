"use client";

import { AlertTriangle, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { useLegalHero } from "@/components/legal/client-legal-hero";
import { generateWhatsAppLink, whatsappMessages } from "@/lib/utils/whatsapp";

export default function RiskDisclosureContent() {
  const { setHero } = useLegalHero();

  useEffect(() => {
    setHero({
      icon: <AlertTriangle className="w-4 h-4 mr-1" />,
      title: "Risk Disclosure",
      subtitle:
        "Trading financial instruments involves significant risk and may not be suitable for all investors. Please read this risk disclosure carefully before engaging in trading activities.",
    });
  }, [setHero]);

  return (
    <section className="py-8 bg-background">
      <div className="container max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Key Risks</h2>
        <ul className="list-disc pl-6 mb-6 text-muted-foreground">
          <li>Market risk: Prices can move rapidly and unpredictably.</li>
          <li>
            Leverage risk: Trading on margin can amplify both gains and losses.
          </li>
          <li>
            Liquidity risk: Some assets may be difficult to buy or sell quickly.
          </li>
          <li>
            Operational risk: Technology failures or errors can impact trading.
          </li>
          <li>
            Regulatory risk: Changes in laws or regulations may affect your
            investments.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Important Notice</h2>
        <p className="mb-6 text-muted-foreground">
          You should only trade with funds you can afford to lose. Consider
          seeking independent financial advice before making investment
          decisions.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="mb-2 text-muted-foreground">
          For questions about risk, contact us at{" "}
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
              page: "Risk Disclosure",
              button: "Contact Information",
              customMessage:
                "I have questions about risk disclosure and would like clarification.",
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
