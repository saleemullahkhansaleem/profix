"use client";

import { FileText } from "lucide-react";
import { useEffect } from "react";
import { useLegalHero } from "../layout";

export default function TermsOfServiceContent() {
  const { setHero } = useLegalHero();

  useEffect(() => {
    setHero({
      icon: <FileText className="w-4 h-4 mr-1" />,
      title: "Terms of Service",
      subtitle:
        "Please read these terms of service carefully before using our website and services. By accessing or using our services, you agree to be bound by these terms.",
    });
  }, [setHero]);

  return (
    <section className="py-8 bg-background">
      <div className="container max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Use of Service</h2>
        <ul className="list-disc pl-6 mb-6 text-muted-foreground">
          <li>You must be at least 18 years old to use our services.</li>
          <li>You agree to provide accurate and complete information.</li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Prohibited Activities</h2>
        <ul className="list-disc pl-6 mb-6 text-muted-foreground">
          <li>
            Illegal activities or use of the service for unlawful purposes
          </li>
          <li>Attempting to gain unauthorized access to our systems</li>
          <li>Violating intellectual property rights</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
        <p className="mb-6 text-muted-foreground">
          We are not liable for any damages or losses resulting from your use of
          our services. Our liability is limited to the maximum extent permitted
          by law.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="mb-2 text-muted-foreground">
          For questions about these terms, contact us at{" "}
          <a
            href="mailto:support@yourcompany.com"
            className="text-teal-600 underline"
          >
            support@yourcompany.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
