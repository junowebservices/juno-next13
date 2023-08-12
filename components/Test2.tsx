'use cliet'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { SmartphoneIcon } from 'lucide-react'
import { useEffect } from 'react'

const Test2 = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className='3xl:gap-9 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:gap-6'>
      <div data-aos='fade-right' className='aos-init aos-animate'>
        <div className='3xl:h-[650px] rounded-xl bg-gradient-to-b from-[#2B2D34] to-[#1D1D1F] p-8 sm:h-[350px] lg:h-[500px] lg:p-12 2xl:h-[550px]'>
          <div className='flex h-full flex-col'>
            <h1 className='3xl:text-xl font-[800] text-[#D3D3D3]'>
              Modern design
            </h1>
            <div className='3xl:mt-24 flex flex-auto flex-col lg:mt-12'>
              <SmartphoneIcon className='h-14 w-14' />
              <p className='3xl:text-[25px] 3xl:leading-[32px] mt-4 font-semibold sm:text-[15px] lg:text-[16px] 2xl:text-[19px]'>
                An app that truly looks at home on your desktop. It follows the
                modern design guidelines for Windows 11, including transparency
                effects, animations, and both light and dark themes.
              </p>
            </div>
            <div className='mt-5 flex-none sm:mt-0'>
              <a
                target='_blank'
                href='https://images.ameliorated.info/s/pEyAck9YF5aMXXo'
              >
                <button className='3xl:pt-[12.5px] 3xl:pb-[13px] 3xl:px-6 3xl:text-xl inline-flex items-center justify-center rounded-xl bg-black px-4 pb-[9px] pt-[8.5px] text-sm font-medium text-white transition-all hover:bg-[#363434] sm:text-base'>
                  Screenshots
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos='fade-up' className='aos-init aos-animate'>
        <div className='3xl:h-[650px] rounded-xl bg-gradient-to-b from-[#2B2D34] to-[#1D1D1F] p-8 sm:h-[350px] lg:h-[500px] lg:p-12 2xl:h-[550px]'>
          <div className='flex h-full flex-col'>
            <h1 className='3xl:text-xl font-[800] text-[#D3D3D3]'>
              Open source
            </h1>
            <div className='3xl:mt-24 flex flex-auto flex-col lg:mt-12'>
              <SmartphoneIcon className='h-14 w-14' />
              <p className='3xl:text-[25px] 3xl:leading-[32px] mt-4 font-semibold sm:text-[15px] lg:text-[16px] 2xl:text-[19px]'>
                Freely available source-code strengthens the community through
                trust and transparency. Most of our software is released under
                the MIT license.
              </p>
            </div>
            <div className='mt-5 flex-none sm:mt-0'>
              <a
                target='_blank'
                href='https://git.ameliorated.info/Styris/trusted-uninstaller-cli'
              >
                <button className='3xl:pt-[12.5px] 3xl:pb-[13px] 3xl:px-6 3xl:text-xl inline-flex items-center justify-center rounded-xl bg-black px-4 pb-[9px] pt-[8.5px] text-sm font-medium text-white transition-all hover:bg-[#363434] sm:text-base'>
                  Source Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos='fade-left' className='aos-init aos-animate'>
        <div className='3xl:h-[650px] rounded-xl bg-gradient-to-b from-[#2B2D34] to-[#1D1D1F] p-8 sm:h-[350px] lg:h-[500px] lg:p-12 2xl:h-[550px]'>
          <div className='flex h-full flex-col'>
            <h1 className='3xl:text-xl font-[800] text-[#D3D3D3]'>
              Native app
            </h1>
            <div className='3xl:mt-24 flex flex-auto flex-col lg:mt-12'>
              <SmartphoneIcon className='h-14 w-14' />
              <p className='3xl:text-[25px] 3xl:leading-[32px] mt-4 font-semibold sm:text-[15px] lg:text-[16px] 2xl:text-[19px]'>
                We did not take the easy path of writing our app in Java or a
                web-based Java-script heavy framework. Using C# and .NET allows
                us to craft an experience that minimizes resource use and is
                very fast.
              </p>
            </div>
            <div className='mt-5 flex-none sm:mt-0'>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test2
