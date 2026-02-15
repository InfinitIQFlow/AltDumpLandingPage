'use client'

import { useState } from 'react'

export default function StoryDemoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openDemo = () => {
    setIsModalOpen(true)
  }

  const closeDemo = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <section className="w-full py-20 md:py-28 bg-background border-b border-border">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="space-y-12">
            {/* Section heading */}
            <div className="text-center space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                Watch How It Works
              </h2>
              <p className="text-lg text-muted-foreground">
                From frustration to instant results in seconds
              </p>
            </div>

            {/* Featured Demo Block */}
            <div className="flex flex-col gap-8 items-center">
              <div 
                className="relative w-full max-w-3xl bg-secondary rounded-xl overflow-hidden border border-border aspect-video flex items-center justify-center shadow-2xl cursor-pointer group"
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

              {/* Video description */}
              <div className="text-center space-y-2 max-w-2xl">
                <h3 className="text-2xl font-semibold text-foreground">
                  From Chaos to Instant
                </h3>
                <p className="text-lg text-muted-foreground">
                  Watch what happens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </>
  )
}
