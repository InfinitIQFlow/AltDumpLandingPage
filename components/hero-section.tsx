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
              Search anything instantly across all your files, images, videos, and notes. Powered by AI. Completely offline. 100% private.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 justify-center md:justify-start md:col-start-1">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">Works Offline</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">100% Private</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-end md:col-end-4">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">AI-Powered</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-3 pt-4 fade-in-up" style={{ animationDelay: '0.15s' }}>
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
