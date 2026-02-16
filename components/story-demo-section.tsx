'use client'

export default function StoryDemoSection() {
  return (
    <section className="w-full py-20 md:py-28 bg-background border-b border-border">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section heading */}
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Watch How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Watch how I find my project documents without typing the file name once.
            </p>
          </div>

          {/* Featured Demo Block - inline video, no click to open */}
          <div className="flex flex-col gap-8 items-center">
            <div className="relative w-full max-w-4xl bg-secondary rounded-xl overflow-hidden border border-border aspect-video flex items-center justify-center shadow-2xl">
              <video
                src="/demovideo.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                aria-label="Demo video: how it works"
              />
            </div>

            {/* Video description */}
            <div className="text-center space-y-2 max-w-2xl">
              <h3 className="text-2xl font-semibold text-foreground">
                Search inside every file.
              </h3>
              <p className="text-lg text-muted-foreground">
                Instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
