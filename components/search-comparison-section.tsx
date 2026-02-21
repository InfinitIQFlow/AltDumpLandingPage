'use client'

import { useEffect, useState } from 'react'

const AnimatedImageCard = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const fullQuery = "that warranty card from my laptop box"

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      let index = 0
      const typeInterval = setInterval(() => {
        if (index <= fullQuery.length) {
          setDisplayedText(fullQuery.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => {
            setDisplayedText('')
            setIsAnimating(false)
          }, 2000)
        }
      }, 50)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 h-96 flex flex-col shadow-2xl">
      {/* Search input */}
      <div className="p-4 border-b border-slate-700 bg-slate-800">
        <input
          type="text"
          value={displayedText}
          readOnly
          placeholder="Search inside images..."
          className="w-full bg-slate-700 text-white placeholder-slate-400 px-3 py-2 rounded text-sm focus:outline-none"
        />
      </div>

      {/* Image preview with highlighted text */}
      <div className="flex-1 p-4 flex items-center justify-center">
        {displayedText.length > 0 && (
          <div className={`animate-fade-in transition-all duration-500 text-center`}>
            <div className="w-24 h-32 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg mx-auto mb-3 flex items-center justify-center text-white text-xs p-2 text-center">
              <span>Warranty Card Photo</span>
            </div>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="px-3 py-2 bg-blue-500/20 border border-blue-500/40 rounded text-blue-300 font-medium">
                2 Year Limited Warranty
              </div>
              <div className="px-3 py-2 bg-blue-500/20 border border-blue-500/40 rounded text-blue-300 text-xs">
                Serial Number: 8XK2...
              </div>
              <p className="text-slate-400 text-xs pt-2 font-light">
                2 Year Limited Warranty • Valid from purchase date
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const AnimatedVideoCard = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const fullQuery = "the clip where everyone was laughing at the birthday cake"

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      let index = 0
      const typeInterval = setInterval(() => {
        if (index <= fullQuery.length) {
          setDisplayedText(fullQuery.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => {
            setDisplayedText('')
            setIsAnimating(false)
          }, 2000)
        }
      }, 40)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 h-96 flex flex-col shadow-2xl">
      <div className="p-4 border-b border-slate-700 bg-slate-800">
        <input
          type="text"
          value={displayedText}
          readOnly
          placeholder="Search inside videos..."
          className="w-full bg-slate-700 text-white placeholder-slate-400 px-3 py-2 rounded text-sm focus:outline-none"
        />
      </div>

      <div className="flex-1 p-4">
        {displayedText.length > 0 && (
          <div className="animate-fade-in grid grid-cols-3 gap-2 h-full">
            {[
              { gradient: 'from-purple-600 to-pink-600', label: 'People' },
              { gradient: 'from-orange-600 to-red-600', label: 'Candles' },
              { gradient: 'from-purple-600 to-indigo-600', label: 'Cake' }
            ].map((frame, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${frame.gradient} rounded-lg flex items-center justify-center text-white text-xs font-medium cursor-pointer transition-all duration-300 ${
                  displayedText.length > fullQuery.length / 2 ? 'ring-2 ring-yellow-400 scale-105' : ''
                }`}
              >
                <span className="text-center text-xs">{frame.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const AnimatedPDFCard = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const fullQuery = "clause about delivery timeline"

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      let index = 0
      const typeInterval = setInterval(() => {
        if (index <= fullQuery.length) {
          setDisplayedText(fullQuery.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => {
            setDisplayedText('')
            setIsAnimating(false)
          }, 2000)
        }
      }, 50)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 h-96 flex flex-col shadow-2xl">
      <div className="p-4 border-b border-slate-700 bg-slate-800">
        <input
          type="text"
          value={displayedText}
          readOnly
          placeholder="Search PDFs and docs..."
          className="w-full bg-slate-700 text-white placeholder-slate-400 px-3 py-2 rounded text-sm focus:outline-none"
        />
      </div>

      <div className="flex-1 p-4 flex items-center justify-center">
        {displayedText.length > 0 && (
          <div className="animate-fade-in space-y-3 w-full">
            <div className="bg-slate-800 rounded-lg p-3 border border-slate-700 space-y-2">
              <div className="text-xs text-slate-400">Page 12 of 34</div>
              <div className="px-3 py-2 bg-gradient-to-r from-cyan-500/30 via-cyan-500/20 to-transparent rounded border-l-2 border-cyan-500 text-cyan-300 text-sm font-medium">
                Delivery shall occur within 30 days...
              </div>
              <div className="text-xs text-slate-500">...timeline for product delivery is binding...</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const AnimatedDataCard = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const fullQuery = "sales > 5000"

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      let index = 0
      const typeInterval = setInterval(() => {
        if (index <= fullQuery.length) {
          setDisplayedText(fullQuery.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => {
            setDisplayedText('')
            setIsAnimating(false)
          }, 2000)
        }
      }, 60)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 h-96 flex flex-col shadow-2xl">
      <div className="p-4 border-b border-slate-700 bg-slate-800">
        <input
          type="text"
          value={displayedText}
          readOnly
          placeholder="Search spreadsheets..."
          className="w-full bg-slate-700 text-white placeholder-slate-400 px-3 py-2 rounded text-sm focus:outline-none"
        />
      </div>

      <div className="flex-1 p-3 flex items-center justify-center">
        {displayedText.length > 0 && (
          <div className="animate-fade-in w-full space-y-2">
            {['5200', '6500', '7100', '5800'].map((value, i) => (
              <div key={i} className="flex justify-between items-center px-3 py-2 bg-slate-800 rounded border border-slate-700">
                <span className="text-xs text-slate-400">Row {i + 5}</span>
                <div className="px-2 py-1 bg-green-500/30 border border-green-500/50 rounded text-green-300 font-bold text-xs">
                  ${value}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const AnimatedNoteCard = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const fullQuery = "project idea with AI filters"

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      let index = 0
      const typeInterval = setInterval(() => {
        if (index <= fullQuery.length) {
          setDisplayedText(fullQuery.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => {
            setDisplayedText('')
            setIsAnimating(false)
          }, 2000)
        }
      }, 50)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 h-96 flex flex-col shadow-2xl">
      <div className="p-4 border-b border-slate-700 bg-slate-800">
        <input
          type="text"
          value={displayedText}
          readOnly
          placeholder="Search notes..."
          className="w-full bg-slate-700 text-white placeholder-slate-400 px-3 py-2 rounded text-sm focus:outline-none"
        />
      </div>

      <div className="flex-1 p-4 flex items-center justify-center">
        {displayedText.length > 0 && (
          <div className="animate-fade-in space-y-3 w-full">
            <div className="px-3 py-2 bg-amber-500/20 border border-amber-500/40 rounded text-amber-300 text-sm font-medium">
              Project idea with AI filters for real-time...
            </div>
            <div className="text-xs text-slate-400">2 more results in related notes</div>
          </div>
        )}
      </div>
    </div>
  )
}

const AnimatedCodeCard = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const fullQuery = "auth token rotate"

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      let index = 0
      const typeInterval = setInterval(() => {
        if (index <= fullQuery.length) {
          setDisplayedText(fullQuery.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => {
            setDisplayedText('')
            setIsAnimating(false)
          }, 2000)
        }
      }, 50)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 h-96 flex flex-col shadow-2xl">
      <div className="p-4 border-b border-slate-700 bg-slate-800">
        <input
          type="text"
          value={displayedText}
          readOnly
          placeholder="Search code..."
          className="w-full bg-slate-700 text-white placeholder-slate-400 px-3 py-2 rounded text-sm focus:outline-none"
        />
      </div>

      <div className="flex-1 p-4 space-y-2 overflow-y-auto">
        {displayedText.length > 0 && (
          <div className="animate-fade-in space-y-2">
            <div className="flex gap-2 items-start">
              <span className="text-slate-500 text-xs min-w-fit">Line 247</span>
              <div className="px-2 py-1 bg-red-500/20 border-l-2 border-red-500 text-red-300 text-xs font-mono">
                rotateAuthToken()
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-slate-500 text-xs min-w-fit">Line 412</span>
              <div className="px-2 py-1 bg-red-500/20 border-l-2 border-red-500 text-red-300 text-xs font-mono">
                token.rotate()
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchComparisonSection() {
  return (
    <section className="w-full py-20 md:py-28 bg-background border-b border-border">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="space-y-16">
          {/* Main heading */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Windows Search looks at filenames.
              <br />
              <span className="text-accent">AltDump looks inside your files.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Even if you forgot the filename, if it's buried in a PDF, if it's inside an image, if it's hidden in a document — results appear instantly.
            </p>
          </div>

          {/* 6 Animated Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Images */}
            <div className="space-y-3">
              <AnimatedImageCard />
              <div className="space-y-1">
                <h3 className="font-bold text-foreground text-sm">Images</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Find text inside real-world photos — receipts, warranty cards, whiteboards, packaging, anything you've snapped.
                </p>
              </div>
            </div>

            {/* Video */}
            <div className="space-y-3">
              <AnimatedVideoCard />
              <div className="space-y-1">
                <h3 className="font-bold text-foreground text-sm">Video</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Search your videos by describing what's happening — scenes, objects, moments.
                </p>
              </div>
            </div>

            {/* PDFs & Docs */}
            <div className="space-y-3">
              <AnimatedPDFCard />
              <div className="space-y-1">
                <h3 className="font-bold text-foreground text-sm">PDFs & Docs</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Get pinpoint matches inside PDFs and docs — every paragraph is searchable.
                </p>
              </div>
            </div>

            {/* Data Files */}
            <div className="space-y-3">
              <AnimatedDataCard />
              <div className="space-y-1">
                <h3 className="font-bold text-foreground text-sm">Data Files</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Instant insight inside spreadsheets and structured data — numbers matter.
                </p>
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-3">
              <AnimatedNoteCard />
              <div className="space-y-1">
                <h3 className="font-bold text-foreground text-sm">Notes</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Find ideas, notes, and drafts instantly — even if you only remember a phrase.
                </p>
              </div>
            </div>

            {/* Code */}
            <div className="space-y-3">
              <AnimatedCodeCard />
              <div className="space-y-1">
                <h3 className="font-bold text-foreground text-sm">Code</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Search across your whole codebase — functions, variables, logic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}
