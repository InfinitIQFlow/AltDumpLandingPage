'use client'

import { useEffect, useRef, useState } from 'react'

interface VideoBlockProps {
  videoSrc: string
  heading: string
  text: string
  ariaLabel: string
}

function VideoBlock({ videoSrc, heading, text, ariaLabel }: VideoBlockProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play()
        } else if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause()
          videoRef.current.currentTime = 0
        }
      },
      { threshold: 0.5 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="flex flex-col gap-4">
      <div className="relative w-full bg-secondary rounded-xl overflow-hidden border border-border aspect-video flex items-center justify-center shadow-lg">
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          aria-label={ariaLabel}
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-foreground">
          {heading}
        </h3>
        <p className="text-base text-muted-foreground">
          {text}
        </p>
      </div>
    </div>
  )
}

export default function StoryDemoSection() {
  const blocks = [
    {
      videoSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagezoom-ne3kQECZd7bdogQoQgIcooXB9BZFb3.mp4',
      heading: 'Search Images by Description',
      text: 'Type what you remember about the image — AltDump scans your screenshots and photos to find the exact match.',
      ariaLabel: 'Image search demo'
    },
    {
      videoSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videozoom-CqMldTmid5Cv9EeoXRDrBGmVqsioN3.mp4',
      heading: 'Find Videos by What\'s Inside',
      text: 'Describe a moment, a scene, or a phrase — instantly locate the right clip.',
      ariaLabel: 'Video search demo'
    },
    {
      videoSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/appdemomain-rswRFtiqVzAKPgEr4blJTd01LPV31W.mp4',
      heading: 'Search Inside PDFs',
      text: 'Find exact sentences and paragraphs without remembering the file name.',
      ariaLabel: 'PDF search demo'
    },
    {
      videoSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/codezoom-P5YQw9nN3RWgukG7S0gXA36CN1oZ0k.mp4',
      heading: 'Search Across Code Files',
      text: 'Instantly locate functions, variables, or logic across your entire project.',
      ariaLabel: 'Code search demo'
    },
    {
      videoSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/noteszoom-xAq8Nfami5eVRvLJnn4w4eIeelN9dv.mp4',
      heading: 'Find Anything in Your Notes',
      text: 'Search across scattered notes and instantly surface what you wrote.',
      ariaLabel: 'Notes search demo'
    },
    {
      videoSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ideazoom-Is8JaZSuM4onv44PCVjmHlgpHQ4tmc.mp4',
      heading: 'Dump Ideas. Find Them Later.',
      text: 'Save everything without organizing. Search naturally when you need it.',
      ariaLabel: 'Idea vault demo'
    }
  ]

  return (
    <section className="w-full py-20 md:py-28 bg-background border-b border-border">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-16">
          {/* Section heading */}
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Watch How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              See how AltDump finds content across every file type.
            </p>
          </div>

          {/* Feature blocks grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blocks.map((block, index) => (
              <VideoBlock
                key={index}
                videoSrc={block.videoSrc}
                heading={block.heading}
                text={block.text}
                ariaLabel={block.ariaLabel}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
