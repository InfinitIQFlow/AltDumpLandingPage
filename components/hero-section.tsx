 'use client'

export default function HeroSection() {
  const handleMicrosoftStoreClick = () => {
    window.open(
      'https://apps.microsoft.com/detail/9NH5C9V4D2MM?hl=en-us&gl=IN&ocid=pdpshare',
      '_blank'
    )
  }

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-background via-secondary/10 to-background border-b border-border/50 overflow-hidden relative">
      {/* Background gradient accent */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-20">
          {/* Left: Folder chaos image */}
          <div className="w-full md:w-8/12 lg:w-7/12 flex justify-start md:justify-center fade-in-up">
            <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden border border-border/70 bg-secondary/40 shadow-[0_30px_90px_rgba(0,0,0,0.9)] transition-transform duration-500 ease-out hover:scale-[1.04] hover:-translate-y-1.5 hover:shadow-[0_40px_110px_rgba(0,0,0,1)] hover:border-accent/60">
              <img
                src="/hero-folder.png"
                alt="A chaotic folder full of similar filenames and screenshots"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.4),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.35),transparent_55%)]" />
            </div>
          </div>

          {/* Right: Hero text */}
          <div
            className="w-full md:w-4/12 lg:w-5/12 flex flex-col items-center md:items-start text-center md:text-left space-y-7 fade-in-up"
            style={{ animationDelay: '0.05s' }}
          >
            {/* Eyebrow */}
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-xs sm:text-sm font-semibold text-accent tracking-wide shadow-[0_0_25px_rgba(56,189,248,0.4)]">
              Your Private Vault, Instantly Searchable
            </span>

            {/* Main copy */}
            <div className="space-y-4 max-w-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
                Does your folder look like this?
              </h1>

              <div className="space-y-2 text-muted-foreground">
                <p className="text-base md:text-lg leading-relaxed">
                  And you can’t find that one line in the PDF you saved{' '}
                  <span className="font-medium text-foreground">yesterday</span>?
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  Or that one screenshot you saved{' '}
                  <span className="font-medium text-foreground">last week</span>?
                </p>
              </div>

              <p className="text-base md:text-lg leading-relaxed">
                <span className="inline-block px-3 py-1.5 rounded-lg bg-gradient-to-r from-accent/25 via-cyan-500/20 to-amber-400/20 text-foreground font-semibold shadow-[0_0_35px_rgba(56,189,248,0.55)] border border-accent/40">
                  Then this is made just for you!
                </span>
              </p>

              {/* Supporting copy from original hero */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
                Save files, screenshots, videos, code, and ideas into your private second brain — and search them
                instantly{' '}
                <span className="font-semibold text-cyan-300">with semantic search</span>,{' '}
                <span className="font-semibold text-rose-400">not filenames.</span>
              </p>
            </div>

            {/* Tagline + CTA centered */}
            <div className="pt-4 flex flex-col items-center text-center space-y-3">
              <p className="text-lg md:text-xl font-bold text-primary glow-text">
                Offline, private, and instant.
              </p>

              <button
                onClick={handleMicrosoftStoreClick}
                className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-bold text-base transition-all hover:shadow-lg hover:shadow-blue-500/50 group overflow-hidden flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg blur opacity-40 group-hover:opacity-60 transition-opacity duration-300 -z-10" />

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
