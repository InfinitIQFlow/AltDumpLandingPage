export default function ValueProposition() {
  const items = [
    'Global shortcut to dump anything instantly',
    'AI-powered natural language search',
    'Works 100% offline — including AI',
    'No account required',
    'No subscription',
    'One-time purchase',
    'Private by design',
    'Fast (<50ms UI response)',
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-y border-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Why Alt Dump?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-background/50 border border-secondary/50 rounded-lg hover:border-secondary/80 transition-colors">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-lg text-foreground leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
