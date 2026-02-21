'use client'

import { useState, useEffect } from 'react'

const CaptureOverlay = ({ showText = false, showCursor = false }) => (
  <div className="relative w-96 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 to-slate-950" />
    
    {/* Main content area */}
    <div className="relative p-8 space-y-6">
      {/* Text input area */}
      <div className="space-y-3">
        <div className="min-h-24 bg-slate-800/40 border border-slate-700/50 rounded-lg p-4 backdrop-blur-sm">
          {showText ? (
            <div className="text-slate-300 text-sm font-mono leading-relaxed">
              Project deadline tomorrow{' '}
              <span className={`transition-opacity ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
            </div>
          ) : (
            <p className="text-slate-500 text-sm">Type or paste anything to dump...</p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-3">
        <div className="flex gap-3">
          <button className="flex-1 px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-300 text-sm font-medium hover:bg-slate-700 transition-all duration-300">
            Paste
          </button>
          <button className={`flex-1 px-4 py-2 border rounded-lg text-sm font-medium transition-all duration-300 ${
            showText
              ? 'bg-emerald-500/30 border-emerald-400/60 text-emerald-300'
              : 'bg-slate-700/50 border-slate-600 text-slate-400'
          }`}>
            Save {showText && '⌘↵'}
          </button>
        </div>
        <button className="w-full px-4 py-2 bg-slate-800/30 border border-slate-700/30 rounded-lg text-slate-400 text-sm font-medium hover:bg-slate-800/50 transition-all duration-300">
          Cancel
        </button>
      </div>
    </div>
  </div>
)

const DropZone = ({ showDragging = false, showSaving = false }) => (
  <div className="relative w-96 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 to-slate-950" />
    
    {/* Drop zone content */}
    <div className="relative p-12 flex flex-col items-center justify-center gap-4 min-h-64">
      {/* Dashed border */}
      <div className={`absolute inset-6 rounded-xl border-2 border-dashed transition-all duration-300 ${
        showDragging ? 'border-emerald-400/60 bg-emerald-500/5' : 'border-slate-600/40'
      }`} />

      {/* Icon */}
      <div className={`relative z-10 transition-all duration-300 ${showDragging ? 'scale-110' : 'scale-100'}`}>
        <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
          showDragging ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-700/30 text-slate-400'
        }`}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      </div>

      {/* Text */}
      <div className="relative z-10 text-center space-y-1">
        <p className={`font-semibold text-sm transition-colors ${
          showDragging ? 'text-emerald-300' : 'text-slate-200'
        }`}>
          {showDragging ? 'Release to save PDF' : 'Drop items here'}
        </p>
        <p className="text-xs text-slate-400">PDFs, images, documents—anything goes</p>
      </div>
    </div>

    {/* Saving overlay */}
    {showSaving && (
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-20">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full border-3 border-emerald-400/30 border-t-emerald-400 animate-spin" />
          <p className="text-sm text-emerald-300 font-medium">Saving to vault...</p>
        </div>
      </div>
    )}
  </div>
)

const SearchFlow = ({ showSearch = false, searchValue = '' }) => (
  <div className="relative w-96 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
    {/* Background with gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 to-slate-950" />

    <div className="relative p-6 space-y-6">
      {/* Search input */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/40 border border-slate-700/50 rounded-lg backdrop-blur-sm">
          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={searchValue}
            readOnly
            placeholder="Type what you remember..."
            className="flex-1 bg-transparent text-slate-300 text-sm outline-none placeholder-slate-500"
          />
        </div>
      </div>

      {/* Results */}
      {showSearch && searchValue && (
        <div className="space-y-3 animate-fade-in">
          <div className="flex items-start gap-3 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
            <div className="w-8 h-8 bg-slate-700/50 rounded flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-sm text-slate-200 font-medium truncate">Project deadline tomorrow</p>
              <p className="text-xs text-slate-400 mt-1">From text capture • 2 hours ago</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
            <div className="w-8 h-8 bg-slate-700/50 rounded flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-sm text-slate-200 font-medium truncate">meeting notes - Q4 planning</p>
              <p className="text-xs text-slate-400 mt-1">From PDF • 15 minutes ago</p>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
)

const CaptureWorkflowDemo = () => {
  const [stage, setStage] = useState<'alt-d' | 'typing' | 'save' | 'alt-d-drop' | 'drop-pdf' | 'save-drop' | 'ctrl-d' | 'search' | 'ctrl-d-idle'>('alt-d')
  const [showTextCursor, setShowTextCursor] = useState(false)

  useEffect(() => {
    const timeline: Array<{ stage: typeof stage; delay: number }> = [
      { stage: 'alt-d', delay: 1000 },
      { stage: 'typing', delay: 1500 },
      { stage: 'save', delay: 1500 },
      { stage: 'alt-d-drop', delay: 1500 },
      { stage: 'drop-pdf', delay: 1500 },
      { stage: 'save-drop', delay: 1500 },
      { stage: 'ctrl-d', delay: 1500 },
      { stage: 'search', delay: 2000 },
      { stage: 'ctrl-d-idle', delay: 1000 },
    ]

    let totalDuration = 0
    timeline.forEach(item => {
      totalDuration += item.delay
    })

    let currentIndex = 0
    const interval = setInterval(() => {
      setStage(timeline[currentIndex % timeline.length].stage)
      currentIndex++
    }, totalDuration / timeline.length)

    return () => clearInterval(interval)
  }, [])

  // Cursor blinking
  useEffect(() => {
    if (stage === 'typing') {
      const blink = setInterval(() => setShowTextCursor(prev => !prev), 500)
      return () => clearInterval(blink)
    }
  }, [stage])

  return (
    <div className="w-full space-y-16">
      {/* Capture flows */}
      <div className="flex flex-col items-center gap-8">
        {/* Alt+D Text Capture */}
        {(stage === 'alt-d' || stage === 'typing' || stage === 'save') && (
          <div className="w-full flex flex-col items-center gap-6 animate-fade-in">
            <div className="px-4 py-1.5 bg-emerald-500/20 border border-emerald-400/60 rounded-full">
              <p className="text-xs font-semibold text-emerald-300">Press Alt + D</p>
            </div>
            <CaptureOverlay showText={stage === 'typing' || stage === 'save'} showCursor={showTextCursor} />
            {stage === 'save' && (
              <div className="flex items-center gap-2 text-emerald-400 text-sm">
                <div className="w-4 h-4 rounded-full bg-emerald-500" />
                <span className="font-medium">Saved to vault</span>
              </div>
            )}
          </div>
        )}

        {/* Alt+D Drop PDF */}
        {(stage === 'alt-d-drop' || stage === 'drop-pdf' || stage === 'save-drop') && (
          <div className="w-full flex flex-col items-center gap-6 animate-fade-in">
            <div className="px-4 py-1.5 bg-emerald-500/20 border border-emerald-400/60 rounded-full">
              <p className="text-xs font-semibold text-emerald-300">Press Alt + D</p>
            </div>
            <DropZone
              showDragging={stage === 'drop-pdf'}
              showSaving={stage === 'save-drop'}
            />
            {stage === 'save-drop' && (
              <div className="flex items-center gap-2 text-emerald-400 text-sm animate-fade-in">
                <div className="w-4 h-4 rounded-full bg-emerald-500" />
                <span className="font-medium">PDF saved</span>
              </div>
            )}
          </div>
        )}

        {/* Ctrl+Shift+D Search */}
        {(stage === 'ctrl-d' || stage === 'search' || stage === 'ctrl-d-idle') && (
          <div className="w-full flex flex-col items-center gap-6 animate-fade-in">
            <div className="px-4 py-1.5 bg-blue-500/20 border border-blue-400/60 rounded-full">
              <p className="text-xs font-semibold text-blue-300">Press Ctrl + Shift + D</p>
            </div>
            <SearchFlow
              showSearch={stage === 'search'}
              searchValue={stage === 'search' || stage === 'ctrl-d-idle' ? 'project deadline' : ''}
            />
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}

export default function HowToDumpSection() {
  return (
    <section id="how-to-dump" className="w-full py-20 md:py-28 bg-background border-b border-border">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-20">
          {/* Section heading */}
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Capture it anywhere.
            </h2>
            <p className="text-xl text-muted-foreground">Find it anytime with instant search.</p>
          </div>

          {/* Capture Workflow Animation */}
          <div className="w-full flex justify-center">
            <CaptureWorkflowDemo />
          </div>

          {/* Two-column Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left: Capture Feature */}
            <div className="flex flex-col gap-6">
              <div className="space-y-3">
                <div className="inline-flex px-3 py-1.5 bg-emerald-500/20 border border-emerald-400/60 rounded-lg">
                  <p className="text-xs font-semibold text-emerald-300 uppercase tracking-wide">Capture</p>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Press Alt + D</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Instantly open the AltDump capture overlay from anywhere on your computer. Type, paste, or drag anything—text, PDFs, images, files. Everything gets saved instantly.
                </p>
              </div>
            </div>

            {/* Right: Search Feature */}
            <div className="flex flex-col gap-6">
              <div className="space-y-3">
                <div className="inline-flex px-3 py-1.5 bg-blue-500/20 border border-blue-400/60 rounded-lg">
                  <p className="text-xs font-semibold text-blue-300 uppercase tracking-wide">Search</p>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Press Ctrl + Shift + D</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Type what you remember. Instantly search across all your captured content—text, PDFs, images, code. No organizing needed. Just search.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
