import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, Zap, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - AICE Computer Center Vijayapur',
  description: 'Get in touch with AICE Computers. Contact us for course inquiries and support.',
  openGraph: {
    title: 'Contact Us - AICE Computer Center',
    description: 'Reach out to our team for more information',
  },
}

export default function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      items: ['+91 9945470269', '+91 9986122719'],
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Mail,
      title: 'Email',
      items: ['aicesbjp@gmail.com'],
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: MapPin,
      title: 'Location',
      items: ['2nd Floor Vishnu Complex', 'Vijayapur, Karnataka 586101'],
      color: 'from-red-400 to-red-600',
    },
    {
      icon: Clock,
      title: 'Hours',
      items: ['Monday - Saturday', '9:00 AM - 8:00 PM'],
      color: 'from-purple-400 to-purple-600',
    },
  ]

  const features = [
    {
      icon: Zap,
      title: 'Quick Response',
      description: 'Get answers to your questions within 24 hours',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals ready to help you succeed',
    },
    {
      icon: Award,
      title: 'Trusted Choice',
      description: 'Trusted by hundreds of students across India',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 md:py-28 overflow-hidden" style={{ marginTop: '-72px', paddingTop: '88px' }}>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Have questions about our courses? We&apos;re here to help you start your journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919945470269" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
              <Phone size={20} /> Call Now
            </a>
            <a href="https://web.whatsapp.com/send?phone=919945470269" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-600 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.223-4.97 5.623-4.97 9.289 0 3.667 1.957 7.025 5.379 8.856.556.285 1.259.419 1.957.419.556 0 1.111-.089 1.623-.277l5.972-.962 1.32-2.22c.203-.341.405-.682.583-1.044C21.3 15.258 21 11.875 21 9c0-5.621-4.56-10.194-10.148-10.194z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods Cards */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-all duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${method.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{method.title}</h3>
                    <div className="space-y-2">
                      {method.items.map((item, i) => (
                        <p key={i} className="text-gray-700 font-medium text-sm">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-600 mb-8">Fill out the form and we&apos;ll get back to you shortly</p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-3">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Your full name"
                        className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-3">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="your@email.com"
                        className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+91 98765 43210"
                      className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-3">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="What is this about?"
                      className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-3">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition bg-white resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-4 rounded-xl transition shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us?</h2>
              <div className="space-y-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={index} className="flex gap-4 group">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600">
                          <Icon size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-12 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.7066549833487!2d75.63461!3d15.82521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf1e1e1e1e1e1d%3A0x1e1e1e1e1e1e1e1e!2sVishnu%20Complex%2C%20Vijayapur%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl text-blue-100 mb-10">Explore our courses and transform your career</p>
          <a href="/courses" className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold py-4 px-10 rounded-xl hover:bg-gray-100 transition">
            Explore Courses
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </>
  )
}
