'use client'

import { useEffect, useRef, useState } from 'react'

export default function DemoUI() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play()
        } else if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause()
          videoRef.current.currentTime = 0
        }
      },
      { threshold: 0.5 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <section className="w-full py-20 md:py-28 bg-secondary/30 border-b border-border">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-8">
          {/* Section Header */}
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              See It In Action
            </h2>
            <p className="text-lg text-muted-foreground">
              Search naturally. Find instantly. No file names needed.
            </p>
          </div>

          {/* Demo Video - Clean Window Style */}
          <div ref={containerRef} className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="bg-background rounded-xl border border-border shadow-2xl overflow-hidden">
                {/* Windows Title Bar */}
                <div className="bg-secondary border-b border-border px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-sm font-medium text-foreground">AltDump</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="hover:bg-secondary/80 p-1 rounded transition-colors">
                      <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <button className="hover:bg-secondary/80 p-1 rounded transition-colors">
                      <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    <button className="hover:bg-red-500/20 text-foreground hover:text-red-500 p-1 rounded transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Video Content */}
                <div className="relative w-full bg-black">
                  <video
                    ref={videoRef}
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2026-02-21%2001-58-42-rmx8ARd3VY0apjLHCD2nIrhfXp1ia0.mp4"
                    className="w-full h-auto aspect-video object-cover"
                    loop
                    muted
                    playsInline
                    aria-label="AltDump demo walkthrough"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Features Highlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000-2H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V5a1 1 0 10 0-2 2 2 0 01-2 2H4zm3 4a1 1 0 100 2h6a1 1 0 100-2H7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground">Semantic Search</h3>
              <p className="text-sm text-muted-foreground">Find files by meaning, not keywords</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground">All File Types</h3>
              <p className="text-sm text-muted-foreground">PDFs, images, code, videos, and more</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground">100% Private</h3>
              <p className="text-sm text-muted-foreground">Everything stays offline on your device</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
