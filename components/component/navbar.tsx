/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/0EULkvFcXiR
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-sm ">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto ">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
         
<h2 className=" font-bold md:text-2xl  text-xl">Krishna Chaturvedi</h2>
  
        </Link>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <Link
            href="/"
            className="relative flex items-center gap-2 py-2 transition-colors hover:text-primary"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`relative flex items-center gap-2 py-2 transition-colors hover:text-primary`}
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="/gallery"
            className="relative flex items-center gap-2 py-2 transition-colors hover:text-primary"
            prefetch={false}
          >
            Gallery
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="md:hidden">
            <div className="grid gap-4 p-6">
              <Link
                href="/"
                className="relative flex items-center gap-2 py-2 transition-colors hover:text-primary"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="/gallery"
                className={`relative flex items-center gap-2 py-2 transition-colors hover:text-primary $`}
                prefetch={false}
              >
                Gallery
              </Link>
              <Link
                href="#"
                className="relative flex items-center gap-2 py-2 transition-colors hover:text-primary"
                prefetch={false}
              >
                About
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
