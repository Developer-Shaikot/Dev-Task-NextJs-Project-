'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const services = [
  {
    title: "E-commerce",
    caseName: "Shopify Plus Store",
    caseImage: "/assets/services/01_Alveena_Casa_London_Web_Design_New-250x250.jpg"
  },
  {
    title: "Website Design",
    caseName: "Romans & Partners",
    caseImage: "/assets/services/01_Estate-Agency-Web-Design-London-250x250.jpg"
  },
  {
    title: "Digital Products",
    caseName: "Tech Platform",
    caseImage: "/assets/services/Fudli-Restaurant-Food-Order-System-250x250.jpg"
  },
  {
    title: "Brand Identities",
    caseName: "Alveena Casa",
    caseImage: "/assets/services/learning_featured-image-250x250.jpeg"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <section className="relative py-24 bg-[#111111] overflow-hidden">
      <motion.div 
        className="absolute inset-0 opacity-50"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.6, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 75% 140%, #545cff 0, transparent 35%)'
        }}
      />
      <div className="container w-full max-w-[1920px] px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-2xl text-neutral-400"
        >
          Our team of experts can help you with...
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16 space-y-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative"
            >
              <div className="flex items-center justify-between gap-8">
                <div className="flex-1">
                  <Link 
                    href="#" 
                    className="flex items-center gap-2 py-1 text-4xl font-bold transition-colors hover:text-neutral-400 md:text-6xl"
                    onMouseEnter={() => setHoveredService(service.title)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    {service.title}
                   
                  </Link>
                </div>
                <AnimatePresence>
                  {hoveredService === service.title && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-4"
                    >
                      <div className="text-right">
                        <div className="text-sm text-neutral-400">Latest Case Study</div>
                        <div className="text-2xl font-medium">{service.caseName}</div>
                      </div>
                      <div className="relative h-16 w-16 overflow-hidden rounded-full">
                        <Image
                          src={service.caseImage}
                          alt={`${service.caseName} thumbnail`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <ArrowRight className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
           
            </motion.div>
          ))}
        </motion.div>
           <div className="h-px w-full bg-neutral-800 mt-12" />
           <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-start gap-24">
              <div className="flex-1">
                <h2 className="text-5xl font-bold md:text-6xl lg:text-7xl mb-12">
                  <span className="bg-gradient-to-r from-[#545cff] to-[#8d95ff] inline-block text-transparent bg-clip-text whitespace-nowrap leading-relaxed">
                    Creative Agency
                  </span>
                </h2>
                <div className="max-w-xl mt-8">
                  <p className="text-xl text-muted-foreground">
                    We're an award-winning creative agency based in London, focused on E-Commerce, Web Design London, Digital Products, Branding and SEO.
                  </p>
                </div>
              </div>
              <motion.div 
                className="flex gap-4 mt-44"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="border border-[#545cff] rounded-full px-10 py-6 text-white hover:bg-[#545cff]/10 transition-colors">
                  <span className="text-2xl font-medium whitespace-nowrap">300+ Projects</span>
                </div>
                <div className="border border-[#545cff] rounded-full px-10 py-6 text-white hover:bg-[#545cff]/10 transition-colors">
                  <span className="text-2xl font-medium whitespace-nowrap">15 Awards</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
      </div>
    </section>
  )
}

