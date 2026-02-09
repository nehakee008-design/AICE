import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'AICE Computer Center Vijayapur | Top Institute in Vijayapur',
  description: 'AICE Computer Center Vijayapur is ISO 9001:2015 certified, offering IT, hardware, and software courses. Join the top computer institute in Vijayapur',
  openGraph: {
    title: 'AICE Computer Center Vijayapur | Top Institute in Vijayapur',
    description: 'AICE Computer Center Vijayapur is ISO 9001:2015 certified, offering IT, hardware, and software courses.',
    url: 'https://aicecomputers.com',
  },
}

export default function Home() {
  return <HomeClient />
}
