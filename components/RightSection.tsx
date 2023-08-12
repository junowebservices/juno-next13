import Image from 'next/image'
import React from 'react'

const RightSection = () => {
  return (
    <div
      data-aos='fade-left'
      className='3xl:h-[650px] aos-init aos-animate w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#56107A] to-[#723020] py-12 lg:h-[550px]'
    >
      <div className='px-8 sm:px-12'>
        <h1 className='3xl:text-xl font-[800] text-[#D3D3D3]'>Develop</h1>
      </div>
      <div className='grid h-full w-full grid-cols-1 items-center gap-10 p-8 sm:px-12 lg:grid-cols-2 lg:pr-0'>
        <div>
          <h1 className='3xl:text-7xl 3xl:leading-tight text-3xl font-bold lg:text-5xl lg:leading-tight'>
            Playbooks
            <br />
            are YAML.
          </h1>
          <p className='mt-6 font-semibold leading-relaxed text-zinc-200 sm:text-lg'>
            With human-readible configuration files, cleanly removing or
            modifying system components is as simple as listing their names in a
            list. Everything from the experience in the GUI, including
            requirements to check for, before the user can proceed, to modifying
            the user interface and installing packages, is just a few lines of
            text away.
          </p>
        </div>
        <div className='3xl:ml-[0px] hidden w-full justify-end lg:ml-[50px] lg:flex'>
          <Image
            priority
            src='/sample.webp'
            alt='bg-sample'
            width={1600}
            height={500}
            className='object-contain'
          />
        </div>
      </div>
    </div>
  )
}

export default RightSection
