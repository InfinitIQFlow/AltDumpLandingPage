'use client'

import { useEffect, useState } from 'react'

const AnimatedImageCard = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [showResults, setShowResults] = useState(false)
  const fullQuery = "warranty card"

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
      }, 60)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700/50 h-96 flex flex-col shadow-2xl">
      {/* Header with status */}
      <div className="p-6 border-b border-slate-700/50 bg-slate-800/50 backdrop-blur">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full transition-colors ${showResults ? 'bg-green-500' : 'bg-amber-500'}`} />
            <span className="text-xs font-medium text-slate-400">
              {showResults ? 'Results Found' : 'Scanning image...'}
            </span>
          </div>
        </div>
        <input
          type="text"
          value={displayedText}
          readOnly
          placeholder="Search inside images..."
          className="w-full bg-slate-700/50 text-white placeholder-slate-500 px-4 py-3 rounded-lg text-sm focus:outline-none border border-slate-600"
        />
      </div>

      {/* Content area */}
      <div className="flex-1 p-6 flex items-center justify-center">
        {showResults && (
          <div className="animate-fade-in space-y-4 w-full">
            {/* Image preview */}
            <div className="bg-amber-900/20 rounded-lg p-4 border border-amber-700/40 text-center">
              <div className="text-6xl mb-2">📸</div>
              <span className="text-sm text-amber-200">Photo found: Warranty Card</span>
            </div>

            {/* Extracted text with highlighted search term */}
            <div className="space-y-3">
              <div className="text-xs text-slate-400 font-medium">Extracted Text (OCR):</div>
              <div className="bg-slate-700/40 border border-slate-600/50 rounded-lg p-4 space-y-2">
                <p className="text-white text-sm leading-relaxed">
                  2 Year Limited <span className="font-bold bg-cyan-500/30 px-1 py-1 rounded text-cyan-300">Warranty Card</span>
                </p>
                <p className="text-slate-400 text-xs">
                  Serial: 8XK2E4591D | Valid from purchase date
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
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
