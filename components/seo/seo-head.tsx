import Head from "next/head";
import { Script } from "next/script";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
  structuredData?: object;
}

export function SEOHead({
  title,
  description,
  keywords = [],
  image = "/og-image.png",
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  author = "PROFIX MARKETING",
  section,
  tags = [],
  noindex = false,
  nofollow = false,
  canonical,
  structuredData,
}: SEOHeadProps) {
  const baseUrl = "https://profixmarketing.vercel.app";
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const imageUrl = `${baseUrl}${image}`;
  const canonicalUrl = canonical || fullUrl;

  return (
    <Head>
      {/* Basic Meta Tags */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {(noindex || nofollow) && (
        <meta
          name="robots"
          content={`${noindex ? "noindex" : "index"}, ${
            nofollow ? "nofollow" : "follow"
          }`}
        />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="PROFIX MARKETING" />
      <meta property="og:locale" content="en_US" />

      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {tags.length > 0 && (
        <meta property="article:tag" content={tags.join(", ")} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content="@profixmarketing" />

      {/* Additional Meta Tags */}
      <meta name="author" content={author} />
      <meta name="application-name" content="PROFIX MARKETING" />
      <meta name="apple-mobile-web-app-title" content="PROFIX" />
      <meta name="theme-color" content="#00cc88" />
      <meta name="msapplication-TileColor" content="#00cc88" />

      {/* Structured Data */}
      {structuredData && (
        <Script
          id="page-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
}

// Predefined SEO configurations for common use cases
export function HomePageSEO() {
  return (
    <SEOHead
      title="Expert Financial Trading | PROFIX MARKETING"
      description="Navigate financial markets with expert precision. 7+ years of experience in stocks, forex, commodities, and cryptocurrencies. Trusted by clients in UAE and beyond."
      keywords={[
        "Expert Trading",
        "Financial Markets",
        "UAE Trading",
        "Professional Trading",
        "Forex Trading",
        "Stock Trading",
        "Cryptocurrency Trading",
      ]}
      url="/"
    />
  );
}

export function TradingPlatformsSEO() {
  return (
    <SEOHead
      title="Trading Platforms | PROFIX MARKETING"
      description="Discover advanced trading platforms and tools designed for professional traders. Access real-time market data, advanced charting, and seamless execution."
      keywords={[
        "Trading Platforms",
        "MT4",
        "MT5",
        "TradingView",
        "Charting Tools",
        "Trading Software",
      ]}
      url="/trading-platforms"
    />
  );
}

export function ClientEducationSEO() {
  return (
    <SEOHead
      title="Trading Education Hub | PROFIX MARKETING"
      description="Master the markets with our comprehensive library of trading guides, tutorials, and expert insights. From beginner basics to advanced strategies."
      keywords={[
        "Trading Education",
        "Trading Guides",
        "Market Tutorials",
        "Trading Strategies",
        "Trading Courses",
      ]}
      url="/services/client-education"
      type="article"
      section="Education"
    />
  );
}
