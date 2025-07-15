"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  ArrowLeft,
  Heart,
  Users,
  MessageCircle,
  Shield,
  CheckCircle,
  Phone,
  Mail,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";

export default function CustomerCentricPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
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
                <Star className="w-3 h-3 mr-1" />
                Customer-Centric
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-bold">
                Our Customer-Centric Approach
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                At PROFIX, our business begins and ends with you — the client.
                We're not just a trading platform or a broker—we're a partner
                focused on delivering long-term value.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="default">Experience the Difference</Button>
                <Button size="default" variant="outline">
                  Talk to Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/25 rounded-lg transform rotate-6"></div>
              <div className="absolute inset-0 bg-primary/25 rounded-lg transform -rotate-6"></div>
              <Image
                src="/images/services/customer-centric.webp"
                alt="Customer Support"
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
            {/* What Customer-Centric Means */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-3">
                  What Does "Customer-Centric" Mean to Us?
                </h2>
                <p className="text-muted-foreground">
                  It means putting your experience, your growth, and your
                  confidence at the center of everything we do:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-2">
                {[
                  {
                    icon: Users,
                    title: "Understanding Your Goals",
                    description:
                      "Whether you're trading for passive income, long-term investment, or daily market activity, we listen and guide accordingly.",
                    color: "from-blue-500 to-cyan-600",
                  },
                  {
                    icon: Heart,
                    title: "Personalized Solutions",
                    description:
                      "No two clients are the same. We tailor our services—from account types to communication—to match your specific needs.",
                    color: "from-emerald-500 to-teal-600",
                  },
                  {
                    icon: Shield,
                    title: "Transparency in Everything",
                    description:
                      "No hidden charges. No confusing terms. We believe in full clarity on costs, execution, and support.",
                    color: "from-purple-500 to-indigo-600",
                  },
                  {
                    icon: MessageCircle,
                    title: "Consistent Communication",
                    description:
                      "Your dedicated account manager stays in touch, proactively—not just when you have an issue.",
                    color: "from-orange-500 to-red-600",
                  },
                ].map((principle, index) => (
                  <div key={index} className="bg-primary/10">
                    <CardHeader className="pb-1">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${principle.color} rounded-lg flex items-center justify-center mb-2`}
                      >
                        <principle.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">
                        {principle.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {principle.description}
                      </p>
                    </CardContent>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Commitment */}
            <Card className="mb-12 p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Our Commitment to You
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "You'll always speak to a real person—never a bot or generic helpline.",
                  "You'll get answers fast, not excuses.",
                  "You'll feel supported, whether markets are calm or volatile.",
                  "We value long-term relationships over short-term gains. When you grow, we grow.",
                ].map((commitment, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-sm">{commitment}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Designed for Real Traders */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Designed for Real Traders
              </h2>
              <div className="bg-muted border rounded-lg p-6">
                <p className="text-muted-foreground mb-6 text-center">
                  We understand the frustrations traders face: delays,
                  miscommunication, lack of guidance.
                </p>
                <p className="text-muted-foreground mb-6 text-center">
                  That's why we've created a client experience that's:
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      label: "Fast",
                      icon: Zap,
                      color: "from-yellow-500 to-orange-600",
                    },
                    {
                      label: "Reliable",
                      icon: Shield,
                      color: "from-green-500 to-emerald-600",
                    },
                    {
                      label: "Transparent",
                      icon: CheckCircle,
                      color: "from-blue-500 to-cyan-600",
                    },
                    {
                      label: "Human",
                      icon: Heart,
                      color: "from-pink-500 to-rose-600",
                    },
                  ].map((quality, index) => (
                    <div key={index} className="text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${quality.color} rounded-lg flex items-center justify-center mx-auto mb-3`}
                      >
                        <quality.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg">{quality.label}</h3>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                <p className="text-center font-medium">
                  From the moment you join us, you'll know we're on your side.
                </p>
              </div>
            </div>

            {/* Let's Build Something Together */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">
                Let's Build Something Together
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you're looking for a broker that listens, responds, and
                genuinely cares, you're in the right place. Our customer-centric
                approach isn't a tagline — it's how we work, every single day.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="" asChild>
                  <Link href="https://sey.portal.equiticlients.com/sc/register/?accountType=Standard&clickid=1125427&affid=C02194992">
                    <Phone className="w-4 h-4 mr-2" />
                    Get Started Today
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  Talk to Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-3">What Our Clients Say</h2>
            <p className="text-muted-foreground">
              Real feedback from real traders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              {
                name: "Ahmed K.",
                location: "Dubai, UAE",
                text: "Finally found a broker that actually cares about their clients. My account manager is always available and genuinely helpful.",
              },
              {
                name: "Fatima A.",
                location: "Abu Dhabi, UAE",
                text: "Profix has truly elevated my trading experience. Their local insight and dedicated support team are unmatched.",
              },
              {
                name: "Zayd R.",
                location: "Dubai, UAE",
                text: "Transparent, responsive, and highly professional. I’ve seen real growth in my investments since joining them.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-background text-foreground dark border-t">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Experience Customer-Centric Trading
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of traders who've discovered what it means to have a
            broker that truly cares
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="https://sey.portal.equiticlients.com/sc/register/?accountType=Standard&clickid=1125427&affid=C02194992">
              Start Your Journey Today
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
