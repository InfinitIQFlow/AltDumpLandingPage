'use client'

import Link from 'next/link'
import { useCheckout } from '@/hooks/use-checkout'

export default function Header() {
  const { createCheckout, isLoading } = useCheckout()

  const handleBuyClick = () => {
    createCheckout()
  }

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-512x512-Aq3NsCwi10DW2kAHDltlutLLBU0GF5.png"
            alt="AltDump logo"
            className="w-8 h-8"
          />
          <span className="font-bold text-lg text-foreground">AltDump</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="/#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="/#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </Link>
        </nav>
        
        <button 
          onClick={handleBuyClick} 
          disabled={isLoading}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {isLoading ? 'Loading...' : 'Get Started'}
        </button>
      </div>
    </header>
  )
}
