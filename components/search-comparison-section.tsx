'use client'

export default function SearchComparisonSection() {
  return (
    <section className="w-full py-20 md:py-28 bg-secondary/30 border-b border-border">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Main heading */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Windows Search looks at filenames.
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-accent text-balance">
              AltDump looks inside your files.
            </h3>
          </div>

          {/* Enhanced description with visual callout */}
          <div className="relative">
            {/* Gradient background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-2xl blur-xl opacity-50" />
            
            <div className="relative bg-gradient-to-r from-accent/5 via-background to-accent/5 border-2 border-accent/40 rounded-xl p-8 md:p-12">
              <div className="space-y-6">
                {/* Main visual statement */}
                <div className="text-center space-y-4">
                  <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                    <span className="font-bold text-accent">Even if you forgot the filename,</span>
                  </p>
                  <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                    if it's buried in a <span className="font-bold text-primary">PDF</span>, if it's inside an <span className="font-bold text-primary">image</span>, if it's hidden in a <span className="font-bold text-primary">document</span>...
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-accent mt-4 animate-pulse">
                    Results appear instantly.
                  </p>
                </div>

                {/* Visual comparison boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {/* Windows Search - Limited */}
                  <div className="bg-background border border-border rounded-lg p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                      <h4 className="font-semibold text-foreground">Traditional Search</h4>
                    </div>
                    <ul className="space-y-3 text-sm">
                      <li className="flex gap-2">
                        <span className="text-muted-foreground flex-shrink-0">✗</span>
                        <span className="text-muted-foreground">Only searches filenames</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground flex-shrink-0">✗</span>
                        <span className="text-muted-foreground">Can't find text in PDFs</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground flex-shrink-0">✗</span>
                        <span className="text-muted-foreground">Can't read image text</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground flex-shrink-0">✗</span>
                        <span className="text-muted-foreground">Limited to specific formats</span>
                      </li>
                    </ul>
                  </div>

                  {/* AltDump - Comprehensive */}
                  <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/40 rounded-lg p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <h4 className="font-semibold text-foreground">AltDump Search</h4>
                    </div>
                    <ul className="space-y-3 text-sm">
                      <li className="flex gap-2">
                        <span className="text-accent flex-shrink-0">✓</span>
                        <span className="text-foreground">Searches content inside files</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent flex-shrink-0">✓</span>
                        <span className="text-foreground">Reads text from PDFs & documents</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent flex-shrink-0">✓</span>
                        <span className="text-foreground">Extracts text from images (OCR)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent flex-shrink-0">✓</span>
                        <span className="text-foreground">Works with every file type</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom callout */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground italic">
              Your second brain doesn't forget. Even when you do.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
