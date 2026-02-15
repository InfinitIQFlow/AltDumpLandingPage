'use client'

const StudentIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 12.472V21h20v-8.528C22 10.998 17.5 6.253 12 6.253z" />
  </svg>
)

const DeveloperIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m0 0L4 7m8 4v10l8-4v-10M4 7v10l8 4" />
  </svg>
)

const ResearcherIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5a4 4 0 100-8 4 4 0 000 8z" />
  </svg>
)

export default function PersonaCardsSection() {
  const personas = [
    {
      icon: <StudentIcon />,
      title: 'Student',
      description: 'Find any line from any note.',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: <DeveloperIcon />,
      title: 'Developer',
      description: 'Search logic. Not filenames.',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: <BriefcaseIcon />,
      title: 'Office Professional',
      description: 'Instant answers in meetings.',
      color: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      icon: <ResearcherIcon />,
      title: 'Researcher/Creator',
      description: 'Your second brain.',
      color: 'from-amber-500/20 to-orange-500/20'
    }
  ]

  return (
    <section className="w-full py-20 md:py-28 bg-background border-b border-border">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-16">
          {/* Section heading */}
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Built For How You Actually Work
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you're studying, coding, or managing chaos
            </p>
          </div>

          {/* Persona Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personas.map((persona, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${persona.color} border border-border rounded-xl p-8 flex flex-col items-center text-center space-y-4 hover:border-accent/50 hover:shadow-lg transition-all transform hover:scale-105`}
              >
                <div className="text-foreground">
                  {persona.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-foreground">
                    {persona.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {persona.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
