'use client'

import { useState } from 'react'

export default function DemoUI() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFile, setSelectedFile] = useState<string | null>(null)

  const demoFiles = [
    { id: 1, name: 'project-notes.txt', type: 'Document', date: 'Feb 20', icon: '📄' },
    { id: 2, name: 'screenshot-ui.png', type: 'Image', date: 'Feb 19', icon: '🖼️' },
    { id: 3, name: 'code-snippet.js', type: 'Code', date: 'Feb 18', icon: '💻' },
    { id: 4, name: 'meeting-notes.md', type: 'Document', date: 'Feb 17', icon: '📝' },
    { id: 5, name: 'idea-brainstorm.txt', type: 'Notes', date: 'Feb 16', icon: '💡' },
    { id: 6, name: 'demo-video.mp4', type: 'Video', date: 'Feb 15', icon: '🎥' },
  ]

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

          {/* Demo Window */}
          <div className="bg-background rounded-2xl border border-border shadow-2xl overflow-hidden">
            {/* Top Bar */}
            <div className="bg-secondary border-b border-border px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <h3 className="text-foreground font-semibold">AltDump - Your Second Brain</h3>
              <div className="w-12" />
            </div>

            {/* Main Content */}
            <div className="flex h-96 md:h-[500px]">
              {/* Left Sidebar */}
              <div className="w-1/3 border-r border-border bg-secondary/50 p-4 overflow-y-auto">
                <h4 className="text-foreground font-semibold text-sm mb-4">Recent Files</h4>
                <div className="space-y-2">
                  {demoFiles.map((file) => (
                    <button
                      key={file.id}
                      onClick={() => setSelectedFile(file.id.toString())}
                      className={`w-full text-left p-3 rounded-lg transition-all ${
                        selectedFile === file.id.toString()
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-secondary text-foreground'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{file.icon}</span>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium truncate">{file.name}</p>
                          <p className="text-xs opacity-70">{file.date}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Content Area */}
              <div className="flex-1 p-6 flex flex-col">
                {/* Search Bar */}
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search what you remember... e.g., 'blue dashboard design'"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                    <svg
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>

                {/* Results Preview */}
                {selectedFile ? (
                  <div className="space-y-4">
                    <h4 className="text-foreground font-semibold text-sm">Search Results</h4>
                    <div className="bg-secondary/50 rounded-lg p-4 space-y-3 max-h-64 overflow-y-auto">
                      <div className="p-3 bg-background rounded border border-border hover:border-primary/50 transition-all cursor-pointer">
                        <p className="text-sm text-muted-foreground mb-2">From: project-notes.txt</p>
                        <p className="text-foreground text-sm">
                          "The dashboard design uses a <span className="bg-primary/20 text-primary font-semibold">blue color scheme</span> with modern typography..."
                        </p>
                      </div>
                      <div className="p-3 bg-background rounded border border-border hover:border-primary/50 transition-all cursor-pointer">
                        <p className="text-sm text-muted-foreground mb-2">From: screenshot-ui.png</p>
                        <p className="text-foreground text-sm">
                          Image contains matching content - <span className="bg-primary/20 text-primary font-semibold">visual similarity: 94%</span>
                        </p>
                      </div>
                      <div className="p-3 bg-background rounded border border-border hover:border-primary/50 transition-all cursor-pointer">
                        <p className="text-sm text-muted-foreground mb-2">From: meeting-notes.md</p>
                        <p className="text-foreground text-sm">
                          "Discussed the new <span className="bg-primary/20 text-primary font-semibold">dashboard design</span> implementation..."
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center flex-1 text-center">
                    <div className="space-y-4">
                      <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mx-auto">
                        <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <p className="text-muted-foreground">
                        Select a file or type to search
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Features Highlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
