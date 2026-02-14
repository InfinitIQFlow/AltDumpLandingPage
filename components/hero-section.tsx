'use client'

import { useState } from 'react'
import { useCheckout } from '@/hooks/use-checkout'

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { createCheckout, isLoading } = useCheckout()

  const demoImages = [
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-14%20004833-2rzrF5rKbd6oWd8wudHP9eeNdrmMKF.png',
      alt: 'Alt Dump vault showing organized items',
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-14%20004849-sU7smkhAYpWB9CVduYjc8jTF1wWJQj.png',
      alt: 'Alt Dump search interface',
    }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % demoImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + demoImages.length) % demoImages.length)
  }

  const handleBuyClick = () => {
    createCheckout()
  }

  return (
    <section className="w-full py-24 md:py-40 bg-background border-b border-border overflow-hidden">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight text-balance">
                Dump Anything.
                <br />
                Find It Instantly.
              </h1>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Your intelligent personal vault for everything you capture.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button 
                onClick={handleBuyClick} 
                disabled={isLoading}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg disabled:opacity-50"
              >
                {isLoading ? 'Loading...' : 'Buy Early Access'}
              </button>
              <button className="px-8 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-all flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right: Visual mockup */}
          <div className="relative">
            <div className="relative bg-secondary rounded-xl overflow-hidden border border-border aspect-video flex items-center justify-center shadow-2xl">
              <img 
                src={demoImages[currentImageIndex].url}
                alt={demoImages[currentImageIndex].alt}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/70 hover:bg-background rounded-full flex items-center justify-center transition-colors z-10"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/70 hover:bg-background rounded-full flex items-center justify-center transition-colors z-10"
                aria-label="Next image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {demoImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-accent' : 'bg-muted'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
