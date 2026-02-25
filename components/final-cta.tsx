'use client'

export default function FinalCTA() {
  const handleMicrosoftStoreClick = () => {
    window.open('https://apps.microsoft.com/detail/9NH5C9V4D2MM?hl=en-us&gl=IN&ocid=pdpshare', '_blank')
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-y border-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-balance">
          Stop Re-Searching Your Own Brain.
        </h2>
        
        <button 
          onClick={handleMicrosoftStoreClick}
          className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 mb-6 text-lg hover:scale-105 flex items-center justify-center gap-2 mx-auto group"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" />
          </svg>
          Get AltDump on Microsoft Store
        </button>
        
        <p className="text-muted-foreground">
          Try free for 14 days. Windows 10/11. No payment needed to start.
        </p>
      </div>
    </section>
  )
}
