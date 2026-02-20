'use client'

import { useEffect, useRef, useState } from 'react'

interface FileResult {
  id: number
  name: string
  type: string
  date: string
  badgeColor: string
  bgColor: string
}

export default function DemoUI() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [step, setStep] = useState(0)
  const [currentQuery, setCurrentQuery] = useState(0)

  const searchQueries = [
    'college project',
    'javascript error from yesterday',
  ]

  const resultsMap = {
    0: [ // college project results
      {
        id: 1,
        name: 'VisionMateThesis.pdf',
        type: 'PDF',
        date: 'Feb 14',
        badgeColor: 'bg-red-500',
        bgColor: 'bg-red-900/20',
      },
      {
        id: 2,
        name: 'major_project_report.pdf',
        type: 'PDF',
        date: 'Feb 13',
        badgeColor: 'bg-red-500',
        bgColor: 'bg-red-900/20',
      },
      {
        id: 3,
        name: 'VisionMate.pptx',
        type: 'PPT',
        date: 'Feb 13',
        badgeColor: 'bg-amber-500',
        bgColor: 'bg-amber-900/20',
      },
    ],
    1: [ // javascript error results
      {
        id: 4,
        name: 'A JavaScript error occurred in the main process',
        type: 'Error Log',
        date: 'Feb 10',
        badgeColor: 'bg-red-600',
        bgColor: 'bg-red-900/30',
      },
      {
        id: 5,
        name: 'Screenshot 2026-02-10 234755.png',
        type: 'IMAGE',
        date: 'Feb 10',
        badgeColor: 'bg-blue-600',
        bgColor: 'bg-blue-900/20',
      },
    ],
  }

  const results = resultsMap[currentQuery as keyof typeof resultsMap] || []

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
      setCurrentQuery(0)
      return
    }

    let charIndex = 0
    let phaseIndex = 0

    const interval = setInterval(() => {
      const query0 = searchQueries[0]
      const query1 = searchQueries[1]

      // Phase 0-1: Type first query (one char at a time)
      if (phaseIndex === 0) {
        if (charIndex <= query0.length) {
          setCurrentQuery(0)
          setShowResults(false)
          setSearchText(query0.substring(0, charIndex))
          charIndex++
        } else {
          phaseIndex = 1
          charIndex = 0
        }
      }
      // Phase 1: Show first results (hold for 2.5s = 25 intervals)
      else if (phaseIndex === 1) {
        setCurrentQuery(0)
        setSearchText(query0)
        setShowResults(true)
        charIndex++
        if (charIndex > 25) {
          phaseIndex = 2
          charIndex = 0
        }
      }
      // Phase 2: Clear search (0.5s = 5 intervals)
      else if (phaseIndex === 2) {
        setShowResults(false)
        setSearchText('')
        charIndex++
        if (charIndex > 5) {
          phaseIndex = 3
          charIndex = 0
        }
      }
      // Phase 3: Type second query (one char at a time)
      else if (phaseIndex === 3) {
        if (charIndex <= query1.length) {
          setCurrentQuery(1)
          setShowResults(false)
          setSearchText(query1.substring(0, charIndex))
          charIndex++
        } else {
          phaseIndex = 4
          charIndex = 0
        }
      }
      // Phase 4: Show second results (hold for 2.5s = 25 intervals)
      else if (phaseIndex === 4) {
        setCurrentQuery(1)
        setSearchText(query1)
        setShowResults(true)
        charIndex++
        if (charIndex > 25) {
          phaseIndex = 0
          charIndex = 0
        }
      }
    }, 80)

    return () => clearInterval(interval)
  }, [isInView])

  return (
    <section className="w-full py-20 md:py-28 bg-secondary/30 border-b border-border">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-8">
          {/* Section Header */}
          <div className="text-center space-y-3">
            <p className="text-lg md:text-xl font-semibold text-primary glow-text">
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
                    <div className="space-y-4 animate-fadeIn">
                      <p className="text-sm font-semibold text-muted-foreground">Search Results ({results.length})</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-72 overflow-y-auto">
                        {results.map((result) => (
                          <div
                            key={result.id}
                            className={`${result.bgColor} border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all cursor-pointer group`}
                          >
                            {/* File Thumbnail Area */}
                            <div className="aspect-video bg-background/50 flex items-center justify-center relative border-b border-border">
                              <div className={`${result.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                                {result.type}
                              </div>
                            </div>
                            
                            {/* File Info */}
                            <div className="p-4">
                              <p className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                                {result.name}
                              </p>
                              <p className="text-xs text-muted-foreground mt-2">
                                {result.type === 'IMAGE' ? 'IMAGE' : 'FILE'} • {result.date}
                              </p>
                            </div>
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
