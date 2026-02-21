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
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Own Your Private Vault
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you capture stays private, secure, and searchable forever.
            </p>
          </div>

          {/* Pricing card */}
          <div className="relative">
            <div className="bg-secondary border border-accent/40 rounded-xl p-12 text-center space-y-8 hover:border-accent/60 transition-colors shadow-lg hover:shadow-xl">
              {/* What you get */}
              <div className="space-y-6">
                <div className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 border border-accent/40 shadow-[0_0_20px_rgba(var(--color-accent),0.15)]">
                  <p className="text-lg md:text-xl font-bold text-accent">
                    What You Get
                  </p>
                </div>
                
                <ul className="space-y-3 max-w-md mx-auto">
                  <li className="flex items-center gap-3 text-foreground">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Lifetime license, one-time payment
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    All future updates included
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    No subscription, no monthly fees
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Everything stays 100% private and offline
                  </li>
                </ul>
              </div>

              <button 
                onClick={handleBuyClick} 
                disabled={isLoading}
                className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg disabled:opacity-50"
              >
                {isLoading ? 'Processing...' : 'Get Your Private Vault Now'}
              </button>

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
