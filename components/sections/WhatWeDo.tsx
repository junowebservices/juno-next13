import { PrimaryServices } from '@/data/common'

const WhatWeDo = () => {
  return (
    <section className='h-full py-8  '>
      <div className='mx-auto mb-10 max-w-[1600px] px-5 text-center'>
        <h2 className=' mb-5 text-3xl font-medium md:text-4xl '>What we do</h2>
        <p className=' md:text-lg lg:px-72'>
          We specialize developing and designing websites for organizations and
          businesses. Every line of code is written by hand to ensure the best
          performance, which helps bring in more customers to your site and gain
          more revenue to your business.
        </p>
      </div>
      <div className='mx-auto max-w-[1600px] items-center lg:flex lg:flex-col'>
        <div className='relative mt-8 grid gap-10 px-4 py-6 text-center md:grid-cols-3 lg:mt-16 lg:w-8/12 lg:place-items-center lg:px-0 lg:py-16'>
          {PrimaryServices.map(item => (
            <div key={item.name} className='flex flex-col place-items-center '>
              <item.icon
                className='shadow-shadowColor mb-4 h-16 w-16 rounded-full bg-white p-2 text-black shadow-xl'
                aria-hidden='true'
              />
              <h2 className=' py-3 text-xl font-medium'>{item.name}</h2>
              <p className=''>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
