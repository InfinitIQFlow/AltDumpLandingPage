import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Documentation - Alt Dump',
  description: 'How to use Alt Dump: capture, search, and organize your digital memory vault on Windows.',
}

export default function DocumentationPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-4xl font-bold mb-2">Documentation</h1>
          <p className="text-muted-foreground mb-12">
            Get started with Alt Dump and make the most of your offline AI memory vault.
          </p>

          <section className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Alt Dump is a Windows desktop application. After purchase you’ll receive a download link and a license key.
                Install the app, enter your key when prompted, and you’re ready to start dumping.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>Download and run the installer</li>
                <li>Enter your license key (from your purchase email)</li>
                <li>Use the global shortcut or system tray to capture content</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Capture</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dump anything: screenshots, text, files, or links. Use the global keyboard shortcut to open the capture
                overlay from anywhere. Items are saved with context (window title, app source) so you can find them later.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>Global shortcut: capture without leaving your current app</li>
                <li>Drag & drop or paste into the vault</li>
                <li>Automatic content extraction and indexing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Search</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Search uses local AI and semantic understanding. Ask in plain language (“screenshot from yesterday with the
                error”) or use filters for time, type (image, PDF, note), and more. Results are ranked by relevance and
                recency.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>Natural language and keyword search</li>
                <li>Time filters: today, yesterday, last week</li>
                <li>Type filters: image, pdf, note, video</li>
                <li>Keyboard-first navigation</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Organization</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your vault is organized automatically. Timeline view lets you browse by when you saved things. Use pins,
                tags, and recent dumps to keep important items easy to find. Everything stays on your machine—no cloud
                sync required.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Backup & Export</h2>
              <p className="text-muted-foreground leading-relaxed">
                Full backup and export are supported. You own your data; back it up to an external drive or another
                folder whenever you like. Restore from backup if you reinstall or move to a new PC.
              </p>
            </div>

            <div className="pt-8 border-t border-secondary">
              <p className="text-muted-foreground text-sm">
                Need help? <Link href="/contact" className="text-foreground underline hover:no-underline">Contact us</Link>.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
