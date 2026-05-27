"use client";

import { businessData, aiContent, siteConfig } from "@/data/site-data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/layout/WhatsAppWidget";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  const sections = siteConfig.sections;

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      <HeroSection />

      {sections.includes("about") && <AboutSection />}
      {sections.includes("services") && <ServicesSection />}
      {sections.includes("gallery") && <GallerySection />}
      {sections.includes("pricing") && (aiContent as any).pricing && <PricingSection />}
      {sections.includes("testimonials") && <TestimonialsSection />}
      {sections.includes("faq") && (aiContent as any).faq && <FAQSection />}
      {sections.includes("booking") && (aiContent as any).booking && <BookingSection />}
      {sections.includes("contact") && <ContactSection />}

      <CTASection />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
