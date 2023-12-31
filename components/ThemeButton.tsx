'use client'
import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant='outline'
      className='border-none'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className='h-5 w-5 text-orange-500' />
      ) : (
        <MoonIcon className='h-5 w-5 text-slate-800' />
      )}
    </Button>
  )
}

export default ThemeButton
