export default function IntelligentMemory() {
  const features = [
    'Instant search across everything you save',
    'Automatic tagging and categorization',
    'Smart deduplication removes redundant saves',
    'Full-text search includes images and videos',
    'No indexing delays — everything is searchable immediately',
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-y border-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">More Than Storage</h2>
        
        <div className="text-center mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Alt Dump doesn't ask you to organize.
            <br />
            <span className="text-foreground font-semibold">It quietly organizes for you.</span>
          </p>
        </div>

        <div className="bg-background/50 border border-secondary/50 rounded-lg p-10">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <p className="text-foreground leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Everything runs locally on your machine. Your data stays yours.
        </p>
      </div>
    </section>
  )
}
