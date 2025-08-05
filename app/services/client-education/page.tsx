import type { Metadata } from "next";
import { clientEducationSEO } from "@/lib/seo";
import ClientEducationWrapper from "@/components/services/client-education-wrapper";

export const metadata: Metadata = clientEducationSEO;

export default function ClientEducationPage() {
  return <ClientEducationWrapper />;
}
