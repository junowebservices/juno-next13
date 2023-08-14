import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full border-t-[1px] dark:border-[#2A2A2A]'>
      <div className='3xl:max-w-[85rem] mx-auto p-5 sm:mx-auto sm:max-w-2xl lg:max-w-[62rem]  lg:px-0 xl:max-w-[70rem]'>
        <div className='grid w-full grid-cols-2 items-start gap-4 md:grid-cols-4 md:gap-0'>
          <div className='col-span-2 mb-2 flex items-center gap-2 sm:mb-0 md:col-span-1'>
            <div className='3xl:h-[40px] 3xl:w-[110px] relative h-[26px] w-[75px]'>
              <Image
                priority
                src='/bg-sample.png'
                alt='bg-sample'
                width={50}
                height={50}
                className='object-contain'
              />
            </div>
          </div>
          <div className='3xl:text-base text-sm'>
            <h1 className='font-[800]'>Wizard Beta</h1>
            <div className='my-2 flex flex-col gap-1 text-zinc-400'>
              <a className='cursor-pointer'>App Download</a>
              <a target='_blank' href='https://t.me/+TFCUAzfq6Y-Bl9vG'>
                Support group
              </a>
              <a
                target='_blank'
                href='https://www.youtube.com/watch?v=YTL0i5XzS7k'
              >
                Appearances
              </a>
            </div>
          </div>
          <div className='3xl:text-base text-sm'>
            <h1 className='font-[800]'>Resources</h1>
            <div className='my-2 flex flex-col gap-1 text-zinc-400'>
              <a
                target='_blank'
                href='https://git.ameliorated.info/Styris/trusted-uninstaller-cli'
              >
                Code
              </a>
              <a target='_blank' href='https://docs.ameliorated.io/index.html'>
                Documentation
              </a>
            </div>
          </div>
          <div className='3xl:text-base text-sm'>
            <h1 className='font-[800]'>Company</h1>
            <div className='my-2 flex flex-col gap-1 text-zinc-400'>
              <a
                target='_blank'
                href='https://download.ameliorated.io/Ameliorated%20Presskit.zip'
              >
                Press Kit
              </a>
              <a target='_blank' href='https://twitter.com/ameliorated117'>
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
