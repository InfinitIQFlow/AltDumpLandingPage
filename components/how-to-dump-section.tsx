'use client'

import { useState, useEffect } from 'react'

const CaptureWorkflowDemo = () => {
  const [stage, setStage] = useState<'alt-d' | 'typing' | 'save' | 'alt-d-drop' | 'drop-pdf' | 'save-drop' | 'loop'>('alt-d')
  const [showTextCursor, setShowTextCursor] = useState(false)

  useEffect(() => {
    const timeline: Array<{ stage: typeof stage; delay: number }> = [
      { stage: 'alt-d', delay: 500 },
      { stage: 'typing', delay: 1500 },
      { stage: 'save', delay: 2000 },
      { stage: 'alt-d-drop', delay: 3500 },
      { stage: 'drop-pdf', delay: 1500 },
      { stage: 'save-drop', delay: 2000 },
      { stage: 'loop', delay: 3500 },
    ]

    let currentIndex = 0
    const interval = setInterval(() => {
      const current = timeline[currentIndex % timeline.length]
      setStage(current.stage)
      currentIndex++
    }, timeline.reduce((acc, item, idx) => idx === 0 ? item.delay : acc + item.delay, 0) / timeline.length)

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
    <div className="w-full h-96 flex flex-col items-center justify-center">
      {/* Alt+D Capture Flow */}
      {(stage === 'alt-d' || stage === 'typing' || stage === 'save') && (
        <div className="w-full flex flex-col items-center gap-6 animate-fade-in">
          <div className="px-4 py-1.5 bg-emerald-500/20 border border-emerald-400/60 rounded-full">
            <p className="text-xs font-semibold text-emerald-300">Press Alt + D</p>
          </div>
          
          <div className="relative w-96 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-21%20133040-bHqixY1dvDhZ98isNaXdXTgShaCDvk.png"
              alt="Capture overlay"
              className="w-full h-auto"
            />

            {/* Overlay text input during typing stage */}
            {stage === 'typing' && (
              <div className="absolute inset-0 flex items-start justify-center pt-12 pointer-events-none">
                <div className="text-slate-300 text-sm font-mono">
                  Project deadline tomorrow
                  <span className={`ml-1 transition-opacity ${showTextCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
                </div>
              </div>
            )}

            {/* Save indicator */}
            {stage === 'save' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full border-3 border-emerald-400/30 border-t-emerald-400 animate-spin" />
                  <p className="text-sm text-emerald-300 font-medium">Saving to vault...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Alt+D + Drop PDF Flow */}
      {(stage === 'alt-d-drop' || stage === 'drop-pdf' || stage === 'save-drop') && (
        <div className="w-full flex flex-col items-center gap-6 animate-fade-in">
          <div className="px-4 py-1.5 bg-emerald-500/20 border border-emerald-400/60 rounded-full">
            <p className="text-xs font-semibold text-emerald-300">Press Alt + D</p>
          </div>

          {stage === 'alt-d-drop' && (
            <div className="relative w-96 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-21%20133040-bHqixY1dvDhZ98isNaXdXTgShaCDvk.png"
                alt="Capture overlay"
                className="w-full h-auto"
              />
            </div>
          )}

          {(stage === 'drop-pdf' || stage === 'save-drop') && (
            <div className="relative w-96 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%28272%29-XhpcPumADfOXx556BA0vPiXK7kcF68.png"
                alt="Drop zone overlay"
                className="w-full h-auto"
              />

              {/* Save indicator on drop */}
              {stage === 'save-drop' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full border-3 border-emerald-400/30 border-t-emerald-400 animate-spin" />
                    <p className="text-sm text-emerald-300 font-medium">Saving to vault...</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Loop back indicator */}
      {stage === 'loop' && (
        <div className="flex flex-col items-center gap-4 animate-fade-in">
          <p className="text-slate-400 text-sm">Capture anything. Repeat. Search everything.</p>
        </div>
      )}

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
        <div className="space-y-16">
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

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Capture */}
            <div className="flex flex-col gap-3">
              <div className="px-3 py-1.5 bg-emerald-500/20 border border-emerald-400/60 rounded-lg inline-flex w-fit">
                <p className="text-xs font-semibold text-emerald-300">CAPTURE</p>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Press Alt + D</h3>
              <p className="text-muted-foreground">Instantly open the AltDump capture overlay from anywhere on your computer. Paste text, drag files, drop PDFs—anything you need to save.</p>
            </div>

            {/* Search */}
            <div className="flex flex-col gap-3">
              <div className="px-3 py-1.5 bg-blue-500/20 border border-blue-400/60 rounded-lg inline-flex w-fit">
                <p className="text-xs font-semibold text-blue-300">SEARCH</p>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Press Ctrl + Shift + D</h3>
              <p className="text-muted-foreground">Type what you remember. Instantly search across all your captured content—text, PDFs, images. Local. Fast. Always available.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
