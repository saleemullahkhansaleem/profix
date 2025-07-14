"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  BookOpen,
  ArrowLeft,
  Search,
  Filter,
  Clock,
  User,
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import Header from "@/components/header";

export default function ClientEducationPage() {
  const blogCategories = [
    { name: "Trading 101", count: 8, color: "from-emerald-500 to-teal-600" },
    { name: "Risk Management", count: 12, color: "from-red-500 to-orange-600" },
    { name: "Market Analysis", count: 15, color: "from-blue-500 to-cyan-600" },
    {
      name: "Trading Strategies",
      count: 10,
      color: "from-purple-500 to-indigo-600",
    },
  ];

  const blogPosts = [
    // Trading 101
    {
      title: "Trading 101",
      category: "Trading 101",
      readTime: "5 min",
      author: "PROFIX Team",
    },
    {
      title: "Learn how to start trading online",
      category: "Trading 101",
      readTime: "8 min",
      author: "PROFIX Team",
    },
    {
      title: "How to build a specialised trading strategy for different assets",
      category: "Trading 101",
      readTime: "12 min",
      author: "PROFIX Team",
    },
    {
      title: "Optimise your trading: Plug-ins",
      category: "Trading 101",
      readTime: "6 min",
      author: "PROFIX Team",
    },
    {
      title: "Optimise your trading: Order flow tools",
      category: "Trading 101",
      readTime: "10 min",
      author: "PROFIX Team",
    },
    {
      title: "Understanding market and trader psychology",
      category: "Trading 101",
      readTime: "15 min",
      author: "PROFIX Team",
    },
    {
      title: "Optimise your trading: Calendars",
      category: "Trading 101",
      readTime: "7 min",
      author: "PROFIX Team",
    },
    {
      title: "Market sectors",
      category: "Trading 101",
      readTime: "9 min",
      author: "PROFIX Team",
    },

    // Risk Management
    {
      title: "Risk Management",
      category: "Risk Management",
      readTime: "10 min",
      author: "PROFIX Team",
    },
    {
      title: "Plan for success with risk management tools",
      category: "Risk Management",
      readTime: "12 min",
      author: "PROFIX Team",
    },
    {
      title: "Capital allocation in different market conditions",
      category: "Risk Management",
      readTime: "14 min",
      author: "PROFIX Team",
    },
    {
      title: "Capital Growth Model",
      category: "Risk Management",
      readTime: "11 min",
      author: "PROFIX Team",
    },
    {
      title: "Advanced risk management strategies",
      category: "Risk Management",
      readTime: "16 min",
      author: "PROFIX Team",
    },
    {
      title: "Portfolio construction and management",
      category: "Risk Management",
      readTime: "13 min",
      author: "PROFIX Team",
    },

    // Market Analysis
    {
      title: "Market Analysis 101",
      category: "Market Analysis",
      readTime: "8 min",
      author: "PROFIX Team",
    },
    {
      title: "Trade smarter with deeper market insights",
      category: "Market Analysis",
      readTime: "10 min",
      author: "PROFIX Team",
    },
    {
      title: "Futures and Options contracts in online trading",
      category: "Market Analysis",
      readTime: "15 min",
      author: "PROFIX Team",
    },
    {
      title: "Combining technical and fundamental analysis",
      category: "Market Analysis",
      readTime: "12 min",
      author: "PROFIX Team",
    },
    {
      title: "Technical Analysis 101",
      category: "Market Analysis",
      readTime: "9 min",
      author: "PROFIX Team",
    },
    {
      title: "Fundamental Analysis 101",
      category: "Market Analysis",
      readTime: "11 min",
      author: "PROFIX Team",
    },

    // Trading Strategies
    {
      title: "Trading Strategies 101",
      category: "Trading Strategies",
      readTime: "7 min",
      author: "PROFIX Team",
    },
    {
      title: "Popular and proven trading strategies",
      category: "Trading Strategies",
      readTime: "13 min",
      author: "PROFIX Team",
    },
    {
      title: "Day Trading",
      category: "Trading Strategies",
      readTime: "10 min",
      author: "PROFIX Team",
    },
    {
      title: "Swing Trading Strategies for Market Timing",
      category: "Trading Strategies",
      readTime: "14 min",
      author: "PROFIX Team",
    },
    {
      title: "The Breakout Strategy",
      category: "Trading Strategies",
      readTime: "11 min",
      author: "PROFIX Team",
    },
    {
      title: "Scalping",
      category: "Trading Strategies",
      readTime: "9 min",
      author: "PROFIX Team",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-primary/5 via-background to-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link
              href="/"
              className="flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              <Users className="w-3 h-3 mr-1" />
              Client Education
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Trading Education Hub
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Master the markets with our comprehensive library of trading
              guides, tutorials, and expert insights. From beginner basics to
              advanced strategies.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {blogCategories.map((category, index) => (
              <div key={index} className="bg-primary/10 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                  >
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count} articles
                  </p>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Latest Articles</h2>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="hover:shadow-md transition-shadow cursor-pointer group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-base group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <User className="w-3 h-3 mr-1" />
                    {post.author}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">Load More Articles</Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Stay Updated with Trading Insights
          </h2>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Get the latest trading tips, market analysis, and educational
            content delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
