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
import { generateWhatsAppLink, whatsappMessages } from "@/lib/utils/whatsapp";
import {
  Sparkles,
  CheckCircle,
  ArrowRight,
  Star,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function TradingPlatformsDetailed() {
  return (
    <section className="py-8 relative">
      <div className="absolute inset-0 bg-muted/50"></div>
      <div className="container max-w-5xl mx-auto px-4 relative">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-3 shadow-sm">
            <Sparkles className="w-3 h-3 mr-1" />
            Trading Platforms
          </Badge>
          <h2 className="text-3xl font-bold mb-4">
            Choose Your Trading Platform
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access the world's most popular trading platforms with advanced
            features, real-time data, and seamless trading experience across all
            devices.
          </p>
        </div>

        <div className="space-y-8">
          {tradingPlatformsData.map((category) => (
            <div key={category.id} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-end gap-4">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color.primary} rounded-xl shadow-lg`}
                >
                  <DynamicIcon
                    name={category.icon}
                    className="w-8 h-8 text-white"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Platforms Grid */}
              <div className="grid lg:grid-cols-2 gap-4">
                {category.platforms.map((platform) => (
                  <Card
                    key={platform.id}
                    className={`group relative overflow-hidden hover:shadow-lg transition-all duration-500 border-0 bg-gradient-to-br ${platform.color.gradient}`}
                  >
                    {/* Decorative Background */}
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${platform.color.primary} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700`}
                    ></div>

                    <CardHeader className="pb-4 relative z-10">
                      <div className="flex items-center justify-between">
                        <CardTitle
                          className={`text-lg font-semibold ${platform.color.text}`}
                        >
                          {platform.name}
                        </CardTitle>
                        <Badge
                          variant="secondary"
                          className={`${platform.color.secondary}`}
                        >
                          {platform.badge}
                        </Badge>
                      </div>
                      <CardDescription className="leading-relaxed text-gray-600 dark:text-gray-300">
                        {platform.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4 relative z-10">
                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 dark:text-white flex items-center">
                          <Star className="w-4 h-4 mr-2 text-yellow-500" />
                          Key Features
                        </h4>
                        <div className="space-y-2">
                          {platform.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-3 group/item"
                            >
                              <div
                                className={`w-6 h-6 bg-gradient-to-r ${platform.color.primary} rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 shadow-sm`}
                              >
                                <CheckCircle className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex justify-end pt-2">
                        {(platform.downloadUrl || platform.webUrl) && (
                          <Button
                            variant="ghost"
                            className={`bg-gradient-to-r ${platform.color.primary} hover:shadow-lg transition-all duration-300 text-white font-medium group/btn`}
                          >
                            <DynamicIcon
                              name={
                                platform.type === "web"
                                  ? "ExternalLink"
                                  : "Download"
                              }
                              className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300"
                            />
                            {platform.type === "web"
                              ? "Try WebTrader"
                              : "Download Now"}
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center space-y-6 p-8 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-2xl max-w-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                Ready to Start Trading?
              </h3>
              <p className="text-muted-foreground">
                Choose your preferred platform and begin your trading journey
                with PROFIX MARKETING.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-medium px-8"
                asChild
              >
                <Link
                  href="https://sey.portal.equiticlients.com/sc/register/?accountType=Standard&clickid=1125427&affid=C02194992"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started Today
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 px-8"
                asChild
              >
                <Link
                  href={generateWhatsAppLink(whatsappMessages.tradingPlatforms)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Support
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
