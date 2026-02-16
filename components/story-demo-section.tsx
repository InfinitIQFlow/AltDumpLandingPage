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
              From frustration to instant results in seconds
            </p>
          </div>

          {/* Featured Demo Block - inline video, no click to open */}
          <div className="flex flex-col gap-8 items-center">
            <div className="relative w-full max-w-3xl bg-secondary rounded-xl overflow-hidden border border-border aspect-video flex items-center justify-center shadow-2xl">
              <video
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-0mDceozWtUKUAT6qsMSGLVZyq9CRXm.mp4"
                className="w-full h-full object-cover"
                poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-14%20141929-y3uH8BTEoRqW7rUNJnyfpaOKNz9NTE.png"
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
                From Chaos to Instant
              </h3>
              <p className="text-lg text-muted-foreground">
                Watch what happens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
