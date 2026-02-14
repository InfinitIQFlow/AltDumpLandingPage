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

          {/* Vault Interface Mockup */}
          <div className="bg-secondary border border-border rounded-xl overflow-hidden">
            {/* Header */}
            <div className="bg-background border-b border-border px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </div>
                <span className="font-semibold text-foreground">AltDump Vault</span>
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="hidden md:block bg-secondary border border-border rounded-lg px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
            </div>

            {/* Tabs */}
            <div className="border-b border-border flex">
              {['library', 'search', 'stats'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                    activeTab === tab
                      ? 'text-foreground border-b-accent'
                      : 'text-muted-foreground border-b-transparent hover:text-foreground'
                  }`}
                >
                  {tab === 'library' && 'Library'}
                  {tab === 'search' && 'Semantic Search'}
                  {tab === 'stats' && 'Statistics'}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6">
              {activeTab === 'library' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {vaultItems.map((item) => (
                    <div key={item.id} className="bg-background border border-border rounded-lg p-4 hover:border-accent/50 transition-colors group">
                      <div className="aspect-video bg-secondary rounded mb-3 flex items-center justify-center text-muted-foreground group-hover:bg-secondary/80 transition-colors">
                        {item.type === 'screenshot' && (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        )}
                        {item.type === 'document' && (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        )}
                        {item.type === 'video' && (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h2m12 0h2M3 12h18M3 16h2m12 0h2M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                          </svg>
                        )}
                      </div>
                      <h3 className="text-sm font-medium text-foreground mb-2 truncate">{item.title}</h3>
                      <div className="flex flex-wrap gap-1">
                        {item.tags.map((tag, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-secondary rounded text-muted-foreground border border-border">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'search' && (
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="try: errors from last week"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                  <div className="space-y-3">
                    <p className="text-xs text-muted-foreground font-semibold">Quick search suggestions:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {['Recent', 'Screenshots', 'Documents', 'Tagged'].map((suggestion, i) => (
                        <button key={i} className="text-xs px-3 py-2 bg-background border border-border rounded hover:border-accent/50 text-foreground transition-colors">
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'stats' && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center p-4 bg-background rounded-lg border border-border">
                      <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
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
