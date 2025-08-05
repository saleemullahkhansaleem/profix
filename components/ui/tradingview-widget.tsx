"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { useTheme } from "next-themes";

interface TradingViewWidgetProps {
  symbol?: string;
  interval?: string;
  theme?: "light" | "dark";
  style?: "1" | "2" | "3";
  locale?: string;
  toolbar_bg?: string;
  enable_publishing?: boolean;
  allow_symbol_change?: boolean;
  container_id?: string;
  width?: string | number;
  height?: string | number;
  showSymbolSelector?: boolean;
}

declare global {
  interface Window {
    TradingView: any;
  }
}

const popularSymbols = [
  { symbol: "NASDAQ:AAPL", name: "Apple Inc." },
  { symbol: "NASDAQ:GOOGL", name: "Alphabet Inc." },
  { symbol: "NASDAQ:MSFT", name: "Microsoft Corp." },
  { symbol: "NASDAQ:TSLA", name: "Tesla Inc." },
  { symbol: "FX:EURUSD", name: "EUR/USD" },
  { symbol: "FX:GBPUSD", name: "GBP/USD" },
  { symbol: "FX:USDJPY", name: "USD/JPY" },
  { symbol: "CRYPTOCAP:BTC", name: "Bitcoin" },
  { symbol: "CRYPTOCAP:ETH", name: "Ethereum" },
  { symbol: "FOREXCOM:XAUUSD", name: "Gold" },
];

export function TradingViewWidget({
  symbol = "NASDAQ:AAPL",
  interval = "D",
  theme: propTheme = "dark",
  style = "1",
  locale = "en",
  toolbar_bg = "#f1f3f6",
  enable_publishing = false,
  allow_symbol_change = true,
  container_id = "tradingview_widget",
  width = "100%",
  height = "400",
  showSymbolSelector = false,
}: TradingViewWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSymbol, setCurrentSymbol] = useState(symbol);
  const [widgetInstance, setWidgetInstance] = useState<any>(null);
  const { theme: siteTheme, systemTheme } = useTheme();

  // Determine the actual theme to use
  const getCurrentTheme = () => {
    if (siteTheme === "system") {
      return systemTheme || "dark";
    }
    return siteTheme || propTheme;
  };

  const currentTheme = getCurrentTheme();

  const createWidget = (symbolToUse: string, themeToUse: string) => {
    if (!window.TradingView || !containerRef.current) return;

    // Clear previous widget
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
    }

    const isDark = themeToUse === "dark";

    const widget = new window.TradingView.widget({
      autosize: true,
      symbol: symbolToUse,
      interval: interval,
      timezone: "Etc/UTC",
      theme: themeToUse,
      style: style,
      locale: locale,
      toolbar_bg: isDark ? "#1e1e1e" : "#f1f3f6",
      enable_publishing: enable_publishing,
      allow_symbol_change: allow_symbol_change,
      container_id: container_id,
      width: "100%",
      height: "100%",
      hide_top_toolbar: false,
      hide_legend: false,
      save_image: false,
      backgroundColor: isDark
        ? "rgba(19, 23, 34, 1)"
        : "rgba(255, 255, 255, 1)",
      gridColor: isDark ? "rgba(240, 243, 250, 0.07)" : "rgba(0, 0, 0, 0.1)",
      watermark: {
        color: "rgba(0, 0, 0, 0)",
        visible: false,
        fontSize: 0,
        text: "",
        backgroundColor: "rgba(0, 0, 0, 0)",
      },
      loading_screen: {
        backgroundColor: isDark
          ? "rgba(19, 23, 34, 1)"
          : "rgba(255, 255, 255, 1)",
        foregroundColor: isDark ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)",
      },
      overrides: {
        "mainSeriesProperties.candleStyle.upColor": "#26a69a",
        "mainSeriesProperties.candleStyle.downColor": "#ef5350",
        "mainSeriesProperties.candleStyle.wickUpColor": "#26a69a",
        "mainSeriesProperties.candleStyle.wickDownColor": "#ef5350",
        "paneProperties.background": isDark
          ? "rgba(19, 23, 34, 1)"
          : "rgba(255, 255, 255, 1)",
        "paneProperties.vertGridProperties.color": isDark
          ? "rgba(240, 243, 250, 0.07)"
          : "rgba(0, 0, 0, 0.1)",
        "paneProperties.horzGridProperties.color": isDark
          ? "rgba(240, 243, 250, 0.07)"
          : "rgba(0, 0, 0, 0.1)",
        "symbolWatermarkProperties.transparency": 0,
        "scalesProperties.textColor": isDark
          ? "rgba(255, 255, 255, 1)"
          : "rgba(0, 0, 0, 1)",
      },
    });

    setWidgetInstance(widget);
  };

  useEffect(() => {
    // Load TradingView script if not already loaded
    if (!window.TradingView) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;
      script.onload = () => {
        createWidget(currentSymbol, currentTheme);
      };
      document.head.appendChild(script);
    } else {
      createWidget(currentSymbol, currentTheme);
    }

    return () => {
      // Cleanup if needed
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [currentSymbol, currentTheme, siteTheme, systemTheme]);

  const handleSymbolChange = (newSymbol: string) => {
    setCurrentSymbol(newSymbol);
  };

  const getSymbolName = (symbol: string) => {
    const found = popularSymbols.find((s) => s.symbol === symbol);
    return found ? found.name : symbol;
  };

  return (
    <div className="h-full flex flex-col">
      {showSymbolSelector && (
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-medium text-primary">Symbol:</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="w-48 justify-between"
              >
                {getSymbolName(currentSymbol)}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              {popularSymbols.map((item) => (
                <DropdownMenuItem
                  key={item.symbol}
                  onClick={() => handleSymbolChange(item.symbol)}
                  className={currentSymbol === item.symbol ? "bg-accent" : ""}
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {item.symbol}
                    </span>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}

      <div
        ref={containerRef}
        id={container_id}
        className="tradingview-widget-container flex-1 w-full h-full"
        style={{
          width: "100%",
          height: "100%",
          minHeight: "500px",
        }}
      />
    </div>
  );
}
