'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const services = [
  "E-Commerce",
  "Website Design",
  "Web Development",
  "Digital Products",
  "Brand Identities",
  "SEO Optimisation"
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
}

export function ServicesListSection() {
  return (
    <section className="relative py-24">
      <div className="container w-full max-w-[1920px] px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 text-4xl font-bold md:text-5xl"
            >
              We&apos;re good at
            </motion.h2>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-between">
          

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="text-sm uppercase text-muted-foreground">Services</div>
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="group flex cursor-pointer items-center justify-between text-2xl font-medium md:text-3xl"
                >
                  {service}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center lg:justify-end"
          >
            <div className="rounded-3xl bg-[#3843D0] p-6 text-white sm:p-8 md:p-10 lg:p-12 w-full">
              <h3 className="mb-8 sm:mb-10 md:mb-12 text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] font-medium leading-[1.2]">
                <div className="title-line mb-2 sm:mb-3">
                  <div className="scale-[0.85] sm:scale-90 md:scale-95 lg:scale-100 origin-left">
                    {["Let's", "start", "with", "a", "conversation"].map((word, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="inline-block mr-[0.2em] last:mr-0"
                      >
                        {word}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="title-line mb-2 sm:mb-3">
                  <div className="scale-[0.85] sm:scale-90 md:scale-95 lg:scale-100 origin-left">
                    {["about", "how", "we", "can", "help", "you!", "Get", "in"].map((word, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
                        className="inline-block mr-[0.2em] last:mr-0"
                      >
                        {word}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="title-line">
                  <div className="scale-[0.85] sm:scale-90 md:scale-95 lg:scale-100 origin-left">
                    {["touch,", "we're", "a", "nice", "bunch."].map((word, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 + 1 }}
                        className="inline-block mr-[0.2em] last:mr-0"
                      >
                        {word}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </h3>
              <div className="flex flex-col gap-6 sm:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full bg-white px-8 sm:px-10 py-6 sm:py-7 text-lg sm:text-xl font-medium text-[#3843D0] hover:bg-opacity-90"
                >
                  Let&apos;s talk
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-white px-8 sm:px-10 py-6 sm:py-7 text-lg sm:text-xl font-medium text-white hover:bg-white hover:text-[#3843D0]"
                >
                  0207 112 82 85
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-black to-[#3843D0]" />
    </section>
  )
}

