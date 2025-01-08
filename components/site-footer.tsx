'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter } from 'lucide-react'

const socialLinks = [
  { icon: Instagram, href: "#", label: "Follow us on Instagram" },
  { icon: Facebook, href: "#", label: "Follow us on Facebook" },
  { icon: Twitter, href: "#", label: "Follow us on Twitter" },
]

export function SiteFooter() {
  return (
  <footer className="bg-white text-black py-16 md:py-24 border-t">
  <div className="container mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-8 xl:px-10">
    <div className="grid gap-12 lg:grid-cols-2 pb-8">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8 max-w-3xl"
      >
        <h2 className="text-5xl font-medium leading-tight">
          We love crafting unforgettable digital experiences, brands, and websites with people like you.
        </h2>
        <div className="space-y-4">
          <h3 className="text-lg text-5xl font-medium">Get in touch</h3>
          <div className="space-y-2 text-gray-600">
            <p>
              <a
                href="tel:+442071128285"
                className="text-black transition-colors text-2xl font-semibold"
              >
                +44 207 112 82 85
              </a>
            </p>
            <p>
              <a
                href="mailto:contact@artistsweb.com"
                className="text-black transition-colors text-2xl font-semibold"
              >
                contact@artistsweb.com
              </a>
            </p>
            <p className="text-black  text-2xl">Artistsweb, 18 Soho Square, London, W1D 3QL, United Kingdom</p>
          </div>
        </div>
      </motion.div>

      {/* Right Section */}
      <div className="lg:flex lg:flex-col items-center lg:justify-between gap-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-3 rounded-full bg-black px-24 py-4 text-white "
        >
          <span className="text-base md:text-lg font-medium">Follow us</span>
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
                aria-label={social.label}
              >
                <Icon className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 lg:mt-0 rounded-2xl bg-gray-100 px-16 py-16"
        >
          <h3 className="mb-3 text-xl md:text-2xl font-bold">Let&apos;s get started</h3>
          <p className="mb-6 text-base md:text-lg text-gray-600">
            We&apos;d love to hear about your project.
          </p>
          <Button
            size="lg"
            className="group relative w-full border border-[1px] border-[#3843D0] bg-[#3843D0] text-white rounded-full text-base md:text-lg transition-all duration-300 px-10 py-7 overflow-hidden"
          >
            <span className="relative flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-[150%]">
              Get in touch
            </span>
            <span className="absolute inset-0 flex  bg-[#3843D0] items-center justify-center transition-transform duration-300 translate-y-[150%] group-hover:translate-y-0">
              Get in touch
            </span>
          </Button>
        </motion.div>
      </div>
    </div>

    {/* Footer Bottom Section */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-16 md:mt-24 flex flex-col items-center justify-between gap-4 text-sm md:text-base text-gray-600 sm:flex-row"
    >
      <div>© 2025 Artistsweb Ltd · All rights reserved.</div>
      <div className="flex gap-6">
        <Link href="#" className="hover:text-black transition-colors">
          Privacy Policy
        </Link>
        <Link href="#" className="hover:text-black transition-colors">
          Terms & Conditions
        </Link>
      </div>
    </motion.div>
  </div>
</footer>


  )
}

