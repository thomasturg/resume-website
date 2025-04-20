import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Thomas Sturgeon - Resume',
  description: 'Professional resume and portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans bg-gray-50`}>
        <Navigation />
        <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  )
} 