'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const pathVariants = {
  hidden: { 
    scaleY: 0,
    opacity: 0
  },
  visible: (i: number) => ({ 
    scaleY: 1,
    opacity: 1,
    transition: { 
      duration: 0.5,
      delay: i * 0.2,
      ease: [0.22, 1, 0.36, 1]
    }
  }),
  transform: (i: number) => ({
    rotate: i === 0 ? 0 : (i === 1 ? -30 : 30),
    x: i === 0 ? 0 : (i === 1 ? -12 : 12),
    scaleY: i === 0 ? 1.2 : 1,
    translateY: i === 0 ? -2 : 0,
    transition: { 
      duration: 0.6,
      delay: 1.5 + (i * 0.08),
      ease: [0.22, 1, 0.36, 1]
    }
  }),
  final: (i: number) => ({
    rotate: 0,
    x: 0,
    scaleY: 1,
    translateY: 0,
    transition: {
      duration: 0.3,
      delay: 2.5 + (i * 0.08),
      ease: [0.22, 1, 0.36, 1]
    }
  })
}

const polygonVariants = {
  hidden: { 
    opacity: 0,
    scale: 0
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: 3 + (i * 0.1),
      ease: [0.22, 1, 0.36, 1]
    }
  })
}

const overlayVariants = {
  hidden: { 
    scaleX: 0,
    x: "100%"
  },
  visible: { 
    scaleX: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  exit: {
    scaleX: 0,
    x: "100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.5
    }
  }
}

const contentVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.5
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
}

export function SiteLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    }

    const logoTimer = setTimeout(() => {
      setShowLogo(true)
    }, 500)

    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
      document.body.style.overflow = 'unset'
    }, 4500)

    return () => {
      clearTimeout(logoTimer)
      clearTimeout(loadingTimer)
      document.body.style.overflow = 'unset'
    }
  }, [isLoading])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[99999] bg-[#111] origin-right"
        >
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex h-full w-full flex-col items-center justify-center"
          >
            <AnimatePresence>
              {showLogo && (
                <motion.svg
                  key="logo"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64.06 32"
                  className="h-16 w-auto"
                  initial="hidden"
                  animate={["visible", "transform", "final"]}
                >
                  <motion.rect
                    custom={0}
                    variants={pathVariants}
                    x="25.88"
                    width="6.78"
                    height="32"
                    fill="white"
                    style={{ originY: 0, originX: "50%" }}
                  />
                  <motion.rect
                    custom={1}
                    variants={pathVariants}
                    x="12.31"
                    width="6.78"
                    height="32"
                    fill="white"
                    style={{ originY: 0, originX: "50%" }}
                  />
                  <motion.rect
                    custom={2}
                    variants={pathVariants}
                    x="44.97"
                    width="6.78"
                    height="32"
                    fill="white"
                    style={{ originY: 0, originX: "50%" }}
                  />
                  <motion.polygon
                    custom={0}
                    variants={polygonVariants}
                    points="0 32 6.78 32 12.31 0 5.53 0 0 32"
                    fill="white"
                    style={{ originX: "50%", originY: "50%" }}
                  />
                  <motion.polygon
                    custom={1}
                    variants={polygonVariants}
                    points="32.66 32 39.44 32 44.97 0 38.19 0 32.66 32"
                    fill="white"
                    style={{ originX: "50%", originY: "50%" }}
                  />
                  <motion.polygon
                    custom={2}
                    variants={polygonVariants}
                    points="57.28 0 51.75 32 58.53 32 64.06 0 57.28 0"
                    fill="white"
                    style={{ originX: "50%", originY: "50%" }}
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

