'use client'

export default function HeroSection() {
<<<<<<< Updated upstream
  const handleMicrosoftStoreClick = () => {
    window.open('https://apps.microsoft.com/detail/9NH5C9V4D2MM?hl=en-us&gl=IN&ocid=pdpshare', '_blank')
=======
  const { createCheckout, isLoading } = useCheckout()

  const handleBuyClick = () => {
    createCheckout()
>>>>>>> Stashed changes
  }

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-background via-secondary/10 to-background border-b border-border/50 overflow-hidden relative">
      {/* Background gradient accent */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
<<<<<<< Updated upstream
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* Eyebrow text */}
          <div className="fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-semibold text-accent mb-6">
              Now Available on Microsoft Store
=======
        <div className="flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-16">
          {/* Left: Folder chaos image */}
          <div className="w-full md:w-1/2 flex justify-center fade-in-up">
            <div className="relative w-full max-w-xl rounded-2xl overflow-hidden border border-border/70 bg-secondary/40 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <img
                src="/hero-folder.png"
                alt="A chaotic folder full of similar filenames and screenshots"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right: Hero text */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 fade-in-up" style={{ animationDelay: '0.05s' }}>
            {/* Eyebrow */}
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-semibold text-accent">
              Your Private Vault, Instantly Searchable
>>>>>>> Stashed changes
            </span>

            {/* Main copy */}
            <div className="space-y-3 max-w-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Does your folder look like this?
              </h1>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                And you can’t find that one line in the PDF you saved yesterday?
                <br />
                Or that one screenshot you saved last week?
              </p>

<<<<<<< Updated upstream
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
=======
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Then this is made just for you.
              </p>

              {/* Big, bold, can’t-miss line */}
              <div className="mt-4">
                <p className="inline-block text-lg md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-amber-200 to-accent bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.55)]">
                  This isn’t filename search. Search any sentence from any file — and find it instantly.
                </p>
              </div>

              {/* Supporting copy kept from original hero */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
                Save files, screenshots, videos, code, and ideas into your private second brain — and search them instantly with semantic search, not filenames.
              </p>

              <p className="text-lg md:text-xl font-bold text-primary glow-text">
                Offline, private, and instant.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={handleBuyClick}
                disabled={isLoading}
                className="relative px-10 py-4 bg-gradient-to-r from-accent to-cyan-400 text-background rounded-xl font-bold text-lg transition-all disabled:opacity-50 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-cyan-300 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-cyan-400 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10" />

                <span className="relative flex items-center justify-center gap-2">
                  Get AltDump Now
                </span>
              </button>
              <p className="mt-2 text-xs text-muted-foreground">
                One-time payment • Lifetime access • $12
              </p>
            </div>
>>>>>>> Stashed changes
          </div>
        </div>
      </div>
    </section>
  )
}
