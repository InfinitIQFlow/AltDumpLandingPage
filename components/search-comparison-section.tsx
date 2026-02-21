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
  const [fadeOpacity, setFadeOpacity] = useState([1, 1, 1])

  const fullQuery = "javascript error"
  const images = [
    { id: 1, name: 'screenshot_357' },
    { id: 2, name: 'screenshot_843' },
    { id: 3, name: 'screenshot_236' }
  ]

  // Main animation cycle - reduced to 12s
  useEffect(() => {
    const cycle = setInterval(() => {
      setAnimationCycle(c => c + 1)
      setStage('initial')
      setDisplayedQuery('')
      setScanProgress(0)
      setSelectedImage(null)
      setFadeOpacity([1, 1, 1])
    }, 12000)

    return () => clearInterval(cycle)
  }, [])

  // Stage 1: Type search query (0-1s)
  useEffect(() => {
    if (stage === 'initial' && animationCycle > 0) {
      let index = 0
      const typeInterval = setInterval(() => {
        if (index <= fullQuery.length) {
          setDisplayedQuery(fullQuery.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => setStage('scanning'), 200)
        }
      }, 50)

      return () => clearInterval(typeInterval)
    }
  }, [stage, animationCycle])

  // Stage 2: Scanning animation (1-2.5s)
  useEffect(() => {
    if (stage === 'scanning') {
      setScanProgress(0)
      const scanInterval = setInterval(() => {
        setScanProgress(p => {
          if (p >= 100) {
            clearInterval(scanInterval)
            setTimeout(() => {
              setSelectedImage(0)
              setFadeOpacity([1, 0, 0])
              setStage('expanded')
            }, 300)
            return 100
          }
          return p + 3
        })
      }, 25)

      return () => clearInterval(scanInterval)
    }
  }, [stage])

  return (
    <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/30 h-screen md:h-[500px] flex flex-col shadow-lg hover:shadow-2xl hover:border-slate-600/50 transition-all duration-300">
      {/* Card header with copy */}
      <div className="relative p-6 border-b border-slate-700/20 bg-gradient-to-r from-slate-800/20 to-slate-900/20 backdrop-blur-sm">
        <h3 className="text-base font-semibold text-slate-100 mb-1">Images</h3>
        <p className="text-xs text-slate-400">Find text inside real-world photos — receipts, warranty cards, whiteboards, packaging, anything you've snapped.</p>
      </div>

      {/* Search input area */}
      <div className="relative px-6 pt-6 pb-4">
        <div className="relative group">
          <input
            type="text"
            value={displayedQuery}
            readOnly
            placeholder="Search inside images..."
            className="w-full bg-slate-800/30 text-slate-100 placeholder-slate-500 px-4 py-3 rounded-lg text-sm focus:outline-none border border-slate-600/30 transition-all duration-300 group-hover:border-slate-500/50 group-hover:bg-slate-800/50 backdrop-blur-sm"
          />
        </div>
      </div>

      {/* Main content area */}
      <div className="relative flex-1 px-6 pb-6 flex items-center justify-center overflow-hidden">
        
        {/* Stage 1 & 2: 3 Images */}
        {(stage === 'initial' || stage === 'typing' || stage === 'scanning') && (
          <div className="w-full flex gap-8 justify-center items-center h-full">
            {images.map((img, idx) => (
              <div key={img.id} className="flex flex-col items-center gap-3 transition-opacity duration-500" style={{ opacity: fadeOpacity[idx] }}>
                {/* Image container - larger */}
                <div className="relative w-32 h-32 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl border border-slate-600/40 flex items-center justify-center text-slate-400 overflow-hidden shadow-lg backdrop-blur-sm hover:shadow-xl hover:border-slate-500/60 transition-all duration-300">
                  <ImageIcon />
                  
                  {/* Realistic glowing scan line - on top, sharp */}
                  {stage === 'scanning' && (
                    <div 
                      className="absolute inset-x-0 h-0.5 bg-gradient-to-b from-transparent via-emerald-400 to-transparent"
                      style={{
                        top: `${scanProgress}%`,
                        opacity: 0.9,
                        boxShadow: '0 0 16px rgba(16, 185, 129, 0.8), 0 0 8px rgba(16, 185, 129, 0.5)',
                        zIndex: 10
                      }}
                    />
                  )}
                </div>
                <p className="text-xs text-slate-400 font-medium">{img.name}</p>
              </div>
            ))}
          </div>
        )}

        {/* Stage 3: Expanded image - zoomed and animated */}
        {stage === 'expanded' && selectedImage !== null && (
          <div className="w-full h-full flex flex-col items-center justify-center gap-6 animate-expand">
            <div className="relative w-96 h-96 bg-slate-700/30 rounded-xl border-2 border-emerald-500/60 flex items-center justify-center overflow-hidden shadow-2xl backdrop-blur-sm" style={{ boxShadow: '0 0 32px rgba(16, 185, 129, 0.3)' }}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-10%20234755-1X0I4sbNHjndxVD0EHbA2StS4wHhKL.png"
                alt="JavaScript error screenshot"
                className="w-full h-full object-cover"
              />
              
              {/* Highlight the match */}
              <div className="absolute top-4 left-4 right-4 px-3 py-2 bg-emerald-500/20 border border-emerald-400/60 rounded-lg backdrop-blur-sm">
                <p className="text-xs font-semibold text-emerald-300">✓ Match found: javascript error</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 font-medium">{images[selectedImage].name}</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes expand {
          from {
            opacity: 0;
            transform: scale(0.85);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-expand {
          animation: expand 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </div>
  )
}

const PlayIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
)

const VideoIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const AnimatedVideoCard = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [stage, setStage] = useState<'initial' | 'typing' | 'scanning' | 'expanded'>('initial')
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)
  const [scanProgress, setScanProgress] = useState([0, 0])
  const [fadeOpacity, setFadeOpacity] = useState([1, 1])

  const fullQuery = "the meeting about the pricing change"
  const videos = [
    { id: 1, name: 'screen_recording.mp4' },
    { id: 2, name: 'vid_182_782.mp4' }
  ]

  // Main animation cycle - reduced to 12s
  useEffect(() => {
    const cycle = setInterval(() => {
      setStage('initial')
      setDisplayedText('')
      setScanProgress([0, 0])
      setSelectedVideo(null)
      setFadeOpacity([1, 1])
    }, 12000)

    return () => clearInterval(cycle)
  }, [])

  // Stage 1: Type search query (0-1s)
  useEffect(() => {
    if (stage === 'initial') {
      let index = 0
      const typeInterval = setInterval(() => {
        if (index <= fullQuery.length) {
          setDisplayedText(fullQuery.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => setStage('scanning'), 200)
        }
      }, 40)

      return () => clearInterval(typeInterval)
    }
  }, [stage])

  // Stage 2: Scanning animation (1-2.5s) - frame strip flicker
  useEffect(() => {
    if (stage === 'scanning') {
      let progress = [0, 0]
      const scanInterval = setInterval(() => {
        progress = [progress[0] + 3, progress[1] + 3]
        if (progress[0] >= 100) {
          progress = [100, 100]
          clearInterval(scanInterval)
          setTimeout(() => {
            setSelectedVideo(1) // Select vid_182_782.mp4 (index 1)
            setFadeOpacity([0, 1])
            setStage('expanded')
          }, 250)
        }
        setScanProgress([...progress])
      }, 30)

      return () => clearInterval(scanInterval)
    }
  }, [stage])

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-700 h-screen md:h-[500px] flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="p-6 border-b border-slate-700 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full transition-colors ${stage === 'showing-text' ? 'bg-emerald-500' : stage === 'scanning' ? 'bg-amber-500' : 'bg-slate-500'}`} />
            <span className="text-xs font-medium text-slate-400">
              {stage === 'showing-text' ? 'Match found' : stage === 'scanning' ? 'Scanning videos...' : 'Ready to search'}
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

      <div className="flex-1 p-8 flex items-center justify-center overflow-hidden">
        {/* Initial + Scanning: Show 2 videos */}
        {(stage === 'initial' || stage === 'typing' || stage === 'scanning') && (
          <div className="flex gap-8 justify-center items-center h-full">
            {videos.map((video, idx) => (
              <div key={video.id} className="flex flex-col items-center gap-4">
                {/* Video thumbnail */}
                <div className="relative w-48 h-32 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg border border-slate-600 flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Frame strip flicker animation during scanning */}
                  {stage === 'scanning' && (
                    <>
                      {/* Horizontal flickering frames */}
                      <div className="absolute inset-0 opacity-30">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="absolute h-full w-8 bg-white/20"
                            style={{
                              left: `${(scanProgress[idx] + i * 15) % 100}%`,
                              animation: 'none'
                            }}
                          />
                        ))}
                      </div>
                      {/* Soft pulsing overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
                    </>
                  )}

                  {/* Play button and icon */}
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="text-slate-300">
                      <VideoIcon />
                    </div>
                    <div className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300">
                      <PlayIcon />
                    </div>
                  </div>
                </div>

                {/* Video name */}
                <p className="text-sm text-slate-300 font-medium text-center">{video.name}</p>
              </div>
            ))}
          </div>
        )}

        {/* Expanded: Show selected video zoomed in */}
        {stage === 'expanded' && selectedVideo !== null && (
          <div className="animate-fade-in flex flex-col items-center justify-center gap-6 h-full w-full">
            <div className="relative w-80 h-56 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg border-2 border-slate-600 flex items-center justify-center overflow-hidden shadow-2xl ring-2 ring-indigo-500/50">
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="text-slate-200">
                  <VideoIcon />
                </div>
                <div className="p-4 bg-white/30 rounded-full">
                  <PlayIcon />
                </div>
              </div>
            </div>
            <p className="text-lg text-slate-200 font-semibold">{videos[selectedVideo].name}</p>
          </div>
        )}

        {/* Showing text result */}
        {stage === 'showing-text' && selectedVideo !== null && (
          <div className="animate-fade-in flex flex-col items-center justify-center gap-8 h-full w-full">
            <div className="relative w-96 h-64 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg border-2 border-slate-600 flex items-center justify-center overflow-hidden shadow-2xl">
              {/* Soft indigo glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-indigo-500/10" />
              
              {/* Text with highlight */}
              <div className="relative z-10 text-center px-8">
                <p className="text-lg text-white font-semibold leading-relaxed">
                  <span className="block mb-3">We'll test the</span>
                  <span className="inline-block px-4 py-2 bg-indigo-500/30 rounded-lg border border-indigo-400/60 text-indigo-200 font-bold">
                    new pricing
                  </span>
                  <span className="block mt-3">next quarter.</span>
                </p>
              </div>
            </div>
            <p className="text-lg text-slate-200 font-semibold">{videos[selectedVideo].name}</p>
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
    <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-700 h-screen md:h-[500px] flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300">
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

      <div className="flex-1 p-8 space-y-3 overflow-y-auto">
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

const FileIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const AnimatedDataCard = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [stage, setStage] = useState<'initial' | 'typing' | 'expanding' | 'table'>('initial')
  const [selectedFile, setSelectedFile] = useState<number | null>(null)
  const [highlightedRows, setHighlightedRows] = useState<number[]>([])
  const [fadeOpacity, setFadeOpacity] = useState([1, 1, 1])

  const fullQuery = "customers from california with revenue over 5000"
  const files = [
    { id: 1, name: 'sales_2024.csv' },
    { id: 2, name: 'customer_data.csv' },
    { id: 3, name: 'inventory_export.csv' }
  ]

  const tableData = [
    { name: 'Alex Chen', state: 'Texas', revenue: 3200, match: false },
    { name: 'Maya Singh', state: 'California', revenue: 7800, match: true },
    { name: 'David Kim', state: 'California', revenue: 5400, match: true },
    { name: 'John Park', state: 'Nevada', revenue: 2900, match: false }
  ]

  // Main animation cycle - 12s
  useEffect(() => {
    const cycle = setInterval(() => {
      setStage('initial')
      setDisplayedText('')
      setSelectedFile(null)
      setHighlightedRows([])
      setFadeOpacity([1, 1, 1])
    }, 12000)

    return () => clearInterval(cycle)
  }, [])

  // Stage 1: Type search query (0-1.2s)
  useEffect(() => {
    if (stage === 'initial') {
      let index = 0
      const typeInterval = setInterval(() => {
        if (index <= fullQuery.length) {
          setDisplayedText(fullQuery.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => setStage('expanding'), 200)
        }
      }, 30)

      return () => clearInterval(typeInterval)
    }
  }, [stage])

  // Stage 2: Expand selected file (1.2-2.5s)
  useEffect(() => {
    if (stage === 'expanding') {
      setSelectedFile(1) // customer_data.csv
      setFadeOpacity([0, 1, 0])
      setTimeout(() => setStage('table'), 800)
    }
  }, [stage])

  // Stage 3: Show table and highlight (2.5-5s)
  useEffect(() => {
    if (stage === 'table') {
      setTimeout(() => {
        setHighlightedRows([1, 2]) // Maya Singh and David Kim
      }, 300)
    }
  }, [stage])

  return (
    <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/30 h-screen md:h-[500px] flex flex-col shadow-lg hover:shadow-2xl hover:border-slate-600/50 transition-all duration-300">
      <div className="p-6 border-b border-slate-700/20 bg-gradient-to-r from-slate-800/20 to-slate-900/20 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold text-slate-100">Spreadsheets</h3>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full transition-colors ${highlightedRows.length > 0 ? 'bg-emerald-500' : stage === 'typing' || stage === 'initial' ? 'bg-amber-500' : 'bg-slate-500'}`} />
            <span className="text-xs font-medium text-slate-400">
              {highlightedRows.length > 0 ? 'Rows matched' : stage === 'expanding' ? 'Opening...' : 'Ready'}
            </span>
          </div>
        </div>
        <p className="text-xs text-slate-400 mb-4">Search inside spreadsheets — find cells with specific data, calculations, or patterns instantly.</p>
        <div className="relative group">
          <input
            type="text"
            value={displayedText}
            readOnly
            placeholder="Search inside spreadsheets..."
            className="w-full bg-slate-800/30 text-slate-100 placeholder-slate-500 px-4 py-3 rounded-lg text-sm focus:outline-none border border-slate-600/30 transition-all duration-300 group-hover:border-slate-500/50 group-hover:bg-slate-800/50 backdrop-blur-sm"
          />
        </div>
      </div>

      <div className="flex-1 p-8 overflow-y-auto flex items-center justify-center">
        {/* Initial state: Show 3 file cards */}
        {(stage === 'initial' || stage === 'typing') && (
          <div className="flex gap-8 justify-center items-center h-full transition-opacity duration-500">
            {files.map((file, idx) => (
              <div key={file.id} className="flex flex-col items-center gap-3 transition-opacity duration-500" style={{ opacity: fadeOpacity[idx] }}>
                <div className="w-28 h-36 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl border border-slate-600/40 flex flex-col items-center justify-center gap-2 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <div className="text-slate-300">
                    <FileIcon />
                  </div>
                  <p className="text-xs text-slate-400 font-medium text-center px-2">CSV</p>
                </div>
                <p className="text-xs text-slate-300 font-medium text-center max-w-24">{file.name}</p>
              </div>
            ))}
          </div>
        )}

        {/* Table state: Show selected file zoomed */}
        {(stage === 'expanding' || stage === 'table') && selectedFile !== null && (
          <div className="animate-expand w-full max-w-3xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-18 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-lg border-2 border-emerald-500/60 flex items-center justify-center shadow-lg backdrop-blur-sm" style={{ boxShadow: '0 0 16px rgba(16, 185, 129, 0.2)' }}>
                  <div className="text-emerald-400 text-lg">
                    <FileIcon />
                  </div>
                </div>
                <div>
                  <p className="text-base text-slate-100 font-semibold">{files[selectedFile].name}</p>
                  {highlightedRows.length > 0 && (
                    <p className="text-xs text-emerald-400 font-medium mt-1">{highlightedRows.length} rows matched</p>
                  )}
                </div>
              </div>
            </div>

            {/* CSV Table */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/50 overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-slate-800/40 border-b border-slate-700/30">
                <p className="text-xs font-semibold text-slate-300">Name</p>
                <p className="text-xs font-semibold text-slate-300">State</p>
                <p className="text-xs font-semibold text-slate-300">Revenue</p>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-slate-700/20">
                {tableData.map((row, idx) => {
                  const isHighlighted = highlightedRows.includes(idx)
                  const isVisible = highlightedRows.length === 0 || isHighlighted

                  return (
                    <div
                      key={idx}
                      className={`grid grid-cols-3 gap-4 p-4 transition-all duration-500 ${
                        isHighlighted
                          ? 'bg-emerald-500/15 border-l-2 border-emerald-500'
                          : isVisible
                          ? 'opacity-100'
                          : 'opacity-40'
                      }`}
                    >
                      <p className={`text-sm ${isHighlighted ? 'text-slate-100 font-semibold' : 'text-slate-300'}`}>
                        {row.name}
                      </p>
                      <p className={`text-sm ${isHighlighted ? 'text-emerald-200 font-medium' : 'text-slate-400'}`}>
                        {row.state}
                      </p>
                      <p
                        className={`text-sm font-semibold ${
                          isHighlighted
                            ? 'text-emerald-400'
                            : row.revenue > 5000
                            ? 'text-emerald-400/60'
                            : 'text-slate-400'
                        } ${isHighlighted && row.revenue > 5000 ? 'drop-shadow-lg' : ''}`}
                      >
                        ${row.revenue.toLocaleString()}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes expand {
          from {
            opacity: 0;
            transform: scale(0.85);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-expand {
          animation: expand 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
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
    <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-700 h-screen md:h-[500px] flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300">
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

      <div className="flex-1 p-8 space-y-3 overflow-y-auto">
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
    <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/30 h-screen md:h-[500px] flex flex-col shadow-lg hover:shadow-2xl hover:border-slate-600/50 transition-all duration-300">
      <div className="p-6 border-b border-slate-700/20 bg-gradient-to-r from-slate-800/20 to-slate-900/20 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold text-slate-100">Videos</h3>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full transition-colors ${stage === 'expanded' ? 'bg-emerald-500' : stage === 'scanning' ? 'bg-amber-500' : 'bg-slate-500'}`} />
            <span className="text-xs font-medium text-slate-400">
              {stage === 'expanded' ? 'Match found' : stage === 'scanning' ? 'Scanning...' : 'Ready'}
            </span>
          </div>
        </div>
        <p className="text-xs text-slate-400 mb-4">Find exact moments in videos — subtitles, captions, actions, anything captured.</p>
        <div className="relative group">
          <input
            type="text"
            value={displayedText}
            readOnly
            placeholder="Search inside videos..."
            className="w-full bg-slate-800/30 text-slate-100 placeholder-slate-500 px-4 py-3 rounded-lg text-sm focus:outline-none border border-slate-600/30 transition-all duration-300 group-hover:border-slate-500/50 group-hover:bg-slate-800/50 backdrop-blur-sm"
          />
        </div>
      </div>

      <div className="flex-1 p-8 flex items-center justify-center overflow-hidden">
        
        {/* Initial + Scanning: Show 2 videos */}
        {(stage === 'initial' || stage === 'typing' || stage === 'scanning') && (
          <div className="flex gap-12 justify-center items-center h-full transition-opacity duration-500">
            {videos.map((video, idx) => (
              <div key={video.id} className="flex flex-col items-center gap-4 transition-opacity duration-500" style={{ opacity: fadeOpacity[idx] }}>
                {/* Video thumbnail */}
                <div className="relative w-56 h-40 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl border border-slate-600/40 flex items-center justify-center overflow-hidden shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  {/* Frame strip flicker animation */}
                  {stage === 'scanning' && (
                    <>
                      <div className="absolute inset-0 opacity-40">
                        {[0, 1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="absolute h-full w-12 bg-emerald-400/20"
                            style={{
                              left: `${(scanProgress[idx] + i * 20) % 100}%`,
                            }}
                          />
                        ))}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-300/5 to-transparent" />
                    </>
                  )}

                  {/* Play button */}
                  <div className="relative z-10 p-4 bg-emerald-500/20 rounded-full hover:bg-emerald-500/30 transition-all duration-300 border border-emerald-400/40">
                    <PlayIcon />
                  </div>
                </div>

                {/* Video name */}
                <p className="text-sm text-slate-300 font-medium">{video.name}</p>
              </div>
            ))}
          </div>
        )}

        {/* Expanded: Show selected video zoomed */}
        {stage === 'expanded' && selectedVideo !== null && (
          <div className="animate-expand flex flex-col items-center justify-center gap-6 h-full w-full">
            <div className="relative w-96 h-72 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl border-2 border-emerald-500/60 flex items-center justify-center overflow-hidden shadow-2xl backdrop-blur-sm" style={{ boxShadow: '0 0 32px rgba(16, 185, 129, 0.3)' }}>
              {/* Video visual background */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-slate-800 to-slate-900" />
              
              {/* Animated waveform pattern (represents video content) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="flex gap-1">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-emerald-400 rounded-full"
                      style={{
                        height: `${30 + (i % 3) * 20}px`,
                        animation: `wave 0.8s ease-in-out ${i * 0.1}s infinite`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Play button */}
              <div className="relative z-10 p-5 bg-emerald-500/30 rounded-full border border-emerald-400/60">
                <PlayIcon />
              </div>

              {/* Caption at bottom */}
              <div className="absolute bottom-4 left-4 right-4 px-3 py-2 bg-emerald-500/20 border border-emerald-400/60 rounded-lg backdrop-blur-sm z-20">
                <p className="text-xs font-semibold text-emerald-300">We'll test the new pricing next quarter.</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 font-medium">{videos[selectedVideo].name}</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes expand {
          from {
            opacity: 0;
            transform: scale(0.85);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes wave {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.6); }
        }
        .animate-expand {
          animation: expand 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
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
