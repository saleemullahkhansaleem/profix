import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Briefcase,
  ArrowLeft,
  User,
  TrendingUp,
  Shield,
  Clock,
  Globe,
  CheckCircle,
  Phone,
  Mail,
  MessageSquare,
  MessageCircle,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import Image from "next/image";
import Link from "next/link";
import { generateWhatsAppLink, whatsappMessages } from "@/lib/utils/whatsapp";
import { dedicatedManagersSEO } from "@/lib/seo";

export const metadata: Metadata = dedicatedManagersSEO;

export default function DedicatedManagersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-primary/5 via-background to-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link
              href="/"
              className="flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="w-fit">
                <Briefcase className="w-3 h-3 mr-1" />
                Dedicated Managers
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-bold">
                Your Personal Trading Partner
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                At PROFIX we believe that personalized service makes all the
                difference. Every client gets a dedicated account manager who
                understands your goals and trading preferences.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="default" asChild>
                  <Link
                    href={generateWhatsAppLink(
                      whatsappMessages.dedicatedManagers
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="w-4 h-4 mr-1" /> Get Your Manager
                  </Link>
                </Button>
                {/* <Button size="default" variant="outline">
                  Learn More
                </Button> */}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/25 rounded-lg transform rotate-6"></div>
              <div className="absolute inset-0 bg-primary/25 rounded-lg transform -rotate-6"></div>
              <Image
                src="/images/services/dedicated-managers.webp"
                alt="Dedicated Support"
                width={600}
                height={400}
                className="relative rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* What Does a Dedicated Manager Do */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-3">
                  What Does a Dedicated Manager Do?
                </h2>
                <p className="text-muted-foreground">
                  Your account manager is more than just a point of
                  contact—they're your trading partner.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
                {[
                  {
                    icon: User,
                    title: "One-on-One Guidance",
                    description:
                      "Personalized assistance tailored to your trading profile.",
                    color: "from-blue-500 to-cyan-600",
                  },
                  {
                    icon: MessageCircle,
                    title: "Platform Walkthroughs & Setup",
                    description:
                      "From onboarding to placing your first trade, they help at every step.",
                    color: "from-emerald-500 to-teal-600",
                  },
                  {
                    icon: TrendingUp,
                    title: "Market Updates & Opportunities",
                    description:
                      "Get regular insights on market movements, trends, and major events.",
                    color: "from-purple-500 to-indigo-600",
                  },
                  {
                    icon: Shield,
                    title: "Risk Management Support",
                    description:
                      "Learn how to use tools like stop loss, take profit, and margin wisely.",
                    color: "from-orange-500 to-red-600",
                  },
                  {
                    icon: Clock,
                    title: "Priority Support",
                    description:
                      "Have a question? Get a fast, informed response—no waiting in general queues.",
                    color: "from-green-500 to-emerald-600",
                  },
                  {
                    icon: Globe,
                    title: "Multi-Language Support",
                    description:
                      "Fluent in multiple languages and available across different time zones.",
                    color: "from-pink-500 to-rose-600",
                  },
                ].map((service, index) => (
                  <div key={index} className="bg-primary/10">
                    <CardHeader className="text-center pb-1">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mx-auto mb-2`}
                      >
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-base">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-muted-foreground text-center">
                        {service.description}
                      </p>
                    </CardContent>
                  </div>
                ))}
              </div>
            </div>

            {/* Why We Do This */}
            <div className="mb-12 bg-muted/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Why We Do This
              </h2>
              <div className="text-center mb-6">
                <p className="text-lg text-muted-foreground mb-4">
                  Most brokers treat clients like numbers. We don't.
                </p>
                <p className="text-muted-foreground">
                  By assigning a dedicated manager, we ensure:
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "Stronger Relationships",
                  "Clearer Communication",
                  "Faster Problem Resolution",
                  "Better Trading Outcomes",
                ].map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">{benefit}</h3>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-lg font-medium text-primary">
                  We grow when our clients grow—and we're committed to being
                  right there with you.
                </p>
              </div>
            </div>

            {/* Our Team of Managers */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-center">
                Our Team of Managers
              </h2>
              <div className="bg-background border rounded-lg p-6">
                <p className="text-muted-foreground mb-6 text-center">
                  Each of our managers is trained in both client service and
                  trading fundamentals, with deep understanding of:
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    "Forex & Commodities",
                    "Stock Indices",
                    "Risk Management",
                    "Trading Psychology",
                  ].map((expertise, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium">{expertise}</span>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                <p className="text-sm text-muted-foreground text-center">
                  They are fluent in multiple languages and available across
                  different time zones to match your location and convenience.
                </p>
              </div>
            </div>

            {/* Want to Connect */}
            {/* <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Want to Connect?</h2>
              <p className="text-muted-foreground mb-6">
                If you're not yet assigned a manager, simply contact us or
                register an account and a dedicated expert will reach out to you
                within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  Register Account
                </Button>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-background text-foreground dark border-t">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">
            Ready for Personalized Support?
          </h2>
          <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
            Experience the difference of having a dedicated trading partner by
            your side
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link
              href={generateWhatsAppLink(whatsappMessages.dedicatedManagers)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="w-4 h-4 mr-2" /> Get Your Dedicated
              Manager Today
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
