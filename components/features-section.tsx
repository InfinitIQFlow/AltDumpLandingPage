export default function FeaturesSection() {
  const features = [
    {
      icon: '📦',
      title: 'Multi-type dumping',
      description: 'Capture text, images, PDFs, videos & more'
    },
    {
      icon: '⚡',
      title: 'Instant local search',
      description: 'Sub-millisecond results, no network needed'
    },
    {
      icon: '🔒',
      title: 'Offline & private',
      description: 'Your data never leaves your computer'
    },
    {
      icon: '🧠',
      title: 'Smart indexing',
      description: 'AI-powered semantic search locally'
    },
    {
      icon: '👁️',
      title: 'OCR for images',
      description: 'Text extraction from screenshots & documents'
    },
    {
      icon: '🎬',
      title: 'Video metadata',
      description: 'Extract & index video information'
    },
    {
      icon: '🔗',
      title: 'Auto-linking',
      description: 'Related items surface automatically'
    },
    {
      icon: '🏷️',
      title: 'Smart tagging',
      description: 'Organize without manual effort'
    }
  ]

  return (
    <section id="features" className="w-full py-20 md:py-28 bg-background border-b border-border">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-16">
          {/* Section heading */}
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              What You Can Do
            </h2>
            <p className="text-lg text-muted-foreground">
              All your data stays local. No cloud, no subscription.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-secondary border border-border rounded-lg p-6 flex flex-col items-center text-center space-y-3 hover:border-accent/50 hover:bg-secondary/80 transition-all"
              >
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
