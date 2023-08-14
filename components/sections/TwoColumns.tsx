import Image from 'next/image'
import React from 'react'

const TwoColumns = () => {
  return (
    <div className='3xl:h-[650px] 3xl:gap-9 grid gap-4 md:h-[465px] md:grid-cols-2 lg:h-[500px] xl:gap-6'>
      <div
        data-aos='fade-up'
        className='aos-init aos-animate relative w-full rounded-xl bg-[#20202A] p-9 md:p-12'
      >
        <div
          className="bg-sample-image absolute inset-0 hidden bg-[url('/img/bg-right.png')] bg-contain bg-right bg-no-repeat opacity-30 lg:block "
          //   style='background-image:url(/ame_assets/DocumentsBackground.png);'
        ></div>
        <div className="bg-sample-image absolute inset-0 bg-[url('/img/bg-right.png')] bg-contain bg-right bg-no-repeat opacity-30 lg:hidden"></div>
        <h1 className='3xl:text-xl font-[800] text-[#D3D3D3]'>Documentation</h1>
        <div className='relative flex h-full flex-col items-start pb-8'>
          <div className='grid h-full place-content-center items-center gap-14 lg:max-w-lg lg:grid-cols-3'>
            <p className='3xl:text-2xl col-span-2 font-semibold md:text-xl'>
              Jump right in and start building. All aspects of Playbook creation
              are fully documentated and easy to understand. We also have a
              large community that is there to help.
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos='fade-up'
        className='3xl:h-[650px] aos-init aos-animate relative hidden w-full rounded-xl bg-[#20202A] p-9 md:block md:p-12'
      >
        <h1 className='3xl:text-xl font-[800] text-[#D3D3D3]'>
          Different applications
        </h1>
        <div className='3xl:pt-[4.7rem] flex h-full flex-col items-center pt-[2.5rem]'>
          <div className='grid grow text-center'>
            <h1 className='3xl:text-4xl max-w-md text-3xl font-semibold'>
              A powerful multi-tool: <br />
              For hobbyists and organizations.
            </h1>
          </div>
          <div className='3xl:ml-[70px] 3xl:mt-[20%] 3xl:scale-[130%] relative mx-auto ml-[-65px] mt-[9%] hidden h-full w-[450px] scale-75  md:block lg:ml-[-25px] lg:scale-90 xl:ml-[5px]'>
            <Image
              priority
              src='/img/screenshot_gamer.webp'
              alt='bg-sample'
              width={200}
              height={200}
              className='png-shadow absolute left-[20px]  rounded-md object-contain shadow-2xl'
            />
            <Image
              priority
              src='/img/screenshot_gamer.webp'
              alt='bg-sample'
              width={200}
              height={200}
              className='png-shadow absolute left-[110px]  top-[90px] z-10 rounded-md object-contain shadow-2xl'
            />
            <Image
              priority
              src='/img/screenshot_gamer.webp'
              alt='bg-sample'
              width={200}
              height={200}
              className='png-shadow absolute left-[230px]  top-[20px] rounded-md object-contain shadow-2xl'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TwoColumns
