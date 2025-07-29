"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  LineChart,
  BarChart3,
  ArrowLeft,
  Calendar,
  Globe,
  Activity,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MarketInsightsPage() {
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
              {/* <div className="flex flex-col sm:flex-row gap-3">
                <Button size="default" className="">
                  Start Free Trial
                </Button>
                <Button size="default" variant="outline">
                  View Sample Reports
                </Button>
              </div> */}
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
            <div className="grid lg:grid-cols-2 gap-8">
              {/* TradingView Widget Placeholder */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Advanced Charting</h3>
                <div className="bg-black/70 rounded-lg p-4 h-96 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Activity className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p className="text-sm opacity-75">
                      TradingView Widget Integration
                    </p>
                    <p className="text-xs opacity-50 mt-2">
                      Real-time charts from tradingview.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Market Overview */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Market Overview</h3>
                <div className="space-y-3">
                  {[
                    {
                      pair: "EUR/USD",
                      price: "1.0845",
                      change: "+0.12%",
                      trend: "up",
                    },
                    {
                      pair: "GBP/USD",
                      price: "1.2634",
                      change: "-0.08%",
                      trend: "down",
                    },
                    {
                      pair: "USD/JPY",
                      price: "149.82",
                      change: "+0.25%",
                      trend: "up",
                    },
                    {
                      pair: "Gold",
                      price: "2,018.45",
                      change: "+0.45%",
                      trend: "up",
                    },
                    {
                      pair: "Bitcoin",
                      price: "43,250",
                      change: "+2.15%",
                      trend: "up",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                    >
                      <span className="font-medium">{item.pair}</span>
                      <div className="text-right">
                        <div className="font-semibold">{item.price}</div>
                        <div
                          className={`text-xs ${
                            item.trend === "up"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {item.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      {/* <section className="py-12 bg-background">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-3">Professional Reports</h2>
            <p className="text-sm text-muted-foreground">
              Weekly and monthly analysis from our expert team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Weekly Market Outlook",
                description:
                  "Comprehensive analysis of upcoming market events and opportunities",
                type: "Weekly",
                color: "from-blue-500 to-cyan-600",
              },
              {
                title: "Monthly Strategy Report",
                description:
                  "Long-term market trends and strategic trading recommendations",
                type: "Monthly",
                color: "from-emerald-500 to-teal-600",
              },
              {
                title: "Economic Calendar Analysis",
                description:
                  "Impact analysis of major economic events and announcements",
                type: "Daily",
                color: "from-purple-500 to-indigo-600",
              },
            ].map((report, index) => (
              <Card
                key={index}
                className="hover:shadow-md transition-shadow overflow-hidden"
              >
                <div
                  className={`w-full h-2 bg-gradient-to-r ${report.color}`}
                ></div>
                <CardHeader className="pb-1">
                  <Badge variant="secondary" className="w-fit mb-2">
                    {report.type}
                  </Badge>
                  <CardTitle className="text-base">{report.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground mb-4">
                    {report.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    View Sample
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

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
            >
              <MessageCircle /> Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
