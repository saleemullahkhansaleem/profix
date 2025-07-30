export const WHATSAPP_NUMBER = "+971545827355";

export interface WhatsAppMessage {
  service?: string;
  page?: string;
  button?: string;
  customMessage?: string;
}

export function generateWhatsAppLink(message: WhatsAppMessage): string {
  const baseUrl = "https://wa.me";
  const number = WHATSAPP_NUMBER.replace(/\s/g, "");

  let text = "Hello! I'm interested in PROFIX MARKETING services.";

  if (message.service) {
    text += `\n\nService: ${message.service}`;
  }

  if (message.page) {
    text += `\n\nPage: ${message.page}`;
  }

  if (message.button) {
    text += `\n\nClicked: ${message.button}`;
  }

  if (message.customMessage) {
    text += `\n\n${message.customMessage}`;
  }

  text += "\n\nI would like to discuss this further.";

  const encodedText = encodeURIComponent(text);
  return `${baseUrl}/${number}?text=${encodedText}`;
}

// Predefined messages for different contexts
export const whatsappMessages = {
  contact: {
    service: "General Inquiry",
    page: "Contact Section",
    button: "Schedule Consultation",
    customMessage:
      "I would like to schedule a consultation to discuss trading opportunities.",
  },
  dedicatedManagers: {
    service: "Dedicated Managers",
    page: "Dedicated Managers Service",
    button: "Get Your Manager",
    customMessage:
      "I'm interested in getting a dedicated account manager to help with my trading journey.",
  },
  customerCentric: {
    service: "Customer-Centric Service",
    page: "Customer-Centric Service",
    button: "Talk to Us",
    customMessage:
      "I would like to learn more about your customer-centric approach and how it can benefit my trading.",
  },
  marketInsights: {
    service: "Market Insights",
    page: "Market Insights Service",
    button: "Contact Our Team",
    customMessage:
      "I'm interested in accessing professional market insights and analysis to improve my trading decisions.",
  },
  tradingPlatforms: {
    service: "Trading Platforms",
    page: "Trading Platforms",
    button: "Contact Support",
    customMessage:
      "I need assistance with trading platform setup or have questions about available platforms.",
  },
  header: {
    service: "General Inquiry",
    page: "Header Navigation",
    button: "Contact",
    customMessage:
      "I would like to discuss trading opportunities and learn more about PROFIX MARKETING services.",
  },
  footer: {
    service: "General Inquiry",
    page: "Footer",
    button: "Contact Information",
    customMessage:
      "I found your contact information in the footer and would like to discuss trading services.",
  },
};
