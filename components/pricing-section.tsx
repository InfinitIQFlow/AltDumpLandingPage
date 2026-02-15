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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Early Access Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Limited-time offer. Price increases as we ship features.
            </p>
          </div>

          {/* Pricing card */}
          <div className="relative">
            {/* Early Access Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide">
                Early Access
              </div>
            </div>
            
            <div className="bg-secondary border border-accent/40 rounded-xl p-12 text-center space-y-8 hover:border-accent/60 transition-colors shadow-lg hover:shadow-xl">
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm uppercase tracking-wide">Current Price</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-6xl md:text-7xl font-bold text-foreground">$12</span>
                <span className="text-muted-foreground">/lifetime</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 justify-center">
              <div className="space-y-3">
                <p className="font-semibold text-sm text-muted-foreground uppercase">What you get:</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2 text-foreground">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Lifetime license
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    All future updates included
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    No subscription ever
                  </li>
                </ul>
              </div>

              <div className="w-px bg-border hidden md:block"></div>

              <div className="space-y-3">
                <p className="font-semibold text-sm text-muted-foreground uppercase">Price promise:</p>
                <div className="space-y-2 text-left">
                  <p className="text-foreground">
                    <span className="text-accent">Early: $12</span>
                    <span className="text-muted-foreground text-sm">(you get this)</span>
                  </p>
                  <p className="text-muted-foreground">
                    Future: $29
                    <span className="text-xs">(locked in for early buyers)</span>
                  </p>
                </div>
              </div>
            </div>

            <button 
              onClick={handleBuyClick} 
              disabled={isLoading}
              className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg disabled:opacity-50"
            >
              {isLoading ? 'Processing...' : 'Buy Early Access Now'}
            </button>

            {error && (
              <p className="text-sm text-destructive" role="alert">
                {error}. Check environment variables.
              </p>
            )}
            </div>
          </div>

          {/* Benefits callout */}
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 text-center">
            <p className="text-sm text-foreground">
              <span className="font-semibold">Limited offer:</span> Early access buyers pay permanently locked price. Buy now before price increases.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
