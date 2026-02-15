'use client'

export default function BeforeAfterSection() {
  return (
    <section id="before-after-section" className="w-full py-20 md:py-28 bg-background border-b border-border">
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
                <div className="w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-secondary to-secondary/50">
                  <div className="space-y-4 text-center">
                    <p className="text-sm text-muted-foreground">Scattered files</p>
                    <p className="text-xs text-muted-foreground/60">No organization</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground">Without AltDump</h3>
                <p className="text-sm text-muted-foreground mt-1">Manual searching</p>
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
