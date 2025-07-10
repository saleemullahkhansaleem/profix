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
                className="h-14 w-auto"
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
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white"></div>
        <div className="container max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-20">
            <Badge className="bg-teal-100 text-teal-800 mb-6 px-4 py-2">
              About Us
            </Badge>
            <h2 className="text-5xl font-bold mb-6 text-slate-900">
              About PROFIX MARKETING
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Navigating the dynamic world of financial markets with integrity,
              precision, and consistent results
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                At PROFIX, we specialize in navigating the dynamic world of
                financial markets, with a focus on trading stocks, commodities,
                forex and cryptocurrencies. With over 7 years of hands-on
                experience, we have built a reputation for integrity, precision
                and consistent results.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Profix Marketing is not your average marketing agency. Providing
                local expertise in navigating the UAE's CFD landscape,
                partnering with trusted platforms like ADSS & EQUITI.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">
                    Data-driven approach
                  </span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">
                    Personalized strategies
                  </span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">
                    Dedicated support
                  </span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">
                    Global expertise
                  </span>
                </div>
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
      <section className="py-16 bg-gradient-to-br from-slate-100 to-primary/10 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(6,214,160,0.05),transparent_50%)]"></div>
        <div className="container max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-20">
            <Badge className="bg-slate-100 text-slate-800 mb-6 px-4 py-2">
              Why Choose Us
            </Badge>
            <h2 className="text-5xl font-bold mb-6 text-slate-900">
              Why Choose PROFIX MARKETING?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover the key features of our partnership
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm group hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">
                  Expert Guidance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center leading-relaxed">
                  Personalized financial strategies tailored to each client's
                  unique goals and needs
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm group hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">
                  Transparent Policies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center leading-relaxed">
                  No additional charges or referral fees. Complete transparency
                  in all our services
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm group hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">
                  Premium Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center leading-relaxed">
                  Exclusive market insights with long-term and short-term
                  trading strategies
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm group hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">
                  Risk Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center leading-relaxed">
                  Focus on capital preservation and sustainable growth
                  strategies
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Added Services */}
      <section id="services" className="py-16 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50/50"></div>
        <div className="container max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-20">
            <Badge className="bg-teal-100 text-teal-800 mb-6 px-4 py-2">
              Our Services
            </Badge>
            <h2 className="text-5xl font-bold mb-6 text-slate-900">
              Value-Added Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Unlocking potential with tailored support and insights
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-6 group">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-all duration-300">
                <LineChart className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Market Insights
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Comprehensive weekly and monthly analysis reports with economic
                calendars and event forecasts
              </p>
            </div>

            <div className="text-center space-y-6 group">
              <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-900 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-all duration-300">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Client Education
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Training sessions on risk management, trading strategies, and
                market psychology webinars
              </p>
            </div>

            <div className="text-center space-y-6 group">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-all duration-300">
                <Briefcase className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Dedicated Managers
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Personal account managers providing assistance and addressing
                trading queries
              </p>
            </div>

            <div className="text-center space-y-6 group">
              <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-900 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-all duration-300">
                <Star className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Customer-Centric
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Building trust through transparency and reliability for
                long-term relationships
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Strategies */}
      <section
        id="strategies"
        className="py-16 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(30,41,59,0.05),transparent_50%)]"></div>
        <div className="container max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-20">
            <Badge className="bg-slate-100 text-slate-800 mb-6 px-4 py-2">
              Trading Strategies
            </Badge>
            <h2 className="text-5xl font-bold mb-6 text-slate-900">
              Trading Strategies
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore effective approaches for trading success
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm group hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900">
                      1% Risk Management Strategy
                    </CardTitle>
                    <CardDescription className="text-teal-600 font-semibold">
                      15-18% average monthly return
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Preserve capital while achieving consistent growth by risking
                  maximum 1% of account balance per trade. Minimizes losses for
                  long-term sustainability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm group hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900">
                      Long-Term Investment
                    </CardTitle>
                    <CardDescription className="text-slate-600 font-semibold">
                      6-12 months holding period
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Build wealth through stable growth in Tesla, Gold, and NASDAQ
                  Index. Focus on compounding growth over extended periods.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm group hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900">
                      Short-Term Volatility
                    </CardTitle>
                    <CardDescription className="text-slate-600 font-semibold">
                      Intraday to few days
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Capitalize on quick market movements during major economic
                  releases and geopolitical events for immediate profits.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm group hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <PieChart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900">
                      Hedging Strategy
                    </CardTitle>
                    <CardDescription className="text-slate-600 font-semibold">
                      Market uncertainty protection
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Protect investments by holding long positions in safe-haven
                  assets while taking short positions in riskier instruments.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Risk Management Strategies */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
            <h3 className="text-4xl font-bold text-center mb-16 text-slate-900">
              Risk Management Strategies
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/80 p-8 rounded-2xl shadow-lg text-center group hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-3 text-slate-900 text-lg">
                  Diversification
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Spread investments across various asset classes and markets
                </p>
              </div>
              <div className="bg-white/80 p-8 rounded-2xl shadow-lg text-center group hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-3 text-slate-900 text-lg">
                  Stop-Loss Orders
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Set predetermined sell prices to limit potential losses
                </p>
              </div>
              <div className="bg-white/80 p-8 rounded-2xl shadow-lg text-center group hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-3 text-slate-900 text-lg">
                  Leverage Management
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Use 1:100 leverage ratio wisely to control risk exposure
                </p>
              </div>
              <div className="bg-white/80 p-8 rounded-2xl shadow-lg text-center group hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-3 text-slate-900 text-lg">
                  Portfolio Reviews
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Quarterly reviews to adjust strategies based on performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MNC Tie-ups */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50/50"></div>
        <div className="container max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-20">
            <Badge className="bg-teal-100 text-teal-800 mb-6 px-4 py-2">
              Global Partnerships
            </Badge>
            <h2 className="text-5xl font-bold mb-6 text-slate-900">
              Strategic Partnerships
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Collaborating with multinational corporations for superior
              insights
            </p>
          </div>
          <div className="bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/80 rounded-3xl p-16 shadow-2xl backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h3 className="text-4xl font-bold text-slate-900">
                  Global Network & Partnerships
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  With over 7 years of hands-on experience, we've built
                  strategic tie-ups with multiple multinational companies that
                  provide real-time market insights and institutional-grade
                  data.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium text-lg">
                      Real-time market insights
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium text-lg">
                      Institutional-grade data access
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium text-lg">
                      Global trend identification
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium text-lg">
                      Data-driven decision making
                    </span>
                  </div>
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
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-16 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(6,214,160,0.05),transparent_50%)]"></div>
        <div className="container max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-20">
            <Badge className="bg-slate-100 text-slate-800 mb-6 px-4 py-2">
              Our Team
            </Badge>
            <h2 className="text-5xl font-bold mb-6 text-slate-900">
              Our Expert Team
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Highly skilled professionals with deep expertise and shared
              commitment to results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm text-center group hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <BarChart3 className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">
                  Research Analysts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Specialists in European economies and global stock indices
                  with continuous market monitoring
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm text-center group hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-900 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <TrendingUp className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">
                  Certified Traders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Years of trading experience with precision in high-frequency
                  and long-term approaches
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm text-center group hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">
                  Account Managers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Dedicated points of contact providing consistent communication
                  and portfolio updates
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm text-center group hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-900 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Briefcase className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">
                  Sales & Relations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Dynamic team focused on client-first approach and building
                  long-term relationships
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-br from-slate-800 via-slate-900 to-black relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,214,160,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="container max-w-7xl mx-auto px-4 text-center relative">
          <div className="max-w-5xl mx-auto space-y-10">
            <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30 mb-8 px-4 py-2">
              Get Started Today
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Transform Your Trading Journey?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Join 200+ satisfied clients and experience the PROFIX advantage
              with our proven strategies and expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 px-10 py-6 text-lg"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                Start Trading Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-400 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-300 transition-all duration-300 px-10 py-6 text-lg bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8 pt-16">
              <div className="flex items-center justify-center space-x-3 text-slate-300 group">
                <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center group-hover:bg-teal-500/30 transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-lg">+971 XX XXX XXXX</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300 group">
                <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center group-hover:bg-teal-500/30 transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-lg">info@profixmarketing.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300 group">
                <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center group-hover:bg-teal-500/30 transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-lg">Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-16 relative">
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
              <p className="text-slate-400 leading-relaxed">
                Navigating financial markets with precision and expertise for
                over 7 years.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg text-white">Services</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="hover:text-teal-400 transition-colors cursor-pointer">
                  Forex Trading
                </li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">
                  Stock Trading
                </li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">
                  Cryptocurrency
                </li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">
                  Commodities
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg text-white">Company</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="hover:text-teal-400 transition-colors cursor-pointer">
                  About Us
                </li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">
                  Our Team
                </li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">
                  Strategies
                </li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg text-white">Legal</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="hover:text-teal-400 transition-colors cursor-pointer">
                  Privacy Policy
                </li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">
                  Terms of Service
                </li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">
                  Risk Disclosure
                </li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">
                  Compliance
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-400">
            <p>&copy; 2024 PROFIX MARKETING. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
