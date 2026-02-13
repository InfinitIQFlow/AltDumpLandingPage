import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Contact - Alt Dump',
  description: 'Get in touch with the Alt Dump team for support, feedback, or inquiries.',
}

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-4xl font-bold mb-2">Contact</h1>
          <p className="text-muted-foreground mb-12">
            Have a question, need support, or want to say hi? We’d love to hear from you.
          </p>

          <section className="space-y-8">
            <div className="bg-secondary/30 border border-secondary rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">Support &amp; Inquiries</h2>
              <p className="text-muted-foreground mb-4">
                For license issues, download links, or technical support, email us and we’ll get back to you as soon as
                we can.
              </p>
              <a
                href="mailto:support@altdump.app"
                className="text-foreground font-medium underline hover:no-underline"
              >
                support@altdump.app
              </a>
            </div>

            <div className="bg-secondary/30 border border-secondary rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">Feedback</h2>
              <p className="text-muted-foreground">
                Suggestions, feature ideas, or bug reports are welcome. Send them to the same address and we’ll read
                every message.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-muted-foreground text-sm">
                You can also find more info in our{' '}
                <Link href="/documentation" className="text-foreground underline hover:no-underline">Documentation</Link>
                {' '}and{' '}
                <Link href="/privacy" className="text-foreground underline hover:no-underline">Privacy Policy</Link>.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
