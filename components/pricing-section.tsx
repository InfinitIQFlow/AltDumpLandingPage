'use client'

import { useCheckout } from '@/hooks/use-checkout'

export default function PricingSection() {
  const { createCheckout, isLoading, error } = useCheckout()

  const handleBuyClick = () => {
    createCheckout()
  }

  return (
    <section id="pricing" className="w-full py-20 md:py-28 bg-background border-b border-border">
      <div className="container px-4 md:px-6 max-w-2xl mx-auto">
        <div className="space-y-8 flex flex-col items-center">
          {/* Pricing card */}
          <div className="relative fade-in-up w-full max-w-md">
            <div className="bg-secondary/50 border border-border/50 rounded-3xl p-8 space-y-6 transition-all duration-300">
              {/* Title and Badge */}
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-foreground">Lifetime License</h2>
                <p className="text-sm font-semibold text-accent">All Access Forever</p>
              </div>

              {/* Price Section */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-3">
                  <p className="text-5xl font-bold text-foreground">$12</p>
                  <p className="text-sm text-muted-foreground">USD / one-time</p>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3 fade-in-up" style={{ animationDelay: '0.05s' }}>
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></span>
                  <span className="text-sm text-muted-foreground">Windows 10/11</span>
                </li>
                <li className="flex items-start gap-3 fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></span>
                  <span className="text-sm text-muted-foreground">Lifetime license</span>
                </li>
                <li className="flex items-start gap-3 fade-in-up" style={{ animationDelay: '0.15s' }}>
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></span>
                  <span className="text-sm text-muted-foreground">One-time payment</span>
                </li>
                <li className="flex items-start gap-3 fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></span>
                  <span className="text-sm text-muted-foreground">All future updates included</span>
                </li>
                <li className="flex items-start gap-3 fade-in-up" style={{ animationDelay: '0.25s' }}>
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></span>
                  <span className="text-sm text-muted-foreground">Unlimited storage</span>
                </li>
                <li className="flex items-start gap-3 fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></span>
                  <span className="text-sm text-muted-foreground">Offline AI processing</span>
                </li>
                <li className="flex items-start gap-3 fade-in-up" style={{ animationDelay: '0.35s' }}>
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></span>
                  <span className="text-sm text-muted-foreground">Smart semantic search</span>
                </li>
              </ul>

              {/* Button */}
              <button 
                onClick={handleBuyClick} 
                disabled={isLoading}
                className="w-full px-6 py-3 bg-foreground text-background rounded-xl font-semibold hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 fade-in-up"
                style={{ animationDelay: '0.4s' }}
              >
                {isLoading ? 'Processing...' : (
                  <>
                    Get AltDump
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>

              {/* Footer text */}
              <div className="pt-2 text-center">
                <p className="text-xs text-muted-foreground">
                  Secure payments via Dodo Payments
                </p>
              </div>

              {error && (
                <p className="text-sm text-destructive text-center" role="alert">
                  {error}. Check environment variables.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
