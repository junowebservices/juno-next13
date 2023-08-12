'use client'
import { useTheme } from 'next-themes'
import { Label } from './ui/label'
import { Switch } from './ui/switch'
import {
  MoonIcon,
  SunDimIcon,
  SunIcon,
  SunsetIcon,
  TwitchIcon
} from 'lucide-react'
import { useEffect, useState } from 'react'

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [darkModeSwitch, setDarkModeSwitch] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setDarkModeSwitch(resolvedTheme === 'dark' ? false : true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleDarkMode = () => {
    setDarkModeSwitch(!darkModeSwitch)
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }
  return (
    <header>
      <nav className='fixed top-0 z-20 mt-[-1px] w-full border-b-[1px] py-5 dark:border-[#2A2A2A] lg:mt-0'>
        <div className='absolute inset-0 h-full backdrop-blur-md dark:bg-[#121212]/70'></div>
        <div className='3xl:max-w-5xl relative mx-5 flex items-center justify-between sm:mx-auto sm:max-w-2xl lg:max-w-4xl'>
          <div className='flex items-center gap-2'>
            <a className='relative h-[25px] w-[145px]' href='#top'></a>
          </div>
          <div className='flex items-center gap-2'>
            <div className='flex gap-2 sm:gap-0'>
              <button className='3xl:px-6 3xl:py-2 relative inline-flex items-center justify-center rounded-xl bg-[#1A1A1A] px-4 pb-[9px] pt-[8.5px] text-xs font-semibold text-white transition-all hover:bg-[#1f1f1f] sm:mr-[-20px]'>
                <div className='flex items-center gap-2'>
                  <TwitchIcon className='h-4 w-4' />
                  <span className='hidden font-bold sm:block'>Community</span>
                </div>
              </button>

              <button className='3xl:py-2 3xl:px-0 inline-flex items-center justify-center rounded-xl bg-[#2B2B2B] px-0 pb-[9px] pt-[8.5px] text-sm font-medium text-white transition-all hover:bg-[#424242] sm:rounded-l-none'>
                <div className='flex items-center gap-1 px-4 sm:pl-7 sm:pr-3.5 sm:pt-[2px]'>
                  <TwitchIcon className='h-4 w-4' />
                </div>
              </button>
            </div>
            <button className='3xl:px-6 3xl:py-2 inline-flex items-center justify-center rounded-xl bg-[#06349F] px-4 pb-[9px] pt-[8.5px] text-xs font-medium text-white transition-all hover:bg-[#1143b8]'>
              <div className='flex items-center gap-1'>
                <TwitchIcon className='h-4 w-4' />
                <span className='hidden font-bold sm:block'>Donate</span>
              </div>
            </button>
            <div className='flex items-center space-x-2'>
              <Switch
                id='dark-mode'
                checked={darkModeSwitch}
                onCheckedChange={handleDarkMode}
              />
              <SunIcon />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
