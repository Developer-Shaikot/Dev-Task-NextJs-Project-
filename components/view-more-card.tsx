'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ViewMoreCard() {
  return (
    <motion.div 
      className="flex min-w-[600px] items-center justify-center rounded-3xl py-8"
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="py-20">
        <h3 className="mb-4 text-4xl font-bold">View More</h3>
        <Button 
                size="lg" 
                className="group relative border border-[1px] border-[#545cff] rounded-full text-black transition-all duration-300 px-10 py-7 text-lg font-medium shadow-lg hover:shadow-[#545cff]/25 overflow-hidden"
              >
                <span className="relative flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-[150%]">
                  Case Studies
                </span>
                <span className="absolute inset-0 flex items-center justify-center gap-2 transition-transform duration-300 translate-y-[150%] group-hover:translate-y-0">
                  Case Studies
                  
                </span>
        </Button>
      </div>
    </motion.div>
  )
}

