'use client'

const PDFIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const ImageIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const VideoIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const PresentationIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1zm4 0v16a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2a1 1 0 00-1 1zm4 0v16a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2a1 1 0 00-1 1z" />
  </svg>
)

const DocumentIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const ChartIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const NoteIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const CodeIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const BulbIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5a4 4 0 100-8 4 4 0 000 8z" />
  </svg>
)

export default function MemorySection() {
  const dumpItems = [
    { icon: <PDFIcon />, label: 'PDFs', color: 'text-blue-500' },
    { icon: <ImageIcon />, label: 'Images', color: 'text-cyan-500' },
    { icon: <VideoIcon />, label: 'Videos', color: 'text-purple-500' },
    { icon: <PresentationIcon />, label: 'PowerPoints', color: 'text-orange-500' },
    { icon: <DocumentIcon />, label: 'Word docs', color: 'text-blue-400' },
    { icon: <ChartIcon />, label: 'Excel sheets', color: 'text-green-500' },
    { icon: <NoteIcon />, label: 'Notes', color: 'text-amber-500' },
    { icon: <CodeIcon />, label: 'Code snippets', color: 'text-slate-400' },
    { icon: <BulbIcon />, label: 'Ideas', color: 'text-yellow-500' },
  ]

  return (
    <>
      {/* Build a Memory You Can Search Section */}
      <section className="w-full py-24 md:py-32 bg-background border-b border-border">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="space-y-12">
            {/* Heading */}
            <div className="text-center fade-in-down">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Build a memory you can search.
              </h2>
            </div>

            {/* Large Demo Image */}
            <div className="flex justify-center fade-in-up">
              <div className="w-full max-w-5xl rounded-2xl overflow-hidden border border-border shadow-2xl hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300">
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
            <div className="space-y-6 fade-in-up">
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
            <div className="space-y-8 fade-in-up">
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
                        className="flex items-center gap-3 group cursor-pointer transition-all fade-in-up"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <div className={`text-foreground group-hover:text-accent transition-colors group-hover:scale-110 transition-transform`}>
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
                    <style>{`
                      @keyframes float-1 {
                        0%, 100% { transform: translateY(0px) rotateZ(-12deg); }
                        50% { transform: translateY(-20px) rotateZ(-12deg); }
                      }
                      @keyframes float-2 {
                        0%, 100% { transform: translateY(0px) rotateZ(12deg); }
                        50% { transform: translateY(-15px) rotateZ(12deg); }
                      }
                      @keyframes float-3 {
                        0%, 100% { transform: translateY(0px) rotateZ(-6deg); }
                        50% { transform: translateY(-25px) rotateZ(-6deg); }
                      }
                      @keyframes float-4 {
                        0%, 100% { transform: translateY(0px) rotateZ(6deg); }
                        50% { transform: translateY(-18px) rotateZ(6deg); }
                      }
                      @keyframes float-5 {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-22px); }
                      }
                      @keyframes float-6 {
                        0%, 100% { transform: translateY(0px) rotateZ(45deg); }
                        50% { transform: translateY(-16px) rotateZ(45deg); }
                      }
                      .card-float-1 { animation: float-1 4s ease-in-out infinite; }
                      .card-float-2 { animation: float-2 4.5s ease-in-out infinite 0.5s; }
                      .card-float-3 { animation: float-3 5s ease-in-out infinite 1s; }
                      .card-float-4 { animation: float-4 4.8s ease-in-out infinite 0.3s; }
                      .card-float-5 { animation: float-5 5.2s ease-in-out infinite 0.8s; }
                      .card-float-6 { animation: float-6 4.3s ease-in-out infinite 0.2s; }
                    `}</style>

                    <div className="card-float-1 absolute top-0 right-0 w-32 h-40 bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow">
                      <div className="text-blue-500 text-4xl">
                        <PDFIcon />
                      </div>
                    </div>

                    <div className="card-float-2 absolute top-20 left-0 w-32 h-32 bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow">
                      <div className="text-cyan-500 text-4xl">
                        <ImageIcon />
                      </div>
                    </div>

                    <div className="card-float-3 absolute bottom-10 left-12 w-36 h-36 bg-slate-500/10 border border-slate-500/30 rounded-lg p-4 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-slate-500/20 hover:shadow-slate-500/40 transition-shadow">
                      <div className="text-slate-400 scale-150 text-4xl">
                        <CodeIcon />
                      </div>
                    </div>

                    <div className="card-float-4 absolute bottom-0 right-10 w-32 h-40 bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-shadow">
                      <div className="text-purple-500 scale-150 text-4xl">
                        <VideoIcon />
                      </div>
                    </div>

                    <div className="card-float-5 absolute top-32 right-20 w-28 h-28 bg-yellow-500/10 border border-yellow-500/30 rounded-full p-3 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 transition-shadow">
                      <div className="text-yellow-500 scale-125 text-4xl">
                        <BulbIcon />
                      </div>
                    </div>

                    <div className="card-float-6 absolute bottom-20 right-32 w-24 h-24 bg-amber-500/10 border border-amber-500/30 rounded-lg p-2 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-shadow">
                      <div className="text-amber-500 scale-125 text-4xl">
                        <NoteIcon />
                      </div>
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
