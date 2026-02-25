'use client'

export default function PricingSection() {
  const handleMicrosoftStoreClick = () => {
    window.open('https://apps.microsoft.com/', '_blank')
  }

  return (
    <section id="pricing" className="w-full py-20 md:py-28 bg-background border-b border-border">
      <div className="container px-4 md:px-6 max-w-2xl mx-auto">
        <div className="space-y-8 flex flex-col items-center">
          {/* Pricing card */}
          <div className="relative fade-in-up w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-3xl blur-xl opacity-60"></div>
            <div className="relative bg-secondary/50 border border-blue-400/40 rounded-3xl p-8 space-y-6 transition-all duration-300">
              {/* Title and Badge */}
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-foreground">Available on Microsoft Store</h2>
              </div>

              {/* Price Section */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-3">
                  <p className="text-4xl font-bold text-blue-500">Free Trial — $12 Lifetime License</p>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3 fade-in-up" style={{ animationDelay: '0.05s' }}>
                  <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-2"></span>
                  <span className="text-sm text-muted-foreground">Windows 10/11</span>
                </li>

                <li className="flex items-start gap-3 fade-in-up" style={{ animationDelay: '0.15s' }}>
                  <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-2"></span>
                  <span className="text-sm text-muted-foreground">No payment needed to start</span>
                </li>
                <li className="flex items-start gap-3 fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-2"></span>
                  <span className="text-sm text-muted-foreground">All future updates included</span>
                </li>
                <li className="flex items-start gap-3 fade-in-up" style={{ animationDelay: '0.25s' }}>
                  <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-2"></span>
                  <span className="text-sm text-muted-foreground">Stores everything locally on your device</span>
                </li>
                <li className="flex items-start gap-3 fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-2"></span>
                  <span className="text-sm text-muted-foreground">Offline AI processing</span>
                </li>
                <li className="flex items-start gap-3 fade-in-up" style={{ animationDelay: '0.35s' }}>
                  <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-2"></span>
                  <span className="text-sm text-muted-foreground">Smart semantic search</span>
                </li>
              </ul>

              {/* Button */}
              <button 
                onClick={handleMicrosoftStoreClick}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2 fade-in-up group"
                style={{ animationDelay: '0.4s' }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" />
                </svg>
                <span>Get it from Microsoft Store</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Footer text */}
              <div className="pt-2 text-center">
                <p className="text-xs text-muted-foreground">
                  Secure download from Microsoft Store • Safe and trusted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
