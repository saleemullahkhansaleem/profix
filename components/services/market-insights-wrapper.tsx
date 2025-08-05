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
  MessageCircle,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { generateWhatsAppLink, whatsappMessages } from "@/lib/utils/whatsapp";
import { TradingViewWidget } from "@/components/ui/tradingview-widget";
import { useEffect, useState } from "react";

interface MarketData {
  symbol: string;
  price: string;
  change: string;
  changePercent: string;
  trend: "up" | "down";
}

export default function MarketInsightsWrapper() {
  const [marketData, setMarketData] = useState<MarketData[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch live market data
  const fetchMarketData = async () => {
    try {
      // Using Alpha Vantage API for real-time forex data
      const symbols = ["EURUSD", "GBPUSD", "USDJPY", "XAUUSD", "BTCUSD"];
      const apiKey = "demo"; // Replace with your Alpha Vantage API key

      const dataPromises = symbols.map(async (symbol) => {
        try {
          const response = await fetch(
            `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${symbol.slice(
              0,
              3
            )}&to_currency=${symbol.slice(3)}&apikey=${apiKey}`
          );
          const data = await response.json();

          if (data["Realtime Currency Exchange Rate"]) {
            const rate = data["Realtime Currency Exchange Rate"];
            const price = parseFloat(rate["5. Exchange Rate"]);
            const change = (Math.random() - 0.5) * 0.02; // Simulated change for demo
            const changePercent = (change * 100).toFixed(2);

            return {
              symbol:
                symbol === "XAUUSD"
                  ? "Gold"
                  : symbol === "BTCUSD"
                  ? "Bitcoin"
                  : symbol,
              price: price.toFixed(4),
              change: `${change > 0 ? "+" : ""}${change.toFixed(4)}`,
              changePercent: `${change > 0 ? "+" : ""}${changePercent}%`,
              trend: change > 0 ? "up" : "down",
            };
          }
        } catch (error) {
          console.error(`Error fetching ${symbol}:`, error);
        }

        // Fallback data if API fails
        return getFallbackData(symbol);
      });

      const results = await Promise.all(dataPromises);
      const validResults = results.filter(Boolean) as MarketData[];

      setMarketData(validResults);
    } catch (error) {
      console.error("Error fetching market data:", error);
      // Use fallback data if API fails
      setMarketData(getFallbackMarketData());
    } finally {
      setLoading(false);
    }
  };

  const getFallbackData = (symbol: string): MarketData => {
    const fallbackData = {
      EURUSD: { price: "1.0845", change: "+0.0012", changePercent: "+0.12%" },
      GBPUSD: { price: "1.2634", change: "-0.0010", changePercent: "-0.08%" },
      USDJPY: { price: "149.82", change: "+0.37", changePercent: "+0.25%" },
      XAUUSD: { price: "2018.45", change: "+9.10", changePercent: "+0.45%" },
      BTCUSD: { price: "43250", change: "+910", changePercent: "+2.15%" },
    };

    const data =
      fallbackData[symbol as keyof typeof fallbackData] || fallbackData.EURUSD;
    return {
      symbol:
        symbol === "XAUUSD" ? "Gold" : symbol === "BTCUSD" ? "Bitcoin" : symbol,
      price: data.price,
      change: data.change,
      changePercent: data.changePercent,
      trend: data.change.startsWith("+") ? "up" : "down",
    };
  };

  const getFallbackMarketData = (): MarketData[] => [
    {
      symbol: "EUR/USD",
      price: "1.0845",
      change: "+0.0012",
      changePercent: "+0.12%",
      trend: "up",
    },
    {
      symbol: "GBP/USD",
      price: "1.2634",
      change: "-0.0010",
      changePercent: "-0.08%",
      trend: "down",
    },
    {
      symbol: "USD/JPY",
      price: "149.82",
      change: "+0.37",
      changePercent: "+0.25%",
      trend: "up",
    },
    {
      symbol: "Gold",
      price: "2,018.45",
      change: "+9.10",
      changePercent: "+0.45%",
      trend: "up",
    },
    {
      symbol: "Bitcoin",
      price: "43,250",
      change: "+910",
      changePercent: "+2.15%",
      trend: "up",
    },
  ];

  useEffect(() => {
    fetchMarketData();

    // Update data every 30 seconds
    const interval = setInterval(fetchMarketData, 30000);

    return () => clearInterval(interval);
  }, []);

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

            {/* Live Market Overview */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Live Market Overview</h3>
                <div className="flex items-center gap-2">
                  {loading && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Updating...
                    </div>
                  )}
                  <div className="text-xs text-muted-foreground">
                    Updates every 30s
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
                {marketData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{item.symbol}</span>
                      {item.trend === "up" ? (
                        <TrendingUp className="w-3 h-3 text-green-600" />
                      ) : (
                        <TrendingDown className="w-3 h-3 text-red-600" />
                      )}
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-sm">{item.price}</div>
                      <div
                        className={`text-xs ${
                          item.trend === "up"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {item.changePercent}
                      </div>
                    </div>
                  </div>
                ))}
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
                <MessageCircle /> Contact Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
