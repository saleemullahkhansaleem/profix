"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, ArrowLeft, Filter, Clock, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function ClientEducationWrapper() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const blogPosts = [
    // Trading 101
    {
      id: "trading-101-basics",
      title: "Trading 101",
      category: "Trading 101",
      readTime: "5 min",
      author: "PROFIX Team",
    },
    {
      id: "learn-online-trading",
      title: "Learn how to start trading online",
      category: "Trading 101",
      readTime: "8 min",
      author: "PROFIX Team",
    },
    {
      id: "trading-strategy-assets",
      title: "How to build a specialised trading strategy for different assets",
      category: "Trading 101",
      readTime: "12 min",
      author: "PROFIX Team",
    },
    {
      id: "trading-optimization-plugins",
      title: "Optimise your trading: Plug-ins",
      category: "Trading 101",
      readTime: "6 min",
      author: "PROFIX Team",
    },
    {
      id: "order-flow-tools",
      title: "Optimise your trading: Order flow tools",
      category: "Trading 101",
      readTime: "10 min",
      author: "PROFIX Team",
    },
    {
      id: "market-psychology",
      title: "Understanding market and trader psychology",
      category: "Trading 101",
      readTime: "15 min",
      author: "PROFIX Team",
    },
    {
      id: "trading-calendars",
      title: "Optimise your trading: Calendars",
      category: "Trading 101",
      readTime: "7 min",
      author: "PROFIX Team",
    },
    {
      id: "market-sectors",
      title: "Market sectors",
      category: "Trading 101",
      readTime: "9 min",
      author: "PROFIX Team",
    },

    // Risk Management
    {
      id: "risk-management-basics",
      title: "Risk Management",
      category: "Risk Management",
      readTime: "10 min",
      author: "PROFIX Team",
    },
    {
      id: "risk-management-tools",
      title: "Plan for success with risk management tools",
      category: "Risk Management",
      readTime: "12 min",
      author: "PROFIX Team",
    },
    {
      id: "capital-allocation",
      title: "Capital allocation in different market conditions",
      category: "Risk Management",
      readTime: "14 min",
      author: "PROFIX Team",
    },
    {
      id: "capital-growth-model",
      title: "Capital Growth Model",
      category: "Risk Management",
      readTime: "11 min",
      author: "PROFIX Team",
    },
    {
      id: "advanced-risk-strategies",
      title: "Advanced risk management strategies",
      category: "Risk Management",
      readTime: "16 min",
      author: "PROFIX Team",
    },
    {
      id: "portfolio-construction",
      title: "Portfolio construction and management",
      category: "Risk Management",
      readTime: "13 min",
      author: "PROFIX Team",
    },

    // Market Analysis
    {
      id: "market-analysis-101",
      title: "Market Analysis 101",
      category: "Market Analysis",
      readTime: "8 min",
      author: "PROFIX Team",
    },
    {
      id: "market-insights",
      title: "Trade smarter with deeper market insights",
      category: "Market Analysis",
      readTime: "10 min",
      author: "PROFIX Team",
    },
    {
      id: "futures-options",
      title: "Futures and Options contracts in online trading",
      category: "Market Analysis",
      readTime: "15 min",
      author: "PROFIX Team",
    },
    {
      id: "technical-fundamental",
      title: "Combining technical and fundamental analysis",
      category: "Market Analysis",
      readTime: "12 min",
      author: "PROFIX Team",
    },
    {
      id: "technical-analysis-101",
      title: "Technical Analysis 101",
      category: "Market Analysis",
      readTime: "9 min",
      author: "PROFIX Team",
    },
    {
      id: "fundamental-analysis-101",
      title: "Fundamental Analysis 101",
      category: "Market Analysis",
      readTime: "11 min",
      author: "PROFIX Team",
    },

    // Trading Strategies
    {
      id: "trading-strategies-101",
      title: "Trading Strategies 101",
      category: "Trading Strategies",
      readTime: "7 min",
      author: "PROFIX Team",
    },
    {
      id: "proven-strategies",
      title: "Popular and proven trading strategies",
      category: "Trading Strategies",
      readTime: "13 min",
      author: "PROFIX Team",
    },
    {
      id: "day-trading-strategies",
      title: "Day Trading",
      category: "Trading Strategies",
      readTime: "10 min",
      author: "PROFIX Team",
    },
    {
      id: "swing-trading",
      title: "Swing Trading Strategies for Market Timing",
      category: "Trading Strategies",
      readTime: "14 min",
      author: "PROFIX Team",
    },
    {
      id: "breakout-strategy",
      title: "The Breakout Strategy",
      category: "Trading Strategies",
      readTime: "11 min",
      author: "PROFIX Team",
    },
    {
      id: "scalping-strategies",
      title: "Scalping",
      category: "Trading Strategies",
      readTime: "9 min",
      author: "PROFIX Team",
    },
  ];

  // Calculate dynamic counts
  const getCategoryCount = (categoryName: string) => {
    if (categoryName === "All") {
      return blogPosts.length;
    }
    return blogPosts.filter((post) => post.category === categoryName).length;
  };

  // Generate categories dynamically based on actual blog posts
  const uniqueCategories = Array.from(
    new Set(blogPosts.map((post) => post.category))
  );

  const blogCategories = [
    {
      name: "All",
      count: getCategoryCount("All"),
      color: "from-gray-500 to-gray-600",
    },
    ...uniqueCategories.map((category, index) => {
      const colors = [
        "from-emerald-500 to-teal-600",
        "from-red-500 to-orange-600",
        "from-blue-500 to-cyan-600",
        "from-purple-500 to-indigo-600",
        "from-yellow-500 to-orange-600",
        "from-pink-500 to-rose-600",
        "from-indigo-500 to-purple-600",
        "from-green-500 to-emerald-600",
      ];
      return {
        name: category,
        count: getCategoryCount(category),
        color: colors[index % colors.length],
      };
    }),
  ];

  return (
    <div className="min-h-screen bg-background">
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

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="w-fit">
                <Users className="w-3 h-3 mr-1" />
                Client Education
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-bold">
                Trading Education Hub
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                Master the markets with our comprehensive library of trading
                guides, tutorials, and expert insights. From beginner basics to
                advanced strategies.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/25 rounded-lg transform rotate-6"></div>
              <div className="absolute inset-0 bg-primary/25 rounded-lg transform -rotate-6"></div>
              <Image
                src="/images/services/client-education.webp"
                alt="Client Education"
                width={600}
                height={400}
                className="relative rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {blogCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className={`bg-primary/10 rounded-xl p-6 text-center transition-all duration-200 hover:shadow-md ${
                  selectedCategory === category.name
                    ? "ring-2 ring-primary bg-primary/20"
                    : "hover:bg-primary/15"
                }`}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3 transition-transform hover:scale-110`}
                >
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.count} articles
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">
              {selectedCategory === "All"
                ? "All Articles"
                : `${selectedCategory} Articles`}
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {
                  blogPosts.filter(
                    (post) =>
                      selectedCategory === "All" ||
                      post.category === selectedCategory
                  ).length
                }{" "}
                articles
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedCategory("All")}
              >
                <Filter className="w-4 h-4 mr-2" />
                Clear Filter
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts
              .filter(
                (post) =>
                  selectedCategory === "All" ||
                  post.category === selectedCategory
              )
              .map((post, index) => (
                <Link
                  key={`${post.category}-${index}`}
                  href={`/services/client-education/blog-detail/${post.id}`}
                >
                  <Card className="hover:shadow-md transition-all duration-300 cursor-pointer group animate-in fade-in-0 slide-in-from-bottom-2">
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
                </Link>
              ))}
          </div>

          {blogPosts.filter(
            (post) =>
              selectedCategory === "All" || post.category === selectedCategory
          ).length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-4">
                No articles available for the selected category.
              </p>
              <Button onClick={() => setSelectedCategory("All")}>
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
