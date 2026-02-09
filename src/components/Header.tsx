'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About US', href: '/about' },
    { label: 'Courses', href: '/courses' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact US', href: '/contact' },
  ]

  const handleRegisterClick = () => {
    window.open('/register', '_blank')
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm"
      style={{ height: '72px' }}
    >
      <nav className="h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">

        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/logo.png"
            alt="AICE Computers Logo"
            width={842}
            height={296}
            priority
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center flex-1 justify-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block flex-shrink-0">
          <button
            onClick={handleRegisterClick}
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 flex-shrink-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-[72px] left-0 right-0 bg-white border-b border-gray-200 md:hidden shadow-lg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <button
                onClick={() => {
                  handleRegisterClick()
                  setMobileMenuOpen(false)
                }}
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
              >
                Register
              </button>
            </div>
          </div>
        )}

      </nav>
    </header>
  )
}
