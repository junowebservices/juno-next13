const NewSection = () => {
  return (
    <div
      data-aos='fade-right'
      className='box-padding 3xl:h-[650px] aos-init aos-animate relative w-full overflow-hidden rounded-xl md:h-[350px] lg:h-[500px] 2xl:h-[550px]'
    >
      <div className='absolute inset-0 bg-gradient-to-br from-[#A61C1C] to-[#964309] opacity-80'></div>
      <div className='relative h-full p-4 lg:p-12'>
        <h1 className='3xl:text-xl font-[800] text-[#D3D3D3]'>Strong focus</h1>
        <div className='mt-5 grid h-full grid-cols-1 place-content-center sm:grid-cols-7 md:mt-0 md:gap-7'>
          <div className='3xl:text-7xl col-span-3 text-4xl font-bold lg:text-5xl xl:text-6xl'>
            <h1 className='leading-[1.18]'>
              <span className='text-[#BCBCBC]'>
                Consistently <br />
                developed. <br />
              </span>
              Rigorously tested.
            </h1>
          </div>
          <div className='3xl:ml-[-120px] col-span-4 grid place-content-start justify-center xl:mt-4'>
            <p className='3xl:max-w-xl mt-4 max-w-md font-semibold sm:mt-0 lg:mx-auto 2xl:text-[21px]'>
              We are a small team of functional software enthusiasts dedicated
              to providing efficient program solutions with a strong focus on
              user experience. Our shared vision for privacy, software
              stability, and grass-roots solutions motivates us, and our
              community to continue to push forward our endeavors.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewSection
