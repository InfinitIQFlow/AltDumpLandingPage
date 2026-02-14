const HotkeyIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m6-6H6" />
  </svg>
)

const TextIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const DragDropIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
  </svg>
)

const ScreenshotIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const VideoIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const PDFIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
)

export default function ValueProposition() {
  const captureSteps = [
    {
      icon: <HotkeyIcon />,
      label: 'Hotkey',
      description: 'Press Alt+Shift+D'
    },
    {
      icon: <TextIcon />,
      label: 'Input',
      description: 'Paste or type'
    },
    {
      icon: <DragDropIcon />,
      label: 'Drag & Drop',
      description: 'Drop files instantly'
    },
    {
      icon: <ScreenshotIcon />,
      label: 'Screenshot',
      description: 'Capture screen'
    },
    {
      icon: <VideoIcon />,
      label: 'Video',
      description: 'Extract metadata'
    },
    {
      icon: <PDFIcon />,
      label: 'PDF',
      description: 'OCR & index'
    }
  ]

  return (
    <section className="w-full py-20 md:py-28 bg-background border-b border-border">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-16">
          {/* Section heading */}
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Capture Everything
            </h2>
            <p className="text-lg text-muted-foreground">
              Press hotkey or drag files — AltDump catches everything.
            </p>
          </div>

          {/* Visual flow */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {captureSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary border border-border rounded-xl flex items-center justify-center text-foreground hover:border-accent/50 hover:bg-secondary/80 transition-all">
                  {step.icon}
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground text-sm md:text-base">{step.label}</p>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow flow visual with video demo */}
          <div className="relative py-8">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2"></div>
            <div className="relative flex items-center gap-8 md:gap-12 px-4">
              {/* Video Demo */}
              <div className="flex-shrink-0">
                <video
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dragdemo-YuAN34LWTZdtslw7mVuqE0mjMi5sOK.mp4"
                  autoPlay
                  loop
                  muted
                  className="w-56 md:w-80 border border-border rounded-lg object-contain"
                />
              </div>

              {/* Text and flow */}
              <div className="flex-1 flex items-center justify-start gap-4 md:gap-8 pl-8 md:pl-16">
                <div className="text-center text-muted-foreground text-xs md:text-sm whitespace-nowrap">
                  <span className="inline-block px-2 md:px-3 py-2 bg-background">All items funneled</span>
                </div>
                <div className="hidden md:block text-muted-foreground flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="text-center text-muted-foreground text-xs md:text-sm whitespace-nowrap">
                  <span className="inline-block px-2 md:px-3 py-2 bg-background">Into your vault</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
