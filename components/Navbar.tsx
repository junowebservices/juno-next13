import Link from 'next/link'
import ThemeButton from './ThemeButton'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MenuIcon,
  TwitterIcon
} from 'lucide-react'

const Navs = [
  { title: 'Home', url: '/' },
  { title: 'About Us', url: '/about' },
  { title: 'Services', url: '/services' },
  { title: 'Portfolio', url: '/portfolio' },
  { title: 'Contact', url: '/contact' }
]
const Navbar = () => {
  return (
    <>
      <Sheet>
        <nav className='flex justify-between p-4'>
          <Link href='/'>
            <p className='text-lg'>Juno</p>
          </Link>
          <Link href='/web'>
            <p className='text-lg'>Web</p>
          </Link>
          <div className='space-x-4'>
            <ThemeButton />
            <SheetTrigger>
              <MenuIcon />
            </SheetTrigger>
          </div>
        </nav>
        <SheetContent>
          <SheetHeader>
            {Navs.map(nav => (
              <Link
                key={nav.title}
                href={nav.url}
                className='font-bold underline-offset-4 hover:underline hover:opacity-70'
              >
                {nav.title}
              </Link>
            ))}
            <div className='flex gap-4 pt-12'>
              <TwitterIcon />
              <FacebookIcon />
              <LinkedinIcon />
              <InstagramIcon />
            </div>
            <p className='pt-4 text-xs'>
              &copy; Juno Consulting 2023, All right reserved
            </p>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default Navbar
