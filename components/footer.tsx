export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-secondary bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xs">AD</span>
              </div>
              <span className="font-semibold">Alt Dump</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Offline AI-powered memory vault for Windows.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {year} Alt Dump. All rights reserved.</p>
          <p>Built for developers who value their privacy.</p>
        </div>
      </div>
    </footer>
  )
}
