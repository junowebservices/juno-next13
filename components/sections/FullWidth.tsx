const FullWidth = () => {
  return (
    <div
      data-aos='fade-right'
      className='aos-init aos-animate relative hidden w-full overflow-hidden rounded-xl bg-[#141417] py-12 lg:block'
    >
      <div className='absolute inset-0 grid grid-cols-3'>
        <div></div>
        <div className='relative col-span-2 h-full w-full'>
          <div className='absolute inset-0'>
            <div className="bg-sample-image relative h-full w-full bg-[url('/img/bg-long.png')] bg-cover">
              <div className='absolute inset-0 bg-gradient-to-r from-[#141417] to-[#141417]/60'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-10'>
        <h1 className='3xl:text-xl font-[800] text-[#D3D3D3]'>AME Playbooks</h1>
      </div>
      <div className='relative grid h-full w-full grid-cols-1 items-start gap-10 px-10 lg:grid-cols-2 lg:pr-0'>
        <div>
          <p className='3xl:text-2xl my-7 text-lg font-semibold'>
            A number of years ago, this project began as a collection of
            scripts, which required the users to run a deletion process via
            Linux. We have learned much since then, and the move to Playbooks is
            the next chapter in delivering the AME experience.
          </p>
          <a target='_blank' href='https://docs.ameliorated.io/playbooks.html'>
            <button className='3xl:pt-[12.5px] 3xl:pb-[13px] 3xl:px-6 3xl:text-xl mt-7 inline-flex items-center justify-center rounded-xl bg-[#06349F] px-4 pb-[9px] pt-[8.5px] font-medium text-white transition-all hover:bg-[#1143b8]'>
              Learn more
            </button>
          </a>
        </div>
        <div className='3xl:ml-0 3xl:max-w-xl relative flex h-full flex-col-reverse lg:ml-[-60px] lg:max-w-lg lg:flex-col'>
          <div className='3xl:text-xl mt-3 grid grow place-content-start lg:mt-0 lg:place-content-center'>
            <a
              target='_blank'
              href='https://www.youtube.com/watch?v=nwkiU6GG-YU'
            >
              <button className='3xl:py-4 3xl:px-6 inline-flex items-center justify-center rounded-xl bg-black px-4 pb-[9px] pt-[8.5px] font-medium text-white transition-all hover:bg-[#363434]'>
                Watch video
              </button>
            </a>
          </div>
          <p className='text-lg font-bold lg:px-6 lg:text-sm lg:text-zinc-400'>
            In an early incarnation, AME was featured in numerous outlets, such
            as{' '}
            <a className='cursor-pointer text-blue-500'>Wolfgang's Channel</a>,
            and most notably{' '}
            <a className='cursor-pointer text-blue-500'>Linus Tech Tips</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FullWidth
