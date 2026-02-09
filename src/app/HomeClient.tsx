'use client'

import Link from 'next/link'

export default function HomeClient() {
  
  const whyChooseCards = [
    {
      image: 'https://aicecomputers.com/wp-content/uploads/2025/06/kenapa-LBWC7DK.png',
      title: 'Well Equipped Labs & Classrooms',
      description: 'The training center has well equipped Labs, classrooms and good infrastructure with all facilities as per Govt. guidelines.',
    },
    {
      image: 'https://aicecomputers.com/wp-content/uploads/2025/06/kenapa2-LBWC7DK.png',
      title: 'Government Certified Skill',
      description: 'Our training Center is providing government certified skill development courses and placements.',
    },
    {
      image: 'https://aicecomputers.com/wp-content/uploads/2025/06/napa2-LBWC7DK.png',
      title: 'Certified Teaching Faculty',
      description: 'We have experienced and Certified teaching faculty who interact with students and teach in a well-understandable manner.',
    },
    {
      image: 'https://aicecomputers.com/wp-content/uploads/2025/06/napa-LBWC7DK.png',
      title: 'Quality Education Mission',
      description: 'We have a mission to provide the best quality computer education to all class of people.',
    },
  ]

  const courses = [
    { name: 'Computer Basic & MS-Office', rating: 99 },
    { name: 'Tally Prime with GST', rating: 99 },
    { name: 'Desktop Publishing (DTP)', rating: 99 },
    { name: 'Language Courses', rating: 98 },
  ]

  const partners = [
    'https://aicecomputers.com/wp-content/uploads/2025/06/3.png',
    'https://aicecomputers.com/wp-content/uploads/2025/06/5.png',
    'https://aicecomputers.com/wp-content/uploads/2025/06/6.png',
    'https://aicecomputers.com/wp-content/uploads/2025/06/SAAAAAAAAAA.png',
    'https://aicecomputers.com/wp-content/uploads/2025/06/81.png',
    'https://aicecomputers.com/wp-content/uploads/2025/06/Copy-of-ebworld-500-x-200-px-1.png',
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 md:py-40 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              Shaping the Future of IT Professionals Since 2008
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100 font-semibold">
              ISO 9001:2015 Certified Training Centre
            </p>
            <p className="text-base sm:text-lg text-blue-50 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Hands-on computer training with government-certified skill development courses
            </p>
            <button
              onClick={() => window.open('/register', '_blank')}
              className="inline-block bg-white text-blue-600 px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold hover:bg-blue-50 transition duration-300 text-base sm:text-lg cursor-pointer shadow-lg hover:shadow-xl"
            >
              Enroll Today
            </button>
          </div>
        </div>
      </section>

      {/* Partners Carousel */}
      <section className="relative py-16 sm:py-24 bg-white border-b border-gray-100 overflow-hidden">
        {/* Subtle background pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(59, 130, 246, 0.1) 35px, rgba(59, 130, 246, 0.1) 70px)`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <p className="text-center text-gray-600 text-sm sm:text-base mb-12 font-semibold uppercase tracking-wider">Trusted by leading organizations</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 items-center">
            {partners.map((partner, idx) => (
              <div key={idx} className="flex items-center justify-center bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition duration-300">
                <img src={partner} alt={`Partner ${idx + 1}`} className="h-14 sm:h-16 object-contain hover:scale-110 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
            <section className="py-10 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
              <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
                <div className="mb-10 sm:mb-14 text-center">
                  <p className="text-sm sm:text-base font-extrabold text-blue-700 uppercase tracking-widest mb-2 sm:mb-4 drop-shadow">Why Choose Us</p>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight drop-shadow-lg">
                    Pursue Your Interests or Advance Your Career
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                    The training center has well-equipped labs, classrooms, and infrastructure with all facilities as per Government guidelines.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                  {whyChooseCards.map((card, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center bg-white border border-gray-100 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 px-5 py-7 sm:px-6 sm:py-8"
                    >
                      <div className="w-24 h-24 sm:w-28 sm:h-28 mb-4 flex items-center justify-center rounded-full bg-blue-50 shadow-inner overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-20 h-20 sm:w-24 sm:h-24 object-contain object-center drop-shadow-md"
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center">
                        {card.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 text-center">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

      {/* Featured Courses Section */}
      <section className="relative py-16 sm:py-28 overflow-hidden">
        {/* Background with pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(59, 130, 246, 0.05) 50px, rgba(59, 130, 246, 0.05) 100px)`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-sm sm:text-base font-extrabold text-blue-700 uppercase tracking-widest mb-2 sm:mb-4 drop-shadow">Our Courses</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Training Programs</h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Industry-leading training programs designed to help you master in-demand skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              { icon: '💻', title: 'Computer Basics', desc: 'Learn fundamentals of computers and MS-Office', students: '250+', rating: '4.8' },
              { icon: '📊', title: 'Tally Prime', desc: 'Master accounting with Tally and GST integration', students: '180+', rating: '4.9' },
              { icon: '🎨', title: 'Desktop Publishing', desc: 'Professional design with CorelDRAW & Photoshop', students: '150+', rating: '4.7' },
              { icon: '🌐', title: 'Web Development', desc: 'Build responsive websites with HTML, CSS & JS', students: '200+', rating: '4.8' },
              { icon: '📱', title: 'Digital Marketing', desc: 'Social media & SEO marketing mastery', students: '220+', rating: '4.6' },
              { icon: '☁️', title: 'Cloud Computing', desc: 'AWS, Azure & Cloud infrastructure training', students: '160+', rating: '4.9' },
              { icon: '🔒', title: 'Cybersecurity', desc: 'Security fundamentals and ethical hacking', students: '140+', rating: '4.8' },
              { icon: '🤖', title: 'AI & ML Basics', desc: 'Introduction to AI and Machine Learning', students: '120+', rating: '4.7' },
            ].map((course, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-7 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-300">
                <div className="text-5xl mb-5">{course.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-base text-gray-700 mb-6 leading-relaxed">{course.desc}</p>
                <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
                  <span>👥 {course.students}</span>
                  <span>⭐ {course.rating}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="/courses" className="inline-block bg-blue-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold hover:bg-blue-700 transition duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl">
              Explore All Courses
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Our Institute</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Campus Gallery</h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Explore our state-of-the-art facilities and learning environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1516534775068-bb57177ef3f7?w=500&h=400&fit=crop',
                title: 'Modern Computer Lab',
                desc: 'Well-equipped labs with latest hardware',
              },
              {
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
                title: 'Classroom Environment',
                desc: 'Interactive learning spaces for students',
              },
              {
                image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop',
                title: 'Student Success',
                desc: 'Trained professionals ready for industry',
              },
              {
                image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=400&fit=crop',
                title: 'Placement Training',
                desc: 'Career guidance and interview preparation',
              },
              {
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
                title: 'Practical Sessions',
                desc: 'Hands-on training with real projects',
              },
              {
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
                title: 'Student Events',
                desc: 'Workshops and seminars throughout the year',
              },
            ].map((gallery, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-gray-300 h-72 sm:h-80 cursor-pointer"
              >
                <img
                  src={gallery.image}
                  alt={gallery.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 sm:p-8">
                  <div className="text-white">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{gallery.title}</h3>
                    <p className="text-sm sm:text-base text-gray-200">{gallery.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Corner Section */}
      <section className="py-16 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">Skill Corner</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Student Success Ratings</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
                Mentor-led training with real-world experience. Our courses are rated based on student satisfaction and learning outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/courses" className="inline-block bg-blue-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold hover:bg-blue-700 transition duration-300 text-base sm:text-lg text-center shadow-lg hover:shadow-xl">
                  Browse Courses
                </Link>
                <Link
                  href="/contact"
                  className="inline-block border-2 border-blue-600 text-blue-600 px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold hover:bg-blue-50 transition duration-300 text-base sm:text-lg text-center cursor-pointer"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right: Course Ratings */}
            <div className="space-y-8 sm:space-y-10">
              {courses.map((course, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-3 sm:mb-4">
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg">{course.name}</h3>
                    <span className="text-blue-600 font-bold text-base sm:text-lg">{course.rating}%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-4 sm:h-5 overflow-hidden shadow-sm">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 h-full rounded-full transition-all duration-500" style={{ width: `${course.rating}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Event Section */}
      <section className="relative py-16 sm:py-28 overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
            {/* Left: Event Highlight */}
            <div className="flex items-center justify-center">
              <div className="w-full bg-white rounded-3xl shadow-2xl p-8 sm:p-12 text-center">
                <div className="mb-8">
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Free Workshop</p>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Career Guidance Session</h3>
                </div>
                <p className="text-base sm:text-lg text-gray-700 mb-10 leading-relaxed">Learn directly from industry experts and get personalized guidance for your IT career path.</p>
                <button
                  onClick={() => window.open('/register', '_blank')}
                  className="inline-block bg-blue-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold hover:bg-blue-700 transition duration-300 text-base sm:text-lg cursor-pointer shadow-lg hover:shadow-xl"
                >
                  Register Now
                </button>
              </div>
            </div>

            {/* Right: Event Info */}
            <div className="flex flex-col justify-center text-white">
              <p className="text-xs font-bold uppercase tracking-widest mb-4 opacity-90">Upcoming Event</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Join Our Free Workshop</h2>
              <p className="text-base sm:text-lg mb-10 leading-relaxed opacity-90">
                Join industry experts and fellow students to explore the latest trends in IT training, career opportunities, and hands-on learning experiences.
              </p>

              {/* Event Benefits */}
              <div className="space-y-5 sm:space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white text-blue-600 font-bold text-lg">✓</div>
                  </div>
                  <p className="text-base sm:text-lg">One-on-one career counseling</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white text-blue-600 font-bold text-lg">✓</div>
                  </div>
                  <p className="text-base sm:text-lg">Course recommendations based on your goals</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white text-blue-600 font-bold text-lg">✓</div>
                  </div>
                  <p className="text-base sm:text-lg">Special registration discounts available</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden">
            {/* Subtle background pattern */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 100px)`,
                pointerEvents: 'none'
              }}
            ></div>
            
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Learning?</h3>
              <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
                Join thousands of students who have transformed their careers with our certified courses.
              </p>
            </div>
            <div className="relative text-center md:text-right">
              <button
                onClick={() => window.open('/register', '_blank')}
                className="inline-block bg-white text-blue-600 px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold hover:bg-blue-50 transition duration-300 text-base sm:text-lg cursor-pointer shadow-lg hover:shadow-xl"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          {/* Footer Top */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 mb-16 pb-16 border-b border-gray-800">
            {/* Left: Description */}
            <div>
              <h3 className="text-2xl font-bold mb-6">AICE Computer Center</h3>
              <p className="text-gray-400 mb-8 text-base leading-relaxed">
                Education must be obtained by anyone and anywhere without limitations. We&apos;re committed to providing quality IT training to all.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/people/AI-Computer-Education-Society-Vijayapur/100067439505481/#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300 font-bold" title="Facebook">f</a>
                <a href="#" className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition duration-300 font-bold" title="Twitter">X</a>
                <a href="#" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition duration-300" title="YouTube">▶</a>
                <a href="https://www.instagram.com/aice_computer_centre2" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition duration-300 font-bold" title="Instagram">◎</a>
              </div>
            </div>

            {/* Right: Newsletter */}
            <div>
              <h3 className="text-lg font-bold mb-6">Subscribe for Updates</h3>
              <form className="flex flex-col gap-4 mb-6">
                <input type="email" placeholder="Enter your email" className="px-4 py-3 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300 text-base">
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-gray-500">Get early discounts, updates, and new course information.</p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-16 mb-16">
            {/* Column 1 */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Location</h4>
              <div className="text-base text-gray-400 space-y-3">
                <p className="font-semibold text-gray-300">2nd Floor Vishnu Complex</p>
                <p>Near Siddeshwar Temple</p>
                <p>Opposite Sudhir Medical</p>
                <p>Bldea Road, Vijayapur</p>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-base text-gray-400">
                <li><a href="/" className="hover:text-white transition duration-300">Home</a></li>
                <li><a href="/courses" className="hover:text-white transition duration-300">Courses</a></li>
                <li><a href="/contact" className="hover:text-white transition duration-300">Contact US</a></li>
                <li><a href="/about" className="hover:text-white transition duration-300">About US</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Contact</h4>
              <div className="space-y-3 text-base text-gray-400">
                <p className="font-semibold text-white">+91 9945470269</p>
                <p>+91 9986122719</p>
                <p className="font-semibold text-white mt-4">Hours</p>
                <p>Monday - Saturday</p>
                <p>9:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <p>&copy; 2026 AICE Computer Center. All rights reserved.</p>
            <p>Certified by Webwing Digital Marketing Agency</p>
          </div>
        </div>
      </footer>


    </div>
  )
}
