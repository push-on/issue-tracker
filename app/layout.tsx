import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Issue Tracker',
  description: 'Portflio: Pushons fullstack nextjs project',
  icons: {
    icon: '/bug.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.className} lang="en">
      <body className='h-screen'>
        <Navbar />
        <main className='border'>
          {children}
        </main>
      </body>
    </html>
  )
}
