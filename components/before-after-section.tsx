'use client'

export default function BeforeAfterSection() {
  return (
    <section className="w-full py-20 md:py-28 bg-background border-b border-border">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section heading */}
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              The Difference
            </h2>
            <p className="text-lg text-muted-foreground">
              See how AltDump transforms the search experience
            </p>
          </div>

          {/* Before/After Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* LEFT: Without AltDump */}
            <div className="flex flex-col gap-6">
              <div className="flex-1 bg-secondary border border-border rounded-xl overflow-hidden flex items-center justify-center min-h-96">
                <div className="w-full h-full flex items-center justify-center p-8">
                  <svg className="w-24 h-24 text-muted-foreground/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7V5a2 2 0 012-2h14a2 2 0 012 2v2m0 0H3m0 0h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 pointer-events-none">
                  <div className="space-y-4 text-center">
                    <div className="inline-block">
                      <svg className="w-12 h-12 text-muted-foreground/40 mx-auto animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">Opening 12 files...</p>
                    <p className="text-xs text-muted-foreground/60">Searching through folders</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground">Searching...</h3>
                <p className="text-sm text-muted-foreground mt-1">Without AltDump</p>
              </div>
            </div>

            {/* RIGHT: With AltDump */}
            <div className="flex flex-col gap-6">
              <div className="flex-1 bg-secondary border border-border rounded-xl overflow-hidden min-h-96">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-14%20141929-5EKht4cJMykREXsRqTuYvs2kfHkCoD.png"
                  alt="AltDump vault interface showing organized files with instant search"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-accent">Found.</h3>
                <p className="text-sm text-muted-foreground mt-1">With AltDump</p>
              </div>
            </div>
          </div>

          {/* Key insight */}
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-8 text-center">
            <p className="text-lg text-foreground">
              <span className="font-semibold text-accent">Instant results.</span> No clicking through folders. No file searching. Just search what you remember.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
