'use client'

import { useCheckout } from '@/hooks/use-checkout'

export default function FinalCTA() {
  const { createCheckout, isLoading } = useCheckout()

  const handleBuyClick = () => {
    createCheckout()
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-y border-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-balance">
          Stop Re-Searching Your Own Brain.
        </h2>
        
        <button 
          onClick={handleBuyClick} 
          disabled={isLoading}
          className="px-10 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors mb-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Loading...' : 'Get Alt Dump — $12 Lifetime'}
        </button>
        
        <p className="text-muted-foreground">
          Windows only. Early Access price available for limited time.
        </p>
      </div>
    </section>
  )
}
