import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { SiteLoader } from '@/components/site-loader'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Digital Agency',
  description: 'We build engaging websites, brands & innovative e-commerce solutions.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} font-sans antialiased`}>
        <SiteLoader />
        {children}
      </body>
    </html>
  )
}

