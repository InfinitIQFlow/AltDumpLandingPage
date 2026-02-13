export default function FeaturesSection() {
  const categories = [
    {
      title: 'Capture',
      features: [
        'Global shortcut capture',
        'Save anything instantly',
        'Context capture (window title, app source)',
        'Invisible overlay workflow',
      ],
    },
    {
      title: 'Smart Search',
      features: [
        'Intent-based local AI search',
        'Time filters (today, yesterday, last week)',
        'Type filters (image, pdf, note, video)',
        'Fuzzy search + semantic ranking',
        'Exact phrase boosting',
        'Keyboard-first navigation',
        'Zero mouse dependency',
      ],
    },
    {
      title: 'Intelligence (Fully Local)',
      features: [
        'Precomputed embeddings',
        'Hybrid ranking (semantic + recency + type relevance)',
        'Strict similarity thresholding',
        'Filter-only mode for time queries',
        'Semantic mode for natural language queries',
        'Related items surfaced automatically',
        'Context linking between saved items',
      ],
    },
    {
      title: 'Organization Without Effort',
      features: [
        'Automatic content extraction pipeline',
        'Deep document-aware indexing',
        'Timeline view (browse by time instead of folders)',
        'Frequently used item detection',
        'Pin / favorites',
        'Recent dumps view',
        'Simple tags',
        'Bulk tagging from search results',
      ],
    },
    {
      title: 'Safety & Trust',
      features: [
        'Version history for items',
        'Deduplication & auto-grouping',
        'Backup & export',
        'Optional local encryption',
        'Fully offline database',
        'No telemetry',
      ],
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
        Built for People Who Think Fast
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-secondary/30 border border-secondary rounded-lg p-8 hover:border-secondary/80 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-6 text-accent">{category.title}</h3>
            <ul className="space-y-3">
              {category.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
