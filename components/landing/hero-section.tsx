import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Activity, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-background text-foreground dark">
      <img
        src="/images/hero-profix.webp"
        alt="hero image"
        className="absolute inset-0 object-cover w-full h-full opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600/50 via-black to-muted-foreground/50"></div>

      <div className="container max-w-7xl mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-teal-900 to-emerald-900 text-slate-200 hover:from-teal-200 hover:to-emerald-800 border-0 px-4 py-2 font-medium">
                <Award className="w-4 h-4 mr-2" />
                7+ Years of Excellence
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Navigate Financial Markets with
                <span className="bg-gradient-to-r from-teal-400 via-emerald-500 to-teal-300 bg-clip-text text-transparent">
                  {" "}
                  Expert Precision
                </span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                Specialising in connecting you with top-tier, SCA-regulated
                platforms tailored for your day-to day trades & long term
                investment opportunities in financial markets
              </p>
              <p className="text- text-teal-400 leading-relaxed max-w-2xl">
                Get your customised trading account on SCA related platforms
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-slate-200 to-slate-100 hover:from-slate-100 hover:to-white text-black shadow-xl hover:shadow-2xl transition-all duration-300"
                asChild
              >
                <Link href="https://sey.portal.equiticlients.com/sc/register/?accountType=Standard&clickid=1125427&affid=C02194992">
                  Start Trading Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-muted-foreground text-slate-300 hover:bg-slate-40 hover:text-slate-200 hover:border-muted-foreground transition-all duration-300 bg-transparent"
              >
                <Activity className="mr-2 w-4 h-4" />
                View Strategies
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6">
              <div className="text-center group">
                <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  1,200+
                </div>
                <div className="text-slate-400 text-sm font-medium">
                  Satisfied Clients
                </div>
              </div>
              <div className="text-center group">
                <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  800+
                </div>
                <div className="text-slate-400 text-sm font-medium">
                  Active Traders
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="relative w-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-emerald-400/20 rounded-3xl transform rotate-6 blur-3 xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-200/10 to-slate-100/10 rounded-3xl transform -rotate-3"></div>
              <Image
                src="/images/hero-profix.webp"
                alt="Financial Trading Dashboard"
                width={600}
                height={500}
                className="relative object-cover w-full h-full rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
