'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const partners = [
  {
    name: "Cartier",
    logo: "/assets/partner/costa.png?height=48width"
  },
  {
    name: "Omega",
    logo: "/assets/partner/costa.png?height=48width"
  },
  {
    name: "Rolex",
    logo: "/assets/partner/costa.png?height=48width"
  },
  {
    name: "Patek Philippe",
    logo: "/assets/partner/costa.png?height=48width"
  },
  {
    name: "Audemars Piguet",
    logo: "/assets/partner/costa.png?height=48width"
  },
  {
    name: "Tag Heuer",
    logo: "/assets/partner/BMW.svg.png?height=48width"
  },
  {
    name: "Breguet",
    logo: "/assets/partner/BMW.svg.png?height=48width"
  },
  {
    name: "Longines",
    logo: "/assets/partner/BMW.svg.png?height=48width"
  },
  {
    name: "Tissot",
    logo: "/assets/partner/BMW.svg.png?height=48width"
  },
  {
    name: "Zenith",
    logo: "/assets/partner/BMW.svg.png?height=48width"
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

const firstGroup = partners.slice(0, 5)
const secondGroup = partners.slice(5)

export function PartnersShowcase() {
  return (
    <section className="relative py-32">
      <div className="container">
        <motion.h2 
          className="mx-auto max-w-5xl text-center text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          From ambitious startups to global companies, we partner with great businesses and industry leaders.
        </motion.h2>

        <div className="mt-20 relative group">
          {/* First Group */}
          <div 
            className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12"
          >
            {firstGroup.map((partner) => (
              <div
                key={partner.name}
                className="relative h-12 w-[200px] transition-all duration-500 group-hover:opacity-0"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Second Group */}
          <div 
            className="absolute top-0 left-0 w-full"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12">
              {secondGroup.map((partner) => (
                <div
                  key={partner.name}
                  className="relative h-12 w-[200px] transition-all duration-500 opacity-0 group-hover:opacity-100"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

