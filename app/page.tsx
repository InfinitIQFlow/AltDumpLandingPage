'use client'

import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import DemoUI from '@/components/demo-ui'
import MemorySection from '@/components/memory-section'
import HowToDumpSection from '@/components/how-to-dump-section'
import PrivacySection from '@/components/privacy-section'
import SearchComparisonSection from '@/components/search-comparison-section'
import BeforeAfterSection from '@/components/before-after-section'
import StoryDemoSection from '@/components/story-demo-section'
import PricingSection from '@/components/pricing-section'
import FAQSection from '@/components/faq-section'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <DemoUI />
        <MemorySection />
        <HowToDumpSection />
        <PrivacySection />
        <SearchComparisonSection />
        <BeforeAfterSection />
        <StoryDemoSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
