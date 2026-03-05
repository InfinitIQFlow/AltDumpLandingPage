'use client'

export default function HeroSection() {
  const handleMicrosoftStoreClick = () => {
    window.open('https://apps.microsoft.com/detail/9NH5C9V4D2MM?hl=en-us&gl=IN&ocid=pdpshare', '_blank')
  }

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-background via-secondary/10 to-background border-b border-border/50 overflow-hidden relative">
      {/* Background gradient accent */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-2 md:order-1 fade-in-up flex justify-center">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K0nncaMmgb05aRUXAnmzoLJvE4aVVh.png"
              alt="Disorganized folder with various files and document types"
              className="w-full max-w-md md:max-w-full h-auto rounded-lg shadow-2xl"
            />
          </div>

          {/* Right side - Text Content */}
          <div className="order-1 md:order-2 space-y-6 fade-in-up" style={{ animationDelay: '0.05s' }}>
            {/* Eyebrow text */}
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-semibold text-accent">
                Now Available on Microsoft Store
              </span>
            </div>

            {/* Main Heading - Problem Statement */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Does your folder look like this?
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-3">
                <div>And you can't find that one line in the PDF you saved yesterday?</div>
                <div>Or that one screenshot you saved last week?</div>
              </p>
              <p className="text-lg md:text-xl font-semibold text-foreground pt-2">
                Then this is made just for you.
              </p>
            </div>

            {/* Feature Description */}
            <div className="space-y-4 pt-4">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Save files, screenshots, videos, code, and ideas into your private second brain — and search them instantly <span className="bg-accent/20 px-2 py-1 rounded text-accent font-semibold">with semantic search</span>, <span className="bg-blue-500/20 px-2 py-1 rounded text-blue-400 font-semibold">not filenames</span>.
              </p>

              {/* Highlighted Tagline */}
              <p className="text-xl md:text-2xl font-bold text-primary glow-text pt-2">
                Offline, private, and instant.
              </p>
            </div>

            {/* CTA Button - Microsoft Store Badge */}
            <div className="flex flex-col items-start gap-3 pt-6" style={{ animationDelay: '0.1s' }}>
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
      </div>
    </section>
  )
}
