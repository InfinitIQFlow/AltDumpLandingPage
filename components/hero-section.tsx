'use client'

import { useState } from 'react'
import { useCheckout } from '@/hooks/use-checkout'

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { createCheckout, isLoading } = useCheckout()

  const handleBuyClick = () => {
    createCheckout()
  }

  const openDemo = () => {
    setIsModalOpen(true)
  }

  const closeDemo = () => {
    setIsModalOpen(false)
  }

  return (
    <section className="w-full py-24 md:py-40 bg-background border-b border-border overflow-hidden">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight text-balance">
                Remember a sentence…
                <br />
                but not where you saved it?
              </h1>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Stop opening 12 files just to find one line. Search what you remember — instantly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button 
                onClick={handleBuyClick} 
                disabled={isLoading}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg disabled:opacity-50"
              >
                {isLoading ? 'Loading...' : 'Try Early Access'}
              </button>
              <button 
                onClick={openDemo}
                className="px-8 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                See It In Action
              </button>
            </div>
          </div>

          {/* Right: Video Demo */}
          <div className="relative">
            <div 
              className="relative bg-secondary rounded-xl overflow-hidden border border-border aspect-video flex items-center justify-center shadow-2xl cursor-pointer group"
              onClick={openDemo}
            >
              <video 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-0mDceozWtUKUAT6qsMSGLVZyq9CRXm.mp4"
                className="w-full h-full object-cover"
                poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-14%20141929-y3uH8BTEoRqW7rUNJnyfpaOKNz9NTE.png"
              />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <button
                  className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-all transform group-hover:scale-110"
                  aria-label="Play demo video"
                >
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={closeDemo}
        >
          <div 
            className="relative w-full max-w-4xl bg-background rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeDemo}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center transition-colors"
              aria-label="Close video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video player */}
            <video 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-0mDceozWtUKUAT6qsMSGLVZyq9CRXm.mp4"
              controls
              autoPlay
              className="w-full h-auto max-h-96 md:max-h-screen object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
