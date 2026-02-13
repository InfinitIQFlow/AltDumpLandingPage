'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Do I need an account?',
      answer: 'No. Alt Dump works completely standalone on your Windows machine. No account creation required.',
    },
    {
      question: 'Does it work offline?',
      answer: 'Yes. Even the AI. Everything runs locally on your computer. No internet connection needed.',
    },
    {
      question: 'Is my data stored in the cloud?',
      answer: 'No. Your data is stored entirely on your local machine. We have no access to your vault.',
    },
    {
      question: 'Can I export my data?',
      answer: 'Yes. Full backup and restore are supported. You always own your data.',
    },
    {
      question: 'Will updates be free?',
      answer: 'Yes. All future updates are included with your Early Access purchase. No subscription ever.',
    },
    {
      question: 'Is it Windows only?',
      answer: 'Currently, yes. Alt Dump is built for Windows. Future platforms may be considered.',
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-secondary/30 border border-secondary rounded-lg overflow-hidden hover:border-secondary/80 transition-colors"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/50 transition-colors"
            >
              <h3 className="font-semibold text-foreground text-left">{faq.question}</h3>
              <svg
                className={`w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 ml-4 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            
            {openIndex === index && (
              <div className="px-6 py-4 border-t border-secondary/50 bg-background/30">
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
