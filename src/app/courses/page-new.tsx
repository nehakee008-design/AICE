import type { Metadata } from 'next'
import CoursesClient from './CoursesClient'

export const metadata: Metadata = {
  title: 'Courses - AICE Computer Center Vijayapur',
  description: 'Explore our comprehensive IT, hardware, software, and skill development courses. Professional training certified by government.',
  openGraph: {
    title: 'Courses - AICE Computer Center Vijayapur',
    description: 'Explore our comprehensive IT, hardware, software, and skill development courses.',
    url: 'https://aicecomputers.com/courses',
  },
}

export default function CoursesPage() {
  return <CoursesClient />
}
