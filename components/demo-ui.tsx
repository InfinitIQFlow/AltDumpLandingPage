'use client'

import { useEffect, useRef, useState } from 'react'

interface SearchResult {
  id: number
  source: string
  text: string
  highlight: string
}

export default function DemoUI() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [step, setStep] = useState(0)

  const searchQueries = [
    'dashboard design',
    'blue color scheme',
    'ui mockup',
  ]

  const results: SearchResult[] = [
    {
      id: 1,
      source: 'project-notes.txt',
      text: 'The new dashboard design uses a ',
      highlight: 'blue color scheme',
    },
    {
      id: 2,
      source: 'screenshot-ui.png',
      text: 'Image match: ',
      highlight: '94% similarity',
    },
    {
      id: 3,
      source: 'meeting-notes.md',
      text: 'Discussed the ',
      highlight: 'dashboard design',
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
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

  useEffect(() => {
    if (!isInView) {
      setStep(0)
      setSearchText('')
      setShowResults(false)
      return
    }

    const interval = setInterval(() => {
      setStep((prev) => {
        const next = (prev + 1) % 12
        
        if (next >= 0 && next < 3) {
          setShowResults(false)
          setSearchText(searchQueries[next].substring(0, (next + 1) * 6))
        } else if (next >= 3 && next < 6) {
          const queryIndex = next - 3
          setSearchText(searchQueries[queryIndex])
          setShowResults(true)
        } else if (next >= 6 && next < 9) {
          setShowResults(false)
          setSearchText('')
        } else {
          setShowResults(false)
          setSearchText('')
        }

        return next
      })
    }, 1200)

    return () => clearInterval(interval)
  }, [isInView])

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

          {/* Demo App - Windows Style */}
          <div ref={containerRef} className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="bg-background rounded-xl border border-border shadow-2xl overflow-hidden">
                {/* Windows Title Bar */}
                <div className="bg-secondary border-b border-border px-4 py-3 flex items-center justify-between">
                  <div className="text-sm font-medium text-foreground">AltDump - Your Second Brain</div>
                  <div className="flex items-center gap-2">
                    <button className="hover:bg-secondary/80 p-1 rounded transition-colors">
                      <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <button className="hover:bg-secondary/80 p-1 rounded transition-colors">
                      <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4" />
                      </svg>
                    </button>
                    <button className="hover:bg-red-500/20 text-foreground hover:text-red-500 p-1 rounded transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* App Content */}
                <div className="bg-background p-6 min-h-96 flex flex-col gap-6">
                  {/* Search Bar */}
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      value={searchText}
                      readOnly
                      placeholder="Search what you remember..."
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-secondary/30 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  {/* Results */}
                  {showResults && (
                    <div className="space-y-3 animate-fadeIn">
                      <p className="text-sm font-semibold text-muted-foreground">Search Results</p>
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        {results.map((result) => (
                          <div
                            key={result.id}
                            className="p-4 bg-secondary/50 border border-border rounded-lg hover:border-primary/50 transition-all"
                          >
                            <p className="text-xs text-muted-foreground mb-2">From: {result.source}</p>
                            <p className="text-sm text-foreground">
                              {result.text}
                              <span className="bg-primary/30 text-primary font-semibold rounded px-1">
                                {result.highlight}
                              </span>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Empty State */}
                  {!showResults && !searchText && (
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mx-auto">
                          <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                        <p className="text-muted-foreground">
                          Type to search across all your files
                        </p>
                      </div>
                    </div>
                  )}
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
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}
