'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { RotateCw } from 'lucide-react'

const testimonials = [
  {
    quote: "We have worked with Artistsweb to build a complete new website with quite complex connections with our CRM and accounting functions. The end product is brilliant, a really first class blend of design and functionality and the speed and depth of understanding about our business was remarkable. I'd highly recommend them.",
    author: "Steven Glibbery",
    company: "TGA Mobility",
    logo: "/assets/feedback/nathan-s-250x250.jpg"
  },
  {
    quote: "The team demonstrated exceptional expertise in translating our vision into reality. Their attention to detail and innovative solutions exceeded our expectations.",
    author: "Sarah Chen",
    company: "Innovate Labs",
    logo: "/assets/feedback/tga-logo-250x250.jpg"
  },
  {
    quote: "Working with them was a game-changer for our digital presence. They delivered a sophisticated platform that perfectly aligns with our business objectives.",
    author: "Michael Roberts",
    company: "Digital First",
    logo: "/assets/feedback/nathan-s-250x250.jpg"
  }
]

function FeedbackCard({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        opacity
      }}
      className="mb-8 md:mb-12 mx-28  overflow-hidden rounded-2xl md:rounded-3xl bg-white/5 p-8 md:p-12 backdrop-blur-sm"
    >
      <blockquote className="mb-6 md:mb-8 text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={testimonial.logo}
            alt={`${testimonial.company} logo`}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="font-medium text-gray-200">
            {testimonial.author}
          </div>
          <div className="text-[#3843D0]">
            {testimonial.company}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function FeedbackSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-black via-[#1a1a3a] to-black py-16 md:py-24 text-white"
    >
      <div className="container mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="mb-3 md:mb-4 text-4xl md:text-5xl lg:text-6xl font-bold">
            Client Feedback
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            We&apos;re collaborators - We build tight-knit partnerships with our clients.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute right-0 -top-12 md:-top-16 flex items-center gap-4 text-xl md:text-2xl lg:text-3xl font-semibold text-gray-400">
            <RotateCw className="h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 animate-spin" />
            Keep scrolling
          </div>

          {testimonials.map((testimonial, index) => (
            <FeedbackCard 
              key={index} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed right-8 top-1/2 h-32 w-1 -translate-y-1/2 rounded-full bg-white/10"
      >
        <motion.div 
          className="h-full w-full rounded-full bg-[#3843D0]"
          style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  )
}

