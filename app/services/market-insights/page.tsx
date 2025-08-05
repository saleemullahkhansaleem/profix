import type { Metadata } from "next";
import { marketInsightsSEO } from "@/lib/seo";
import MarketInsightsWrapper from "@/components/services/market-insights-wrapper";

export const metadata: Metadata = marketInsightsSEO;

export default function MarketInsightsPage() {
  return <MarketInsightsWrapper />;
}
