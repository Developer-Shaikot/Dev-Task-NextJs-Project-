'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function ScrollingHeadline() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"])

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden py-40"
    >
      <div className="container">
        <motion.div
          style={{ x }}
          className="whitespace-nowrap text-6xl font-medium text-[9rem]"
        >
          Elevate your digital presence
        </motion.div>
      </div>
     
    </section>
  )
}

