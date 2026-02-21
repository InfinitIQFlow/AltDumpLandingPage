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

  // Start animation cycle
  useEffect(() => {
    setAnimationCycle(1)
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

  // Stage 3: Stay expanded for 2 seconds then reset
  useEffect(() => {
    if (stage === 'expanded') {
      const expandedTimer = setTimeout(() => {
        setStage('initial')
        setDisplayedQuery('')
        setScanProgress(0)
        setSelectedImage(null)
        setFadeOpacity([1, 1, 1])
      }, 2000)

      return () => clearTimeout(expandedTimer)
    }
  }, [stage])

  return (
    <div className="relative bg-gradient-to-br from-secondary/60 to-background backdrop-blur-sm rounded-2xl overflow-hidden border border-accent/20 h-screen md:h-[600px] flex flex-col shadow-lg hover:shadow-2xl hover:border-accent/40 transition-all duration-300 smooth-glow">
      {/* Card header with copy */}
      <div className="relative p-6 border-b border-border/50 bg-gradient-to-r from-secondary/40 to-background/40 backdrop-blur-sm">
        <h3 className="text-base font-semibold text-foreground mb-1">Images</h3>
        <p className="text-xs text-muted-foreground">Find text inside real-world photos — receipts, warranty cards, whiteboards, packaging, anything you've snapped.</p>
      </div>

      {/* Search input area */}
      <div className="relative px-6 pt-6 pb-4">
        <div className="relative group">
          <input
            type="text"
            value={displayedQuery}
            readOnly
            placeholder="Search inside images..."
            className="w-full bg-input text-foreground placeholder-muted-foreground px-4 py-3 rounded-lg text-sm focus:outline-none border border-border/50 transition-all duration-300 group-hover:border-accent/50 group-hover:bg-input/80 backdrop-blur-sm"
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
                <div className="relative w-32 h-32 bg-gradient-to-br from-secondary/60 to-secondary/30 rounded-xl border border-accent/30 flex items-center justify-center text-muted-foreground overflow-hidden shadow-lg backdrop-blur-sm hover:shadow-xl hover:border-accent/50 transition-all duration-300 hover:shadow-accent/20">
                  <ImageIcon />
                  
                  {/* Realistic glowing scan line - on top, sharp */}
                  {stage === 'scanning' && (
                    <div 
                      className="absolute inset-x-0 h-0.5 bg-gradient-to-b from-transparent via-accent to-transparent"
                      style={{
                        top: `${scanProgress}%`,
                        opacity: 0.9,
                        boxShadow: '0 0 16px rgba(34, 211, 238, 0.8), 0 0 8px rgba(34, 211, 238, 0.5)',
                        zIndex: 10
                      }}
                    />
                  )}
                </div>
                <p className="text-xs text-foreground font-medium">{img.name}</p>
              </div>
            ))}
          </div>
        )}

        {/* Stage 3: Expanded image - zoomed and animated */}
        {stage === 'expanded' && selectedImage !== null && (
          <div className="w-full h-full flex flex-col items-center justify-center gap-4 animate-expand">
            <div className="relative rounded-xl overflow-hidden" style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)' }}>
              <div className="relative w-80 h-80 bg-secondary/40 rounded-xl border border-accent/40 flex items-center justify-center overflow-hidden backdrop-blur-sm">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-10%20234755-1X0I4sbNHjndxVD0EHbA2StS4wHhKL.png"
                  alt="JavaScript error screenshot"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="px-3 py-2 bg-accent/20 border border-accent/60 rounded-lg backdrop-blur-sm">
                <p className="text-xs font-semibold text-accent">✓ Match found: javascript error</p>
              </div>
              <p className="text-sm text-foreground font-medium">{images[selectedImage].name}</p>
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

const AnimatedVideoCard = ({ title, description }: { title: string; description: string }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [stage, setStage] = useState<'initial' | 'typing' | 'expanded'>('initial')
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

  // Stage 3: Stay expanded for 2 seconds then reset
  useEffect(() => {
    if (stage === 'expanded') {
      const expandedTimer = setTimeout(() => {
        setStage('initial')
        setDisplayedText('')
        setScanProgress([0, 0])
        setSelectedVideo(null)
        setFadeOpacity([1, 1])
      }, 2000)

      return () => clearTimeout(expandedTimer)
    }
  }, [stage])

  return (
    <div className="bg-gradient-to-br from-secondary/60 to-background rounded-2xl overflow-hidden border border-accent/20 h-screen md:h-[600px] flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300 smooth-glow hover:shadow-accent/20">
      <div className="p-6 border-b border-border/50 bg-gradient-to-r from-secondary/40 to-background/40 backdrop-blur-sm">
        <div className="space-y-2 mb-4">
          <h3 className="font-bold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        <div className="relative group">
          <input
            type="text"
            value={displayedText}
            readOnly
            placeholder="Search inside videos..."
            className="w-full bg-input text-foreground placeholder-muted-foreground px-4 py-3 rounded-lg text-sm focus:outline-none border border-border/50 transition-all duration-300 group-hover:border-accent/50 group-hover:bg-input/80"
          />
        </div>
      </div>

      <div className="flex-1 p-8 flex items-center justify-center overflow-hidden">
        {/* Initial + Typing + Scanning: Show 2 videos */}
        {(stage === 'initial' || stage === 'typing' || stage === 'scanning') && (
          <div className="flex gap-12 justify-center items-center h-full transition-opacity duration-500">
            {videos.map((video, idx) => (
              <div key={video.id} className="flex flex-col items-center gap-4 transition-opacity duration-500" style={{ opacity: fadeOpacity[idx] }}>
                {/* Video thumbnail */}
                <div className="relative w-56 h-40 bg-gradient-to-br from-secondary/60 to-secondary/30 rounded-xl border border-accent/30 flex items-center justify-center overflow-hidden shadow-lg backdrop-blur-sm hover:shadow-xl hover:border-accent/50 transition-all duration-300 hover:shadow-accent/20">
                  {/* Horizontal scan lines moving top to bottom - scanning video frames */}
                  {stage === 'scanning' && (
                    <>
                      <div 
                        className="absolute inset-x-0 h-2 bg-gradient-to-b from-transparent via-accent to-transparent"
                        style={{
                          top: `${scanProgress[idx]}%`,
                          opacity: 0.9,
                          boxShadow: '0 0 12px rgba(34, 211, 238, 0.8)',
                          zIndex: 10
                        }}
                      />
                      <div 
                        className="absolute inset-x-0 h-1 bg-accent"
                        style={{
                          top: `${scanProgress[idx]}%`,
                          opacity: 0.5,
                          zIndex: 9
                        }}
                      />
                    </>
                  )}
                </div>

                {/* Video name */}
                <p className="text-sm text-foreground font-medium">{video.name}</p>
              </div>
            ))}
          </div>
        )}

        {/* Expanded: Show selected video zoomed */}
        {stage === 'expanded' && selectedVideo !== null && (
          <div className="animate-expand flex flex-col items-center justify-center gap-4 h-full w-full">
            <div className="relative w-96 h-72 bg-gradient-to-br from-secondary/60 to-secondary/30 rounded-xl border-2 border-accent/60 flex items-center justify-center overflow-hidden shadow-2xl backdrop-blur-sm" style={{ boxShadow: '0 0 32px rgba(34, 211, 238, 0.3)' }}>
              {/* Video visual background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-secondary/50 to-background/80" />
              
              {/* Animated waveform pattern (represents video content) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="flex gap-1">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-accent rounded-full"
                      style={{
                        height: `${30 + (i % 3) * 20}px`,
                        animation: `wave 0.8s ease-in-out ${i * 0.1}s infinite`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Play button */}
              <div className="relative z-10 p-5 bg-accent/30 rounded-full border border-accent/60 hover:border-accent transition-colors">
                <PlayIcon />
              </div>

              {/* Caption at bottom */}
              <div className="absolute bottom-4 left-4 right-4 px-3 py-2 bg-accent/20 border border-accent/60 rounded-lg backdrop-blur-sm z-20">
                <p className="text-xs font-semibold text-accent">We'll test the new pricing next quarter.</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-medium">{videos[selectedVideo].name}</p>
          </div>
        )}
        {stage === 'showing-text' && selectedVideo !== null && (
          <div className="animate-fade-in flex flex-col items-center justify-center gap-8 h-full w-full">
            <div className="relative w-96 h-64 bg-gradient-to-br from-secondary/60 to-secondary/30 rounded-lg border-2 border-accent/60 flex items-center justify-center overflow-hidden shadow-2xl">
              {/* Soft accent glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
              
              {/* Text with highlight */}
              <div className="relative z-10 text-center px-8">
                <p className="text-lg text-foreground font-semibold leading-relaxed">
                  <span className="block mb-3">We'll test the</span>
                  <span className="inline-block px-4 py-2 bg-accent/20 rounded-lg border border-accent/60 text-accent font-bold">
                    new pricing
                  </span>
                  <span className="block mt-3">next quarter.</span>
                </p>
              </div>
            </div>
            <p className="text-lg text-foreground font-semibold">{videos[selectedVideo].name}</p>
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
          }, 2000)
        }
      }, 50)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-br from-secondary/60 to-background rounded-2xl overflow-hidden border border-accent/20 h-screen md:h-[600px] flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300 smooth-glow hover:shadow-accent/20">
      <div className="p-6 border-b border-border/50 bg-gradient-to-r from-secondary/40 to-background/40 backdrop-blur-sm">
        <div className="space-y-2 mb-4">
          <h3 className="font-bold text-foreground">PDFs & Docs</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Get pinpoint matches inside PDFs and docs — every paragraph is searchable.
          </p>
        </div>
        <div className="relative group">
          <input
            type="text"
            value={displayedText}
            readOnly
            placeholder="Search PDFs and documents..."
            className="w-full bg-input text-foreground placeholder-muted-foreground px-4 py-3 rounded-lg text-sm focus:outline-none border border-border/50 transition-all duration-300 group-hover:border-accent/50 group-hover:bg-input/80"
          />
        </div>
      </div>

      <div className="flex-1 p-8 space-y-3 overflow-y-auto">
        {showResults && (
          <div className="animate-fade-in space-y-4">
            <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">2 Matches Found:</div>
            <div className="bg-secondary/40 border border-border/50 rounded-lg p-4 space-y-3 hover:bg-secondary/60 hover:border-accent/50 transition-all duration-300">
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground font-medium">Page 8 of 45</span>
                <span className="text-xs bg-accent/30 text-accent px-2 py-1 rounded font-medium">Match</span>
              </div>
              <p className="text-foreground text-sm leading-relaxed">
                All products will adhere to the <span className="font-bold bg-accent/20 px-2 py-1 rounded text-accent">delivery timeline</span> outlined in the contract terms.
              </p>
            </div>

            <div className="bg-secondary/40 border border-border/50 rounded-lg p-4 space-y-3 hover:bg-secondary/60 hover:border-accent/50 transition-all duration-300">
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground font-medium">Page 15 of 45</span>
                <span className="text-xs bg-accent/30 text-accent px-2 py-1 rounded font-medium">Match</span>
              </div>
              <p className="text-foreground text-sm leading-relaxed">
                The <span className="font-bold bg-accent/20 px-2 py-1 rounded text-accent">delivery timeline</span> cannot exceed 30 business days from order confirmation.
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

  // Stage 4: Stay in table view for 2 seconds then reset
  useEffect(() => {
    if (stage === 'table' && highlightedRows.length > 0) {
      const tableTimer = setTimeout(() => {
        setStage('initial')
        setDisplayedText('')
        setSelectedFile(null)
        setHighlightedRows([])
        setFadeOpacity([1, 1, 1])
      }, 2000)

      return () => clearTimeout(tableTimer)
    }
  }, [stage, highlightedRows])

  return (
    <div className="relative bg-gradient-to-br from-secondary/60 to-background backdrop-blur-sm rounded-2xl overflow-hidden border border-accent/20 h-screen md:h-[600px] flex flex-col shadow-lg hover:shadow-2xl hover:border-accent/40 transition-all duration-300 smooth-glow">
      <div className="p-6 border-b border-border/50 bg-gradient-to-r from-secondary/40 to-background/40 backdrop-blur-sm">
        <div className="space-y-2 mb-4">
          <h3 className="font-bold text-foreground">Data Files</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Instant insight inside spreadsheets and structured data — numbers matter.
          </p>
        </div>
        <div className="relative group">
          <input
            type="text"
            value={displayedText}
            readOnly
            placeholder="Search inside spreadsheets..."
            className="w-full bg-input text-foreground placeholder-muted-foreground px-4 py-3 rounded-lg text-sm focus:outline-none border border-border/50 transition-all duration-300 group-hover:border-accent/50 group-hover:bg-input/80 backdrop-blur-sm"
          />
        </div>
      </div>

      <div className="flex-1 p-8 overflow-y-auto flex items-center justify-center">
        {/* Initial state: Show 3 file cards */}
        {(stage === 'initial' || stage === 'typing') && (
          <div className="flex gap-8 justify-center items-center h-full transition-opacity duration-500">
            {files.map((file, idx) => (
              <div key={file.id} className="flex flex-col items-center gap-3 transition-opacity duration-500" style={{ opacity: fadeOpacity[idx] }}>
                <div className="w-28 h-36 bg-gradient-to-br from-secondary/60 to-secondary/30 rounded-xl border border-accent/30 flex flex-col items-center justify-center gap-2 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <div className="text-foreground">
                    <FileIcon />
                  </div>
                  <p className="text-xs text-muted-foreground font-medium text-center px-2">CSV</p>
                </div>
                <p className="text-xs text-foreground font-medium text-center max-w-24">{file.name}</p>
              </div>
            ))}
          </div>
        )}

        {/* Table state: Show selected file zoomed */}
        {(stage === 'expanding' || stage === 'table') && selectedFile !== null && (
          <div className="animate-expand w-full max-w-3xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-18 bg-gradient-to-br from-secondary/60 to-secondary/30 rounded-lg border-2 border-accent/60 flex items-center justify-center shadow-lg backdrop-blur-sm" style={{ boxShadow: '0 0 16px rgba(34, 211, 238, 0.3)' }}>
                  <div className="text-accent text-lg">
                    <FileIcon />
                  </div>
                </div>
                <div>
                  <p className="text-base text-foreground font-semibold">{files[selectedFile].name}</p>
                  {highlightedRows.length > 0 && (
                    <p className="text-xs text-accent font-medium mt-1">{highlightedRows.length} rows matched</p>
                  )}
                </div>
              </div>
            </div>

            {/* CSV Table */}
            <div className="bg-secondary/40 backdrop-blur-sm rounded-lg border border-border/50 overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-secondary/60 border-b border-border/50">
                <p className="text-xs font-semibold text-foreground">Name</p>
                <p className="text-xs font-semibold text-foreground">State</p>
                <p className="text-xs font-semibold text-foreground">Revenue</p>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-border/50">
                {tableData.map((row, idx) => {
                  const isHighlighted = highlightedRows.includes(idx)
                  const isVisible = highlightedRows.length === 0 || isHighlighted

                  return (
                    <div
                      key={idx}
                      className={`grid grid-cols-3 gap-4 p-4 transition-all duration-500 ${
                        isHighlighted
                          ? 'bg-accent/15 border-l-2 border-accent'
                          : isVisible
                          ? 'opacity-100'
                          : 'opacity-40'
                      }`}
                    >
                      <p className={`text-sm ${isHighlighted ? 'text-foreground font-semibold' : 'text-foreground'}`}>
                        {row.name}
                      </p>
                      <p className={`text-sm ${isHighlighted ? 'text-accent font-medium' : 'text-muted-foreground'}`}>
                        {row.state}
                      </p>
                      <p
                        className={`text-sm font-semibold ${
                          isHighlighted
                            ? 'text-accent'
                            : row.revenue > 5000
                            ? 'text-accent/60'
                            : 'text-muted-foreground'
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
    <div className="bg-gradient-to-br from-secondary/60 to-background rounded-2xl overflow-hidden border border-accent/20 h-screen md:h-[600px] flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300 smooth-glow hover:shadow-accent/20">
      <div className="p-6 border-b border-border/50 bg-gradient-to-r from-secondary/40 to-background/40 backdrop-blur-sm">
        <div className="space-y-2 mb-4">
          <h3 className="font-bold text-foreground">Notes</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Find ideas, notes, and drafts instantly — even if you only remember a phrase.
          </p>
        </div>
        <div className="relative group">
          <input
            type="text"
            value={displayedText}
            readOnly
            placeholder="Search across your notes..."
            className="w-full bg-input text-foreground placeholder-muted-foreground px-4 py-3 rounded-lg text-sm focus:outline-none border border-border/50 transition-all duration-300 group-hover:border-accent/50 group-hover:bg-input/80 backdrop-blur-sm"
          />
        </div>
      </div>

      <div className="flex-1 p-8 space-y-3 overflow-y-auto">
        {showResults && (
          <div className="animate-fade-in space-y-3">
            <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-3">2 Notes Matched:</div>
            <div className="bg-secondary/40 border border-border/50 rounded-lg p-4 hover:bg-secondary/60 hover:border-accent/50 transition-all duration-300">
              <div className="text-xs text-foreground font-semibold mb-2">Research Notes</div>
              <p className="text-foreground text-sm leading-relaxed">
                Building a <span className="font-bold bg-accent/20 px-2 py-1 rounded text-accent">machine learning model</span> for image classification using CNN architecture.
              </p>
            </div>

            <div className="bg-secondary/40 border border-border/50 rounded-lg p-4 hover:bg-secondary/60 hover:border-accent/50 transition-all duration-300">
              <div className="text-xs text-foreground font-semibold mb-2">Project Ideas</div>
              <p className="text-foreground text-sm leading-relaxed">
                Create an intelligent system with a <span className="font-bold bg-accent/20 px-2 py-1 rounded text-accent">machine learning model</span> to optimize data processing.
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
  const [stage, setStage] = useState<'initial' | 'typing' | 'scanning' | 'expanded'>('initial')
  const [selectedFile, setSelectedFile] = useState<number | null>(null)
  const [fadeOpacity, setFadeOpacity] = useState([1, 1])

  const fullQuery = "database connection pool"
  const codeFiles = [
    { id: 1, name: 'server.js' },
    { id: 2, name: 'db.config.ts' }
  ]

  const codeSnippet = `const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'app_db',
  user: 'admin',
  password: process.env.DB_PASS
})

pool.on('error', (err) => {
  console.error('Unexpected error', err)
})

export default pool`

  // Main animation cycle - 12s
  useEffect(() => {
    const cycle = setInterval(() => {
      setStage('initial')
      setDisplayedText('')
      setSelectedFile(null)
      setFadeOpacity([1, 1])
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
          setTimeout(() => setStage('scanning'), 200)
        }
      }, 40)

      return () => clearInterval(typeInterval)
    }
  }, [stage])

  // Stage 2: Scanning and expand (1.2-2.5s)
  useEffect(() => {
    if (stage === 'scanning') {
      setTimeout(() => {
        setSelectedFile(1) // db.config.ts
        setFadeOpacity([0, 1])
        setStage('expanded')
      }, 800)
    }
  }, [stage])

  // Stage 3: Stay expanded for 2 seconds then reset
  useEffect(() => {
    if (stage === 'expanded') {
      const expandedTimer = setTimeout(() => {
        setStage('initial')
        setDisplayedText('')
        setSelectedFile(null)
        setFadeOpacity([1, 1])
      }, 2000)

      return () => clearTimeout(expandedTimer)
    }
  }, [stage])

  return (
    <div className="relative bg-gradient-to-br from-secondary/60 to-background backdrop-blur-sm rounded-2xl overflow-hidden border border-accent/20 h-screen md:h-[600px] flex flex-col shadow-lg hover:shadow-2xl hover:border-accent/40 transition-all duration-300 smooth-glow">
      <div className="p-6 border-b border-border/50 bg-gradient-to-r from-secondary/40 to-background/40 backdrop-blur-sm">
        <div className="space-y-2 mb-4">
          <h3 className="font-bold text-foreground">Code</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Search across your whole codebase — functions, variables, logic.
          </p>
        </div>
        <div className="relative group">
          <input
            type="text"
            value={displayedText}
            readOnly
            placeholder="Search code..."
            className="w-full bg-input text-foreground placeholder-muted-foreground px-4 py-3 rounded-lg text-sm focus:outline-none border border-border/50 transition-all duration-300 group-hover:border-accent/50 group-hover:bg-input/80 backdrop-blur-sm"
          />
        </div>
      </div>

      <div className="flex-1 p-8 overflow-y-auto flex items-center justify-center">
        {/* Initial state: Show 2 code files */}
        {(stage === 'initial' || stage === 'typing' || stage === 'scanning') && (
          <div className="flex gap-12 justify-center items-center h-full transition-opacity duration-500">
            {codeFiles.map((file, idx) => (
              <div key={file.id} className="flex flex-col items-center gap-4 transition-opacity duration-500" style={{ opacity: fadeOpacity[idx] }}>
                <div className="w-32 h-40 bg-gradient-to-br from-secondary/60 to-secondary/30 rounded-xl border border-accent/30 flex flex-col items-center justify-center gap-3 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                    <div className="text-foreground">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.321 3.646l2.031 2.031a2 2 0 010 2.828l-8.486 8.486a2 2 0 01-2.828 0l-2.031-2.031a2 2 0 010-2.828l8.486-8.486a2 2 0 012.828 0z" />
                      </svg>
                    </div>
                    <p className="text-xs text-muted-foreground font-mono text-center">{file.name.split('.')[1]}</p>
                  </div>
                </div>
                <p className="text-xs text-foreground font-mono text-center">{file.name}</p>
              </div>
            ))}
          </div>
        )}

        {/* Expanded: Show code snippet zoomed */}
        {stage === 'expanded' && selectedFile !== null && (
          <div className="animate-expand w-full max-w-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-16 bg-gradient-to-br from-secondary/60 to-secondary/30 rounded-lg border-2 border-accent/60 flex items-center justify-center shadow-lg backdrop-blur-sm" style={{ boxShadow: '0 0 16px rgba(34, 211, 238, 0.3)' }}>
                  <div className="text-accent text-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.321 3.646l2.031 2.031a2 2 0 010 2.828l-8.486 8.486a2 2 0 01-2.828 0l-2.031-2.031a2 2 0 010-2.828l8.486-8.486a2 2 0 012.828 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-base text-foreground font-semibold font-mono">{codeFiles[selectedFile].name}</p>
                  <p className="text-xs text-accent font-medium mt-1">1 match found</p>
                </div>
              </div>
            </div>

            {/* Code snippet */}
            <div className="bg-secondary/40 backdrop-blur-sm rounded-lg border border-border/50 overflow-hidden">
              <div className="bg-secondary/60 border-b border-border/50 px-4 py-3">
                <p className="text-xs text-muted-foreground font-mono">database connection pool</p>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="text-xs font-mono text-foreground leading-relaxed">
                  <span className="text-accent">{`const`}</span>
                  {` pool = `}
                  <span className="text-blue-500">{`new`}</span>
                  {` Pool({`}
                  <br />
                  {`  host: `}
                  <span className="text-orange-400">{'\'localhost\''}</span>
                  {`,`}
                  <br />
                  {`  port: `}
                  <span className="text-purple-400">{`5432`}</span>
                  {`,`}
                  <br />
                  {`  database: `}
                  <span className="text-orange-400">{'\'app_db\''}</span>
                  {`...`}
                  <br />
                  {`})`}
                </code>
              </pre>
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

export default function SearchComparisonSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-background border-b border-border">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-20">
          {/* Main heading */}
          <div className="text-center space-y-6 fade-in-down">
            {/* First line - Windows Search */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground inline-block">
                Windows Search looks at filenames.
              </h2>
            </div>
            
            {/* Second line - AltDump */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">
                  AltDump looks inside your files.
                </span>
              </h2>
            </div>
            
            {/* Descriptive text with visual hierarchy */}
            <div className="space-y-4 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="border-l-4 border-accent bg-secondary/40 rounded-lg p-6 md:p-8 space-y-3">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Even if you forgot the filename—
                </p>
                
                <div className="flex flex-col gap-2 text-center">
                  <p className="text-lg md:text-xl text-accent/80 italic">
                    if it's buried in a PDF,
                  </p>
                  <p className="text-lg md:text-xl text-accent/70 italic">
                    if it's inside an image,
                  </p>
                  <p className="text-lg md:text-xl text-accent/90 italic">
                    if it's hidden in a document —
                  </p>
                </div>
                
                <div className="pt-2">
                  <p className="text-xl md:text-2xl font-bold text-accent">
                    results appear instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Animated Feature Cards - 2 per row - longer cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {/* Images */}
            <div>
              <AnimatedImageCard />
            </div>

            {/* Video */}
            <div className="relative">
              <AnimatedVideoCard 
                title="Video"
                description="Search your videos by describing what's happening — scenes, objects, moments."
              />
            </div>

            {/* PDFs & Docs */}
            <div>
              <AnimatedPDFCard />
            </div>

            {/* Data Files */}
            <div>
              <AnimatedDataCard />
            </div>

            {/* Notes */}
            <div>
              <AnimatedNoteCard />
            </div>

            {/* Code */}
            <div>
              <AnimatedCodeCard />
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
