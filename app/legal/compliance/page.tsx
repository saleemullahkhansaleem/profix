"use client";

import { ShieldCheck } from "lucide-react";
import { useEffect } from "react";
import { useLegalHero } from "../layout";

export default function ComplianceContent() {
  const { setHero } = useLegalHero();

  useEffect(() => {
    setHero({
      icon: <ShieldCheck className="w-4 h-4 mr-1" />,
      title: "Compliance",
      subtitle:
        "We are committed to upholding the highest standards of regulatory compliance and ethical conduct in all our operations. Our policies ensure transparency, integrity, and protection for our clients.",
    });
  }, [setHero]);

  return (
    <section className="py-8 bg-background">
      <div className="container max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
        <ul className="list-disc pl-6 mb-6 text-muted-foreground">
          <li>
            Adherence to all applicable financial regulations and industry
            standards.
          </li>
          <li>
            Regular audits and compliance checks to ensure ongoing conformity.
          </li>
          <li>
            Transparent reporting and communication with clients and
            authorities.
          </li>
          <li>
            Strict anti-money laundering (AML) and know-your-customer (KYC)
            procedures.
          </li>
          <li>
            Continuous staff training on compliance and ethical practices.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Contact Compliance</h2>
        <p className="mb-2 text-muted-foreground">
          For any compliance-related inquiries or to report a concern, please
          contact our compliance team at{" "}
          <a
            href="mailto:compliance@yourcompany.com"
            className="text-teal-600 underline"
          >
            compliance@yourcompany.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
