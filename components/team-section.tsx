'use client'

import { motion } from "framer-motion"

const stats = [
  { value: "250", label: "Five-Star Reviews" },
  { value: "10", label: "In-House Experts" }
]

export function TeamSection() {
  return (
    <section className="relative min-h-screen overflow-hidden py-24 mb-12">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl"
        >
          <h2 className="mb-32 text-6xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
            Let our experienced team
            <br />
            elevate your digital goals
          </h2>

          <div className="flex justify-between gap-24">
            <div className="flex gap-24">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-7xl font-bold md:text-8xl lg:text-9xl">
                    {stat.value}
                  </div>
                  <div className="mt-4 text-xl text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-xl text-xl leading-relaxed text-muted-foreground"
            >
              We have successfully completed over 300+ projects from a variety of industries. 
              In our team, designers work alongside developers and digital strategists, 
              we believe this is our winning recipe for creating digital products that make an impact.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

