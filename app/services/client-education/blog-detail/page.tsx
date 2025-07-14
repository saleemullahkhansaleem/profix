"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  BookOpen,
  TrendingUp,
  Shield,
  Target,
  BarChart3,
  Globe,
  Zap,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Dot,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";

export default function BlogDetail() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <section className="py-4 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/services/client-education"
              className="hover:text-primary transition-colors"
            >
              Client Education
            </Link>
            <span>/</span>
            <span className="text-foreground">
              How to build a specialised trading strategy
            </span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              <Link
                href="/services/client-education"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Education Hub
              </Link>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <BookOpen className="w-3 h-3 mr-1" />
                  Trading 101
                </Badge>
                <h1 className="text-2xl lg:text-3xl font-bold leading-tight">
                  How to build a specialised trading strategy for different
                  assets
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  Learn how to adapt your trading strategy to different asset
                  classes and their specific characteristics.
                </p>
              </div>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>23 February 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>12 min read</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>PROFIX Team</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-auto bg-transparent"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
              <Separator />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Main Content */}
            <div className="space-y-4">
              {/* Key Points Summary */}
              <h3 className="text-lg font-semibold">Key Takeaways</h3>
              <ul className="space-y-2">
                {[
                  "Specialised trading requires understanding asset-specific characteristics",
                  "Forex, commodities, shares and cryptocurrencies need tailored approaches",
                  "Strategies, analysis tools and risk management should be adjusted per asset class",
                  "Building specialised strategies increases profit chances and limits losses",
                ].map((point, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Dot className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-4">
                  Building a specialised trading strategy
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  There are various assets that traders can choose to add to
                  their portfolio. Financial assets are classified into
                  different broad categories that have varied characteristics.
                  Forex, shares, commodities and cryptocurrencies are examples
                  of groups of financial assets.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Because of their different characteristics, different assets
                  require specialised strategies, analysis tools and risk
                  management. For example, cryptocurrencies are known to have
                  higher volatility than major currency pairs, hence a more
                  robust risk management is recommended for crypto traders.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Creating a specialised trading approach for specific assets
                  helps a trader develop expertise in a particular sector,
                  improving their chances to build long-term success in trading.
                  It's also important to understand the factors that influence
                  changes in value for the chosen type of asset. This article
                  explains the characteristics of different assets and things
                  that traders should consider when form specialised trading
                  methods.
                </p>
              </div>

              {/* Forex Trading Section */}
              <h3 className="text-xl font-bold">Forex Trading</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Forex trading is the exchange of one currency for another,
                  also known as currency trading. Forex market has the trading
                  largest volumes globally, with over 6.5 trillion US dollars
                  transacted daily. Currencies can be traded 24 hours through
                  the five weekdays across global exchanges like New York,
                  London, Tokyo, and Sydney.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currencies are divided into major, minor, and exotic pairs.
                  The spreads and liquidity vary between these categories. The
                  major pairs attract traders that want lower spread charges and
                  less volatility in the market.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                      Strategies
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Technical analysis with indicators</li>
                      <li>• Fundamental analysis from news</li>
                      <li>• Sentiment analysis</li>
                      <li>• Volume and trend analysis</li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-primary" />
                      Risk Management
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Stop loss orders</li>
                      <li>• Risk-reward ratios</li>
                      <li>• Position sizing</li>
                      <li>• Hedging strategies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Commodities Trading Section */}
              <h3 className="text-xl font-bold">Commodities Trading</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Physical goods like gold, oil and agricultural products are
                  called commodities. Commodities trading allows market
                  participants to speculate on the price movements of these
                  products without owning the physical assets.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Commodity markets and their value are mostly influenced by
                  supply and demand dynamics, weather conditions and
                  geopolitical events. For example, the industrial metals are
                  affected by increased demand for industrial use in production
                  of durable goods.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                      Strategies
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Supply and demand analysis</li>
                      <li>• Hedging strategies</li>
                      <li>• Futures and options contracts</li>
                      <li>• Portfolio diversification</li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-primary" />
                      Risk Management
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Diversification strategies</li>
                      <li>• Position sizing</li>
                      <li>• Economic calendar monitoring</li>
                      <li>• Emotional discipline</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Shares Trading Section */}
              <h3 className="text-xl font-bold">Shares Trading</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Trading stocks is an opportunity to speculate on the price
                  moves of stock exchange listed companies without actually
                  purchasing the underlying assets. Share prices are influenced
                  by company performance, industry trends and broader economic
                  factors.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Stock markets operate under very tight regulatory environment
                  due to risk of manipulations and disorderly dealings like
                  insider trading. Disclosure on the trading operations is
                  essential in stock markets as well as protection of the
                  investors from unfair trading deals.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">
                      Value Investing
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Selecting stocks trading below their intrinsic value
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">
                      Growth Investing
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Focusing on companies with strong growth potential
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">
                      Momentum Trading
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Trading assets with strong recent performance
                    </p>
                  </div>
                </div>
              </div>

              {/* Crypto Trading Section */}
              <h3 className="text-xl font-bold">Crypto Trading</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Cryptocurrency trading involves buying or selling digital
                  currencies on online trading platforms. The crypto market is
                  open 24 hours a day for seven days of the week, however there
                  are platforms that allow trading only during the weekdays.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                      Strategies
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Day trading and scalping</li>
                      <li>• Swing trading</li>
                      <li>• News trading</li>
                      <li>• Long-term holding</li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-primary" />
                      Risk Management
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Stop loss orders</li>
                      <li>• Portfolio diversification</li>
                      <li>• Advanced risk tools</li>
                      <li>• Capital protection</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Conclusion</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Building specialised trading strategies for different asset
                    classes is crucial for long-term trading success. Each asset
                    class—forex, commodities, shares, and cryptocurrencies—has
                    unique characteristics that require tailored approaches to
                    strategy, analysis, and risk management. Understanding these
                    differences and adapting your trading methods accordingly
                    will significantly improve your chances of profitable
                    trading while helping you manage and limit potential losses.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">You might also like</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Risk Management 101",
                  category: "Risk Management",
                  readTime: "8 min",
                  description:
                    "Essential risk management strategies for successful trading",
                },
                {
                  title: "Technical Analysis Basics",
                  category: "Market Analysis",
                  readTime: "10 min",
                  description:
                    "Learn the fundamentals of technical analysis and chart reading",
                },
                {
                  title: "Trading Psychology Guide",
                  category: "Trading Strategies",
                  readTime: "12 min",
                  description:
                    "Master the mental aspects of trading for consistent success",
                },
              ].map((article, index) => (
                <Card
                  key={index}
                  className="hover:shadow-md transition-shadow cursor-pointer group"
                >
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {article.category}
                    </Badge>
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {article.readTime} read
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
