import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-512x512-Aq3NsCwi10DW2kAHDltlutLLBU0GF5.png"
                alt="AltDump logo"
                className="w-6 h-6"
              />
              <span className="font-semibold text-foreground">AltDump</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Your offline AI-powered vault.
            </p>
          </div>
          
          <nav className="flex gap-8 text-sm text-muted-foreground">
            <Link href="/#features" className="hover:text-foreground transition-colors">Features</Link>
            <Link href="/#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
            <Link href="/#faq" className="hover:text-foreground transition-colors">FAQ</Link>
          </nav>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {year} AltDump. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
