'use client'

import { useState } from 'react'

export default function HowItWorks() {
  const [isSearching, setIsSearching] = useState(false)
  const [searchInput, setSearchInput] = useState('')

  const handleSearch = () => {
    setIsSearching(true)
    setTimeout(() => setIsSearching(false), 2000)
  }

  const steps = [
    {
      title: 'Capture',
      icon: '📥',
      description: 'Screenshot → Save to vault',
      detail: 'Instant capture with OCR & metadata extraction'
    },
    {
      title: 'Process',
      icon: '⚙️',
      description: 'AI pipeline locally',
      detail: 'Semantic indexing runs entirely offline'
    },
    {
      title: 'Search',
      icon: '🔍',
      description: 'Natural language results',
      detail: 'Find with conversational queries'
    },
  ]

  return (
    <section className="w-full py-20 md:py-28 bg-secondary/20 border-y border-border">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-16">
          {/* Section heading */}
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Three simple steps to an intelligent vault.
            </p>
          </div>

          {/* Three-step visual cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                <div className="relative bg-background border border-border rounded-xl p-8 flex flex-col items-center text-center space-y-4 hover:border-accent/50 transition-colors">
                  <div className="text-5xl">{step.icon}</div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                    <p className="text-xs text-muted-foreground/70 pt-2">{step.detail}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-muted-foreground">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Semantic Search Demo */}
          <div className="mt-16 pt-16 border-t border-border">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Semantic Search in Action
                </h3>
                <p className="text-muted-foreground">
                  Find anything by typing like you talk.
                </p>
              </div>

              {/* Search demo */}
              <div className="bg-background border border-border rounded-xl p-8 space-y-4">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="that screenshot from yesterday with the error"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="flex-1 bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  />
                  <button
                    onClick={handleSearch}
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
                  >
                    Search
                  </button>
                </div>

                {/* Results animation */}
                <div className="min-h-24 bg-secondary rounded-lg p-4 border border-border flex items-center justify-center">
                  {isSearching ? (
                    <div className="flex flex-col items-center gap-3 text-center">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.1s'}} />
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
                      </div>
                      <span className="text-sm text-muted-foreground">Searching your vault…</span>
                    </div>
                  ) : (
                    <div className="text-center text-sm text-muted-foreground">
                      {searchInput ? 'Results will appear here' : 'Try a natural language query'}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
