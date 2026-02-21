'use client'

export default function HowToDumpSection() {
  return (
    <section id="how-to-dump" className="w-full py-20 md:py-28 bg-background border-b border-border">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section heading */}
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Drop it into AltDump once. Find it anytime with instant search.
            </h2>
          </div>

          {/* Demo with Alt+D visualization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Instructions */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  It only takes two steps to get your thoughts saved:
                </p>
              </div>

              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Press Alt + D</h3>
                  <p className="text-muted-foreground">
                    Instantly open the AltDump capture overlay from anywhere on your computer.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Paste & Save</h3>
                  <p className="text-muted-foreground">
                    Paste your content, hit save, and it's instantly indexed and searchable.
                  </p>
                </div>
              </div>

              {/* Keyboard shortcut highlight */}
              <div className="mt-8 p-6 bg-accent/10 border border-accent/40 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="text-2xl font-bold text-accent">⌨️</div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase">Global Keyboard Shortcut</p>
                    <p className="text-2xl font-bold text-accent mt-1">Alt + D</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Overlay Demo */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <div className="relative bg-gradient-to-b from-background to-background/80 rounded-2xl overflow-hidden border border-border shadow-2xl">
                  {/* Mock background with blur */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                  
                  {/* Alt+D Label */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs font-semibold flex items-center gap-2 z-20">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z" />
                    </svg>
                    Alt + D
                  </div>

                  {/* Overlay Image */}
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-21%20133040-lWDaM4DxyuaLaezU2UWj7EBJYhcQX0.png"
                    alt="AltDump overlay showing paste and save interface"
                    className="w-full h-auto relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
