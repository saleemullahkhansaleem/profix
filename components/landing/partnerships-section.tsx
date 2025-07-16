import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function PartnershipsSection() {
  return (
    <section className="py-16 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/50"></div>
      <div className="container max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-12">
          <Badge className="mb-3 px-3 py-1">Global Partnerships </Badge>
          <h2 className="text-3xl font-bold mb-2">Strategic Partnerships</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Collaborating with multinational corporations for superior insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl mx-auto space-y-4">
            <div className=""></div>
            <h3 className="text-2xl font-bold ">
              Global Network & Partnerships
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              With over 7 years of hands-on experience, we've built strategic
              tie-ups with multiple multinational companies that provide
              real-time market insights and institutional-grade data.
            </p>
            <div className="grid xl:grid-cols-2 gap-y-4 gap-x-10 max-w-max mx-auto pt-6">
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
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-200/40 to-emerald-200/40 rounded-3xl transform rotate-3 blur-xl"></div>
            <Image
              src="/images/partnerships.webp"
              alt="Global Partnerships"
              width={500}
              height={400}
              className="relative object-cover w-full h-full rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
const features = [
  {
    label: "Real-time market insights",
    iconGradient: "from-teal-500 to-emerald-500",
    bgColor: "bg-primary/10",
    textColor: "text-muted-foreground",
    borderColor: "border-primary/15",
  },
  {
    label: "Institutional-grade data access",
    iconGradient: "from-indigo-500 to-purple-600",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-700",
    borderColor: "border-purple-500/15",
  },
  {
    label: "Global trend identification",
    iconGradient: "from-orange-500 to-yellow-500",
    bgColor: "bg-yellow-500/10",
    textColor: "text-yellow-700",
    borderColor: "border-yellow-500/15",
  },
  {
    label: "Data-driven decision making",
    iconGradient: "from-sky-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-700",
    borderColor: "border-blue-500/15",
  },
];
