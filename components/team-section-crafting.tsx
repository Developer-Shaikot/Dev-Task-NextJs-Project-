'use client'

export function TeamSectionCrafting() {
  return (
    <section className="relative overflow-hidden flex items-center justify-center my-12">
      <div className="pointer-events-none absolute inset-0 select-none text-[20rem] sm:text-[30rem] md:text-[40rem] font-bold text-gray-50 flex items-center justify-end">
        VVVVV
      </div>
      
      <div className="relative select-none text-[3rem] sm:text-[4rem] md:text-[6rem] font-medium text-gray-800 whitespace-pre-line z-10 text-center">
        <span className="flex flex-col items-center gap-2 sm:gap-4 mt-8">
          <span>Crafting digital</span>
          <span className="ml-8 sm:ml-16 md:ml-24 bg-gradient-to-r from-[#545cff] to-[#1f2246] bg-clip-text text-transparent">experiences</span>
          <span>since 2004</span>
        </span>
      </div>
    </section>
  )
}