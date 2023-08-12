import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/config/providers'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Juno Consulting',
  description: 'Juno Web Services'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          {/* <Navbar /> */}
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
