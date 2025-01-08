import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="container w-full max-w-[1920px] px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="py-20 md:py-32 lg:py-40">
          {/* Background decorative elements */}
          <div className="absolute top-20 right-0 w-72 h-72 bg-blue-100/20 rounded-full filter blur-3xl" />
          <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-100/20 rounded-full filter blur-3xl" />
          
          {/* Main content */}
          <div className="relative z-10">
            <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-9xl max-w-6xl">
              Crafting{" "}
              <span className="relative inline-block gradient-text pb-8 mb-2 leading-[1.1]">
                Digital
              </span>
              <br className="leading-[1.3]" />
              Experiences
            </h1>
            
            <div className="mt-16 lg:mt-24 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              {/* Stats */}
              <div className="flex items-center gap-8 lg:gap-12">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-black text-white overflow-hidden">
                    <span className="absolute text-xl lg:text-2xl font-bold stats-number-1">500</span>
                    <span className="absolute text-xl lg:text-2xl font-bold stats-number-2">15</span>
                    <span className="absolute text-xl lg:text-2xl font-bold stats-number-3">20</span>
                  </div>
                  <div className="relative h-8">
                    <span className="absolute whitespace-nowrap text-lg lg:text-xl font-medium stats-label-1 font-light">Satisfied Customers</span>
                    <span className="absolute whitespace-nowrap text-lg lg:text-xl font-medium stats-label-2 font-light">Website Awards</span>
                    <span className="absolute whitespace-nowrap text-lg lg:text-xl font-medium stats-label-3 font-light">Years on the Market</span>
                  </div>
                </div>
              </div>
            
              {/* Description */}
              <span className="max-w-md text-xl lg:text-2xl font-light">
                We build engaging websites, brands & innovative e-commerce solutions.
              </span>
              
              {/* CTA Button */}
              <Button 
                size="lg" 
                className="rounded-full bg-[#545cff] text-white hover:bg-[#545cff]/90 hover:scale-105 transition-all duration-300 px-10 py-7 text-lg font-medium shadow-lg hover:shadow-[#545cff]/25"
              >
                Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient bar */}
      <div className="fixed bottom-8 left-0 right-0 mx-auto w-[30%] h-8 rounded-full bg-gradient-to-r from-[#000000] via-[#1f2470] to-[#3843D0] shadow-[0_0_0_2px_hsla(0,0%,100%,0.3)] z-[9999] " />
    </section>
  )
}

