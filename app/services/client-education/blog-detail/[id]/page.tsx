import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShareButtonWrapper } from "@/components/ui/share-button-wrapper";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import {
  getBlogPostById,
  getRelatedPosts,
  blogPosts,
} from "@/lib/data/blog-posts";
import { notFound } from "next/navigation";

export const dynamic = "force-static";
export const revalidate = false;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogDetail({ params }: { params: { id: string } }) {
  const postId = params.id;

  const blogPost = getBlogPostById(postId);

  if (!blogPost) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(postId, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="py-4 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/services/client-education"
              className="hover:text-primary transition-colors"
            >
              Client Education
            </Link>
            <span>/</span>
            <span className="text-foreground">{blogPost.title}</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              <Link
                href="/services/client-education"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Education Hub
              </Link>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <BookOpen className="w-3 h-3 mr-1" />
                  {blogPost.category}
                </Badge>
                <h1 className="text-2xl lg:text-3xl font-bold leading-tight">
                  {blogPost.title}
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  {blogPost.description}
                </p>
              </div>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(blogPost.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{blogPost.readTime} read</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{blogPost.author}</span>
                </div>
                <ShareButtonWrapper
                  title={blogPost.title}
                  className="ml-auto bg-transparent"
                />
              </div>
              <Separator />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Key Points Summary */}
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold">Key Takeaways</h3>
              <ul className="space-y-2">
                {blogPost.keyTakeaways.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Content */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">You might also like</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((article, index) => (
                <Link
                  key={index}
                  href={`/services/client-education/blog-detail/${article.id}`}
                >
                  <Card className="hover:shadow-md transition-shadow cursor-pointer group">
                    <CardContent className="p-4">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {article.category}
                      </Badge>
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {article.readTime} read
                        </span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
