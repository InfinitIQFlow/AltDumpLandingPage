const TargetIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const ChainIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
)

const CalendarIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const BarChartIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const DocumentIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const TagsIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
  </svg>
)

const BellIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
)

const ShieldIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
)

export default function RoadmapSection() {
  const roadmapItems = [
    { icon: <TargetIcon />, title: 'Smart resurfacing', subtitle: 'Items you often open' },
    { icon: <ChainIcon />, title: 'Auto linking', subtitle: 'Related content suggestions' },
    { icon: <CalendarIcon />, title: 'Timeline browsing', subtitle: 'Browse by time, not folders' },
    { icon: <BarChartIcon />, title: 'Frequent detection', subtitle: 'Spot your most used items' },
    { icon: <DocumentIcon />, title: 'Summarize & compare', subtitle: 'Extract action items locally' },
    { icon: <TagsIcon />, title: 'Bulk tagging', subtitle: 'Tag multiple items at once' },
    { icon: <BellIcon />, title: 'Reminders', subtitle: 'Smart notifications' },
    { icon: <ShieldIcon />, title: 'Encryption & backup', subtitle: 'Local vault protection' },
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
                <div className="text-foreground">{item.icon}</div>
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
