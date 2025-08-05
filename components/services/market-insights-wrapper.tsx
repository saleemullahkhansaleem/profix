"use client";

import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  LineChart,
  BarChart3,
  ArrowLeft,
  Calendar,
  Globe,
  Activity,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import Image from "next/image";
import Link from "next/link";
import { generateWhatsAppLink, whatsappMessages } from "@/lib/utils/whatsapp";
import { TradingViewWidget } from "@/components/ui/tradingview-widget";

export default function MarketInsightsWrapper() {
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
            <div className="space-y-6 max-w-md">
              <Badge variant="outline" className="w-fit">
                <LineChart className="w-3 h-3 mr-1" />
                Market Insights
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-bold">
                Comprehensive Market Analysis & Insights
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                Stay ahead of market movements with our professional analysis,
                economic calendars, and real-time insights powered by advanced
                trading tools.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/25 rounded-lg transform rotate-6"></div>
              <div className="absolute inset-0 bg-primary/25 rounded-lg transform -rotate-6"></div>
              <Image
                src="/images/services/market-insights.webp"
                alt="Market Analysis Dashboard"
                width={600}
                height={400}
                className="relative rounded-lg object-cover w-full h-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: Calendar,
                title: "Economic Calendar",
                description:
                  "Track major economic events and their market impact",
                link: "https://www.forexfactory.com/calendar",
              },
              {
                icon: BarChart3,
                title: "Technical Analysis",
                description: "Professional chart analysis and trading signals",
                link: "https://www.investing.com/",
              },
              {
                icon: Globe,
                title: "Global Markets",
                description:
                  "Coverage of forex, stocks, commodities, and crypto",
                link: "https://www.tradingview.com/markets/currencies/ideas/",
              },
            ].map((feature, index) => (
              <a
                key={index}
                href={feature.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors cursor-pointer group"
              >
                <CardHeader className="flex flex-row gap-2 items-center">
                  <div className="w-14 h-14 bg-primary/15 rounded-lg flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <CardTitle className="text-base group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardHeader>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TradingView Widget Section */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-3">Live Market Data</h2>
            <p className="text-sm text-muted-foreground">
              Real-time charts and analysis powered by TradingView
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-lg">
            {/* Single Detailed Chart */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Live Market Chart</h3>
                <div className="text-sm text-muted-foreground">
                  Powered by TradingView
                </div>
              </div>
              <div className="bg-muted rounded-lg p-4 h-[600px] flex flex-col">
                <div className="flex-1 w-full h-full">
                  <TradingViewWidget
                    symbol="FX:EURUSD"
                    interval="D"
                    style="1"
                    height={600}
                    container_id="detailed_chart"
                    showSymbolSelector={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 dark bg-background text-foreground border-t">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Access Professional Market Insights?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join thousands of traders who rely on our analysis for better
            trading decisions
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="https://sey.portal.equiticlients.com/sc/register/?accountType=Standard&clickid=1125427&affid=C02194992">
                Lets Start Trading
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link
                href={generateWhatsAppLink(whatsappMessages.marketInsights)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="w-4 h-4 mr-2" /> Contact Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
