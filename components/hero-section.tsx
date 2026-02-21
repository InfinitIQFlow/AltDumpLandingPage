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
              className="relative px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold transition-all disabled:opacity-50 flex items-center gap-3 group overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/80 to-primary/40 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              <span className="relative flex items-center gap-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 9h6M12 6v6M9 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Get AltDump
              </span>
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}
