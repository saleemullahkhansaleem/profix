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
import { tradingPlatformsData } from "@/lib/data/trading-platforms";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

// Helper function to extract text color from gradient
const getTextColor = (gradientClass: string) => {
  const colorMatch = gradientClass.match(/from-(\w+)-(\d+)/);
  if (colorMatch) {
    const [, color, shade] = colorMatch;
    return `text-${color}-${shade} dark:text-${color}-${Math.max(
      parseInt(shade) - 200,
      300
    )}`;
  }
  return "text-gray-900 dark:text-white";
};

export default function TradingPlatformsSection() {
  return (
    <section id="platforms" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30"></div>
      <div className="container max-w-5xl mx-auto px-4 relative">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 shadow-sm">
            <Sparkles className="w-3 h-3 mr-1" />
            Trading Platforms
          </Badge>
          <h2 className="text-3xl font-bold mb-4">
            Professional Trading Platforms
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access the world's most popular trading platforms with advanced
            features, real-time data, and seamless trading experience across all
            devices.
          </p>
        </div>

        {/* Platform Categories Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
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
                <CardDescription className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
                  {category.description}
                </CardDescription>
                <div className="text-xs text-muted-foreground">
                  {category.platforms.length} platform
                  {category.platforms.length !== 1 ? "s" : ""} available
                </div>
              </CardContent>
              {/* Bottom Border Animation */}
              <div
                className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${category.color.primary} group-hover:w-full transition-all duration-500 ease-out`}
              ></div>
            </Card>
          ))}
        </div>

        {/* Featured Platforms */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {tradingPlatformsData.slice(0, 2).map((category) =>
            category.platforms.slice(0, 1).map((platform) => (
              <Card
                key={platform.id}
                className={`group relative overflow-hidden hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br ${platform.color.gradient}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle
                      className={`text-lg font-bold ${getTextColor(
                        platform.color.primary
                      )}`}
                    >
                      {platform.name}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className={platform.color.secondary}
                    >
                      {platform.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    {platform.description}
                  </CardDescription>
                  <div className="space-y-1 mb-4">
                    {platform.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="text-right">
                    <Button
                      size="sm"
                      variant="outline"
                      className="group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                    >
                      <DynamicIcon
                        name={
                          platform.type === "web" ? "ExternalLink" : "Download"
                        }
                        className="w-4 h-4"
                      />
                      {platform.type === "web" ? "Try WebTrader" : "Download"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center p-6 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-2xl">
            <div className="text-xl font-bold text-primary mb-4">
              Ready to Explore All Platforms?
            </div>
            <p className="text-muted-foreground max-w-md text-sm mb-6">
              Discover detailed features, comparisons, and find the perfect
              trading platform for your needs.
            </p>
            <Link href="/trading-platforms">
              <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-medium px-8 group">
                <span>View All Platforms</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
