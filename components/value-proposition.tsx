export default function ValueProposition() {
  const captureSteps = [
    {
      icon: '⌨️',
      label: 'Hotkey',
      description: 'Press Alt+Shift+D'
    },
    {
      icon: '📝',
      label: 'Input',
      description: 'Paste or type'
    },
    {
      icon: '🖱️',
      label: 'Drag & Drop',
      description: 'Drop files instantly'
    },
    {
      icon: '📸',
      label: 'Screenshot',
      description: 'Capture screen'
    },
    {
      icon: '🎥',
      label: 'Video',
      description: 'Extract metadata'
    },
    {
      icon: '📄',
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
                <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary border border-border rounded-lg flex items-center justify-center text-3xl md:text-4xl hover:border-accent/50 transition-colors">
                  {step.icon}
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground text-sm md:text-base">{step.label}</p>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow flow visual */}
          <div className="relative py-8">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2"></div>
            <div className="relative flex justify-between items-center px-4">
              <div className="text-center text-muted-foreground text-sm flex-1">
                <span className="inline-block px-3 py-2 bg-background">All items funneled</span>
              </div>
              <div className="hidden md:block text-2xl text-muted-foreground">→</div>
              <div className="text-center text-muted-foreground text-sm flex-1">
                <span className="inline-block px-3 py-2 bg-background">Into your vault</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
