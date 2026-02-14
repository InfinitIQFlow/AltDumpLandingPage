'use client'

import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import ValueProposition from '@/components/value-proposition'
import HowItWorks from '@/components/how-it-works'
import FeaturesSection from '@/components/features-section'
import PricingSection from '@/components/pricing-section'
import RoadmapSection from '@/components/roadmap-section'
import FAQSection from '@/components/faq-section'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <HowItWorks />
        <FeaturesSection />
        <PricingSection />
        <RoadmapSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
