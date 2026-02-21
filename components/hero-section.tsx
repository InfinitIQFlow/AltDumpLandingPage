'use client'

import { useCheckout } from '@/hooks/use-checkout'

export default function HeroSection() {
  const { createCheckout, isLoading } = useCheckout()

  const handleBuyClick = () => {
    createCheckout()
  }

  const scrollToBeforeAfter = () => {
    const element = document.getElementById('watch-how-it-works')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-background via-secondary/10 to-background border-b border-border/50 overflow-hidden relative">
      {/* Background gradient accent */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* Eyebrow text */}
          <div className="fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-semibold text-accent mb-6">
              Your Private Vault, Instantly Searchable
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-5 max-w-3xl fade-in-up" style={{ animationDelay: '0.05s' }}>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance">
              Never lose a file, screenshot, or idea again.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Save files, screenshots, videos, code, and ideas into your private second brain — and search them instantly with semantic search, not filenames.
            </p>
          </div>

          {/* Highlighted Tagline */}
          <div className="relative fade-in-up" style={{ animationDelay: '0.08s' }}>
            <p className="text-xl md:text-2xl font-bold text-primary glow-text px-6 py-2 rounded-lg">
              Offline, private, and instant.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-3 pt-2 fade-in-up" style={{ animationDelay: '0.12s' }}>
            <button 
              onClick={handleBuyClick} 
              disabled={isLoading}
              className="relative px-10 py-4 bg-gradient-to-r from-accent to-cyan-400 text-background rounded-xl font-bold text-lg transition-all disabled:opacity-50 group overflow-hidden"
            >
              {/* Animated glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-cyan-300 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-cyan-400 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
              
              <span className="relative flex items-center justify-center gap-2">
                Get AltDump Now
              </span>
            </button>
            <p className="text-xs text-muted-foreground">
              One-time payment • Lifetime access • $12
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
