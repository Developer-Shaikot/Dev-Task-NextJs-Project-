'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Equal } from "lucide-react";
import { useState, useEffect } from "react";
import { NavigationModal } from "./navigation-modal";
import { motion, AnimatePresence } from "framer-motion";

const headerVariants = {
  visible: { 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  hidden: { 
    y: "-100%",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

const pathVariants = {
  initial: { 
    scaleY: 1,
    rotate: 0,
    x: 0,
    opacity: 1
  },
  animate: (i: number) => ({ 
    scaleY: 0,
    opacity: 0,
    transition: { 
      duration: 0.3,
      delay: i * 0.2,
      ease: [0.22, 1, 0.36, 1]
    }
  }),
  visible: (i: number) => ({ 
    scaleY: 1,
    opacity: 1,
    transition: { 
      duration: 0.5,
      delay: 0.3 + (i * 0.2),
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
      delay: 1.2 + (i * 0.08),
      ease: [0.22, 1, 0.36, 1]
    }
  }),
  final: (i: number) => ({
    rotate: 0,
    x: 0,
    scaleY: 1,
    translateY: 0,
    transition: {
      duration: 0.6,
      delay: 2.2 + (i * 0.08),
      ease: [0.22, 1, 0.36, 1]
    }
  }),
  exit: (i: number) => ({
    scaleY: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      delay: i * 0.2,
      ease: [0.22, 1, 0.36, 1]
    }
  })
}

const polygonVariants = {
  initial: {
    opacity: 1,
    scale: 1
  },
  animate: { 
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  visible: { 
    opacity: 0,
    scale: 0
  },
  transform: {
    opacity: 0,
    scale: 0
  },
  final: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: 2.8 + (i * 0.1),
      ease: [0.22, 1, 0.36, 1]
    }
  }),
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export function SiteHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isHeaderHovered, setIsHeaderHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (!isHeaderHovered && currentScrollY > 100) {
        setIsHeaderVisible(currentScrollY <= lastScrollY)
      } else {
        setIsHeaderVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isHeaderHovered])

  const handleHoverStart = () => setIsAnimating(true)
  const handleHoverEnd = () => {} // Animation will complete via handleAnimationComplete
  const handleAnimationComplete = (definition: string) => {
    if (definition === "final") setIsAnimating(false)
  }

  return (
    <>
      <motion.header 
        className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
        variants={headerVariants}
        initial="visible"
        animate={isHeaderVisible ? "visible" : "hidden"}
        onHoverStart={() => setIsHeaderHovered(true)}
        onHoverEnd={() => setIsHeaderHovered(false)}
      >
        <div className="w-full max-w-[1920px] px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 mx-auto my-5 flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center space-x-2"
            onClick={(e) => {
              e.preventDefault();
              window.location.reload();
            }}
          >
            <AnimatePresence mode="wait">
              {!isAnimating ? (
                <motion.svg
                  key="main"
                  id="logo"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64.06 32"
                  className="h-8 w-auto"
                  initial="initial"
                  animate="initial"
                  exit="exit"
                  onHoverStart={handleHoverStart}
                >
                  <motion.rect
                    custom={0}
                    variants={pathVariants}
                    x="25.88"
                    width="6.78"
                    height="32"
                    style={{ originY: 0, originX: "50%" }}
                  />
                  <motion.rect
                    custom={1}
                    variants={pathVariants}
                    x="12.31"
                    width="6.78"
                    height="32"
                    style={{ originY: 0, originX: "50%" }}
                  />
                  <motion.rect
                    custom={2}
                    variants={pathVariants}
                    x="44.97"
                    width="6.78"
                    height="32"
                    style={{ originY: 0, originX: "50%" }}
                  />
                  <motion.polygon
                    custom={0}
                    variants={polygonVariants}
                    points="0 32 6.78 32 12.31 0 5.53 0 0 32"
                    style={{ originX: "50%", originY: "50%" }}
                  />
                  <motion.polygon
                    custom={1}
                    variants={polygonVariants}
                    points="32.66 32 39.44 32 44.97 0 38.19 0 32.66 32"
                    style={{ originX: "50%", originY: "50%" }}
                  />
                  <motion.polygon
                    custom={2}
                    variants={polygonVariants}
                    points="57.28 0 51.75 32 58.53 32 64.06 0 57.28 0"
                    style={{ originX: "50%", originY: "50%" }}
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  key="animated"
                  id="logo"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64.06 32"
                  className="h-8 w-auto"
                  initial="initial"
                  animate={["animate", "visible", "transform", "final"]}
                  exit="exit"
                  onHoverEnd={handleHoverEnd}
                  onAnimationComplete={handleAnimationComplete}
                >
                  <motion.rect
                    custom={0}
                    variants={pathVariants}
                    x="25.88"
                    width="6.78"
                    height="32"
                    style={{ originY: 0, originX: "50%" }}
                  />
                  <motion.rect
                    custom={1}
                    variants={pathVariants}
                    x="12.31"
                    width="6.78"
                    height="32"
                    style={{ originY: 0, originX: "50%" }}
                  />
                  <motion.rect
                    custom={2}
                    variants={pathVariants}
                    x="44.97"
                    width="6.78"
                    height="32"
                    style={{ originY: 0, originX: "50%" }}
                  />
                  <motion.polygon
                    custom={0}
                    variants={polygonVariants}
                    points="0 32 6.78 32 12.31 0 5.53 0 0 32"
                    style={{ originX: "50%", originY: "50%" }}
                  />
                  <motion.polygon
                    custom={1}
                    variants={polygonVariants}
                    points="32.66 32 39.44 32 44.97 0 38.19 0 32.66 32"
                    style={{ originX: "50%", originY: "50%" }}
                  />
                  <motion.polygon
                    custom={2}
                    variants={polygonVariants}
                    points="57.28 0 51.75 32 58.53 32 64.06 0 57.28 0"
                    style={{ originX: "50%", originY: "50%" }}
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </Link>

          <div className="flex items-center gap-4">
           
            <Button 
                className="group relative border border-[1px] border-[#545cff] rounded-[30px] text-black transition-all duration-300 px-6 py-5 text-lg font-normal  hover:shadow-[#545cff]/25 overflow-hidden"
              >
                <span className="relative flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-[150%]">
                 Get In Touch
                </span>
                <span className="absolute inset-0 flex items-center justify-center gap-2 transition-transform duration-300 translate-y-[150%] group-hover:translate-y-0">
                  Get In Touch
              </span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative h-10 w-10 rounded-full border border-[#111111] text-black transition-all duration-300 hover:shadow-[#545cff]/25"
              onClick={() => setIsModalOpen(true)}
            >
              <Equal className="h-6 w-5" />
            </Button>
          </div>
        </div>
      </motion.header>
      <NavigationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}
