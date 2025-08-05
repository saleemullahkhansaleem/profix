import Script from "next/script";

interface OrganizationSchema {
  name: string;
  url: string;
  logo: string;
  description: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    email: string;
  };
  sameAs?: string[];
}

interface WebSiteSchema {
  name: string;
  url: string;
  description: string;
  potentialAction: {
    target: string;
    "query-input": string;
  };
}

interface ArticleSchema {
  headline: string;
  description: string;
  image: string;
  author: {
    "@type": string;
    name: string;
  };
  publisher: {
    "@type": string;
    name: string;
    logo: {
      "@type": string;
      url: string;
    };
  };
  datePublished: string;
  dateModified?: string;
  mainEntityOfPage: {
    "@type": string;
    "@id": string;
  };
}

interface ServiceSchema {
  name: string;
  description: string;
  provider: {
    "@type": string;
    name: string;
  };
  areaServed: string;
  serviceType: string;
}

export function OrganizationStructuredData({
  data,
}: {
  data: OrganizationSchema;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    url: data.url,
    logo: data.logo,
    description: data.description,
    ...(data.address && {
      address: {
        "@type": "PostalAddress",
        ...data.address,
      },
    }),
    ...(data.contactPoint && {
      contactPoint: {
        "@type": "ContactPoint",
        ...data.contactPoint,
      },
    }),
    ...(data.sameAs && { sameAs: data.sameAs }),
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteStructuredData({ data }: { data: WebSiteSchema }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: data.name,
    url: data.url,
    description: data.description,
    potentialAction: {
      "@type": "SearchAction",
      target: data.potentialAction.target,
      "query-input": data.potentialAction["query-input"],
    },
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleStructuredData({ data }: { data: ArticleSchema }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.headline,
    description: data.description,
    image: data.image,
    author: data.author,
    publisher: data.publisher,
    datePublished: data.datePublished,
    ...(data.dateModified && { dateModified: data.dateModified }),
    mainEntityOfPage: data.mainEntityOfPage,
  };

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceStructuredData({ data }: { data: ServiceSchema }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.description,
    provider: data.provider,
    areaServed: data.areaServed,
    serviceType: data.serviceType,
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Predefined schemas for common pages
export function ProfixOrganizationSchema() {
  return (
    <OrganizationStructuredData
      data={{
        name: "PROFIX MARKETING",
        url: "https://profixmarketing.com",
        logo: "https://profixmarketing.com/profix-logo.png",
        description:
          "Expert financial trading services with 7+ years of experience in stocks, forex, commodities, and cryptocurrencies.",
        address: {
          streetAddress: "Dubai",
          addressLocality: "Dubai",
          addressRegion: "Dubai",
          postalCode: "00000",
          addressCountry: "AE",
        },
        contactPoint: {
          telephone: "+971-XX-XXX-XXXX",
          contactType: "Customer Service",
          email: "info@profixmarketing.com",
        },
        sameAs: [
          "https://www.linkedin.com/company/profix-marketing",
          "https://twitter.com/profixmarketing",
        ],
      }}
    />
  );
}

export function ProfixWebSiteSchema() {
  return (
    <WebSiteStructuredData
      data={{
        name: "PROFIX MARKETING",
        url: "https://profixmarketing.com",
        description: "Expert financial trading services and education",
        potentialAction: {
          target: "https://profixmarketing.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      }}
    />
  );
}

export function TradingServiceSchema() {
  return (
    <ServiceStructuredData
      data={{
        name: "Financial Trading Services",
        description:
          "Professional trading services in forex, stocks, commodities, and cryptocurrencies with expert guidance and dedicated support.",
        provider: {
          "@type": "Organization",
          name: "PROFIX MARKETING",
        },
        areaServed: "UAE, Middle East, Global",
        serviceType: "Financial Trading",
      }}
    />
  );
}
