'use client'

import { useState } from 'react'

interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'general-inquiry',
    message: '',
  })
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    try {
      setIsSubmitting(true)
      // In a real application, this would send to your backend/API
      console.log('Form data:', formData)
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'general-inquiry',
        message: '',
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="John Doe"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="john@example.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="+91-XXXXXXXXXX"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
          placeholder="Your Company"
        />
      </div>

      {/* Service Type */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-2">
          Service Interested In *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
            errors.service ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="general-inquiry">General Inquiry</option>
          <option value="computer-sales">Computer Sales & Service</option>
          <option value="amc">Annual Maintenance Contracts</option>
          <option value="networking">Networking Solutions</option>
          <option value="security">CCTV & Security Systems</option>
          <option value="cloud">Server & Cloud Support</option>
          <option value="consulting">IT Consulting</option>
        </select>
        {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors resize-none ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Tell us about your requirements..."
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
          <p className="font-semibold">Success!</p>
          <p className="text-sm">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
          <p className="font-semibold">Error</p>
          <p className="text-sm">Something went wrong. Please try again.</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      <p className="text-sm text-gray-600 text-center">
        <span className="font-medium">*</span> Required fields
      </p>
    </form>
  )
}
