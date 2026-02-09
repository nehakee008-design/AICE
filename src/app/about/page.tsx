import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About Us | AICE Computers',
  description: 'Learn about AICE Computers, our mission, values, and the team behind our professional IT services.',
  openGraph: {
    title: 'About Us | AICE Computers',
    description: 'Discover our story and mission',
  },
}

export default function About() {
  return <AboutClient />
}
