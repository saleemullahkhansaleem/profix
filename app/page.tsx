import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Shield,
  Users,
  BarChart3,
  Globe,
  Target,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  PieChart,
  LineChart,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Zap,
  Activity,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProfixLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="bg-white/70 backdrop-blur border-b border-slate-200/60 sticky top-0 z-50 shadow-sm">
        <div className="container max-w-7xl mx-auto px-4 py-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/profix-logo.png"
                alt="PROFIX MARKETING"
                width={180}
                height={52}
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="#about"
                className="text-slate-700 text-sm hover:text-teal-600 transition-all duration-300 font-medium"
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-slate-700 text-sm hover:text-teal-600 transition-all duration-300 font-medium"
              >
                Services
              </Link>
              <Link
                href="#strategies"
                className="text-slate-700 text-sm hover:text-teal-600 transition-all duration-300 font-medium"
              >
                Strategies
              </Link>
              <Link
                href="#team"
                className="text-slate-700 text-sm hover:text-teal-600 transition-all duration-300 font-medium"
              >
                Team
              </Link>
              <Link
                href="#contact"
                className="text-slate-700 text-sm hover:text-teal-600 transition-all duration-300 font-medium"
              >
                Contact
              </Link>
            </nav>
            <Button
              size="sm"
              className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
              <Sparkles className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-black text-white">
        <img
          src="/hero-profix.webp"
          alt="hero image"
          className="absolute inset-0 object-cover w-full opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/50 via-black to-slate-600/50"></div>

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
                  Specializing in stocks, commodities, forex, and
                  cryptocurrencies with a proven track record of 6-12% average
                  client profitability and 93% satisfaction rate across 200+
                  clients.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-slate-200 to-slate-100 hover:from-slate-100 hover:to-white text-black shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Start Trading Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-700 text-slate-300 hover:bg-slate-40 hover:text-slate-200 hover:border-slate-600 transition-all duration-300 bg-transparent"
                >
                  <Activity className="mr-2 w-4 h-4" />
                  View Strategies
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center group">
                  <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    200+
                  </div>
                  <div className="text-slate-400 text-sm font-medium">
                    Trusted Clients
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    93%
                  </div>
                  <div className="text-slate-400 text-sm font-medium">
                    Satisfaction Rate
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    6-12%
                  </div>
                  <div className="text-slate-400 text-sm font-medium">
                    Avg. Profitability
                  </div>
                </div>
              </div>
            </div>
            <div className="relative lg:col-span-5">
              <div className="relative w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-emerald-400/20 rounded-3xl transform rotate-6 blur-3 xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-200/10 to-slate-100/10 rounded-3xl transform -rotate-3"></div>
                <Image
                  src="/hero-profix.webp"
                  alt="Financial Trading Dashboard"
                  width={600}
                  height={500}
                  className="relative  rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white"></div>
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
              <p className="text text-slate-700 leading-relaxed">
                At PROFIX, we specialize in navigating the dynamic world of
                financial markets, with a focus on trading stocks, commodities,
                forex and cryptocurrencies. With over 7 years of hands-on
                experience, we have built a reputation for integrity, precision
                and consistent results.
              </p>
              <p className="text text-slate-700 leading-relaxed">
                Profix Marketing is not your average marketing agency. Providing
                local expertise in navigating the UAE's CFD landscape,
                partnering with trusted platforms like ADSS & EQUITI.
              </p>
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-10 max-w-max mx-auto pt-6">
                {[
                  {
                    label: "Data-driven approach",
                    iconGradient: "from-teal-500 to-emerald-500",
                    bgColor: "bg-primary/10",
                    textColor: "text-slate-700",
                    borderColor: "border-primary/15",
                  },
                  {
                    label: "Personalized strategies",
                    iconGradient: "from-indigo-500 to-purple-600",
                    bgColor: "bg-purple-50",
                    textColor: "text-purple-700",
                    borderColor: "border-purple-200",
                  },
                  {
                    label: "Dedicated support",
                    iconGradient: "from-orange-500 to-yellow-500",
                    bgColor: "bg-yellow-50",
                    textColor: "text-yellow-700",
                    borderColor: "border-yellow-200",
                  },
                  {
                    label: "Global expertise",
                    iconGradient: "from-sky-500 to-blue-600",
                    bgColor: "bg-blue-50",
                    textColor: "text-blue-700",
                    borderColor: "border-blue-200",
                  },
                ].map((feature, index) => (
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
                src="/about.webp"
                alt="About PROFIX"
                width={500}
                height={500}
                className="relative rounded-3xl shadow-2xl hover:shadow-3xl w-full transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
            {[
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
                gradient: "from-slate-700 to-slate-900",
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
                gradient: "from-slate-700 to-slate-900",
              },
            ].map((card, index) => (
              <Card
                key={index}
                className="border-0 shadow-none bg-white group relative pt-6 mt-12"
              >
                <CardHeader className="pb-2">
                  <div className="absolute -top-14 left-10 p-3 rounded-2xl bg-muted">
                    <div className="absolute right-full top-14 rounded-full rounded-tr-none bg-muted w-6 h-6">
                      <div className="absolute inset-0 bg-white rounded-tr-xl"></div>
                    </div>
                    <div className="absolute left-full top-14 rounded-full rounded-tl-none bg-muted w-6 h-6">
                      <div className="absolute inset-0 bg-white rounded-tl-xl"></div>
                    </div>
                    <div
                      className={`w-16 h-16 relative bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center mx-auto`}
                    >
                      <div className="absolute inset-0 bg-primary/40 rounded-xl blur -z-10"></div>
                      <card.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-base text-slate-900">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Added Services */}
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
              Unlocking potential with tailored support and comprehensive
              insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: LineChart,
                title: "Market Insights",
                description:
                  "Comprehensive weekly and monthly analysis reports with economic calendars and event forecasts",
                image:
                  "/placeholder.svg?height=200&width=300&text=Market+Analysis",
                gradient: "from-blue-500 to-cyan-600",
              },
              {
                icon: Users,
                title: "Client Education",
                description:
                  "Training sessions on risk management, trading strategies, and market psychology webinars",
                image:
                  "/placeholder.svg?height=200&width=300&text=Education+Training",
                gradient: "from-emerald-500 to-teal-600",
              },
              {
                icon: Briefcase,
                title: "Dedicated Managers",
                description:
                  "Personal account managers providing assistance and addressing all your trading queries",
                image:
                  "/placeholder.svg?height=200&width=300&text=Account+Management",
                gradient: "from-violet-500 to-purple-600",
              },
              {
                icon: Star,
                title: "Customer-Centric",
                description:
                  "Building trust through transparency and reliability for long-term relationships",
                image:
                  "/placeholder.svg?height=200&width=300&text=Customer+Support",
                gradient: "from-orange-500 to-red-600",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-background/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="relative h-40 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90`}
                  ></div>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
                    >
                      Learn More
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
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

      {/* Trading Strategies */}
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
        <div className="container max-w-7xl mx-auto px-4 relative">
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
            {[
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
                title: "Hedging Strategy",
                subtitle: "Market uncertainty protection",
                description:
                  "Protect investments by holding long positions in safe-haven assets while taking short positions in riskier instruments.",
                icon: <PieChart className="w-8 h-8 text-white" />,
                gradient: "from-sky-500 to-blue-600",
                subtitleColor: "text-blue-600",
              },
            ].map((item, index) => (
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
                      <CardTitle className="text-xl text-slate-900">
                        {item.title}
                      </CardTitle>
                      <CardDescription
                        className={`${item.subtitleColor} font-semibold`}
                      >
                        {item.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              {[
                {
                  title: "Diversification",
                  description:
                    "Spread investments across various asset classes and markets",
                  icon: Globe,
                  bgColor: "bg-rose-50/60",
                  gradient: "from-rose-500 to-pink-500",
                  iconColor: "text-white",
                },
                {
                  title: "Stop-Loss Orders",
                  description:
                    "Set predetermined sell prices to limit potential losses",
                  icon: Shield,
                  bgColor: "bg-indigo-50/60",
                  gradient: "from-indigo-500 to-violet-600",
                  iconColor: "text-white",
                },
                {
                  title: "Leverage Management",
                  description:
                    "Use 1:100 leverage ratio wisely to control risk exposure",
                  icon: BarChart3,
                  bgColor: "bg-amber-50/60",
                  gradient: "from-amber-500 to-yellow-400",
                  iconColor: "text-white",
                },
                {
                  title: "Portfolio Reviews",
                  description:
                    "Quarterly reviews to adjust strategies based on performance",
                  icon: Target,
                  bgColor: "bg-sky-50/60",
                  gradient: "from-sky-500 to-blue-600",
                  iconColor: "text-white",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${item.bgColor} backdrop-blur p-6 group transition-all duration-300/60`}
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex justify-center items-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <h4 className="font-bold mb-1 text-slate-900">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MNC Tie-ups */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50/50"></div>
        <div className="container max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-teal-100 text-teal-800 px-3 py-1">
              Global Partnerships{" "}
            </Badge>
            <h2 className="text-3xl font-bold mb-2">Strategic Partnerships</h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Collaborating with multinational corporations for superior
              insights
            </p>
          </div>

          {/* <div className="bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/80 rounded-3xl p-16 shadow-2xl backdrop-blur-sm"> */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl mx-auto space-y-4">
              <div className=""></div>
              <h3 className="text-2xl font-bold text-slate-900">
                Global Network & Partnerships
              </h3>
              <p className="text-slate-700 leading-relaxed">
                With over 7 years of hands-on experience, we've built strategic
                tie-ups with multiple multinational companies that provide
                real-time market insights and institutional-grade data.
              </p>
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-10 max-w-max mx-auto pt-6">
                {[
                  {
                    label: "Real-time market insights",
                    iconGradient: "from-teal-500 to-emerald-500",
                    bgColor: "bg-primary/10",
                    textColor: "text-slate-700",
                    borderColor: "border-primary/15",
                  },
                  {
                    label: "Institutional-grade data access",
                    iconGradient: "from-indigo-500 to-purple-600",
                    bgColor: "bg-purple-50",
                    textColor: "text-purple-700",
                    borderColor: "border-purple-200",
                  },
                  {
                    label: "Global trend identification",
                    iconGradient: "from-orange-500 to-yellow-500",
                    bgColor: "bg-yellow-50",
                    textColor: "text-yellow-700",
                    borderColor: "border-yellow-200",
                  },
                  {
                    label: "Data-driven decision making",
                    iconGradient: "from-sky-500 to-blue-600",
                    bgColor: "bg-blue-50",
                    textColor: "text-blue-700",
                    borderColor: "border-blue-200",
                  },
                ].map((feature, index) => (
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
              <div className="absolute inset-0 bg-gradient-to-r from-teal-200/40 to-emerald-200/40 rounded-3xl transform rotate-3 blur-xl"></div>
              <Image
                src="/Partnerships.webp"
                alt="Global Partnerships"
                width={500}
                height={400}
                className="relative rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500"
              />
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-muted relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(6,214,160,0.05),transparent_50%)]"></div>
        <div className="container max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-teal-100 text-teal-800 px-3 py-1">
              Our Team
            </Badge>
            <h2 className="text-3xl font-bold mb-2">Our Expert Team</h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Highly skilled professionals with deep expertise and shared
              commitment to results
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/team.webp"
                alt="Team image"
                className="object-contain w-full rounded-2xl"
              />
            </div>
            <div className="grid grid-cols-2 gap-px relative overflow-hidden">
              <div className="absolute inset-12 bg-gradient-to-br from-primary/20 via-primary/50 to-primary/15 blur-lg"></div>
              {[
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
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-0 rounded-none transition-all duration-500 bg-muted/80 backdrop-blur text-center group"
                >
                  <CardHeader className="p-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mx-auto transition-transform duration-300 shadow-lg`}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <h3 className="text-base text-slate-900 font-medium mb-1">
                      {item.title}
                    </h3>
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

      {/* CTA Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-br from-slate-800 via-slate-900 to-black relative overflow-hidden border-b"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,214,160,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="container max-w-7xl mx-auto px-4 text-center relative">
          <div className="max-w-3xl mx-auto space-y-6">
            <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30 px-4 py-2">
              Get Started Today
            </Badge>
            <h2 className="text-2xl lg:text-4xl font-bold text-white leading-tight">
              Ready to Transform Your <br />
              Trading Journey?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Join 200+ satisfied clients and experience the PROFIX advantage
              with our proven strategies and expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 px-10 py-4"
              >
                <Sparkles className="mr-2 w-4 h-4" />
                Start Trading Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-400 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-300 transition-all duration-300 px-10 py-4 bg-transparent"
              >
                <Phone className="mr-2 w-4 h-4" />
                Schedule Consultation
              </Button>
            </div>
            <div className="flex gap-8 justify-center pt-10">
              {[
                {
                  label: "+971 12 345 6789",
                  icon: Phone,
                },
                {
                  label: "info@profixmarketing.com",
                  icon: Mail,
                },
                {
                  label: "Dubai, UAE",
                  icon: MapPin,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-slate-300 group"
                >
                  <div className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center group-hover:bg-teal-500/30 transition-colors duration-300">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-8 pb-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
        <div className="container max-w-7xl mx-auto px-4 relative">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <Image
                src="/profix-logo.png"
                alt="PROFIX MARKETING"
                width={180}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
              <p className="text-slate-400 leading-relaxed text-sm">
                Navigating financial markets with precision and expertise for
                over 7 years.
              </p>
            </div>
            {[
              {
                heading: "Services",
                links: [
                  "Forex Trading",
                  "Stock Trading",
                  "Cryptocurrency",
                  "Commodities",
                ],
              },
              {
                heading: "Company",
                links: ["About Us", "Our Team", "Strategies", "Contact"],
              },
              {
                heading: "Legal",
                links: [
                  "Privacy Policy",
                  "Terms of Service",
                  "Risk Disclosure",
                  "Compliance",
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-bold mb-4 text-white">{section.heading}</h4>
                <ul className="space-y-2 text-slate-400">
                  {section.links.map((link, idx) => (
                    <li
                      key={idx}
                      className="hover:text-teal-400 text-sm transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <ArrowRight size={16} />
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-800 mt-6 pt-4 text-center text-sm text-slate-400">
            <p>&copy; 2024 PROFIX MARKETING. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
