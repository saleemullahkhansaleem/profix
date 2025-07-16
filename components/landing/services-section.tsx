import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  LineChart,
  Users,
  Briefcase,
  Star,
  CheckCircle,
  Shield,
  Award,
} from "lucide-react";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-14 bg-gradient-to-br from-muted/20 via-muted/30 to-muted/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary)/0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(var(--primary)/0.03),transparent_50%)]"></div>

      <div className="container max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 shadow-sm">
            Our Services
          </Badge>
          <h2 className="text-3xl font-bold mb-2">Value-Added Services</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Unlocking potential with tailored support and comprehensive insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-background/80 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative h-40 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50`}
                ></div>
                <Image
                  src={service.image || "/images/placeholder.svg"}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4 h-auto">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 mt-auto">
                  <Button
                    variant="link"
                    size="sm"
                    className="py-1 h-auto font-medium"
                    asChild
                  >
                    <Link href={`/services/${service.slug}`}>
                      Learn More
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-3 h-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Service Features */}
        <div className="mt-12 bg-primary/5 backdrop-blur rounded-lg p-6 border border-primary/15 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-semibold text-sm">24/7 Support</h4>
              <p className="text-xs text-muted-foreground">
                Round-the-clock assistance
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-semibold text-sm">Secure Platform</h4>
              <p className="text-xs text-muted-foreground">
                Bank-level security
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-semibold text-sm">Proven Results</h4>
              <p className="text-xs text-muted-foreground">
                7+ years track record
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: LineChart,
    title: "Market Insights",
    slug: "market-insights",
    description:
      "Comprehensive weekly and monthly analysis reports with economic calendars and event forecasts",
    image: "/images/services/market-insights.webp",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Users,
    title: "Client Education",
    slug: "client-education",
    description:
      "Training sessions on risk management, trading strategies, and market psychology webinars",
    image: "/images/services/client-education.webp",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Briefcase,
    title: "Dedicated Managers",
    slug: "dedicated-managers",
    description:
      "Personal account managers providing assistance and addressing all your trading queries",
    image: "/images/services/dedicated-managers.webp",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Star,
    title: "Customer-Centric",
    slug: "customer-centric",
    description:
      "Building trust through transparency and reliability for long-term relationships",
    image: "/images/services/customer-centric.webp",
    gradient: "from-orange-500 to-red-600",
  },
];
