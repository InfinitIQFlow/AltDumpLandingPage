'use client'

const TextIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const CodeIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const FileIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
)

const ImageIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const VideoIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const VaultIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
)

const SearchIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

const ArrowIcon = () => (
  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

export default function FeatureFlowSection() {
  const inputs = [
    { icon: <TextIcon />, label: 'Text' },
    { icon: <CodeIcon />, label: 'Code' },
    { icon: <FileIcon />, label: 'PDF' },
    { icon: <ImageIcon />, label: 'Image' },
    { icon: <VideoIcon />, label: 'Video' }
  ]

  return (
    <section className="w-full py-20 md:py-28 bg-background border-b border-border">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-16">
          {/* Section heading */}
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Everything, Everywhere
            </h2>
            <p className="text-lg text-muted-foreground">
              Handle any file type. Instantly searchable.
            </p>
          </div>

          {/* Flow Diagram */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-8 overflow-x-auto pb-4">
            {/* Input Files */}
            <div className="flex items-center gap-3 flex-nowrap">
              {inputs.map((input, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary border border-border rounded-lg flex items-center justify-center text-foreground hover:border-accent/50 hover:bg-secondary/80 transition-all flex-shrink-0">
                    {input.icon}
                  </div>
                  <span className="text-xs text-muted-foreground text-center whitespace-nowrap">
                    {input.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Arrow to Vault */}
            <div className="hidden md:flex text-accent flex-shrink-0">
              <ArrowIcon />
            </div>

            {/* Vault */}
            <div className="flex flex-col items-center gap-3 flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-accent/10 border border-accent/30 rounded-lg flex items-center justify-center text-accent hover:border-accent hover:bg-accent/20 transition-all">
                <VaultIcon />
              </div>
              <span className="text-sm font-semibold text-foreground">AltDump</span>
              <span className="text-xs text-muted-foreground">Vault</span>
            </div>

            {/* Arrow to Search */}
            <div className="hidden md:flex text-accent flex-shrink-0">
              <ArrowIcon />
            </div>

            {/* Search Result */}
            <div className="flex flex-col items-center gap-3 flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-accent/10 border border-accent/30 rounded-lg flex items-center justify-center text-accent hover:border-accent hover:bg-accent/20 transition-all">
                <SearchIcon />
              </div>
              <span className="text-sm font-semibold text-foreground">Smart</span>
              <span className="text-xs text-muted-foreground">Search Result</span>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-secondary border border-border rounded-lg p-6 text-center space-y-3">
              <div className="text-accent font-semibold text-lg">Unified</div>
              <p className="text-sm text-muted-foreground">
                All your content in one searchable vault
              </p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-6 text-center space-y-3">
              <div className="text-accent font-semibold text-lg">Intelligent</div>
              <p className="text-sm text-muted-foreground">
                AI-powered semantic search understands context
              </p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-6 text-center space-y-3">
              <div className="text-accent font-semibold text-lg">Local</div>
              <p className="text-sm text-muted-foreground">
                Everything happens offline, no cloud dependency
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
