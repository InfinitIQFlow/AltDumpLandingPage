'use client'

import { useCheckout } from '@/hooks/use-checkout'

export default function HeroSection() {
  const { createCheckout, isLoading } = useCheckout()

  const handleBuyClick = () => {
    createCheckout()
  }

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-background via-secondary/10 to-background border-b border-border/50 overflow-hidden relative">
      {/* Background gradient accent */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-16">
          {/* Left: Folder chaos image */}
          <div className="w-full md:w-1/2 flex justify-center fade-in-up">
            <div className="relative w-full max-w-xl rounded-2xl overflow-hidden border border-border/70 bg-secondary/40 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <img
                src="/public/hero-folder.png"
                alt="A chaotic folder full of similar filenames and screenshots"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right: Hero text */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 fade-in-up" style={{ animationDelay: '0.05s' }}>
            {/* Eyebrow */}
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-semibold text-accent">
              Your Private Vault, Instantly Searchable
            </span>

            {/* Main copy */}
            <div className="space-y-3 max-w-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Does your folder look like this?
              </h1>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                And you can’t find that one line in the PDF you saved yesterday?
                <br />
                Or that one screenshot you saved last week?
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Then this is made just for you.
              </p>

              {/* Big, bold, can’t-miss line */}
              <div className="mt-4">
                <p className="inline-block text-lg md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-amber-200 to-accent bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.55)]">
                  This isn’t filename search. Search any sentence from any file — and find it instantly.
                </p>
              </div>

              {/* Supporting copy kept from original hero */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
                Save files, screenshots, videos, code, and ideas into your private second brain — and search them instantly with semantic search, not filenames.
              </p>

              <p className="text-lg md:text-xl font-bold text-primary glow-text">
                Offline, private, and instant.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={handleBuyClick}
                disabled={isLoading}
                className="relative px-10 py-4 bg-gradient-to-r from-accent to-cyan-400 text-background rounded-xl font-bold text-lg transition-all disabled:opacity-50 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-cyan-300 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-cyan-400 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10" />

                <span className="relative flex items-center justify-center gap-2">
                  Get AltDump Now
                </span>
              </button>
              <p className="mt-2 text-xs text-muted-foreground">
                One-time payment • Lifetime access • $12
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
