'use client'

import { useState } from 'react'

interface EnrollModalProps {
  isOpen: boolean
  onClose: () => void
}

// Business owner's WhatsApp number (with country code, no + or spaces)
const BUSINESS_WHATSAPP_NUMBER = '919876543210' // Change this to your WhatsApp number

export default function EnrollModal({ isOpen, onClose }: EnrollModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseInterest: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  if (!isOpen) return null

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Construct WhatsApp message
      const whatsappMessage = `New Registration Request

Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Course: ${formData.courseInterest}`

      // Encode message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage)

      // Construct WhatsApp Click-to-Chat URL
      const whatsappUrl = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodedMessage}`

      // Show success message
      setSubmitMessage('Thank you! Opening WhatsApp to complete your registration.')

      // Clear form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        courseInterest: '',
        message: '',
      })

      // Open WhatsApp in new tab
      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
        onClose()
        setSubmitMessage('')
      }, 1000)
    } catch (error) {
      console.error('Error:', error)
      setSubmitMessage('An error occurred. Please try again.')
      setTimeout(() => {
        setSubmitMessage('')
      }, 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <div className="relative bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full w-10 h-10 flex items-center justify-center transition"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Form Content */}
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.223-4.97 5.623-4.97 9.289 0 3.667 1.957 7.025 5.379 8.856.556.285 1.259.419 1.957.419.556 0 1.111-.089 1.623-.277l5.972-.962 1.32-2.22c.203-.341.405-.682.583-1.044C21.3 15.258 21 11.875 21 9c0-5.621-4.56-10.194-10.148-10.194z" />
              </svg>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Register with WhatsApp
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Fill in the form below and we'll connect with you on WhatsApp.
            </p>

            {submitMessage && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">{submitMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Course Interest */}
              <div>
                <label htmlFor="courseInterest" className="block text-sm font-medium text-gray-700 mb-1">
                  Course of Interest *
                </label>
                <select
                  id="courseInterest"
                  name="courseInterest"
                  value={formData.courseInterest}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition"
                >
                  <option value="">-- Select a course --</option>
                  <option value="Computer Basics">Computer Basics & MS-Office</option>
                  <option value="Tally Prime">Tally Prime with GST</option>
                  <option value="DTP">Desktop Publishing (DTP)</option>
                  <option value="Languages">Language Courses</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Cloud Computing">Cloud Computing</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.223-4.97 5.623-4.97 9.289 0 3.667 1.957 7.025 5.379 8.856.556.285 1.259.419 1.957.419.556 0 1.111-.089 1.623-.277l5.972-.962 1.32-2.22c.203-.341.405-.682.583-1.044C21.3 15.258 21 11.875 21 9c0-5.621-4.56-10.194-10.148-10.194z" />
                </svg>
                {isSubmitting ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4">
              ✓ No data stored on our server • Direct WhatsApp connection
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
