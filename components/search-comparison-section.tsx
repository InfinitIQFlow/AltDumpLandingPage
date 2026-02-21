'use client'

import { useEffect, useState } from 'react'

const ImageIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const AnimatedImageCard = () => {
  const [animationCycle, setAnimationCycle] = useState(0)
  const [stage, setStage] = useState<'initial' | 'typing' | 'scanning' | 'expanded'>('initial')
  const [displayedQuery, setDisplayedQuery] = useState('')
  const [scanProgress, setScanProgress] = useState(0)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const fullQuery = "javascript error"
  const images = [
    { id: 1, name: 'screenshot_357' },
    { id: 2, name: 'screenshot_843' },
    { id: 3, name: 'screenshot_236' }
  ]

  // Main animation cycle
  useEffect(() => {
    const cycle = setInterval(() => {
      setAnimationCycle(c => c + 1)
      setStage('initial')
      setDisplayedQuery('')
      setScanProgress(0)
      setSelectedImage(null)
    }, 14000)

    return () => clearInterval(cycle)
  }, [])

  // Stage 1: Type search query (0-1.2s)
  useEffect(() => {
    if (stage === 'initial' && animationCycle > 0) {
      let index = 0
      const typeInterval = setInterval(() => {
        if (index <= fullQuery.length) {
          setDisplayedQuery(fullQuery.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => setStage('scanning'), 300)
        }
      }, 60)

      return () => clearInterval(typeInterval)
    }
  }, [stage, animationCycle])

  // Stage 2: Scanning animation (1.2-3.5s) - soft scanning line on all 3 images
  useEffect(() => {
    if (stage === 'scanning') {
      setScanProgress(0)
      const scanInterval = setInterval(() => {
        setScanProgress(p => {
          if (p >= 100) {
            clearInterval(scanInterval)
            setTimeout(() => {
              setSelectedImage(0)
              setStage('expanded')
            }, 400)
            return 100
          }
          return p + 2
        })
      }, 30)

      return () => clearInterval(scanInterval)
    }
  }, [stage])

  return (
    <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-700 h-96 flex flex-col shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {/* Premium top section */}
      <div className="relative p-6 border-b border-slate-700 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-white mb-1">Search naturally. Find instantly.</h3>
        <p className="text-xs text-slate-400">No file names needed.</p>
      </div>

      {/* Search input area */}
      <div className="relative px-6 pt-6 pb-4">
        <div className="relative group">
          <input
            type="text"
            value={displayedQuery}
            readOnly
            placeholder="Search inside images..."
            className="w-full bg-slate-800/40 text-white placeholder-slate-500 px-4 py-3 rounded-lg text-sm focus:outline-none border border-slate-600 transition-all duration-300 group-hover:border-slate-500 group-hover:bg-slate-800/60"
          />
        </div>
      </div>

      {/* Main content area */}
      <div className="relative flex-1 px-6 pb-6 flex items-center justify-center overflow-hidden">
        
        {/* Stage 1 & 2: 3 Square Images - No pulsing, static until scan */}
        {(stage === 'initial' || stage === 'typing' || stage === 'scanning') && (
          <div className="w-full flex gap-6 justify-center items-center">
            {images.map((img, idx) => (
              <div key={img.id} className="flex flex-col items-center gap-3">
                {/* Square image container */}
                <div className="relative w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg border border-slate-600 flex items-center justify-center text-slate-400 overflow-hidden shadow-md hover:shadow-lg hover:border-slate-500 transition-all duration-300">
                  <ImageIcon />
                  
                  {/* Soft scanning line animation */}
                  {stage === 'scanning' && (
                    <div 
                      className="absolute inset-x-0 h-1 bg-gradient-to-b from-transparent via-white/60 to-transparent blur-sm"
                      style={{
                        top: `${scanProgress}%`,
                        opacity: 0.8,
                        boxShadow: '0 0 12px rgba(255, 255, 255, 0.4)'
                      }}
                    />
                  )}
                </div>
                <p className="text-xs text-slate-400 font-medium text-center">{img.name}</p>
              </div>
            ))}
          </div>
        )}

        {/* Stage 3: Expanded image - zoomed in to fill area */}
        {stage === 'expanded' && selectedImage !== null && (
          <div className="w-full h-full flex flex-col items-center justify-center gap-4 animate-fade-in">
            <div className="relative w-80 h-80 bg-white rounded-lg border border-slate-600 overflow-hidden shadow-2xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-10%20234755-1X0I4sbNHjndxVD0EHbA2StS4wHhKL.png"
                alt="JavaScript error screenshot"
                className="w-full h-full object-cover"
              />
              
              {/* Highlight the top part showing match found */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-yellow-300/20 to-transparent pointer-events-none animate-pulse" />
              <div className="absolute top-2 left-4 right-4 px-3 py-2 bg-yellow-400/30 border border-yellow-400/60 rounded-md backdrop-blur-sm">
                <p className="text-xs font-semibold text-yellow-700">✓ Match found: javascript error</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 font-medium">{images[selectedImage].name}</p>
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
    <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-700 h-96 flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="p-6 border-b border-slate-700 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full transition-colors ${showResults ? 'bg-emerald-500' : 'bg-amber-500'}`} />
            <span className="text-xs font-medium text-slate-400">
              {showResults ? 'Frames matched' : 'Scanning video...'}
            </span>
          </div>
        </div>
        <div className="relative group">
          <input
            type="text"
            value={displayedText}
            readOnly
            placeholder="Search inside videos..."
            className="w-full bg-slate-800/40 text-white placeholder-slate-500 px-4 py-3 rounded-lg text-sm focus:outline-none border border-slate-600 transition-all duration-300 group-hover:border-slate-500 group-hover:bg-slate-800/60"
          />
        </div>
      </div>

      <div className="flex-1 p-6 flex items-center justify-center">
        {showResults && (
          <div className="animate-fade-in space-y-4 w-full">
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wide">2 Frames Found:</div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { color: 'from-orange-500 to-red-500', text: 'Laughing moments', time: '00:45' },
                { color: 'from-amber-500 to-orange-500', text: 'Birthday celebration', time: '01:12' }
              ].map((frame, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-br ${frame.color} rounded-lg p-5 text-white text-center space-y-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/10`}
                >
                  <p className="font-semibold text-sm">{frame.text}</p>
                  <p className="text-xs opacity-90">{frame.time}</p>
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
    <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-700 h-96 flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="p-6 border-b border-slate-700 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full transition-colors ${showResults ? 'bg-emerald-500' : 'bg-amber-500'}`} />
            <span className="text-xs font-medium text-slate-400">
              {showResults ? 'Matches found' : 'Scanning document...'}
            </span>
          </div>
        </div>
        <div className="relative group">
          <input
            type="text"
            value={displayedText}
            readOnly
            placeholder="Search PDFs and documents..."
            className="w-full bg-slate-800/40 text-white placeholder-slate-500 px-4 py-3 rounded-lg text-sm focus:outline-none border border-slate-600 transition-all duration-300 group-hover:border-slate-500 group-hover:bg-slate-800/60"
          />
        </div>
      </div>

      <div className="flex-1 p-6 space-y-3 overflow-y-auto">
        {showResults && (
          <div className="animate-fade-in space-y-4">
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wide">2 Matches Found:</div>
            <div className="bg-slate-800/40 border border-slate-600 rounded-lg p-4 space-y-3 hover:bg-slate-800/60 hover:border-slate-500 transition-all duration-300">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400 font-medium">Page 8 of 45</span>
                <span className="text-xs bg-teal-500/30 text-teal-300 px-2 py-1 rounded font-medium">Match</span>
              </div>
              <p className="text-white text-sm leading-relaxed">
                All products will adhere to the <span className="font-bold bg-teal-500/20 px-2 py-1 rounded text-teal-300">delivery timeline</span> outlined in the contract terms.
              </p>
            </div>

            <div className="bg-slate-800/40 border border-slate-600 rounded-lg p-4 space-y-3 hover:bg-slate-800/60 hover:border-slate-500 transition-all duration-300">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400 font-medium">Page 15 of 45</span>
                <span className="text-xs bg-teal-500/30 text-teal-300 px-2 py-1 rounded font-medium">Match</span>
              </div>
              <p className="text-white text-sm leading-relaxed">
                The <span className="font-bold bg-teal-500/20 px-2 py-1 rounded text-teal-300">delivery timeline</span> cannot exceed 30 business days from order confirmation.
              </p>
            </div>
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
    <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-700 h-96 flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="p-6 border-b border-slate-700 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full transition-colors ${showResults ? 'bg-emerald-500' : 'bg-amber-500'}`} />
            <span className="text-xs font-medium text-slate-400">
              {showResults ? 'Rows highlighted' : 'Scanning spreadsheet...'}
            </span>
          </div>
        </div>
        <div className="relative group">
          <input
            type="text"
            value={displayedText}
            readOnly
            placeholder="Search spreadsheet data..."
            className="w-full bg-slate-800/40 text-white placeholder-slate-500 px-4 py-3 rounded-lg text-sm focus:outline-none border border-slate-600 transition-all duration-300 group-hover:border-slate-500 group-hover:bg-slate-800/60"
          />
        </div>
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        {showResults && (
          <div className="animate-fade-in space-y-3">
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wide mb-4">4 Rows Matched:</div>
            {[
              { row: 3, q: 'Q1', data: 'sales data', value: '12,500' },
              { row: 7, q: 'Q2', data: 'sales data', value: '15,200' },
              { row: 11, q: 'Q3', data: 'sales data', value: '18,900' },
              { row: 15, q: 'Q4', data: 'sales data', value: '22,100' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300">
                <span className="text-slate-400 text-xs min-w-fit font-medium">Row {item.row}</span>
                <span className="text-slate-300 text-sm flex-1">
                  <span className="font-bold text-emerald-400">{item.q}</span>
                  {' '}{item.data}
                </span>
                <span className="text-emerald-400 font-bold text-sm">${item.value}</span>
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
    <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-700 h-96 flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="p-6 border-b border-slate-700 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full transition-colors ${showResults ? 'bg-emerald-500' : 'bg-amber-500'}`} />
            <span className="text-xs font-medium text-slate-400">
              {showResults ? 'Notes found' : 'Scanning notes...'}
            </span>
          </div>
        </div>
        <div className="relative group">
          <input
            type="text"
            value={displayedText}
            readOnly
            placeholder="Search across your notes..."
            className="w-full bg-slate-800/40 text-white placeholder-slate-500 px-4 py-3 rounded-lg text-sm focus:outline-none border border-slate-600 transition-all duration-300 group-hover:border-slate-500 group-hover:bg-slate-800/60"
          />
        </div>
      </div>

      <div className="flex-1 p-6 space-y-3 overflow-y-auto">
        {showResults && (
          <div className="animate-fade-in space-y-3">
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wide mb-3">2 Notes Matched:</div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 hover:bg-purple-500/15 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-xs text-purple-300 font-semibold mb-2">Research Notes</div>
              <p className="text-white text-sm leading-relaxed">
                Building a <span className="font-bold bg-purple-500/30 px-2 py-1 rounded text-purple-200">machine learning model</span> for image classification using CNN architecture.
              </p>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 hover:bg-blue-500/15 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-xs text-blue-300 font-semibold mb-2">Project Ideas</div>
              <p className="text-white text-sm leading-relaxed">
                Create an intelligent system with a <span className="font-bold bg-blue-500/30 px-2 py-1 rounded text-blue-200">machine learning model</span> to optimize data processing.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const AnimatedCodeCard = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [showResults, setShowResults] = useState(false)
  const fullQuery = "database connection"

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
    <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-700 h-96 flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="p-6 border-b border-slate-700 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full transition-colors ${showResults ? 'bg-emerald-500' : 'bg-amber-500'}`} />
            <span className="text-xs font-medium text-slate-400">
              {showResults ? 'Results found' : 'Scanning code...'}
            </span>
          </div>
        </div>
        <div className="relative group">
          <input
            type="text"
            value={displayedText}
            readOnly
            placeholder="Search code snippets..."
            className="w-full bg-slate-800/40 text-white placeholder-slate-500 px-4 py-3 rounded-lg text-sm focus:outline-none border border-slate-600 transition-all duration-300 group-hover:border-slate-500 group-hover:bg-slate-800/60"
          />
        </div>
      </div>

      <div className="flex-1 p-6 space-y-3 overflow-y-auto">
        {showResults && (
          <div className="animate-fade-in space-y-3">
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wide mb-3">2 Code Snippets Matched:</div>
            <div className="bg-slate-800/40 border border-slate-600 rounded-lg p-4 font-mono text-xs space-y-1 hover:bg-slate-800/60 hover:border-slate-500 transition-all duration-300">
              <div className="text-slate-400">const setupDB = () =&gt; {`{`}</div>
              <div className="text-slate-400 pl-4">
                // Initialize <span className="font-bold bg-emerald-500/20 px-1 py-1 rounded text-emerald-300">database connection</span>
              </div>
              <div className="text-slate-400 pl-4">
                await db.init(config);
              </div>
              <div className="text-slate-400">{`}`}</div>
            </div>

            <div className="bg-slate-800/40 border border-slate-600 rounded-lg p-4 font-mono text-xs space-y-1 hover:bg-slate-800/60 hover:border-slate-500 transition-all duration-300">
              <div className="text-slate-400">const <span className="font-bold text-cyan-400">initConnection</span> = (config) =&gt; {`{`}</div>
              <div className="text-slate-400 pl-4">
                new <span className="font-bold bg-emerald-500/20 px-1 py-1 rounded text-emerald-300">database connection</span>
              </div>
              <div className="text-slate-400">{`}`}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchComparisonSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-background border-b border-border">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-20">
          {/* Main heading */}
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground text-balance leading-tight">
              Windows Search looks at filenames.
              <br />
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent font-black">AltDump looks inside your files.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Even if you forgot the filename, if it's buried in a PDF, if it's inside an image, if it's hidden in a document — results appear instantly.
            </p>
          </div>

          {/* 6 Animated Feature Cards - 2 per row - longer cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
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
