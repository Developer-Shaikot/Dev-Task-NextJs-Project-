'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface NavigationModalProps {
  isOpen: boolean
  onClose: () => void
}

const modalVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
}

const menuItems = [
  { title: "Case Studies", count: "13" },
  { title: "Our Agency" },
  { title: "Contact Us" },
  { title: "News" }
]

const socialLinks = [
  { title: "Instagram", href: "#" },
  { title: "Facebook", href: "#" },
  { title: "Twitter", href: "#" },
  { title: "Awwwards", href: "#" }
]

export function NavigationModal({ isOpen, onClose }: NavigationModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 backdrop-blur-md bg-black/50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-x-4 top-4 z-50 mx-auto max-w-2xl rounded-3xl bg-[#111111] p-8 md:p-12 overflow-hidden"
          >
            {/* Animated gradient background */}
            <motion.div 
              className="absolute inset-0 opacity-50"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.6, 0.5]
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

            <div className="relative z-10">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-0 top-0 rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
              >
                <X className="h-5 w-5 text-white" />
                <span className="sr-only">Close navigation</span>
              </button>

              {/* Content */}
              <div className="space-y-12">
                <p className="text-sm text-white/60">Navigation</p>

                {/* Menu items */}
                <nav className="space-y-6">
                  {menuItems.map((item) => (
                    <a
                      key={item.title}
                      href="#"
                      className="group flex items-center justify-between text-4xl font-medium text-white hover:text-white/70 md:text-5xl"
                    >
                      {item.title}
                      {item.count && (
                        <span className="ml-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-2xl">
                          {item.count}
                        </span>
                      )}
                    </a>
                  ))}
                </nav>

                {/* Footer */}
                <div className="flex items-center justify-between pt-8">
                  <div className="space-y-4">
                    <p className="text-sm text-white/60">Follow us</p>
                    <div className="flex gap-6">
                      {socialLinks.map((link) => (
                        <a
                          key={link.title}
                          href={link.href}
                          className="text-sm text-white hover:text-white/70"
                        >
                          {link.title}
                        </a>
                      ))}
                    </div>
                  </div>
                <Button
            size="lg"
            className="group relative  border border-[1px] border-[#3843D0] bg-[#3843D0] text-white rounded-full text-base md:text-lg transition-all duration-300 px-7 py-7 overflow-hidden"
          >
            <span className="relative flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-[150%]">
              Get in touch
            </span>
            <span className="absolute inset-0 flex  bg-[#3843D0] items-center justify-center transition-transform duration-300 translate-y-[150%] group-hover:translate-y-0">
              Get in touch
            </span>
          </Button>
                  
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

