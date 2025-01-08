'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const stats = [
  { value: "20", label: "Years on the market" },
  { value: "500", label: "Satisfied Customers" }
]

const brands = [
  { name: "Brand 1", logo: "/assets/partner/BBC-Logo-07.png" },
  { name: "Brand 2", logo: "/assets/partner/BMW.svg.png" },
  { name: "Brand 3", logo: "/assets/partner/costa.png" }
]

export function PartnerSection() {
  return (
    <section className="relative py-24">
      <div className="container w-full max-w-[1920px] px-16">
        <div className="flex flex-row gap-20">
          <motion.div 
            className="max-w-2xl space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-6xl font-bold">
              Your Digital Partner
            </h2>
            <p className="text-xl">
              We partner with companies of all sizes to solve complex business challenges and define their digital strategies and objectives that deliver results. We help bring ideas to life and create brands, websites & digital products that work.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {brands.map((brand, index) => (
                  <div 
                    key={index}
                    className="relative h-16 w-16 overflow-hidden rounded-full"
                  >
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Brands who&apos;ve trusted us...</p>
            </div>
          </motion.div>

          <motion.div 
            className="relative rounded-3xl bg-muted/50 p-8 min-w-[500px] mt-32  lg:ml-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 divide-x divide-x-[3px] bg-[#ecf1f4] px-24 py-24 rounded-3xl">
              {stats.map((stat, index) => (
                <div key={index} className="px-8 first:pl-0 last:pr-0">
                  <div className="text-5xl font-medium text-8xl">{stat.value}</div>
                  <div className="mt-2 text-lg text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
     
    </section>
  )
}

