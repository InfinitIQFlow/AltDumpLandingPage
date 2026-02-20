import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Privacy Policy - Alt Dump',
  description:
    'Alt Dump privacy policy: local-first storage, no telemetry, no cloud vault uploads, and full control over your data.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block"
          >
            ← Back to Home
          </Link>

          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-4">Last updated: February 2025</p>

          <p className="text-muted-foreground mb-12 leading-relaxed">
            Alt Dump ("we", "our", or "us") is operated by <strong>YOUR LEGAL NAME OR COMPANY NAME</strong>,
            located in <strong>Your Country</strong>. This Privacy Policy explains how Alt Dump handles
            your information.
          </p>

          <section className="space-y-10">

            {/* Data Storage */}
            <div>
              <h2 className="text-2xl font-semibold mb-3">
                1. Data Storage and Processing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Alt Dump is designed as a local-first application. All files, screenshots,
                notes, metadata, and search indexes you create or store in Alt Dump remain
                entirely on your Windows device.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We do not upload, transmit, or store your vault content on our servers.
                Search and AI-powered features operate locally on your machine using
                locally stored data.
              </p>
            </div>

            {/* No Data Collection */}
            <div>
              <h2 className="text-2xl font-semibold mb-3">
                2. No Automatic Data Collection
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The Alt Dump desktop application does not collect or transmit:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-1">
                <li>Usage analytics</li>
                <li>Telemetry data</li>
                <li>Crash reports</li>
                <li>Search queries</li>
                <li>File contents</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                No data is sent to us unless you explicitly contact us for support.
              </p>
            </div>

            {/* Payments */}
            <div>
              <h2 className="text-2xl font-semibold mb-3">
                3. Payments and Licensing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you purchase Alt Dump, payment processing is handled by Dodo Payments,
                a third-party payment processor.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We may receive limited information necessary to deliver your license,
                such as your email address and transaction confirmation details.
                We do not sell or share this information for advertising purposes.
              </p>
            </div>

            {/* Website */}
            <div>
              <h2 className="text-2xl font-semibold mb-3">
                4. Website Data
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may be hosted on third-party infrastructure (such as Vercel),
                which may collect standard technical data such as IP address, browser
                type, and page visits.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This data is used only for website performance and security purposes
                and is not connected to your vault data.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-semibold mb-3">
                5. Data Retention
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Because Alt Dump stores all vault data locally on your device,
                you retain full control over your information.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Uninstalling the application does not automatically delete your
                saved vault unless you manually remove it from your system.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-semibold mb-3">
                6. Children’s Privacy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Alt Dump is not directed toward children under the age of 13.
                We do not knowingly collect personal information from children.
              </p>
            </div>

            {/* User Rights */}
            <div>
              <h2 className="text-2xl font-semibold mb-3">
                7. Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Since Alt Dump does not collect or store your vault data,
                we do not control or process your personal content.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You may contact us at any time regarding questions about this policy.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-semibold mb-3">
                8. Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, you may contact us at:
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Email: <strong>infinitiqflow@gmail.com</strong><br />
                Country: <strong>India</strong>
              </p>
            </div>

            <div className="pt-8 border-t border-secondary">
              <p className="text-muted-foreground text-sm">
                <Link href="/" className="text-foreground underline hover:no-underline">
                  Back to Alt Dump
                </Link>
              </p>
            </div>

          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}