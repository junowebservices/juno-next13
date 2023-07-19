'use client'

import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'

export default function Home() {
  return (
    <div className=''>
      <div className='container mb-12 mt-4 md:mb-28 md:mt-12 xl:mb-0 xl:mt-0 xl:flex xl:h-[70vh] xl:flex-col xl:justify-center'>
        <h4 className='mb-4 text-xl font-bold md:mb-12 md:hidden'>
          Juno Consulting
        </h4>
        <h1 className='bigText mb-6 lg:mb-14'>
          We elevate digital Experiences.
        </h1>
        <p className='lg:w-8/12 '>
          We specialize in developing custom websites that are not only visually
          stunning, but also user-friendly, responsive, and optimized for search
          engines.
        </p>
      </div>
      <Portfolio />
      <Services />
      <div className='container hidden'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          eveniet optio, suscipit amet tempora ullam porro itaque adipisci sed
          omnis, voluptatem dolorum nostrum quam est repellat explicabo? Nihil,
          labore provident.
        </p>
      </div>
    </div>
  )
}
