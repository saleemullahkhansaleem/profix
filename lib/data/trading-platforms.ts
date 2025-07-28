export interface TradingPlatform {
  id: string;
  name: string;
  type: "desktop" | "web" | "mobile";
  description: string;
  features: string[];
  badge: string;
  color: {
    primary: string;
    secondary: string;
    gradient: string;
    text: string;
  };
  icon: string;
  downloadUrl?: string;
  webUrl?: string;
}

export interface PlatformCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: {
    primary: string;
    secondary: string;
    gradient: string;
  };
  platforms: TradingPlatform[];
}

export const tradingPlatformsData: PlatformCategory[] = [
  {
    id: "desktop",
    name: "Desktop Platform",
    description: "Professional trading with advanced features",
    icon: "Monitor",
    color: {
      primary: "from-blue-500 to-purple-600",
      secondary: "from-blue-50 to-indigo-50",
      gradient: "from-blue-950/20 to-indigo-950/20",
    },
    platforms: [
      {
        id: "mt4-desktop",
        name: "MetaTrader 4",
        type: "desktop",
        description:
          "Advanced trading platform with access to latest market analysis, charts, and financial news.",
        features: [
          "World's most popular trading platform",
          "Enhanced security features",
          "30 built-in technical indicators",
          "31 graphical objects",
        ],
        badge: "Popular",
        color: {
          primary: "from-blue-500 to-indigo-600",
          secondary:
            "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
          gradient:
            "from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20",
          text: "text-blue-600 dark:text-blue-400",
        },
        icon: "Monitor",
        downloadUrl: "/download/mt4",
      },
      {
        id: "mt5-desktop",
        name: "MetaTrader 5",
        type: "desktop",
        description:
          "The advanced version of MetaTrader 4. Faster and more efficient with trading in almost all financial markets.",
        features: [
          "Twice as many time frames as MT4",
          "Integrated Economic Calendar",
          "38 built-in technical indicators",
          "44 graphical objects",
        ],
        badge: "Advanced",
        color: {
          primary: "from-emerald-500 to-teal-600",
          secondary:
            "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",
          gradient:
            "from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20",
          text: "text-emerald-600 dark:text-emerald-400",
        },
        icon: "Monitor",
        downloadUrl: "/download/mt5",
      },
    ],
  },
  {
    id: "web",
    name: "Web Platform",
    description: "Trade anywhere with browser-based platforms",
    icon: "Globe",
    color: {
      primary: "from-orange-500 to-red-600",
      secondary: "from-orange-50 to-red-50",
      gradient: "from-orange-950/20 to-red-950/20",
    },
    platforms: [
      {
        id: "mt4-web",
        name: "MT4 WebTrader",
        type: "web",
        description:
          "The most popular trading platform used by millions worldwide with everything a trader needs.",
        features: [
          "No installation needed",
          "Mirror successful traders in real-time",
          "2,000+ products with dynamic leverage",
          "Robust security and built-in tools",
        ],
        badge: "Web",
        color: {
          primary: "from-orange-500 to-red-600",
          secondary:
            "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
          gradient:
            "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
          text: "text-red-600 dark:text-red-400",
        },
        icon: "Globe",
        webUrl: "/webtrader/mt4",
      },
      {
        id: "mt5-web",
        name: "MT5 WebTrader",
        type: "web",
        description:
          "Advanced web-based trading platform with comprehensive features and real-time capabilities.",
        features: [
          "Mirror successful traders in real-time",
          "2,000+ products with dynamic leverage",
          "Robust security and built-in tools",
          "Advanced charting capabilities",
        ],
        badge: "Advanced Web",
        color: {
          primary: "from-purple-500 to-pink-500",
          secondary:
            "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
          gradient:
            "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
          text: "text-purple-600 dark:text-purple-400",
        },
        icon: "Globe",
        webUrl: "/webtrader/mt5",
      },
    ],
  },
  {
    id: "mobile",
    name: "Mobile Platform",
    description: "Trade on the go with mobile apps",
    icon: "Smartphone",
    color: {
      primary: "from-green-500 to-emerald-600",
      secondary: "from-green-50 to-emerald-50",
      gradient: "from-green-950/20 to-emerald-950/20",
    },
    platforms: [
      {
        id: "mt4-mobile",
        name: "MetaTrader 4 Mobile",
        type: "mobile",
        description:
          "Manage your account and trade anytime, anywhere with the MetaTrader 4 mobile app.",
        features: [
          "All order types and MT4 execution modes",
          "3 types of charts: Bars, Candlesticks, Line",
          "9 time-frames: M1 to MN",
          "Real-time market data",
        ],
        badge: "Mobile",
        color: {
          primary: "from-green-500 to-emerald-500",
          secondary:
            "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
          gradient:
            "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
          text: "text-green-600 dark:text-green-400",
        },
        icon: "Smartphone",
        downloadUrl: "/download/mt4-mobile",
      },
      {
        id: "mt5-mobile",
        name: "MetaTrader 5 Mobile",
        type: "mobile",
        description:
          "The mobile version of MT5 provides everything needed for trading operations on mobile devices.",
        features: [
          "One Click Trading",
          "Trade from price chart or Market Depth",
          "Set Stop Loss and Take Profit levels",
          "Advanced mobile features",
        ],
        badge: "Advanced Mobile",
        color: {
          primary: "from-sky-500 to-blue-600",
          secondary:
            "bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-300",
          gradient:
            "from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20",
          text: "text-blue-600 dark:text-blue-400",
        },
        icon: "Smartphone",
        downloadUrl: "/download/mt5-mobile",
      },
    ],
  },
];

export const platformComparison = {
  mt4: {
    name: "MetaTrader 4",
    description: "The world's most popular trading platform",
    color: "text-blue-600 dark:text-blue-400",
    features: [
      "30 built-in technical indicators",
      "31 graphical objects",
      "Enhanced security features",
      "Real-time market data",
      "Automated trading (Expert Advisors)",
      "Multiple order types",
    ],
    downloadUrl: "/download/mt4",
  },
  mt5: {
    name: "MetaTrader 5",
    description: "The advanced trading platform",
    color: "text-emerald-600 dark:text-emerald-400",
    features: [
      "38 built-in technical indicators",
      "44 graphical objects",
      "Integrated Economic Calendar",
      "More time frames than MT4",
      "Advanced order types",
      "Built-in strategy tester",
    ],
    downloadUrl: "/download/mt5",
  },
};
