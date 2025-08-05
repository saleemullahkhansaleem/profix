"use client";

import { useEffect } from "react";

interface SEOAnalyticsProps {
  pageTitle: string;
  pageUrl: string;
  customEvents?: Array<{
    name: string;
    parameters: Record<string, any>;
  }>;
}

export function SEOAnalytics({
  pageTitle,
  pageUrl,
  customEvents = [],
}: SEOAnalyticsProps) {
  useEffect(() => {
    // Track page view for analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "GA_MEASUREMENT_ID", {
        page_title: pageTitle,
        page_location: pageUrl,
      });
    }

    // Track custom events
    customEvents.forEach((event) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", event.name, event.parameters);
      }
    });
  }, [pageTitle, pageUrl, customEvents]);

  return null;
}

// Core Web Vitals monitoring
export function CoreWebVitalsMonitor() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Monitor Largest Contentful Paint (LCP)
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];

      if (lastEntry) {
        const lcp = lastEntry.startTime;
        console.log("LCP:", lcp);

        // Send to analytics
        if (window.gtag) {
          window.gtag("event", "web_vitals", {
            event_category: "Web Vitals",
            event_label: "LCP",
            value: Math.round(lcp),
            non_interaction: true,
          });
        }
      }
    });

    observer.observe({ entryTypes: ["largest-contentful-paint"] });

    // Monitor First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const fid = entry.processingStart - entry.startTime;
        console.log("FID:", fid);

        if (window.gtag) {
          window.gtag("event", "web_vitals", {
            event_category: "Web Vitals",
            event_label: "FID",
            value: Math.round(fid),
            non_interaction: true,
          });
        }
      });
    });

    fidObserver.observe({ entryTypes: ["first-input"] });

    // Monitor Cumulative Layout Shift (CLS)
    let clsValue = 0;
    let clsEntries: any[] = [];

    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          clsEntries.push(entry);
        }
      });
    });

    clsObserver.observe({ entryTypes: ["layout-shift"] });

    // Report CLS when page is hidden
    const reportCLS = () => {
      if (clsValue > 0) {
        console.log("CLS:", clsValue);

        if (window.gtag) {
          window.gtag("event", "web_vitals", {
            event_category: "Web Vitals",
            event_label: "CLS",
            value: Math.round(clsValue * 1000) / 1000,
            non_interaction: true,
          });
        }
      }
    };

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        reportCLS();
      }
    });

    return () => {
      observer.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  return null;
}

// SEO-friendly error boundary
export function SEOErrorBoundary({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error("SEO Error:", error);

      // Track errors for SEO monitoring
      if (window.gtag) {
        window.gtag("event", "exception", {
          description: error.message,
          fatal: false,
        });
      }
    };

    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  return <>{children}</>;
}

// Performance monitoring hook
export function usePerformanceMonitoring() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Monitor page load time
    const pageLoadTime = performance.now();

    window.addEventListener("load", () => {
      const loadTime = performance.now() - pageLoadTime;
      console.log("Page Load Time:", loadTime);

      if (window.gtag) {
        window.gtag("event", "timing_complete", {
          name: "load",
          value: Math.round(loadTime),
        });
      }
    });

    // Monitor DOM content loaded
    const domContentLoaded = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;
    if (domContentLoaded) {
      const domReadyTime =
        domContentLoaded.domContentLoadedEventEnd -
        domContentLoaded.domContentLoadedEventStart;
      console.log("DOM Ready Time:", domReadyTime);

      if (window.gtag) {
        window.gtag("event", "timing_complete", {
          name: "dom_interactive",
          value: Math.round(domReadyTime),
        });
      }
    }
  }, []);
}

// SEO-friendly image loading
export function SEOImageLoader({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      console.log(`Image loaded: ${src}`);

      if (window.gtag) {
        window.gtag("event", "image_load", {
          image_src: src,
          image_alt: alt,
        });
      }
    };

    img.onerror = () => {
      console.error(`Image failed to load: ${src}`);

      if (window.gtag) {
        window.gtag("event", "image_error", {
          image_src: src,
          image_alt: alt,
        });
      }
    };
  }, [src, alt]);

  return null;
}

// Declare global gtag function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
