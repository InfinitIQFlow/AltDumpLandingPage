export default function PerformanceSection() {
  const metrics = [
    {
      label: 'Embeddings precomputed on save',
      description: 'No re-embedding on search',
    },
    {
      label: 'Lazy-loaded AI models',
      description: 'Only load when needed',
    },
    {
      label: 'Hybrid fuzzy + semantic scoring',
      description: 'Best of both worlds',
    },
    {
      label: 'Target <50ms UI response',
      description: 'Instant feels fast',
    },
    {
      label: 'AI search under 1.5s',
      description: 'Or optimized further',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        Fast or It Doesn't Ship
      </h2>
      
      <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
        Performance isn't an afterthought. It's built into every decision.
      </p>

      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-secondary/30 border border-secondary rounded-lg p-6 flex items-start gap-6 hover:border-secondary/80 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
              <span className="text-accent font-semibold text-sm">{index + 1}</span>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{metric.label}</h3>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
