'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Providers = ({ children, ...props }: Props) => {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}

export default Providers
