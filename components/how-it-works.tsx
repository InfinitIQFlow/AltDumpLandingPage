'use client'

import { useState } from 'react'

const CaptureIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const ProcessIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5a4 4 0 100-8 4 4 0 000 8z" />
  </svg>
)

const SearchIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

export default function HowItWorks() {
  const [isSearching, setIsSearching] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [selectedDemo, setSelectedDemo] = useState(0)

  const handleSearch = () => {
    setIsSearching(true)
    setTimeout(() => setIsSearching(false), 2000)
  }

  const steps = [
    {
      title: 'Capture',
      icon: <CaptureIcon />,
      description: 'Screenshot → Save to vault',
      detail: 'Instant capture with OCR & metadata extraction'
    },
    {
      title: 'Process',
      icon: <ProcessIcon />,
      description: 'AI pipeline locally',
      detail: 'Semantic indexing runs entirely offline'
    },
    {
      title: 'Search',
      icon: <SearchIcon />,
      description: 'Natural language results',
      detail: 'Find with conversational queries'
    },
  ]

  const demoResults = [
    { type: 'Screenshot', title: 'Error Stack Trace', tags: ['debug', 'code'] },
    { type: 'Screenshot', title: 'UI Design Mockup', tags: ['design', 'figma'] },
    { type: 'Document', title: 'API Documentation', tags: ['reference', 'pdf'] },
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
                  <div className="text-foreground">{step.icon}</div>
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
              <div className="bg-background border border-border rounded-xl p-8 space-y-6">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="try: error from last week"
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

                {/* Results display */}
                <div className="min-h-32 bg-secondary rounded-lg p-4 border border-border">
                  {isSearching ? (
                    <div className="flex flex-col items-center justify-center gap-3 h-full">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.1s'}} />
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
                      </div>
                      <span className="text-sm text-muted-foreground">Searching vault…</span>
                    </div>
                  ) : searchInput ? (
                    <div className="space-y-3">
                      <p className="text-xs text-muted-foreground font-semibold">3 Results Found</p>
                      {demoResults.map((result, i) => (
                        <div key={i} className="flex gap-4 p-3 bg-background rounded-lg border border-border hover:border-accent/50 transition-colors">
                          <div className="w-12 h-12 bg-secondary border border-border rounded flex items-center justify-center flex-shrink-0 text-xs text-muted-foreground">
                            {result.type === 'Screenshot' ? (
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            ) : (
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">{result.title}</p>
                            <div className="flex gap-2 mt-2">
                              {result.tags.map((tag, j) => (
                                <span key={j} className="text-xs px-2 py-1 bg-secondary border border-border rounded text-muted-foreground">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-center text-sm text-muted-foreground">
                      Try a natural language query
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Visual Demo Section */}
          <div className="mt-20 pt-16 border-t border-border">
            <div className="space-y-8">
              <div className="text-center space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Visual Feature Demos
                </h3>
                <p className="text-muted-foreground">
                  See how AltDump processes and indexes your content.
                </p>
              </div>

              {/* Demo Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* OCR Demo */}
                <div className="bg-background border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-colors">
                  <div className="bg-secondary border-b border-border p-4 flex items-center gap-3">
                    <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="text-sm font-semibold text-foreground">OCR Processing</span>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="bg-secondary rounded p-3 text-xs text-muted-foreground">
                      <p className="font-mono">Error: 500 Internal Server</p>
                      <p className="font-mono">Stack at lines 142-156</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Text extracted from screenshots in milliseconds</p>
                  </div>
                </div>

                {/* Metadata Demo */}
                <div className="bg-background border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-colors">
                  <div className="bg-secondary border-b border-border p-4 flex items-center gap-3">
                    <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h2m12 0h2M3 12h18M3 16h2m12 0h2M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                    <span className="text-sm font-semibold text-foreground">Video Metadata</span>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="space-y-2 text-xs">
                      <p><span className="text-muted-foreground">Duration:</span> <span className="text-foreground">12:35</span></p>
                      <p><span className="text-muted-foreground">Resolution:</span> <span className="text-foreground">1920x1080</span></p>
                      <p><span className="text-muted-foreground">Format:</span> <span className="text-foreground">mp4</span></p>
                    </div>
                    <p className="text-xs text-muted-foreground">Indexed locally, searchable instantly</p>
                  </div>
                </div>

                {/* Auto-Linking Demo */}
                <div className="bg-background border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-colors">
                  <div className="bg-secondary border-b border-border p-4 flex items-center gap-3">
                    <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <span className="text-sm font-semibold text-foreground">Auto-Linking</span>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground">Related to 3 items:</p>
                      <div className="flex flex-col gap-2">
                        <div className="text-xs px-2 py-1 bg-secondary rounded border border-border text-foreground truncate">Design mockup v2</div>
                        <div className="text-xs px-2 py-1 bg-secondary rounded border border-border text-foreground truncate">API reference docs</div>
                        <div className="text-xs px-2 py-1 bg-secondary rounded border border-border text-foreground truncate">Error stack trace</div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">Automatically discover connections</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
