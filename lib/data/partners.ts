export interface Partner {
  id: string;
  name: string;
  logo: string;
  alt: string;
  href?: string;
}

export const partners: Partner[] = [
  {
    id: "investing",
    name: "Investing.com",
    logo: "/images/partners/investing-logo.svg",
    alt: "Investing.com Logo",
    href: "https://www.investing.com",
  },
  {
    id: "ctrader",
    name: "cTrader",
    logo: "/images/partners/ctrader-logo.svg",
    alt: "cTrader Logo",
    href: "https://ctrader.com",
  },
  {
    id: "tradingview",
    name: "TradingView",
    logo: "/images/partners/tradingview-logo.svg",
    alt: "TradingView Logo",
    href: "https://www.tradingview.com",
  },
  {
    id: "forexfactory",
    name: "ForexFactory",
    logo: "/images/partners/forexfactory-logo.svg",
    alt: "ForexFactory Logo",
    href: "https://www.forexfactory.com",
  },
  {
    id: "oanda",
    name: "OANDA",
    logo: "/images/partners/oanda-logo.svg",
    alt: "OANDA Logo",
    href: "https://www.oanda.com",
  },
  {
    id: "bloomberg",
    name: "Bloomberg",
    logo: "/images/partners/bloomberg-logo.svg",
    alt: "Bloomberg Logo",
    href: "https://www.bloomberg.com",
  },
];
