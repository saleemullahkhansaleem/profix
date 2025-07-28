export interface Partner {
  id: string;
  name: string;
  logo: string;
  alt: string;
  href?: string;
}

export const partners: Partner[] = [
  {
    id: "metatrader",
    name: "MetaTrader",
    logo: "/images/partners/metatrader-logo.svg",
    alt: "MetaTrader Logo",
    href: "https://www.metatrader4.com",
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
    id: "fxcm",
    name: "FXCM",
    logo: "/images/partners/fxcm-logo.svg",
    alt: "FXCM Logo",
    href: "https://www.fxcm.com",
  },
  {
    id: "oanda",
    name: "OANDA",
    logo: "/images/partners/oanda-logo.svg",
    alt: "OANDA Logo",
    href: "https://www.oanda.com",
  },
  {
    id: "ig",
    name: "IG",
    logo: "/images/partners/ig-logo.svg",
    alt: "IG Logo",
    href: "https://www.ig.com",
  },
];
