import React from 'react'

const TwoThird = () => {
  return (
    <div
      data-aos='fade-up'
      className='3xl:gap-10 aos-init aos-animate grid gap-4 md:grid-cols-5 lg:grid-cols-3 xl:gap-6'
    >
      <div className='box-padding box-heights relative w-full rounded-xl bg-gradient-to-b from-[#141417] via-[#18181b] to-[#293C5B] md:col-span-3 lg:col-span-2'>
        <div className="3xl:bg-[length:45%_78%] absolute inset-0 bg-[url('/img/stupid_network_vector.png')] bg-[length:300px_395px] bg-right bg-no-repeat opacity-70 blur-sm lg:bg-[length:48%_76%] lg:bg-[center_right_2.9rem] lg:opacity-100 lg:blur-none "></div>
        <h1 className='3xl:text-xl font-[800] text-[#D3D3D3]'>Features</h1>
        <div className='3xl:pt-16 relative flex h-full flex-col pt-10'>
          <h1 className='3xl:text-7xl 3xl:leading-[1.18] text-5xl font-semibold leading-tight'>
            Verify. <br />
            Deploy. <br />
            Trust.
          </h1>
          <div className='3xl:max-w-[24rem] mt-7 max-w-[18rem]'>
            <p className='3xl:text-[18px] 3xl:leading-[25px] text-[14px] text-zinc-400'>
              All verified Playbooks are hashed upon importing them into AME
              Wizard, and are checked against a fast, location optimized hash
              verification server.
            </p>
            <p className='3xl:text-[18px] 3xl:leading-[25px] mt-6 text-[14px]'>
              Verified Playbooks are always delivered securely to their
              userbase.
            </p>
          </div>
        </div>
      </div>
      <div className='box-padding box-heights relative w-full rounded-xl bg-gradient-to-b from-[#35302B] to-[#17171E] md:col-span-2 lg:col-span-1'>
        <h1 className='3xl:text-xl font-[800] text-[#D3D3D3]'>Verification</h1>
        <div className='flex h-full flex-col items-start justify-end pb-8'>
          <div>
            <svg
              stroke='currentColor'
              fill='currentColor'
              stroke-width='0'
              viewBox='0 0 24 24'
              height='62'
              width='62'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g>
                <path fill='none' d='M0 0H24V24H0z'></path>
                <path d='M12 1l8.217 1.826c.457.102.783.507.783.976v9.987c0 2.006-1.003 3.88-2.672 4.992L12 23l-6.328-4.219C4.002 17.668 3 15.795 3 13.79V3.802c0-.469.326-.874.783-.976L12 1zm0 2.049L5 4.604v9.185c0 1.337.668 2.586 1.781 3.328L12 20.597l5.219-3.48C18.332 16.375 19 15.127 19 13.79V4.604L12 3.05zm4.452 5.173l1.415 1.414L11.503 16 7.26 11.757l1.414-1.414 2.828 2.828 4.95-4.95z'></path>
              </g>
            </svg>
            <p className='3xl:mt-7 3xl:text-[21px] 3xl:leading-[32px] mt-3 font-semibold sm:text-[15px] lg:pr-6 lg:text-base'>
              Verification requires registration of your project with
              Ameliorated. We audit your Playbook, verify it, and you are added
              to a whitelist of secure Playbooks.
            </p>
          </div>
          <div className='3xl:mt-12 3xl:mb-10 my-6 xl:my-9'>
            <p className='3xl:text-lg text-sm text-zinc-400'>
              Registration is closed during beta
            </p>
          </div>
          <button
            className='3xl:pt-[12.5px] 3xl:pb-[13px] 3xl:px-6 3xl:text-xl inline-flex cursor-not-allowed items-center justify-center rounded-xl bg-[#06349F] bg-opacity-30 px-4 pb-[9px] pt-[8.5px] font-medium text-white transition-all hover:bg-[#1143b8] hover:bg-opacity-30'
            disabled=''
          >
            Become verified
          </button>
        </div>
      </div>
    </div>
  )
}

export default TwoThird
