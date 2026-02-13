'use client'

export default function FinalCTA() {
  const handleBuyClick = () => {
    window.location.href = 'https://dodopayments.com/checkout?product=altdump-earlyaccess'
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-y border-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-balance">
          Stop Re-Searching Your Own Brain.
        </h2>
        
        <button onClick={handleBuyClick} className="px-10 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors mb-6 text-lg">
          Get Alt Dump — $15 Lifetime
        </button>
        
        <p className="text-muted-foreground">
          Windows only. Early Access price available for limited time.
        </p>
      </div>
    </section>
  )
}
