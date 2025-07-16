import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background"></div>
      <div className="container max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 shadow-sm">
            About Us
          </Badge>
          <h2 className="text-3xl font-bold mb-2">About PROFIX MARKETING</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Navigating the dynamic world of financial markets with integrity,
            precision, and consistent results
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            <p className="text text-muted-foreground leading-relaxed">
              At PROFIX, we specialize in navigating the dynamic world of
              financial markets, with a focus on trading stocks, commodities,
              forex and cryptocurrencies. With over 7 years of hands-on
              experience, we have built a reputation for integrity, precision
              and consistent results.
            </p>
            <p className="text text-muted-foreground leading-relaxed">
              Profix Marketing is not your average marketing agency. Providing
              local expertise in navigating the UAE's CFD landscape, partnering
              with trusted platforms like ADSS & EQUITI.
            </p>
            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-10 max-w-max mx-auto pt-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`py-1 px-5 ${feature.bgColor} ${feature.borderColor} backdrop-blur rounded-r-full group relative border`}
                >
                  <div
                    className={`w-10 h-10 absolute -left-6 top-1/2 -translate-y-1/2 bg-gradient-to-r ${feature.iconGradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span
                    className={`${feature.textColor} font-medium pl-4 text-sm`}
                  >
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/50 to-emerald-400/50 rounded-3xl transform rotate-3 blur-2xl"></div>
            <Image
              src="/images/about.webp"
              alt="About PROFIX"
              width={500}
              height={500}
              className="relative rounded-3xl shadow-2xl hover:shadow-3xl w-full transition-all duration-500"
            />
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-3">PROFIX Timeline</h3>
            <p className="text-sm text-muted-foreground">
              Our journey of growth and excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-2 sm:left-1/2 transform sm:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/60 to-primary/20 rounded-full"></div>

            <div className="space-y-2">
              {timeline.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center justify-end group ${
                    milestone.position === "left"
                      ? "sm:justify-start"
                      : "sm:justify-end"
                  }`}
                >
                  <div
                    className={`absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-5 h-5 bg-gradient-to-r ${milestone.gradient} rounded-full border-4 border-background  z-10 group-hover:scale-125 transition-transform duration-300`}
                  ></div>

                  <div
                    className={`w-full sm:w-1/2 ${
                      milestone.position === "left" ? "pl-8 sm:pr-8" : "pl-8"
                    } group`}
                  >
                    <div
                      className={`${milestone.bgColor} ${milestone.borderColor} border backdrop-blur-sm rounded-lg p-3 relative`}
                    >
                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${milestone.gradient} text-background text-sm font-bold mb-2 shadow-sm`}
                      >
                        <span>{milestone.year}</span>
                      </div>

                      <div className="">
                        {milestone.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-start space-x-2"
                          >
                            <div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${milestone.gradient} mt-2 flex-shrink-0`}
                            ></div>
                            <span
                              className={`${milestone.textColor} text-sm font-medium leading-relaxed`}
                            >
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div
                        className={`absolute top-1/2 transform -translate-y-1/2 ${
                          milestone.position === "left"
                            ? "-left-[13px] sm:-right-[13px] sm:left-auto"
                            : "-left-[13px]"
                        } w-0 h-0 border-t-[12px] border-b-[12px] border-t-transparent border-b-transparent ${
                          milestone.position === "left"
                            ? `border-r-[12px] sm:border-l-[12px] sm:border-r-0 ${milestone.borderColor}`
                            : `border-r-[12px] ${milestone.borderColor}`
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center text-sm px-5 py-2.5 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="font-semibold">
                Continuing our journey of excellence...
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    label: "Data-driven approach",
    iconGradient: "from-teal-500 to-emerald-500",
    bgColor: "bg-primary/10",
    textColor: "text-primary",
    borderColor: "border-primary/15",
  },
  {
    label: "Personalized strategies",
    iconGradient: "from-indigo-500 to-purple-600",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-700",
    borderColor: "border-purple-500/15",
  },
  {
    label: "Dedicated support",
    iconGradient: "from-orange-500 to-yellow-500",
    bgColor: "bg-yellow-500/10",
    textColor: "text-yellow-700",
    borderColor: "border-yellow-500/15",
  },
  {
    label: "Global expertise",
    iconGradient: "from-sky-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-700",
    borderColor: "border-blue-500/15",
  },
];
const timeline = [
  {
    year: "2019",
    items: ["Founded", "Partnership with ADSS"],
    gradient: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-500/5",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-500/20",
    position: "left",
  },
  {
    year: "2020",
    items: ["200+ satisfied clients", "Crossing over 1.5M USD deposits"],
    gradient: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-500/5",
    textColor: "text-blue-700",
    borderColor: "border-blue-500/20",
    position: "right",
  },
  {
    year: "2021",
    items: ["600+ satisfied clients", "Crossing over 5M USD deposits"],
    gradient: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-500/5",
    textColor: "text-purple-700",
    borderColor: "border-purple-500/20",
    position: "left",
  },
  {
    year: "2022",
    items: ["Adding more tools & features", "Addition of new instruments"],
    gradient: "from-orange-500 to-red-600",
    bgColor: "bg-orange-500/5",
    textColor: "text-orange-700",
    borderColor: "border-orange-500/20",
    position: "right",
  },
  {
    year: "2023",
    items: ["Partnership with EQUITI", "Gold & BTC peak earnings"],
    gradient: "from-yellow-500 to-amber-600",
    bgColor: "bg-yellow-500/5",
    textColor: "text-yellow-700",
    borderColor: "border-yellow-500/20",
    position: "left",
  },
  {
    year: "2024",
    items: ["95% clients profit", "Automated trades"],
    gradient: "from-green-500 to-emerald-600",
    bgColor: "bg-green-500/5",
    textColor: "text-green-700",
    borderColor: "border-green-500/20",
    position: "right",
  },
  {
    year: "2025",
    items: ["New refined strategies", "BOT integrations"],
    gradient: "from-primary to-primary/80",
    bgColor: "bg-primary/5",
    textColor: "text-primary",
    borderColor: "border-primary/20",
    position: "left",
  },
];
