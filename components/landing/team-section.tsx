import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BarChart3, Briefcase, TrendingUp, Users } from "lucide-react";

export default function TeamSection() {
  return (
    <section id="team" className="py-16 bg-muted relative">
      <div className="container max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-12">
          <Badge className="mb-3 px-3 py-1">Our Team</Badge>
          <h2 className="text-3xl font-bold mb-2">Our Expert Team</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Highly skilled professionals with deep expertise and shared
            commitment to results
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(6,214,160,0.05),transparent_50%)]"></div>
            <img
              src="/images/team.webp"
              alt="Team image"
              className="object-contain w-full rounded-2xl"
            />
          </div>
          <div className="grid grid-cols-2 gap-px relative">
            <div className="absolute inset-12 bg-gradient-to-br from-primary/20 via-primary/50 to-primary/15 blur-lg"></div>
            {team.map((item, index) => (
              <Card
                key={index}
                className="border-0 rounded-none shadow-none transition-all duration-500 bg-muted/80 backdrop-blur text-center group"
              >
                <CardHeader className="p-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mx-auto transition-transform duration-300 shadow-lg`}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <h3 className="text-base  font-medium mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const team = [
  {
    title: "Research Analysts",
    description:
      "Specialists in European economies and global stock indices with continuous market monitoring",
    icon: BarChart3,
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    title: "Certified Traders",
    description:
      "Years of trading experience with precision in high-frequency and long-term approaches",
    icon: TrendingUp,
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    title: "Account Managers",
    description:
      "Dedicated points of contact providing consistent communication and portfolio updates",
    icon: Users,
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    title: "Sales & Relations",
    description:
      "Dynamic team focused on client-first approach and building long-term relationships",
    icon: Briefcase,
    gradient: "from-sky-600 to-blue-700",
  },
];
