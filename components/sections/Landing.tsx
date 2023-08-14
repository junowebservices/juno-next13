import Image from 'next/image'
import React from 'react'

const Landing = () => {
  return (
    <>
      <div className='relative' id='top'>
        <div className='absolute hidden h-[550px] w-full select-none lg:block'>
          <Image
            priority
            src='/img/bg-landing-lg.webp'
            alt='bg-sample'
            width={1200}
            height={300}
            className='hidden blur-lg dark:block'
          />
        </div>
        <div className='absolute left-[-275px] top-[-215px] h-[850px] w-[1000px] select-none lg:hidden'>
          <Image
            priority
            src='/bg-sample.png'
            alt='bg-sample'
            width={1200}
            height={300}
            className='hidden blur-xl dark:block'
          />
        </div>
      </div>

      <div className='sm:t-32 3xl:mb-48 z-10 my-[2rem] grid content-center lg:mb-48 lg:mt-44 xl:my-24 2xl:mt-52'>
        <div className='flex flex-col place-content-between px-2 sm:flex-row sm:px-10 lg:px-8'>
          <div>
            <h2 className='text-md 3xl:text-3xl font-bold tracking-tight md:text-xl lg:text-3xl'>
              AME Wizard
            </h2>
            <h1 className='3xl:text-7xl mt-2 bg-gradient-to-r from-[#4B13A4] via-[#6B8AFF] to-[#6B8AFF] bg-clip-text text-5xl font-semibold leading-tight text-transparent lg:leading-[1.2] xl:text-6xl'>
              The Ultimate <br />
              tool for <br />
              modifying <br />
              Windows.
            </h1>
          </div>
          <div className='mr-[-20px] mt-[10px] hidden sm:block lg:mt-[-20px]'>
            <div className='relative'>
              <div className='3xl:h-[510px] 3xl:w-[740px] relative h-[225px] w-[350px] lg:h-[402px] lg:w-[575px]'>
                <Image
                  priority
                  src='/bg-sample.png'
                  alt='bg-sample'
                  width={800}
                  height={300}
                  className='object-contain'
                />
              </div>
              <div className='3xl:h-[230px] 3xl:w-[230px] absolute bottom-[-45px] left-[-50px] h-[125px] w-[125px] lg:h-[200px] lg:w-[200px]'>
                <Image
                  priority
                  src='/sample.webp'
                  alt='bg-sample'
                  width={250}
                  height={250}
                  className='object-contain'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
