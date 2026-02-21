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
    <section className="w-full py-16 md:py-28 bg-background border-b border-border overflow-hidden">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          {/* Content */}
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight text-balance">
              A focused second brain for your important files.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Save files, screenshots, videos, code, and ideas into your private second brain — and search them instantly with semantic search, not filenames.
            </p>
          </div>

          {/* Highlighted Tagline */}
          <div className="relative">
            <p className="text-xl md:text-2xl font-bold text-primary glow-text px-6 py-2 rounded-lg">
              Offline, private, and instant.
            </p>
          </div>

          {/* Download Button */}
          <div className="flex flex-col items-center gap-2 pt-2">
            <button 
              onClick={handleBuyClick} 
              disabled={isLoading}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all disabled:opacity-50 flex items-center gap-3 glow-box"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M9 9h6M12 6v6M9 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Get AltDump
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}
