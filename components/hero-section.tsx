'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const demoImages = [
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-14%20004833-2rzrF5rKbd6oWd8wudHP9eeNdrmMKF.png',
      alt: 'Alt Dump vault showing organized items by category with thumbnails',
      title: 'Everything Organized'
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-14%20004849-sU7smkhAYpWB9CVduYjc8jTF1wWJQj.png',
      alt: 'Alt Dump search interface showing results for my major project',
      title: 'Powerful Search'
    }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % demoImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + demoImages.length) % demoImages.length)
  }

  const handleBuyClick = () => {
    window.location.href = 'https://dodopayments.com/checkout?product=altdump-earlyaccess'
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold text-balance mb-6 leading-tight">
          Dump Anything. Find It Instantly.
        </h1>
        
        <p className="text-xl text-muted-foreground text-balance mb-12 leading-relaxed">
          A fully offline AI-powered memory vault for Windows.
          <br />
          No cloud. No subscription. One-time payment.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button onClick={handleBuyClick} className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors">
            Buy Early Access — $15
          </button>
          <button className="px-8 py-3 border border-secondary bg-secondary/50 rounded-lg font-medium hover:bg-secondary transition-colors">
            Learn More
          </button>
        </div>

        <div className="mb-8">
          <div className="relative bg-secondary rounded-lg overflow-hidden border border-secondary/50 aspect-video">
            <img 
              src={demoImages[currentImageIndex].url}
              alt={demoImages[currentImageIndex].alt}
              className="w-full h-full object-cover"
            />
            
            {demoImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center transition-colors"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center transition-colors"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {demoImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-accent' : 'bg-secondary'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-3 text-center">{demoImages[currentImageIndex].title}</p>
        </div>
      </div>
    </section>
  )
}
