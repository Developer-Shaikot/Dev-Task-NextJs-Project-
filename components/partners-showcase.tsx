'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect } from "react"

const partners = [
  {
    name: "BMW",
    logo: "/assets/partnerShowcase/BMW.svg.png"
  },
  {
    name: "Mercedes-Benz",
    logo: "/assets/partnerShowcase/mercedes-benz-car-logo-png-brand-image-1.png"
  },
  {
    name: "Audi",
    logo: "/assets/partnerShowcase/png-transparent-audi-logo-audi-a3-car-emblem-logo-audi-car-logo-brand-text-candle-automobile-repair-shop-thumbnail.png"
  },
  {
    name: "Mini",
    logo: "/assets/partnerShowcase/mini-car-logo-11530961967zss8y0reja.png"
  },
  {
    name: "Bentley",
    logo: "/assets/partnerShowcase/png-clipart-bentley-wings-logo-icons-logos-emojis-car-logos-thumbnail.png"
  },
  {
    name: "Nissan",
    logo: "/assets/partnerShowcase/nissan-car-logo-png-brand-image-24.png"
  },
  {
    name: "Cars Brand 1",
    logo: "/assets/partnerShowcase/png-clipart-cars-logo-brands-cars-logo-brands.png"
  },
  {
    name: "Cars Brand 2",
    logo: "/assets/partnerShowcase/png-clipart-cars-logo-brands-cars-logo-brands-thumbnail.png"
  },
  {
    name: "Indian Cars",
    logo: "/assets/partnerShowcase/384-3841662_indian-car-company-logos-hd-png-download.png"
  },
  {
    name: "Longines",
    logo: "/assets/partner/BMW.svg.png?height=48width"
  }
]

const firstGroup = partners.slice(0, 5)
const secondGroup = partners.slice(5)

export function PartnersShowcase() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
      });
    }
  }, []);

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
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

