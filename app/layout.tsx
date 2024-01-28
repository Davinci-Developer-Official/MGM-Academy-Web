import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './components/providers';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MGM Academy',
  description: 'Institute of Gender and Women Empowerment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className && 'background'}>{/*background color linear and fallback color */}
       <Providers> {children}</Providers>
      </body>
    </html>
  )
}
