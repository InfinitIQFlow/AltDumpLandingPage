import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Privacy Policy - Alt Dump',
  description: 'Alt Dump privacy policy: your data stays on your device. No cloud, no telemetry, no selling your data.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-4">Last updated: February 2025</p>
          <p className="text-muted-foreground mb-12">
            Alt Dump is designed with privacy first. This policy explains how we handle your information.
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Your Data Stays on Your Device</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content you capture, index, and search—screenshots, notes, files, and metadata—is stored only on your
                Windows machine. We do not upload your vault to our servers or any third-party cloud. The AI search runs
                entirely locally using models and data on your computer.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">No Telemetry or Analytics</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Alt Dump desktop application does not send usage analytics, crash reports, or diagnostic data to us
                unless you explicitly opt in to a feedback or crash-reporting feature. We do not track what you save or
                how you search.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Purchase and Account</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you purchase Alt Dump, payment is processed by Dodo Payments. We receive only what’s needed to
                fulfill your license (e.g. email for delivery of the product). We do not sell or share your contact
                information with third parties for marketing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Website</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website may use standard hosting and analytics (e.g. Vercel) that collect typical web data such as
                IP address and page views. We do not use this site to collect or store the contents of your vault or
                any sensitive personal data beyond what you provide when contacting us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this privacy policy or your data, please reach out via our{' '}
                <Link href="/contact" className="text-foreground underline hover:no-underline">Contact</Link> page.
              </p>
            </div>

            <div className="pt-8 border-t border-secondary">
              <p className="text-muted-foreground text-sm">
                <Link href="/" className="text-foreground underline hover:no-underline">Back to Alt Dump</Link>
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
