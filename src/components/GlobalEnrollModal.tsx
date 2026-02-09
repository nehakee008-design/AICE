"use client"

import { useEffect, useState } from 'react'
import EnrollModal from './EnrollModal'

export default function GlobalEnrollModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handler = () => setIsOpen(true)
    // Listen for a custom event to open the enroll modal
    window.addEventListener('open-enroll-modal', handler)
    return () => window.removeEventListener('open-enroll-modal', handler)
  }, [])

  useEffect(() => {
    // expose a simple helper for legacy code if needed
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.openEnrollModal = () => window.dispatchEvent(new Event('open-enroll-modal'))
  }, [])

  return <EnrollModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
}
