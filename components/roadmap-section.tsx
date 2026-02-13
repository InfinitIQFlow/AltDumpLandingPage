export default function RoadmapSection() {
  const updates = [
    'Resurfaces items you often open',
    'Suggests related content when viewing an item',
    'Connects screenshots to notes automatically',
    'Turns saved content into a timeline',
    'Lets you summarize, compare, or extract action items from multiple items (locally)',
    'Smarter contextual resurfacing',
    'Enhanced AI ranking optimization',
    'Lightweight image understanding improvements',
    'Video transcript search refinement',
    'Advanced timeline navigation',
    'Auto summarization of older content',
    'Encrypted vault mode',
    'Cross-device backup tools',
    'Improved UI customization',
    'Faster indexing engine',
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-y border-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          Planned Updates (Included Free)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {updates.map((update, index) => (
            <div key={index} className="flex items-start gap-4 bg-background/50 border border-secondary/50 rounded-lg p-6 hover:border-secondary/80 transition-colors">
              <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-foreground">{update}</span>
            </div>
          ))}
        </div>

        <div className="text-center border-t border-secondary pt-8">
          <p className="text-muted-foreground mb-4">All future updates are free for Early Access buyers.</p>
          <p className="text-sm text-muted-foreground italic">After these planned updates launch, the regular price will increase to $39.</p>
        </div>
      </div>
    </section>
  )
}
