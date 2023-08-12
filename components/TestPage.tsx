import { DownloadCloud, MonitorDown, TwitchIcon } from 'lucide-react'

const TestPage = () => {
  return (
    <section
      data-aos='zoom-in'
      className='3xl:my-40 aos-init aos-animate my-8 md:my-20'
    >
      <div className='sm:t-32 3xl:mb-48 my-[2rem] grid content-center lg:mb-48 lg:mt-44 xl:my-24 2xl:mt-52'>
        <div className='flex flex-col place-content-between px-2 sm:flex-row sm:px-10 lg:px-8'>
          <div>
            <h2 className='text-md 3xl:text-3xl font-bold tracking-tight md:text-xl lg:text-3xl'>
              Web
            </h2>
            <h1 className='3xl:text-7xl mt-2 bg-gradient-to-r from-[#4B13A4] via-[#6B8AFF] to-[#6B8AFF] bg-clip-text text-5xl font-semibold leading-tight text-transparent lg:leading-[1.2] xl:text-6xl'>
              We elevate <br />
              digital Experiences <br />
              {/* in the Web <br /> */}
              {/* modifying <br />
            Windows. */}
            </h1>
            <p className='3xl:max-w-4xl 3xl:text-2xl my-10 max-w-3xl font-semibold text-zinc-400'>
              Our custom Playbooks aim to not only showcase the power of AME
              Wizard, but are a carefully crafted gift to the enthusiast
              community we are a part of. Being functional software enthusiasts
              has constantly motivated us to improve and tweak the operating
              systems that we use. Enabling true privacy and maximizing
              stability are at the core of this philosophy, and Ameliorated
              Playbooks specifically target these goals through an intensive and
              transformative new process.
            </p>
          </div>
          <div className='mr-[-20px] mt-[10px] hidden sm:block lg:mt-[-20px]'>
            <p>Right Section</p>
          </div>
        </div>

        <div className='mt-8 flex flex-col items-center gap-10 px-2 sm:flex-row sm:px-10 lg:gap-14 lg:px-8'>
          <div className='relative w-full rounded-xl bg-gradient-to-b from-blue-300 to-blue-400 p-7 dark:from-[#3D1B9E]/60 dark:to-black sm:p-8'>
            <div className='relative flex h-full w-full flex-col items-start justify-between gap-7'>
              <div className='3xl:gap-5 flex items-center gap-3 sm:gap-4'>
                <MonitorDown className='h-12 w-12' />
                <h1 className='3xl:text-4xl text-2xl font-bold sm:text-3xl'>
                  AME 11
                </h1>
              </div>
              <p className='3xl:text-xl leading-tight'>
                Official Ameliorated Playbook for Windows 11. Cutting the tumor
                out of your OS.
              </p>
              <button className='3xl:pt-[12.5px] 3xl:pb-[13px] 3xl:px-6 button plausible-event-name=AME11 hidden items-center justify-center rounded-xl bg-[#06349F] px-4 pb-[9px] pt-[8.5px] font-medium text-white transition-all hover:bg-[#1143b8] sm:block'>
                <div className='flex items-center gap-2 font-semibold tracking-wider'>
                  <DownloadCloud className='h-7 w-7' />
                  GET PLAYBOOK
                </div>
              </button>
            </div>
          </div>
          <div className='relative w-full rounded-xl bg-gradient-to-b from-blue-300 to-blue-400 p-7 dark:from-[#3D1B9E]/60 dark:to-black sm:p-8'>
            <div className='relative flex h-full w-full flex-col items-start justify-between gap-7'>
              <div className='3xl:gap-5 flex items-center gap-3 sm:gap-4'>
                <MonitorDown className='h-12 w-12' />
                <h1 className='3xl:text-4xl text-2xl font-bold sm:text-3xl'>
                  AME 10
                </h1>
              </div>
              <p className='3xl:text-xl leading-tight'>
                Official Ameliorated Playbook for Windows 10. Cutting the tumor
                out of your OS.
              </p>
              <button className='3xl:pt-[12.5px] 3xl:pb-[13px] 3xl:px-6 button plausible-event-name=AME11 hidden items-center justify-center rounded-xl bg-[#06349F] px-4 pb-[9px] pt-[8.5px] font-medium text-white transition-all hover:bg-[#1143b8] sm:block'>
                <div className='flex items-center gap-2 font-semibold tracking-wider'>
                  <DownloadCloud className='h-7 w-7' />
                  GET PLAYBOOK
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default TestPage
