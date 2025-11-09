import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import ImageProtection from '@/components/ImageProtection'

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sikabahn - Art Portfolio',
  description: 'Art portfolio of Sikabahn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={lato.variable}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ImageProtection />
        <Navigation />
        {children}
      </body>
    </html>
  )
}

