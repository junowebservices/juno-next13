'use client'

import NewSection from '@/components/NewSection'
import Portfolio from '@/components/Portfolio'
import RightSection from '@/components/RightSection'
import Services from '@/components/Services'
import Test from '@/components/Test2'
import TestPage from '@/components/TestPage'
import WhatWeDo from '@/components/sections/WhatWeDo'

export default function Home() {
  return (
    <div className='3xl:max-w-[85rem] 3xl:gap-9 relative mx-5 mb-14 mt-[5.5rem] flex max-w-5xl flex-col gap-4 lg:mx-auto lg:mt-0 lg:max-w-[62rem] xl:max-w-[70rem] xl:gap-6'>
      <div className='mt-32' />

      <WhatWeDo />
      <Portfolio />
      <NewSection />
      <RightSection />
      <TestPage />
      <Test />
      {/* <div className='container mb-12 mt-4 md:mb-28 md:mt-12 xl:mb-0 xl:mt-0 xl:flex xl:h-[70vh] xl:flex-col xl:justify-center'>
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
     
      
      // <Services />
      <div className='container hidden'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          eveniet optio, suscipit amet tempora ullam porro itaque adipisci sed
          omnis, voluptatem dolorum nostrum quam est repellat explicabo? Nihil,
          labore provident.
        </p>
      </div> */}
    </div>
  )
}
