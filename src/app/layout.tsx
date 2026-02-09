import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components'
import ContactWidget from '@/components/ContactWidget'

export const metadata: Metadata = {
  title: 'AICE Computers | Professional IT Services',
  description: 'Expert IT solutions including computer sales, AMC, networking, CCTV security, and cloud support for your business.',
  keywords: 'IT services, computer sales, networking, CCTV security, cloud support, AMC',
  authors: [{ name: 'AICE Computers' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aicecomputers.com',
    title: 'AICE Computers | Professional IT Services',
    description: 'Expert IT solutions for your business needs',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main style={{ paddingTop: '72px' }}>
          {children}
        </main>
        <ContactWidget />
      </body>
    </html>
  )
}
