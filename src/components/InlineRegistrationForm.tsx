'use client'

import { useState } from 'react'

export default function InlineRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    education: '',
    selectCourses: '',
    documents: null as File | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<string>('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setFormData((prev) => ({
        ...prev,
        documents: file,
      }))
      setUploadedFile(file.name)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name || !formData.phoneNumber || !formData.education || !formData.selectCourses) {
      alert('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)

    try {
      // Clear form immediately
      setFormData({
        name: '',
        phoneNumber: '',
        education: '',
        selectCourses: '',
        documents: null,
      })
      setUploadedFile('')
      
      // Show success message FIRST
      alert('✓ Form submitted successfully!\n\nClick OK to open WhatsApp and send your registration.')
      
      // THEN open WhatsApp with pre-filled message
      const message = `*Registration Form Submission*

Name: ${formData.name}
Phone Number: ${formData.phoneNumber}
Education: ${formData.education}
Selected Course: ${formData.selectCourses}
Document Uploaded: ${uploadedFile || 'No document'}`

      const encodedMessage = encodeURIComponent(message)
      const whatsappUrl = `https://wa.me/8217213769?text=${encodedMessage}`
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    } catch (error) {
      console.error('Error:', error)
      alert('Error submitting form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Registration
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition"
                placeholder="Your name"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition"
                placeholder="Your phone number"
              />
            </div>

            {/* Education */}
            <div>
              <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                Education *
              </label>
              <input
                type="text"
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition"
                placeholder="Your education background"
              />
            </div>

            {/* Select Courses */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Courses *
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="selectCourses"
                    value="Tally"
                    checked={formData.selectCourses === 'Tally'}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-600"
                  />
                  <span className="ml-3 text-sm text-gray-700">Tally</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="selectCourses"
                    value="Computer Basics & MS Office"
                    checked={formData.selectCourses === 'Computer Basics & MS Office'}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-600"
                  />
                  <span className="ml-3 text-sm text-gray-700">Computer Basics & MS Office</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="selectCourses"
                    value="DTP"
                    checked={formData.selectCourses === 'DTP'}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-600"
                  />
                  <span className="ml-3 text-sm text-gray-700">DTP</span>
                </label>
              </div>
            </div>

            {/* Documents */}
            <div>
              <label htmlFor="documents" className="block text-sm font-medium text-gray-700 mb-2">
                Documents
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <p className="text-xs text-gray-500 mt-2">
                      {uploadedFile ? `✓ ${uploadedFile}` : 'Click to upload or drag and drop'}
                    </p>
                  </div>
                  <input
                    type="file"
                    id="documents"
                    name="documents"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
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
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
