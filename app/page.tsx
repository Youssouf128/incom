import { metadata } from './page.metadata';

'use client';

import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section';
import { PortfolioPreviewSection } from '@/components/sections/portfolio-preview-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { PartnersSection } from '@/components/sections/partners-section';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <PortfolioPreviewSection />
      <TestimonialsSection />
      <PartnersSection />
    </div>
  );
}