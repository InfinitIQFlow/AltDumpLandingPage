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
      number: 1,
      title: 'Press shortcut. Dump anything.',
      description:
        'Text, code, notes, PDFs, docs, videos, screenshots, links.',
    },
    {
      number: 2,
      title: 'It extracts everything locally.',
      description:
        'Full text from PDFs, Word, Excel, CSV. OCR for images. Video metadata and transcripts. Everything runs in the Electron main process. No cloud.',
    },
    {
      number: 3,
      title: 'Search naturally.',
      description:
        '"that screenshot from yesterday with the error" | "notes about electron shortcuts" | "the certificate from this competition"',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">How It Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-secondary/50 border border-secondary rounded-lg p-8">
        <h3 className="text-lg font-semibold mb-6">Search in Action</h3>
        
        <div className="bg-background rounded-lg p-6 border border-secondary/50">
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              placeholder="Try: 'screenshot from yesterday with the error'"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-1 bg-secondary/50 border border-secondary rounded px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
            <button
              onClick={handleSearch}
              className="px-6 py-2 bg-accent text-accent-foreground rounded font-medium hover:bg-accent/90 transition-colors"
            >
              Search
            </button>
          </div>

          <div className="min-h-16 bg-secondary/30 rounded px-4 py-3 border border-secondary/50 text-sm text-muted-foreground flex items-center justify-center">
            {isSearching ? (
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-accent/60 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-accent/60 rounded-full animate-pulse delay-100" />
                  <div className="w-2 h-2 bg-accent/60 rounded-full animate-pulse delay-200" />
                </div>
                <span>Searching… {searchInput || 'your vault'}</span>
              </div>
            ) : (
              <span>Showing images from yesterday related to errors</span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
