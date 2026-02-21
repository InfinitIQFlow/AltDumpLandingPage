'use client'

import { useCheckout } from '@/hooks/use-checkout'

export default function PricingSection() {
  const { createCheckout, isLoading, error } = useCheckout()

  const handleBuyClick = () => {
    createCheckout()
  }

  return (
    <section id="pricing" className="w-full py-20 md:py-28 bg-background border-b border-border">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Section heading */}
          <div className="text-center space-y-3 fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Own Your Private Vault
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you capture stays private, secure, and searchable forever.
            </p>
          </div>

          {/* Pricing card */}
          <div className="relative fade-in-up flex justify-center">
            <div className="bg-gradient-to-br from-secondary/80 to-secondary/40 border border-accent/30 rounded-2xl p-12 text-center space-y-8 smooth-glow transition-all duration-300 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/20 max-w-sm">
              {/* Price */}
              <div className="space-y-2">
                <div className="inline-block">
                  <p className="text-5xl md:text-6xl font-bold text-accent">$12</p>
                  <p className="text-xs text-muted-foreground mt-2">One-time payment, Lifetime access</p>
                </div>
              </div>

              {/* What you get */}
              <div className="space-y-6">
                <ul className="space-y-4 max-w-md mx-auto text-left">
                  <li className="flex items-start gap-3 fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">Windows 10/11</span>
                  </li>
                  <li className="flex items-start gap-3 fade-in-up" style={{ animationDelay: '0.15s' }}>
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">Lifetime license</span>
                  </li>
                  <li className="flex items-start gap-3 fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">One-time payment</span>
                  </li>
                  <li className="flex items-start gap-3 fade-in-up" style={{ animationDelay: '0.25s' }}>
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">All future updates included</span>
                  </li>
                  <li className="flex items-start gap-3 fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">Unlimited storage</span>
                  </li>
                  <li className="flex items-start gap-3 fade-in-up" style={{ animationDelay: '0.35s' }}>
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">Offline AI processing</span>
                  </li>
                  <li className="flex items-start gap-3 fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">Smart semantic search</span>
                  </li>
                </ul>
              </div>

              <button 
                onClick={handleBuyClick} 
                disabled={isLoading}
                className="px-8 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
              >
                {isLoading ? 'Processing...' : 'Get AltDump'}
              </button>

              {/* Security note */}
              <div className="pt-2">
                <p className="text-xs text-muted-foreground">
                  Secure payments via Dodo Payments
                </p>
              </div>

              {error && (
                <p className="text-sm text-destructive" role="alert">
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
