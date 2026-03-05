'use client'

export default function HeroSection() {
  const handleMicrosoftStoreClick = () => {
    window.open('https://apps.microsoft.com/detail/9NH5C9V4D2MM?hl=en-us&gl=IN&ocid=pdpshare', '_blank')
  }

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-background via-secondary/10 to-background border-b border-border/50 overflow-hidden relative">
      {/* Background gradient accent */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* Eyebrow text */}
          <div className="fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-semibold text-accent mb-6">
              Now Available on Microsoft Store
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-5 max-w-3xl fade-in-up" style={{ animationDelay: '0.05s' }}>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance">
              Never lose a file, screenshot, or idea again.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Save files, screenshots, videos, code, and ideas into your private second brain — and search them instantly with semantic search, not filenames.
            </p>
          </div>

          {/* Highlighted Tagline */}
          <div className="relative fade-in-up" style={{ animationDelay: '0.08s' }}>
            <p className="text-xl md:text-2xl font-bold text-primary glow-text px-6 py-2 rounded-lg">
              Offline, private, and instant.
            </p>
          </div>

          {/* CTA Button - Microsoft Store Badge */}
          <div className="flex flex-col items-center gap-3 pt-2 fade-in-up" style={{ animationDelay: '0.12s' }}>
            <button 
              onClick={handleMicrosoftStoreClick}
              className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-bold text-base transition-all hover:shadow-lg hover:shadow-blue-500/50 group overflow-hidden flex items-center gap-2"
            >
              {/* Animated glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg blur opacity-40 group-hover:opacity-60 transition-opacity duration-300 -z-10"></div>
              
              <span className="relative flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" />
                </svg>
                Get it from Microsoft Store
              </span>
            </button>
            <p className="text-xs text-muted-foreground">
              Free Trial Available • Try Before You Buy
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
