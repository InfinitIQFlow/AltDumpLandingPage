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

  return (
    <section className="w-full py-20 md:py-28 bg-background border-y border-border">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-16">
          {/* Section heading */}
          <div className="text-center space-y-3 fade-up">
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
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative bg-secondary/40 border border-accent/20 rounded-2xl p-8 flex flex-col items-center text-center space-y-4 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 smooth-glow">
                  <div className="text-accent">{step.icon}</div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                    <p className="text-xs text-muted-foreground/70 pt-2">{step.detail}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-accent/40 group-hover:text-accent transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  )
}
