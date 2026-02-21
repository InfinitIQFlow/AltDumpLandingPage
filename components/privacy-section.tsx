'use client'

const LockIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm6-10V7a3 3 0 00-3-3H9a3 3 0 00-3 3v2h6z" />
  </svg>
)

const ServerIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2m0 0a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2m0 0V9a2 2 0 014 0v3m0 0h6V9a2 2 0 014 0v3" />
  </svg>
)

const DatabaseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
)

const CheckmarkIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
)

export default function PrivacySection() {
  const privacyPoints = [
    { title: 'Runs Locally', desc: 'AltDump operates entirely on your device' },
    { title: 'No Uploads', desc: 'Your files never leave your machine' },
    { title: 'No Cloud Servers', desc: 'No external processing, ever' },
    { title: 'No Syncing', desc: 'Zero background data transmission' }
  ]

  const howItWorks = [
    { step: 'Index', desc: 'Files indexed locally on your device' },
    { step: 'Process', desc: 'Content processed in secure local database' },
    { step: 'Search', desc: 'Instant results from local index' },
    { step: 'Offline', desc: 'No internet connection required' }
  ]

  return (
    <section className="w-full py-24 md:py-32 bg-gradient-to-b from-background to-slate-900/10 border-b border-border">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-24">
          {/* Main heading */}
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground text-balance leading-tight">
              Your Data Never Leaves Your Machine.
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Complete privacy by design. Everything stays on your device.
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual element - Lock/Security illustration */}
            <div className="relative h-80 md:h-96 flex items-center justify-center order-last lg:order-first">
              <style>{`
                @keyframes orbit-glow {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
                @keyframes pulse-glow {
                  0%, 100% { opacity: 0.4; }
                  50% { opacity: 1; }
                }
                .protection-glow {
                  animation: orbit-glow 6s linear infinite;
                }
                .pulse-protection {
                  animation: pulse-glow 3s ease-in-out infinite;
                }
              `}</style>
              <div className="relative w-64 h-64 flex items-center justify-center">
                {/* Rotating orbit glow */}
                <div className="protection-glow absolute inset-0">
                  <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-teal-500 border-r-teal-500/70 border-b-transparent border-l-teal-500/30 shadow-2xl shadow-teal-500/40" />
                </div>

                {/* Animated pulsing glow background */}
                <div className="pulse-protection absolute inset-0 rounded-full bg-gradient-to-br from-teal-500/15 via-transparent to-emerald-500/15 blur-3xl" />
                
                {/* Concentric rings */}
                <div className="absolute inset-0 rounded-full border border-teal-500/25" />
                <div className="absolute inset-8 rounded-full border border-teal-500/20" />
                <div className="absolute inset-16 rounded-full border border-teal-500/15" />

                {/* Center lock icon */}
                <div className="relative z-10 flex flex-col items-center gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl ring-2 ring-teal-400/20">
                    <div className="text-white">
                      <LockIcon />
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 font-medium tracking-wide uppercase">Protected</p>
                </div>

                {/* Floating icons */}
                <div className="absolute -top-4 left-8 w-12 h-12 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-300 shadow-lg hover:shadow-xl transition-all duration-300">
                  <DatabaseIcon />
                </div>
                <div className="absolute -bottom-4 right-8 w-12 h-12 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-300 shadow-lg hover:shadow-xl transition-all duration-300">
                  <ServerIcon />
                </div>
              </div>
            </div>

            {/* Right: Privacy points */}
            <div className="space-y-8">
              <div className="space-y-5">
                {privacyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-teal-500/30 to-emerald-500/30 border border-teal-500/50 flex items-center justify-center mt-1 group-hover:shadow-lg group-hover:shadow-teal-500/30 transition-all duration-300">
                      <CheckmarkIcon />
                    </div>
                    <div>
                      <p className="text-slate-200 font-semibold">{point.title}</p>
                      <p className="text-slate-400 text-sm mt-1">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Offline badge */}
              <div className="mt-10 pt-8 border-t border-slate-700/50">
                <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg mb-3">
                  <p className="text-xs text-emerald-400 font-semibold uppercase tracking-widest">Philosophy</p>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-slate-100">
                  Offline by default.
                  <span className="block text-teal-400 mt-2 text-xl">That's truly powerful.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: DatabaseIcon, title: 'Local First', desc: 'All indexing and processing happens locally' },
              { icon: LockIcon, title: 'Zero Uploads', desc: 'Files never transmitted to external servers' },
              { icon: ServerIcon, title: 'No Dependencies', desc: 'Works completely offline without internet' }
            ].map((indicator, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-xl p-8 hover:from-slate-800/60 hover:to-slate-900/60 hover:border-slate-600/70 transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-lg mb-4 border border-teal-500/30 group-hover:shadow-lg group-hover:shadow-teal-500/20 transition-all duration-300">
                  <indicator.icon />
                </div>
                <h4 className="text-lg font-semibold text-slate-100 mb-2">{indicator.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{indicator.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
