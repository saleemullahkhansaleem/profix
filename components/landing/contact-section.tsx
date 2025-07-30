import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { generateWhatsAppLink, whatsappMessages } from "@/lib/utils/whatsapp";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-br from-slate-800 via-slate-900 to-black relative overflow-hidden border-b"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,214,160,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      <div className="container max-w-7xl mx-auto px-4 text-center relative">
        <div className="max-w-3xl mx-auto space-y-6">
          <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30 px-4 py-2">
            Get Started Today
          </Badge>
          <h2 className="text-2xl lg:text-4xl font-bold text-white leading-tight">
            Ready to Transform Your <br />
            Trading Journey?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Join more than 1,200 satisfied clients and experience the PROFIX
            advantage with our proven strategies and expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 px-10 py-4"
              asChild
            >
              <Link href="https://sey.portal.equiticlients.com/sc/register/?accountType=Standard&clickid=1125427&affid=C02194992">
                <Sparkles className="mr-2 w-4 h-4" />
                Start Trading Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-400 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-300 transition-all duration-300 px-10 py-4 bg-transparent"
              asChild
            >
              <Link
                href={generateWhatsAppLink(whatsappMessages.contact)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                Chat on WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
