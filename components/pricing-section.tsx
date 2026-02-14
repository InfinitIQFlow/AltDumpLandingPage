'use client'

import { useCheckout } from '@/hooks/use-checkout'

export default function PricingSection() {
  const { createCheckout, isLoading, error } = useCheckout()

  const handleBuyClick = () => {
    createCheckout()
  }

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Early Access Pricing</h2>
      
      <div className="text-center mb-12">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Alt Dump is currently in active development.
          <br />
          Buy now at the Early Access price.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <div className="bg-secondary/30 border border-secondary rounded-lg p-6">
          <h3 className="font-semibold text-muted-foreground text-sm mb-3">You get:</h3>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Lifetime license
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              All future updates included
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No subscription ever
            </li>
          </ul>
        </div>

        <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 flex flex-col justify-center">
          <div className="mb-6">
            <p className="text-sm text-muted-foreground mb-2">Early Access Price</p>
            <p className="text-4xl font-bold">$12</p>
            <p className="text-sm text-muted-foreground mt-2">Future Price: $29</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <button 
          onClick={handleBuyClick} 
          disabled={isLoading}
          className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors mb-4 inline-block disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Loading...' : 'Buy Now — $12'}
        </button>
        {error && (
          <p className="text-sm text-red-500 mb-2" role="alert">
            {error}. Check that DODO_PAYMENTS_API_KEY and DODO_PRODUCT_ID are set in .env.local.
          </p>
        )}
        <p className="text-sm text-muted-foreground">One-time payment. Yours forever.</p>
      </div>

      <p className="text-center text-sm text-muted-foreground border-t border-secondary pt-8">
        Price increases as major features ship.
      </p>
    </section>
  )
}
