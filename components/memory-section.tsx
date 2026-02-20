'use client'

export default function MemorySection() {
  const dumpItems = [
    { icon: '📄', label: 'PDFs', color: 'text-red-500' },
    { icon: '🖼️', label: 'Images', color: 'text-blue-500' },
    { icon: '🎥', label: 'Videos', color: 'text-purple-500' },
    { icon: '📊', label: 'PowerPoints', color: 'text-orange-500' },
    { icon: '📝', label: 'Word docs', color: 'text-blue-400' },
    { icon: '📈', label: 'Excel sheets', color: 'text-green-500' },
    { icon: '📓', label: 'Notes', color: 'text-yellow-500' },
    { icon: '💻', label: 'Code snippets', color: 'text-pink-500' },
    { icon: '💡', label: 'Ideas', color: 'text-amber-400' },
  ]

  return (
    <>
      {/* Build a Memory You Can Search Section */}
      <section className="w-full py-24 md:py-32 bg-background border-b border-border">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="space-y-12">
            {/* Heading */}
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground text-balance">
                Build a memory you can search.
              </h2>
            </div>

            {/* Large Demo Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-5xl rounded-2xl overflow-hidden border border-border shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-14%20141929-WNrI9r3RotEmWHD5iFKaBd5iOd3zfH.png"
                  alt="AltDump interface showing vault of organized files"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is AltDump Section */}
      <section className="w-full py-20 md:py-28 bg-secondary/30 border-b border-border">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* What Is AltDump */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                What Is AltDump?
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  AltDump is your private memory vault for files, screenshots, code, and ideas.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Instead of leaving files scattered across folders and apps, you drop them into one place.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Then you can search everything instantly.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border my-8" />

            {/* What Can You Dump */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                What Can You Dump?
              </h3>

              {/* Items Grid with Visuals */}
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  {/* Left: List of items */}
                  <div className="flex flex-col justify-center space-y-4">
                    {dumpItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 group cursor-pointer transition-all"
                      >
                        <div className={`text-3xl group-hover:scale-110 transition-transform`}>
                          {item.icon}
                        </div>
                        <span className="text-lg text-foreground group-hover:text-primary transition-colors font-medium">
                          {item.label}
                        </span>
                      </div>
                    ))}
                    <div className="pt-6 border-t border-border mt-6">
                      <p className="text-lg font-semibold text-primary">
                        If it matters — dump it.
                      </p>
                    </div>
                  </div>

                  {/* Right: Visual showcase with floating elements */}
                  <div className="relative h-96 md:h-auto flex items-center justify-center">
                    {/* Floating visual cards */}
                    <div className="absolute top-0 right-0 w-32 h-40 bg-red-500/10 border border-red-500/30 rounded-lg p-4 transform -rotate-12 flex items-center justify-center backdrop-blur-sm">
                      <div className="text-5xl">📄</div>
                    </div>

                    <div className="absolute top-20 left-0 w-32 h-32 bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 transform rotate-12 flex items-center justify-center backdrop-blur-sm">
                      <div className="text-5xl">🖼️</div>
                    </div>

                    <div className="absolute bottom-10 left-12 w-36 h-36 bg-green-500/10 border border-green-500/30 rounded-lg p-4 transform -rotate-6 flex items-center justify-center backdrop-blur-sm">
                      <div className="text-5xl">💻</div>
                    </div>

                    <div className="absolute bottom-0 right-10 w-32 h-40 bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 transform rotate-6 flex items-center justify-center backdrop-blur-sm">
                      <div className="text-5xl">🎥</div>
                    </div>

                    <div className="absolute top-32 right-20 w-28 h-28 bg-amber-500/10 border border-amber-500/30 rounded-full p-3 flex items-center justify-center backdrop-blur-sm">
                      <div className="text-4xl">💡</div>
                    </div>

                    <div className="absolute bottom-20 right-32 w-24 h-24 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-2 transform rotate-45 flex items-center justify-center backdrop-blur-sm">
                      <div className="text-3xl">📓</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
