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

          {/* User Question */}
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground italic">
              "Where was the arithmetic operators section?"
            </p>
          </div>

          {/* Before/After Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* LEFT: Without AltDump */}
            <div className="flex flex-col gap-6">
              <div className="bg-yellow-100 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-800 rounded-t-lg px-4 py-2">
                <p className="text-sm font-medium text-yellow-900 dark:text-yellow-200">Manual Searching Through Files</p>
              </div>
              <div className="flex-1 bg-secondary border border-border rounded-b-xl overflow-hidden aspect-video">
                <video 
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/beforeshort-YOiZCaFBR728cqaaKNFqHo9HryOwcX.mp4"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground">Without AltDump</h3>
                <p className="text-sm text-muted-foreground mt-1">Manual searching</p>
              </div>
            </div>

            {/* RIGHT: With AltDump */}
            <div className="flex flex-col gap-6">
              <div className="bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-800 rounded-t-lg px-4 py-2">
                <p className="text-sm font-medium text-green-900 dark:text-green-200">Instant Search With AltDump</p>
              </div>
              <div className="flex-1 bg-secondary border border-border rounded-b-xl overflow-hidden aspect-video">
                <video 
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/afterwithzoom-DPchvx7ktSgDxig2y2TsHAI7dJr7K3.mp4"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-accent">Found.</h3>
                <p className="text-sm text-muted-foreground mt-1">With AltDump</p>
              </div>
            </div>
          </div>

          {/* Key insight */}
          <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border-2 border-accent/40 rounded-lg p-8 md:p-12 text-center">
            <p className="text-lg md:text-2xl text-foreground space-y-4">
              <span className="font-bold text-accent block text-3xl md:text-4xl">This isn't filename search.</span>
              <span className="font-bold text-foreground block text-2xl md:text-3xl leading-relaxed">Search any sentence from any file — and find it instantly.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
