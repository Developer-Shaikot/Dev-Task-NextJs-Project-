'use client'

import Image from "next/image"
import { motion } from "framer-motion"

export function WorkspaceSection() {
  return (
    <section className="relative py-24">
      <div className="container w-full max-w-[1920px] px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl"
        >
          <div className="relative aspect-[16/9]">
            <Image
              src="/assets/workspace/AW_Team_01-2200x1650.jpg?height=900&width=1600"
              alt="Designer working on UI/UX project at modern workspace"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            
          </div>
        </motion.div>
      </div>
    </section>
  )
}

