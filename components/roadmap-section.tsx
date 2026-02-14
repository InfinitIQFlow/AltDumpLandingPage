export default function RoadmapSection() {
  const roadmapItems = [
    { icon: '🎯', title: 'Smart resurfacing', subtitle: 'Items you often open' },
    { icon: '🔗', title: 'Auto linking', subtitle: 'Related content suggestions' },
    { icon: '📅', title: 'Timeline browsing', subtitle: 'Browse by time, not folders' },
    { icon: '📊', title: 'Frequent detection', subtitle: 'Spot your most used items' },
    { icon: '📝', title: 'Summarize & compare', subtitle: 'Extract action items locally' },
    { icon: '🏷️', title: 'Bulk tagging', subtitle: 'Tag multiple items at once' },
    { icon: '🔔', title: 'Reminders', subtitle: 'Smart notifications' },
    { icon: '🔐', title: 'Encryption & backup', subtitle: 'Local vault protection' },
  ]

  return (
    <section className="w-full py-20 md:py-28 bg-secondary/20 border-y border-border">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-16">
          {/* Section heading */}
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Upcoming Features
            </h2>
            <p className="text-lg text-muted-foreground">
              All included free for early access buyers.
            </p>
          </div>

          {/* Roadmap grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-background border border-border rounded-lg p-6 flex flex-col items-center text-center space-y-3 hover:border-accent/50 transition-colors"
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Bottom callout */}
          <div className="text-center space-y-4 pt-8 border-t border-border">
            <p className="text-foreground font-semibold">
              All updates are free for lifetime license holders.
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Once these features ship, the price will increase. Lock in your lifetime license at early bird pricing today.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
