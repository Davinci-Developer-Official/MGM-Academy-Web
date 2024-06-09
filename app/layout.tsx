'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './components/providers';
import { useEffect, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';


const inter = Inter({ subsets: ['latin'] })

 const metadata: Metadata = {
  title: 'MGM Academy',
  description: 'Institute of Gender and Women Empowerment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const a =""
  const [zoom, setZoom] = useState(1);

  useHotkeys('ctrl+=', () => setZoom((prevZoom) => prevZoom + 0.1));
  useHotkeys('ctrl+-', () => setZoom((prevZoom) => Math.max(0.1, prevZoom - 0.1)));
  useHotkeys('ctrl+0', () => setZoom(1));

  useEffect(() => {
    document.documentElement.style.transform = `scale(${zoom})`;
    document.documentElement.style.transformOrigin = '0 0';
  }, [zoom]);
  return (
    <html lang="en">
      <body className={inter.className && 'background'}>{/*background color linear and fallback color */}
       <Providers> {children}</Providers>
      </body>
    </html>
  )
}
