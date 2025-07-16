import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BarChart3, Shield, Target } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 bg-muted relative">
      <div className="container max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 shadow-sm">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl font-bold mb-2">
            Why Choose PROFIX MARKETING?
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Discover the key features of our partnership
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((card, index) => (
            <Card
              key={index}
              className="border-0 shadow-none bg-background group relative pt-6 mt-12"
            >
              <CardHeader className="pb-2">
                <div className="absolute -top-14 left-10 p-3 rounded-2xl bg-muted">
                  <div className="absolute right-full top-14 rounded-full rounded-tr-none bg-muted w-6 h-6">
                    <div className="absolute inset-0 bg-background rounded-tr-xl"></div>
                  </div>
                  <div className="absolute left-full top-14 rounded-full rounded-tl-none bg-muted w-6 h-6">
                    <div className="absolute inset-0 bg-background rounded-tl-xl"></div>
                  </div>
                  <div
                    className={`w-16 h-16 relative bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center mx-auto`}
                  >
                    <div className="absolute inset-0 bg-primary/40 rounded-xl blur -z-10"></div>
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-base">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Expert Guidance",
    description:
      "Personalized financial strategies tailored to each client's unique goals and needs",
    icon: Target,
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    title: "Transparent Policies",
    description:
      "No additional charges or referral fees. Complete transparency in all our services",
    icon: Shield,
    gradient: "from-muted-foreground to-slate-900",
  },
  {
    title: "Premium Services",
    description:
      "Exclusive market insights with long-term and short-term trading strategies",
    icon: Award,
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    title: "Risk Management",
    description:
      "Focus on capital preservation and sustainable growth strategies",
    icon: BarChart3,
    gradient: "from-muted-foreground to-slate-900",
  },
];
