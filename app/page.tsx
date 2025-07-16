import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  PartnershipsSection,
  ServicesSection,
  StrategiesSection,
  TeamSection,
  WhyChooseUsSection,
} from "@/components/landing";

export default function ProfixLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header nav />
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <StrategiesSection />
      <PartnershipsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
