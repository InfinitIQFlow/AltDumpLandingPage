'use client'

import Link from 'next/link'
import { useCheckout } from '@/hooks/use-checkout'

export default function Header() {
  const { createCheckout, isLoading } = useCheckout()

  const handleBuyClick = () => {
    createCheckout()
  }

  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-all duration-300 hover:scale-105">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-512x512-Aq3NsCwi10DW2kAHDltlutLLBU0GF5.png"
            alt="AltDump logo"
            className="w-8 h-8"
          />
          <span className="font-bold text-lg text-foreground">AltDump</span>
        </Link>
        
        <nav className="flex items-center gap-8">
          <Link href="/#features" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 relative group">
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
          </Link>
          <Link href="/#pricing" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 relative group">
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
          </Link>
          <Link href="/#faq" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 relative group">
            FAQ
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
