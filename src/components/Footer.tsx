import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AC</span>
              </div>
              <h3 className="font-bold text-lg">AICE Computers</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Professional IT services and solutions for businesses of all sizes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact US
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Computer Sales & Service</li>
              <li>Annual Maintenance</li>
              <li>Networking Solutions</li>
              <li>Security Systems</li>
              <li>Cloud Support</li>
              <li>IT Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact US</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>
                <span className="text-white font-semibold">Email:</span>
                <br />
                <a href="mailto:info@aicecomputers.com" className="hover:text-white transition-colors">
                  info@aicecomputers.com
                </a>
              </p>
              <p>
                <span className="text-white font-semibold">Phone:</span>
                <br />
                <a href="tel:+91-XXXXXXXXXX" className="hover:text-white transition-colors">
                  +91-XXXXXXXXXX
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} AICE Computers. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
