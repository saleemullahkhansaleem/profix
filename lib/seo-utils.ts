import { Metadata } from "next";

// Generate breadcrumb structured data
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://profixmarketing.com${item.url}`,
    })),
  };
}

// Generate FAQ structured data
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Generate local business structured data
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "PROFIX MARKETING",
    description:
      "Expert financial trading services with 7+ years of experience in stocks, forex, commodities, and cryptocurrencies.",
    url: "https://profixmarketing.com",
    telephone: "+971-XX-XXX-XXXX",
    email: "info@profixmarketing.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.2048,
      longitude: 55.2708,
    },
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Trading Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Forex Trading",
            description: "Professional forex trading services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Stock Trading",
            description: "Stock market trading services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cryptocurrency Trading",
            description: "Digital currency trading services",
          },
        },
      ],
    },
  };
}

// Generate meta description from content
export function generateMetaDescription(
  content: string,
  maxLength: number = 160
): string {
  // Remove HTML tags and extra whitespace
  const cleanContent = content
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (cleanContent.length <= maxLength) {
    return cleanContent;
  }

  // Truncate at word boundary
  const truncated = cleanContent.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  return lastSpace > 0
    ? truncated.substring(0, lastSpace) + "..."
    : truncated + "...";
}

// Generate keywords from content
export function generateKeywords(
  content: string,
  maxKeywords: number = 10
): string[] {
  // Remove HTML tags and convert to lowercase
  const cleanContent = content.replace(/<[^>]*>/g, "").toLowerCase();

  // Common stop words to exclude
  const stopWords = new Set([
    "the",
    "a",
    "an",
    "and",
    "or",
    "but",
    "in",
    "on",
    "at",
    "to",
    "for",
    "of",
    "with",
    "by",
    "is",
    "are",
    "was",
    "were",
    "be",
    "been",
    "being",
    "have",
    "has",
    "had",
    "do",
    "does",
    "did",
    "will",
    "would",
    "could",
    "should",
    "may",
    "might",
    "must",
    "can",
    "this",
    "that",
    "these",
    "those",
    "i",
    "you",
    "he",
    "she",
    "it",
    "we",
    "they",
    "me",
    "him",
    "her",
    "us",
    "them",
    "my",
    "your",
    "his",
    "her",
    "its",
    "our",
    "their",
    "mine",
    "yours",
    "hers",
    "ours",
    "theirs",
  ]);

  // Extract words and count frequency
  const words = cleanContent.match(/\b[a-z]{3,}\b/g) || [];
  const wordCount: { [key: string]: number } = {};

  words.forEach((word) => {
    if (!stopWords.has(word)) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  });

  // Sort by frequency and return top keywords
  return Object.entries(wordCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, maxKeywords)
    .map(([word]) => word);
}

// Generate pagination metadata
export function generatePaginationMetadata(
  currentPage: number,
  totalPages: number,
  baseUrl: string,
  pageTitle: string
): Metadata {
  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;

  const metadata: Metadata = {
    title: `${pageTitle} - Page ${currentPage} | PROFIX MARKETING`,
    description: `${pageTitle} - Page ${currentPage} of ${totalPages}`,
  };

  if (hasNextPage) {
    metadata.alternates = {
      ...metadata.alternates,
      next: `${baseUrl}?page=${currentPage + 1}`,
    };
  }

  if (hasPrevPage) {
    metadata.alternates = {
      ...metadata.alternates,
      prev: currentPage === 2 ? baseUrl : `${baseUrl}?page=${currentPage - 1}`,
    };
  }

  return metadata;
}

// Generate social media metadata
export function generateSocialMetadata(
  title: string,
  description: string,
  image: string = "/og-image.png",
  url?: string
) {
  const baseUrl = "https://profixmarketing.com";
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const imageUrl = `${baseUrl}${image}`;

  return {
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: "PROFIX MARKETING",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@profixmarketing",
      images: [imageUrl],
    },
  };
}

// Generate article metadata
export function generateArticleMetadata(
  title: string,
  description: string,
  publishedTime: string,
  modifiedTime?: string,
  author: string = "PROFIX MARKETING",
  section?: string,
  tags: string[] = []
) {
  return {
    title: `${title} | PROFIX MARKETING`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      ...(modifiedTime && { modifiedTime }),
      authors: [author],
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
  };
}

// Generate FAQ metadata
export function generateFAQMetadata(
  title: string,
  description: string,
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    title: `${title} | PROFIX MARKETING`,
    description,
    other: {
      "faq-schema": JSON.stringify(generateFAQSchema(faqs)),
    },
  };
}
