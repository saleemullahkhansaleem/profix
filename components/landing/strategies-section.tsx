import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Shield,
  TrendingUp,
  Zap,
  PieChart,
  Globe,
  BarChart3,
  Target,
  Activity,
} from "lucide-react";

export default function StrategiesSection() {
  return (
    <section id="strategies" className="py-16 relative">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-primary/10 to-background/70" />
      <div className="container max-w-7xl mx-auto px-4 relative overflow-hidden">
        <div className="absolute w-80 h-80 rounded-full bg-primary/40 top-40 left-1/2 blur-3xl"></div>
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 shadow-sm">
            Trading Strategies
          </Badge>
          <h2 className="text-3xl font-bold mb-2">Trading Strategies</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Explore effective approaches for trading success
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 mb-12 relative">
          {strategies.map((item, index) => (
            <Card
              key={index}
              className="border-0 hover:shadow bg-background/50 backdrop-blur-sm group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl ">{item.title}</CardTitle>
                    <CardDescription
                      className={`${item.subtitleColor} font-semibold`}
                    >
                      {item.subtitle}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Risk Management Strategies */}
        <div className="backdrop-blur rounded-2xl p-10 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/20 to-primary/5 blur-3xl opacity-40"></div>
          <h3 className="text-3xl font-bold mb-10 text-primary relative">
            Risk Management Strategies
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-1 relative">
            {riskStrategies.map((item, index) => (
              <div
                key={index}
                className={`${item.bgColor} backdrop-blur p-4 group transition-all duration-300/60`}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex justify-center items-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <h4 className="font-bold mb-1 ">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const strategies = [
  {
    title: "1% Risk Management Strategy",
    subtitle: "15–18% average monthly return",
    description:
      "Preserve capital while achieving consistent growth by risking maximum 1% of account balance per trade. Minimizes losses for long-term sustainability.",
    icon: <Shield className="w-8 h-8 text-white" />,
    gradient: "from-teal-500 to-emerald-600",
    subtitleColor: "text-emerald-600",
  },
  {
    title: "Long-Term Investment",
    subtitle: "6–12 months holding period",
    description:
      "Build wealth through stable growth in Tesla, Gold, and NASDAQ Index. Focus on compounding growth over extended periods.",
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    gradient: "from-indigo-500 to-purple-600",
    subtitleColor: "text-purple-600",
  },
  {
    title: "Short-Term Volatility",
    subtitle: "Intraday to few days",
    description:
      "Capitalize on quick market movements during major economic releases and geopolitical events for immediate profits.",
    icon: <Zap className="w-8 h-8 text-white" />,
    gradient: "from-orange-500 to-yellow-500",
    subtitleColor: "text-yellow-600",
  },
  {
    title: "Bot or Automated Strategy",
    subtitle: "Stable & emotion-free execution",
    description:
      "Safeguard your capital with our proven automated trading solutions  engineered for stability, consistency, and peace of mind.",
    icon: <PieChart className="w-8 h-8 text-white" />,
    gradient: "from-sky-500 to-blue-600",
    subtitleColor: "text-blue-600",
  },
];
const riskStrategies = [
  {
    title: "Diversification",
    description: "Spread investments across various asset classes and markets",
    icon: Globe,
    bgColor: "bg-rose-500/5",
    gradient: "from-rose-500 to-pink-500",
    iconColor: "text-white",
  },
  {
    title: "Stop-Loss Orders",
    description: "Set predetermined sell prices to limit potential losses",
    icon: Shield,
    bgColor: "bg-indigo-500/5",
    gradient: "from-indigo-500 to-violet-600",
    iconColor: "text-white",
  },
  {
    title: "Leverage Management",
    description: "Use 1:100 leverage ratio wisely to control risk exposure",
    icon: BarChart3,
    bgColor: "bg-amber-500/5",
    gradient: "from-amber-500 to-yellow-400",
    iconColor: "text-white",
  },
  {
    title: "Portfolio Reviews",
    description: "Quarterly reviews to adjust strategies based on performance",
    icon: Target,
    bgColor: "bg-sky-500/5",
    gradient: "from-sky-500 to-blue-600",
    iconColor: "text-white",
  },
  {
    title: "Performance Track",
    description:
      "Performance tracked with weekly, monthly & quarterly audits for consistent quality and improvement in delivered results.",
    icon: Activity,
    bgColor: "bg-emerald-500/5",
    gradient: "from-emerald-500 to-teal-600",
    iconColor: "text-white",
  },
];
