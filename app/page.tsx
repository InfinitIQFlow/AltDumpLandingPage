'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import ValueProposition from '@/components/value-proposition'
import HowItWorks from '@/components/how-it-works'
import FeaturesSection from '@/components/features-section'
import IntelligentMemory from '@/components/intelligent-memory'
import PricingSection from '@/components/pricing-section'
import RoadmapSection from '@/components/roadmap-section'
import PerformanceSection from '@/components/performance-section'
import FAQSection from '@/components/faq-section'
import FinalCTA from '@/components/final-cta'
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
        <IntelligentMemory />
        <PricingSection />
        <RoadmapSection />
        <PerformanceSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
