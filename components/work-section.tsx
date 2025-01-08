'use client'

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { motion, useScroll, useTransform } from "framer-motion"
import { useDraggable } from "react-use-draggable-scroll"
import { ViewMoreCard } from "@/components/view-more-card"

const projects = [
  {
    title: "Romans & Partners",
    image: "/assets/01_Estate-Agency-Web-Design-London.jpg",
    tags: ["UI/UX Design", "Property Portal"],
    isLatest: true
  },
  {
    title: "Alveena C",
    image: "/assets/01_Alveena_Casa_London_Web_Design_New-1400x1582.jpg",
    tags: ["UI/UX Design", "E-Commerce"],
    isLatest: true
  },
  {
    title: "Digital Hub",
    image: "/assets/Fudli-Restaurant-Food-Order-System-1400x1582.jpg",
    tags: ["Web Development", "Digital Marketing"],
    isLatest: true
  },
  {
    title: "Tech Solutions",
    image: "/assets/recore-pilates-london-web-design-agency-2024-1400x1641.jpeg",
    tags: ["UI/UX Design", "SaaS"],
    isLatest: true
  },
  {
    title: "Tech SuperPowers",
    image: "/assets/03_TSP_London_Web_Design-1400x1582.jpg",
    tags: ["UI/UX Design", "Development"],
    isLatest: true
  }
]

export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { events } = useDraggable(scrollContainerRef as unknown as React.RefObject<HTMLElement>)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  })

  const totalWidth = ((projects.length + 1) * 600) + (projects.length * 40)
  const visibleWidth = 1044 // 1440 - 300 - 96

  const scrollX = useTransform(
    scrollYProgress,
    [0, 1], 
    ["0%", `-${totalWidth - visibleWidth}px`]
  )

  return (
    <section ref={sectionRef} className="relative w-full min-h-[400vh]">
      <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 sticky top-[106px] pt-16">
        <div className="flex flex-row gap-16 lg:gap-24">
          <motion.div 
            className="flex flex-col items-start gap-8 w-[300px] flex-shrink-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">Work</h2>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border text-sm font-medium">
                {projects.length}
              </div>
            </div>
            <p className="max-w-md text-lg lg:text-xl text-muted-foreground font-light">
              A selection of our crafted work, built from scratch by our talented in-house team.
            </p>
            <div className="pt-44">
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

          <div className="relative overflow-hidden flex-grow">
            <motion.div 
              ref={scrollContainerRef}
              {...events}
              style={{ x: scrollX }}
              className="flex gap-12 pb-8 pl-0 pr-12"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-25%" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="w-[600px] flex-shrink-0"
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-25%" }}
                transition={{ duration: 0.5, delay: projects.length * 0.2 }}
                className="w-[600px] flex-shrink-0"
              >
                <ViewMoreCard />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

