'use client'

const LockIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm6-10V7a3 3 0 00-3-3H9a3 3 0 00-3 3v2h6z" />
  </svg>
)

const ServerIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2m0 0a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2m0 0V9a2 2 0 014 0v3m0 0h6V9a2 2 0 014 0v3" />
  </svg>
)

const WifiOffIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 4.5L7.75 5m8-4l.5.5M5 8.25l.5-.5m11 11l.5.5M3 20.25v-.5a9 9 0 0118 0v.5M3.75 9l.5-.5m15.5 11l.5.5" />
  </svg>
)

const CheckmarkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
)

export default function PrivacySection() {
  const privacyPoints = [
    'AltDump runs entirely on your device.',
    'Your files are scanned locally.',
    'Nothing is uploaded.',
    'Nothing is sent to external servers.',
    'No cloud indexing.',
    'No background syncing.',
    'No hidden processing.'
  ]

  const howItWorks = [
    'Files are indexed locally on your device',
    'Content is processed in a secure local database',
    'Search happens instantly from that local index',
    'No internet connection required'
  ]

  return (
    <section className="w-full py-24 md:py-32 bg-background border-b border-border">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-20">
          {/* Main heading */}
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground text-balance leading-tight">
              Your Data Never Leaves Your Machine.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Complete privacy by design. All processing happens locally on your device.
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Visual element - Lock/Security illustration concept */}
            <div className="relative h-80 md:h-96 flex items-center justify-center">
              <div className="relative w-72 h-72 bg-gradient-to-br from-slate-100 to-slate-50 rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex items-center justify-center">
                {/* Inner decorative circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-slate-300/30" />
                    {/* Middle ring */}
                    <div className="absolute inset-8 rounded-full border-2 border-slate-300/20" />
                    {/* Center icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center shadow-lg">
                        <div className="text-white">
                          <LockIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating icons around the lock */}
                <div className="absolute top-8 left-8 w-10 h-10 bg-slate-100 rounded-lg border border-slate-300 flex items-center justify-center text-slate-600 shadow-md">
                  <ServerIcon />
                </div>
                <div className="absolute bottom-8 right-8 w-10 h-10 bg-slate-100 rounded-lg border border-slate-300 flex items-center justify-center text-slate-600 shadow-md">
                  <WifiOffIcon />
                </div>
              </div>
            </div>

            {/* Right: Privacy points */}
            <div className="space-y-8">
              <div className="space-y-4">
                {privacyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mt-0.5">
                      <CheckmarkIcon />
                    </div>
                    <p className="text-slate-700 text-lg leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              {/* Offline badge */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-500 uppercase tracking-wide font-semibold mb-3">Core Philosophy</p>
                <p className="text-2xl md:text-3xl font-bold text-slate-900">
                  Offline by default.
                  <span className="block text-emerald-600 mt-2">That's powerful.</span>
                </p>
              </div>
            </div>
          </div>

          {/* How It Works section */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 p-8 md:p-12">
            <div className="space-y-10">
              <div className="text-center space-y-3">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">How AltDump Works</h3>
                <p className="text-slate-600 max-w-2xl mx-auto">All operations are performed locally on your machine, ensuring maximum privacy and speed.</p>
              </div>

              {/* Process steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
                {howItWorks.map((step, idx) => (
                  <div key={idx} className="relative bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300">
                    {/* Step number */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      {idx + 1}
                    </div>

                    <p className="text-slate-700 font-medium pt-2">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Local Processing', desc: 'Everything happens on your machine.' },
              { title: 'Zero Uploads', desc: 'Your files never leave your device.' },
              { title: 'Works Offline', desc: 'No internet connection needed.' }
            ].map((indicator, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 p-6 text-center hover:border-slate-300 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-full mb-4">
                  {idx === 0 && <ServerIcon />}
                  {idx === 1 && <LockIcon />}
                  {idx === 2 && <WifiOffIcon />}
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{indicator.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{indicator.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
