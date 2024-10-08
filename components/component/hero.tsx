/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/fRQZc9NMU2P
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

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4 animate-fade-in">
          <img
            src="/krishna_2.jpg"
            width={550}
            height={550}
            alt="Krishna Chaturvedi"
            className="mx-auto aspect-square overflow-hidden rounded-lg shadow-2xl object-cover sm:w-full"
          />
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Krishna Chaturvedi</h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Krishna Chaturvedi is a renowned artist who sings captivating religious songs. His music is available on
              popular platforms like Spotify, YouTube, Instagram, and Jio Saavn.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="https://open.spotify.com/artist/1ZdiGynuU5RZDk1qA2Ukqh"
              target="_blank"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Listen on Spotify
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCYcwvigL-2MmFCn_bqMJf3g"
              target="_blank"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Watch on YouTube
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
