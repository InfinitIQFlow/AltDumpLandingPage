import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
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
