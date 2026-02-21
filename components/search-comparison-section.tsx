'use client'

import { useEffect, useState } from 'react'

const AnimatedImageCard = () => {
  const [animationCycle, setAnimationCycle] = useState(0)
  const [scanProgress, setScanProgress] = useState(0)
  const [showQuery, setShowQuery] = useState(false)
  const [displayedQuery, setDisplayedQuery] = useState('')
  const [highlightedText, setHighlightedText] = useState<string[]>([])
  const [isHovered, setIsHovered] = useState(false)

  const fullQuery = "2 year warranty"
  const textElements = [
    { text: "2 Year Limited Warranty", type: "title", x: 15, y: 20 },
    { text: "Covers manufacturing defects", type: "body", x: 15, y: 45 },
    { text: "Valid from purchase date", type: "body", x: 15, y: 65 },
    { text: "Serial: 8XK2E4591D", type: "serial", x: 15, y: 85 }
  ]

  // Main animation loop
  useEffect(() => {
    const mainCycle = setInterval(() => {
      setAnimationCycle(c => c + 1)
      setScanProgress(0)
      setShowQuery(false)
      setDisplayedQuery('')
      setHighlightedText([])
    }, 8000)

    return () => clearInterval(mainCycle)
  }, [])

  // Scanning line animation
  useEffect(() => {
    const scanInterval = setInterval(() => {
      setScanProgress(p => {
        if (p >= 100) {
          clearInterval(scanInterval)
          return 100
        }
        return p + 2
      })
    }, 30)

    return () => clearInterval(scanInterval)
  }, [animationCycle])

  // Query typing animation
  useEffect(() => {
    if (scanProgress >= 100) {
      const typeInterval = setTimeout(() => {
        setShowQuery(true)
      }, 300)

      return () => clearTimeout(typeInterval)
    }
  }, [scanProgress])

  // Type query
  useEffect(() => {
    if (showQuery) {
      let index = 0
      const typeInterval = setInterval(() => {
        if (index <= fullQuery.length) {
          setDisplayedQuery(fullQuery.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
          // Highlight matching text
          setTimeout(() => {
            setHighlightedText(['2 Year Limited Warranty'])
          }, 300)
        }
      }, 50)

      return () => clearInterval(typeInterval)
    }
  }, [showQuery])

  return (
    <div
      className="group relative bg-gradient-to-br from-slate-800 via-slate-800/95 to-slate-900 rounded-2xl overflow-hidden border border-indigo-500/20 h-96 flex flex-col shadow-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:scale-102"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Soft glow background */}
      <div className={`absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-indigo-500/5 pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-50'}`} />

      {/* Top section: Headline and description */}
      <div className="relative p-6 border-b border-indigo-500/10 bg-slate-800/30 backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-white mb-1">Search Inside Images.</h3>
        <p className="text-xs text-slate-400">AltDump scans, understands, and indexes the actual text inside your photos.</p>
      </div>

      {/* Main visual area */}
      <div className="relative flex-1 p-6 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50">
        {/* Mock image with text and scanning line */}
        <div className="relative w-full max-w-xs h-56 bg-gradient-to-br from-indigo-950/40 to-slate-900/60 rounded-xl border border-indigo-500/20 overflow-hidden shadow-inner">
          {/* Image content */}
          <div className="absolute inset-0 p-4 text-left">
            {textElements.map((el, idx) => {
              const isHighlighted = highlightedText.includes(el.text)
              return (
                <div
                  key={idx}
                  className={`absolute text-xs transition-all duration-300 ${
                    isHighlighted
                      ? 'text-indigo-300 font-semibold'
                      : displayedQuery && el.text.toLowerCase().includes(displayedQuery.toLowerCase())
                      ? 'text-indigo-400 font-medium'
                      : 'text-slate-400'
                  }`}
                  style={{ top: `${el.y}%`, left: `${el.x}%` }}
                >
                  <div className={`${isHighlighted ? 'bg-indigo-500/40 px-2 py-1 rounded' : ''}`}>
                    {el.text}
                  </div>
                </div>
              )
            })}

            {/* OCR bounding boxes appear during scan */}
            {scanProgress > 20 && scanProgress < 100 && textElements.map((el, idx) => (
              <div
                key={`box-${idx}`}
                className="absolute border border-indigo-500/40 rounded pointer-events-none transition-all duration-200"
                style={{
                  top: `${el.y - 5}%`,
                  left: `${el.x - 2}%`,
                  width: '70px',
                  height: '16px',
                  opacity: Math.max(0, 1 - Math.abs(scanProgress - (el.y + 10)) / 30)
                }}
              />
            ))}

            {/* Scanning line animation */}
            {scanProgress < 100 && (
              <div
                className="absolute inset-x-0 h-1 bg-gradient-to-b from-transparent via-indigo-400/60 to-transparent blur-sm transition-all duration-75"
                style={{
                  top: `${scanProgress}%`,
                  boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)'
                }}
              />
            )}
          </div>

          {/* Search input overlay - appears after scan */}
          {showQuery && (
            <div className="absolute top-3 right-3 left-3 animate-fade-in">
              <input
                type="text"
                value={displayedQuery}
                readOnly
                placeholder="Search..."
                className="w-full bg-slate-900/80 backdrop-blur-sm text-white placeholder-slate-500 px-2 py-1 rounded text-xs border border-indigo-500/40 focus:outline-none focus:border-indigo-500/60"
              />
            </div>
          )}
        </div>
      </div>

      {/* Bottom section: Micro copy and status */}
      {highlightedText.length > 0 && (
        <div className="relative px-6 py-4 border-t border-indigo-500/10 bg-slate-800/30 backdrop-blur-sm animate-fade-in">
          <p className="text-xs text-indigo-300">
            Found: <span className="font-semibold">{highlightedText[0]}</span>
          </p>
        </div>
      )}

      <style jsx>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
          50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.5); }
        }
        .group:hover {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

const AnimatedVideoCard = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [showResults, setShowResults] = useState(false)
  const fullQuery = "birthday party laughing"

  useEffect(() => {
    const interval = setInterval(() => {
      setShowResults(false)
      let index = 0
      const typeInterval = setInterval(() => {
        if (index <= fullQuery.length) {
          setDisplayedText(fullQuery.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
          setShowResults(true)
          setTimeout(() => {
            setDisplayedText('')
            setShowResults(false)
          }, 3000)
        }
      }, 50)
    }, 5200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700/50 h-96 flex flex-col shadow-2xl">
      <div className="p-6 border-b border-slate-700/50 bg-slate-800/50 backdrop-blur">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full transition-colors ${showResults ? 'bg-green-500' : 'bg-amber-500 animate-pulse'}`} />
            <span className="text-xs font-medium text-slate-400">
              {showResults ? 'Frames Found' : 'Scanning video frames...'}
            </span>
          </div>
        </div>
        <input
          type="text"
          value={displayedText}
          readOnly
          placeholder="Search inside videos..."
          className="w-full bg-slate-700/50 text-white placeholder-slate-500 px-4 py-3 rounded-lg text-sm focus:outline-none border border-slate-600"
        />
      </div>

      <div className="flex-1 p-6 flex items-center justify-center">
        {showResults && (
          <div className="animate-fade-in space-y-4 w-full">
            <div className="text-xs text-slate-400 font-medium">Matching Frames (2 found):</div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { emoji: '🎉', text: 'Laughing faces & party setup' },
                { emoji: '🎂', text: 'Birthday cake & celebration' }
              ].map((frame, i) => (
                <div
                  key={i}
                  className="bg-orange-900/20 border-2 border-orange-500/50 rounded-lg p-4 text-center space-y-2 hover:border-orange-400 transition-all"
                >
                  <div className="text-4xl">{frame.emoji}</div>
                  <p className="text-xs text-orange-200 font-medium">{frame.text}</p>
                  <p className="text-xs text-slate-400">00:45</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const AnimatedPDFCard = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [showResults, setShowResults] = useState(false)
  const fullQuery = "delivery timeline"

  useEffect(() => {
    const interval = setInterval(() => {
      setShowResults(false)
      let index = 0
      const typeInterval = setInterval(() => {
        if (index <= fullQuery.length) {
          setDisplayedText(fullQuery.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
          setShowResults(true)
          setTimeout(() => {
            setDisplayedText('')
            setShowResults(false)
          }, 3000)
        }
      }, 50)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700/50 h-96 flex flex-col shadow-2xl">
      <div className="p-6 border-b border-slate-700/50 bg-slate-800/50 backdrop-blur">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full transition-colors ${showResults ? 'bg-green-500' : 'bg-amber-500 animate-pulse'}`} />
            <span className="text-xs font-medium text-slate-400">
              {showResults ? 'Matches Found' : 'Scanning PDF...'}
            </span>
          </div>
        </div>
        <input
          type="text"
          value={displayedText}
          readOnly
          placeholder="Search PDFs and documents..."
          className="w-full bg-slate-700/50 text-white placeholder-slate-500 px-4 py-3 rounded-lg text-sm focus:outline-none border border-slate-600"
        />
      </div>

      <div className="flex-1 p-6 space-y-3 overflow-y-auto">
        {showResults && (
          <div className="animate-fade-in space-y-3">
            <div className="bg-slate-700/40 border border-slate-600/50 rounded-lg p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400 font-medium">Page 8 of 45</span>
                <span className="text-xs bg-cyan-500/30 text-cyan-300 px-2 py-1 rounded">Match</span>
              </div>
              <p className="text-white text-sm leading-relaxed">
                All products will adhere to the <span className="font-bold bg-cyan-500/30 px-1 py-1 rounded text-cyan-300">delivery timeline</span> outlined in the contract terms.
              </p>
            </div>

            <div className="bg-slate-700/40 border border-slate-600/50 rounded-lg p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400 font-medium">Page 15 of 45</span>
                <span className="text-xs bg-cyan-500/30 text-cyan-300 px-2 py-1 rounded">Match</span>
              </div>
              <p className="text-white text-sm leading-relaxed">
                The <span className="font-bold bg-cyan-500/30 px-1 py-1 rounded text-cyan-300">delivery timeline</span> cannot exceed 30 business days from order confirmation.
              </p>
            </div>

            <div className="text-xs text-slate-400">2 matches found across document</div>
          </div>
        )}
      </div>
    </div>
  )
}

const AnimatedDataCard = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [showResults, setShowResults] = useState(false)
  const fullQuery = "Q sales data"

  useEffect(() => {
    const interval = setInterval(() => {
      setShowResults(false)
      let index = 0
      const typeInterval = setInterval(() => {
        if (index <= fullQuery.length) {
          setDisplayedText(fullQuery.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
          setShowResults(true)
          setTimeout(() => {
            setDisplayedText('')
            setShowResults(false)
          }, 3000)
        }
      }, 50)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700/50 h-96 flex flex-col shadow-2xl">
      <div className="p-6 border-b border-slate-700/50 bg-slate-800/50 backdrop-blur">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full transition-colors ${showResults ? 'bg-green-500' : 'bg-amber-500 animate-pulse'}`} />
            <span className="text-xs font-medium text-slate-400">
              {showResults ? 'Rows Highlighted' : 'Scanning spreadsheet...'}
            </span>
          </div>
        </div>
        <input
          type="text"
          value={displayedText}
          readOnly
          placeholder="Search spreadsheet data..."
          className="w-full bg-slate-700/50 text-white placeholder-slate-500 px-4 py-3 rounded-lg text-sm focus:outline-none border border-slate-600"
        />
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        {showResults && (
          <div className="animate-fade-in space-y-2">
            <div className="text-xs text-slate-400 font-medium mb-3">Highlighted Results (4 matched):</div>
            {[
              { row: 3, q: 'Q1', data: 'sales data', value: '12,500' },
              { row: 7, q: 'Q2', data: 'sales data', value: '15,200' },
              { row: 11, q: 'Q3', data: 'sales data', value: '18,900' },
              { row: 15, q: 'Q4', data: 'sales data', value: '22,100' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3 bg-green-500/20 border border-green-500/40 rounded-lg hover:bg-green-500/30 transition-all">
                <span className="text-slate-400 text-xs min-w-fit">Row {item.row}</span>
                <span className="text-slate-300 text-sm flex-1">
                  <span className="font-bold text-green-400">{item.q}</span>
                  {' '}{item.data}
                </span>
                <span className="text-green-400 font-bold">${item.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const AnimatedNoteCard = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [showResults, setShowResults] = useState(false)
  const fullQuery = "machine learning model"

  useEffect(() => {
    const interval = setInterval(() => {
      setShowResults(false)
      let index = 0
      const typeInterval = setInterval(() => {
        if (index <= fullQuery.length) {
          setDisplayedText(fullQuery.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
          setShowResults(true)
          setTimeout(() => {
            setDisplayedText('')
            setShowResults(false)
          }, 3000)
        }
      }, 50)
    }, 5200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700/50 h-96 flex flex-col shadow-2xl">
      <div className="p-6 border-b border-slate-700/50 bg-slate-800/50 backdrop-blur">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full transition-colors ${showResults ? 'bg-green-500' : 'bg-amber-500 animate-pulse'}`} />
            <span className="text-xs font-medium text-slate-400">
              {showResults ? 'Notes Found' : 'Scanning notes...'}
            </span>
          </div>
        </div>
        <input
          type="text"
          value={displayedText}
          readOnly
          placeholder="Search across your notes..."
          className="w-full bg-slate-700/50 text-white placeholder-slate-500 px-4 py-3 rounded-lg text-sm focus:outline-none border border-slate-600"
        />
      </div>

      <div className="flex-1 p-6 space-y-3 overflow-y-auto">
        {showResults && (
          <div className="animate-fade-in space-y-3">
            <div className="bg-purple-900/20 border border-purple-700/40 rounded-lg p-4">
              <div className="text-xs text-purple-300 font-medium mb-2">Research Notes</div>
              <p className="text-white text-sm leading-relaxed">
                Building a <span className="font-bold bg-purple-500/30 px-1 py-1 rounded text-purple-200">machine learning model</span> for image classification using CNN architecture.
              </p>
            </div>

            <div className="bg-blue-900/20 border border-blue-700/40 rounded-lg p-4">
              <div className="text-xs text-blue-300 font-medium mb-2">Project Ideas</div>
              <p className="text-white text-sm leading-relaxed">
                Create an intelligent system with a <span className="font-bold bg-blue-500/30 px-1 py-1 rounded text-blue-200">machine learning model</span> to optimize data processing.
              </p>
            </div>

            <div className="text-xs text-slate-400">2 notes matched</div>
          </div>
        )}
      </div>
    </div>
  )
}

const AnimatedCodeCard = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [showResults, setShowResults] = useState(false)
  const fullQuery = "useEffect hook"

  useEffect(() => {
    const interval = setInterval(() => {
      setShowResults(false)
      let index = 0
      const typeInterval = setInterval(() => {
        if (index <= fullQuery.length) {
          setDisplayedText(fullQuery.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
          setShowResults(true)
          setTimeout(() => {
            setDisplayedText('')
            setShowResults(false)
          }, 3000)
        }
      }, 50)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700/50 h-96 flex flex-col shadow-2xl">
      <div className="p-6 border-b border-slate-700/50 bg-slate-800/50 backdrop-blur">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full transition-colors ${showResults ? 'bg-green-500' : 'bg-amber-500 animate-pulse'}`} />
            <span className="text-xs font-medium text-slate-400">
              {showResults ? 'Matches Found' : 'Scanning codebase...'}
            </span>
          </div>
        </div>
        <input
          type="text"
          value={displayedText}
          readOnly
          placeholder="Search code snippets..."
          className="w-full bg-slate-700/50 text-white placeholder-slate-500 px-4 py-3 rounded-lg text-sm focus:outline-none border border-slate-600"
        />
      </div>

      <div className="flex-1 p-6 space-y-2 overflow-y-auto font-mono text-xs">
        {showResults && (
          <div className="animate-fade-in space-y-3">
            <div className="text-slate-400 text-xs font-medium mb-2">Found 2 matches:</div>

            <div className="bg-slate-700/40 border border-slate-600/50 rounded-lg p-3">
              <div className="text-slate-400 text-xs mb-2">hooks/useAuth.ts:32</div>
              <div className="space-y-1">
                <span className="text-slate-400">const AuthComponent = () =&gt; {'{'}</span>
                <div className="px-2 py-1 bg-red-500/20 border-l-2 border-red-500">
                  <span className="text-red-300 font-bold">useEffect hook</span>
                  <span className="text-slate-400"> (() =&gt; {'{'}</span>
                </div>
                <span className="text-slate-400">  initAuth()</span>
                <span className="text-slate-400">{'}'})</span>
              </div>
            </div>

            <div className="bg-slate-700/40 border border-slate-600/50 rounded-lg p-3">
              <div className="text-slate-400 text-xs mb-2">components/Dashboard.tsx:89</div>
              <div className="space-y-1">
                <span className="text-slate-400">export function Dashboard() {'{'}</span>
                <div className="px-2 py-1 bg-red-500/20 border-l-2 border-red-500">
                  <span className="text-red-300 font-bold">useEffect hook</span>
                  <span className="text-slate-400"> (() =&gt; {'{'}</span>
                </div>
                <span className="text-slate-400">  loadData()</span>
                <span className="text-slate-400">{'}'},</span>
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
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
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

          {/* 6 Animated Feature Cards - 2 per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Images */}
            <div className="space-y-4">
              <AnimatedImageCard />
              <div className="space-y-2">
                <h3 className="font-bold text-foreground">Images</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Find text inside real-world photos — receipts, warranty cards, whiteboards, packaging, anything you've snapped.
                </p>
              </div>
            </div>

            {/* Video */}
            <div className="space-y-4">
              <AnimatedVideoCard />
              <div className="space-y-2">
                <h3 className="font-bold text-foreground">Video</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Search your videos by describing what's happening — scenes, objects, moments.
                </p>
              </div>
            </div>

            {/* PDFs & Docs */}
            <div className="space-y-4">
              <AnimatedPDFCard />
              <div className="space-y-2">
                <h3 className="font-bold text-foreground">PDFs & Docs</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Get pinpoint matches inside PDFs and docs — every paragraph is searchable.
                </p>
              </div>
            </div>

            {/* Data Files */}
            <div className="space-y-4">
              <AnimatedDataCard />
              <div className="space-y-2">
                <h3 className="font-bold text-foreground">Data Files</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Instant insight inside spreadsheets and structured data — numbers matter.
                </p>
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-4">
              <AnimatedNoteCard />
              <div className="space-y-2">
                <h3 className="font-bold text-foreground">Notes</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Find ideas, notes, and drafts instantly — even if you only remember a phrase.
                </p>
              </div>
            </div>

            {/* Code */}
            <div className="space-y-4">
              <AnimatedCodeCard />
              <div className="space-y-2">
                <h3 className="font-bold text-foreground">Code</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
