'use client'

import { useState } from 'react'

export default function VaultShowcase() {
  const [activeTab, setActiveTab] = useState('library')

  const vaultItems = [
    { id: 1, type: 'screenshot', title: 'Error Stack Trace', tags: ['debug', 'code'] },
    { id: 2, type: 'screenshot', title: 'UI Mockup Design', tags: ['design', 'figma'] },
    { id: 3, type: 'document', title: 'API Documentation', tags: ['reference', 'pdf'] },
    { id: 4, type: 'screenshot', title: 'Database Schema', tags: ['database', 'sql'] },
    { id: 5, type: 'screenshot', title: 'Performance Metrics', tags: ['analytics', 'charts'] },
    { id: 6, type: 'video', title: 'Tutorial Recording', tags: ['education', 'video'] },
  ]

  const stats = [
    { label: 'Total Items', value: '2,847' },
    { label: 'Storage Used', value: '3.2 GB' },
    { label: 'Search Time', value: '<50ms' },
    { label: 'Privacy Score', value: '100%' },
  ]

  return (
    <section className="w-full py-20 md:py-28 bg-background border-b border-border">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section heading */}
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Your Personal Vault
            </h2>
            <p className="text-lg text-muted-foreground">
              Beautifully organized. Instantly searchable. Always private.
            </p>
          </div>

          {/* Vault Interface - Real App Screenshot */}
          <div className="border border-border rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-14%20141929-bQxOA5L9znCvMBemhAO7KUmXHFlb6a.png"
              alt="AltDump vault interface showing organized items in grid layout"
              className="w-full h-auto"
            />
          </div>

          {/* Features list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <svg className="w-10 h-10 mx-auto text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-semibold text-foreground">Instant Access</h3>
              <p className="text-sm text-muted-foreground">Find anything in milliseconds, no cloud delays</p>
            </div>
            <div className="text-center space-y-2">
              <svg className="w-10 h-10 mx-auto text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="font-semibold text-foreground">100% Private</h3>
              <p className="text-sm text-muted-foreground">All data stays on your device, encrypted at rest</p>
            </div>
            <div className="text-center space-y-2">
              <svg className="w-10 h-10 mx-auto text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
              <h3 className="font-semibold text-foreground">Smart AI</h3>
              <p className="text-sm text-muted-foreground">Semantic search understands what you mean</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
