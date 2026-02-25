'use client'

import Link from 'next/link'

export default function Header() {
  const handleMicrosoftStoreClick = () => {
    window.open('https://apps.microsoft.com/detail/9NH5C9V4D2MM?hl=en-us&gl=IN&ocid=pdpshare', '_blank')
  }

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-all duration-300 hover:scale-105">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Feb%2020%2C%202026%2C%2011_48_05%20PM-nuexSP1ovLNsklqwZbI3I8LH7jOQxS.png"
            alt="AltDump logo"
            className="w-8 h-8"
          />
          <span className="font-bold text-lg">
            <span className="text-foreground">Alt</span>
            <span className="text-accent">Dump</span>
          </span>
        </Link>
        
        <nav className="flex items-center gap-6">
          <a href="#features" onClick={(e) => handleScrollToSection(e, 'features')} className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 relative group cursor-pointer">
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
          </a>
          <a href="#pricing" onClick={(e) => handleScrollToSection(e, 'pricing')} className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 relative group cursor-pointer">
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
          </a>
          <a href="#faq" onClick={(e) => handleScrollToSection(e, 'faq')} className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 relative group cursor-pointer">
            FAQ
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
          </a>
          <button 
            onClick={handleMicrosoftStoreClick}
            className="relative px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 overflow-hidden group flex items-center gap-1"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
            <svg className="relative w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" />
            </svg>
            <span className="relative">Get it Now</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
