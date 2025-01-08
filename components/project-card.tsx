'use client'

import Image from "next/image"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  image: string
  tags: string[]
  isLatest?: boolean
  className?: string
}

export function ProjectCard({ title, image, tags, isLatest, className }: ProjectCardProps) {
  return (
    <motion.div 
      className="group relative flex-shrink-0 w-[600px]"
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />
        {isLatest && (
          <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm">
            Latest
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

