import Header from "@/components/header";
import Footer from "@/components/footer";
import TradingPlatformsDetailed from "@/components/trading-platforms/trading-platforms-detailed";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DynamicIcon } from "@/lib/utils/icons";
import {
  tradingPlatformsData,
  platformComparison,
} from "@/lib/data/trading-platforms";
import { Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TradingPlatformsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-primary/5 via-background to-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link
              href="/"
              className="flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <DynamicIcon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              <Sparkles className="w-3 h-3 mr-1" />
              Trading Platforms
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Professional Trading Platforms
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Access the world's most popular trading platforms with advanced
              features, real-time data, and seamless trading experience across
              desktop, web, and mobile devices.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-8">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {tradingPlatformsData.map((category, index) => (
              <Card
                key={category.id}
                className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${category.color.secondary} dark:${category.color.gradient} hover:scale-105 hover:-translate-y-2`}
                style={{
                  animationDelay: `${index * 150}ms`,
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Decorative Elements */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${category.color.primary} opacity-10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700`}
                ></div>
                <div
                  className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr ${category.color.primary} opacity-5 rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-700`}
                ></div>

                <CardContent className="text-center p-6 relative z-10">
                  {/* Icon Container */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${category.color.primary} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}
                  >
                    <DynamicIcon
                      name={category.icon}
                      className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {category.description}
                  </CardDescription>
                </CardContent>
                {/* Bottom Border Animation */}
                <div
                  className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${category.color.primary} group-hover:w-full transition-all duration-500 ease-out`}
                ></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Platforms Section */}
      <TradingPlatformsDetailed />

      {/* Features Comparison */}
      <section className="py-8">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Platform Comparison</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Compare features across our trading platforms to find the perfect
              fit for your trading needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4">
            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>

              <CardHeader className="pb-6 relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle
                    className={`text-2xl font-bold ${platformComparison.mt4.color}`}
                  >
                    {platformComparison.mt4.name}
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 group-hover:scale-105 transition-transform duration-300"
                  >
                    Popular Choice
                  </Badge>
                </div>
                <CardDescription className="text-base">
                  {platformComparison.mt4.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <div className="">
                  {platformComparison.mt4.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 group/item hover:bg-blue-50 dark:hover:bg-blue-950/30 p-1 rounded-full transition-colors duration-300"
                    >
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium group/btn">
                  <DynamicIcon
                    name="Download"
                    className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300"
                  />
                  Download MT4
                </Button>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>

              <CardHeader className="pb-6 relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle
                    className={`text-2xl font-bold ${platformComparison.mt5.color}`}
                  >
                    {platformComparison.mt5.name}
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300 group-hover:scale-105 transition-transform duration-300"
                  >
                    Advanced
                  </Badge>
                </div>
                <CardDescription className="text-base">
                  {platformComparison.mt5.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <div className="">
                  {platformComparison.mt5.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 group/item hover:bg-emerald-50 dark:hover:bg-emerald-950/30 p-1 rounded-full transition-colors duration-300"
                    >
                      <div className="w-6 h-6 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-medium group/btn">
                  <DynamicIcon
                    name="Download"
                    className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300"
                  />
                  Download MT5
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose your preferred platform and start your trading journey with
              PROFIX MARKETING.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Link href="https://sey.portal.equiticlients.com/sc/register/?accountType=Standard&clickid=1125427&affid=C02194992">
                  Get Started Today
                  <Sparkles className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
