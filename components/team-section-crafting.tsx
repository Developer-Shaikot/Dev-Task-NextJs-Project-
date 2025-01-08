'use client'

export function TeamSectionCrafting() {
  return (
    <section className="relative min-h-screen overflow-hidden py-5 mt-[-300px]">
      <div className="pointer-events-none absolute top-0 right-0 select-none text-[40rem] font-bold text-gray-50 leading-none py-10">
        VVVV
      </div>
      
      <div className="pointer-events-none absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 select-none text-[6rem] font-medium text-gray-800 whitespace-pre-line z-10 text-center">
        <span className="flex flex-col items-center">
          <span>Crafting digital</span>
          <span className="ml-24 bg-gradient-to-r from-[#545cff] to-[#1f2246] bg-clip-text text-transparent">experiences</span>
          <span>since 2004</span>
        </span>
      </div>
    </section>
  )
}