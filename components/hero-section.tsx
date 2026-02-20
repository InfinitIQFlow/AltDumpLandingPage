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
    <section className="w-full py-24 md:py-40 bg-background border-b border-border overflow-hidden">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* Content */}
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight text-balance">
              A focused second brain for your important files.
            </h1>
            <div className="space-y-4">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Save files, screenshots, videos, code, and ideas into your private second brain — and search them instantly with semantic search, not filenames.
              </p>
              <p className="text-lg font-semibold text-primary">
                Offline, private, and instant.
              </p>
            </div>
          </div>

          {/* Download Button */}
          <div className="flex flex-col items-center gap-2 pt-4">
            <button 
              onClick={handleBuyClick} 
              disabled={isLoading}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg disabled:opacity-50 flex items-center gap-3"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              Download on Microsoft Store
            </button>
            <p className="text-sm text-muted-foreground">
              Free trial available
            </p>
          </div>

          {/* See It In Action Link */}
          <button 
            onClick={scrollToBeforeAfter}
            className="text-primary hover:text-primary/80 transition-colors font-semibold mt-4 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
            </svg>
            See It In Action
          </button>
        </div>
      </div>

    </section>
  )
}
