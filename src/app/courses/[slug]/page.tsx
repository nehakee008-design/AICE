'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCourseBySlug } from '../../../data/courses'

type Props = {
  params: { slug: string }
}

export default function Page({ params }: Props) {
  const course = getCourseBySlug(params.slug)

  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{course?.name}</h1>
          <p className="text-blue-100 text-lg">Master in-demand skills with certification and placement support</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 bg-white rounded-lg p-8 shadow-sm">
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">{course?.description}</p>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">📚</span>
                What you'll learn
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Structured course syllabus and hands-on labs',
                  'Practical projects and assignments',
                  'Certification guidance and placement support',
                  'Industry-relevant skill development'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                    <span className="text-blue-600 text-xl leading-none">✓</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8 bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase">Duration</p>
                <p className="text-3xl font-bold text-gray-900">{course?.duration}</p>
                <p className="text-sm text-gray-600">months</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase">Students</p>
                <p className="text-3xl font-bold text-gray-900">{course?.students}+</p>
                <p className="text-sm text-gray-600">enrolled</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              {course?.brochure ? (
                <div className="space-y-6">
                  <style>{`
                    .brochure-content h3 {
                      font-size: 1.25rem;
                      font-weight: 700;
                      color: #1f2937;
                      margin-top: 1.5rem;
                      margin-bottom: 1rem;
                      padding-bottom: 0.75rem;
                      border-bottom: 2px solid #3b82f6;
                      display: inline-block;
                    }
                    .brochure-content h3:first-child {
                      margin-top: 0;
                    }
                    .brochure-content p {
                      line-height: 1.6;
                      margin-bottom: 1rem;
                      color: #4b5563;
                    }
                    .brochure-content ul {
                      list-style: none;
                      padding: 0;
                      margin-bottom: 1.5rem;
                    }
                    .brochure-content ul li {
                      padding-left: 1.5rem;
                      margin-bottom: 0.75rem;
                      position: relative;
                      color: #4b5563;
                    }
                    .brochure-content ul li:before {
                      content: "✓";
                      position: absolute;
                      left: 0;
                      color: #3b82f6;
                      font-weight: bold;
                    }
                    .brochure-content strong {
                      color: #1f2937;
                      font-weight: 600;
                    }
                  `}</style>
                  <div className="brochure-content" dangerouslySetInnerHTML={{ __html: course.brochure }} />
                </div>
              ) : (
                <p className="text-gray-600">No additional course information available.</p>
              )}
            </div>
          </div>

          <aside className="h-full sticky top-4 space-y-6">
            {/* Course Image Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={course?.image} alt={course?.name} className="w-full h-64 object-cover" />
              
              {/* Rating Section */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center flex-1">
                    <p className="text-sm text-gray-600 font-semibold">RATING</p>
                    <p className="text-3xl font-bold text-yellow-500 flex justify-center items-center gap-1">
                      {course?.rating}
                      <span className="text-lg">⭐</span>
                    </p>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div className="text-center flex-1">
                    <p className="text-sm text-gray-600 font-semibold">REVIEWS</p>
                    <p className="text-3xl font-bold text-blue-600">{course?.reviews}</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="p-6 space-y-3">
                <a
                  href="/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-md hover:shadow-lg"
                >
                  🎓 Enroll Now
                </a>

                <button
                  onClick={() => window.open('https://www.aicecomputers.com', '_blank')}
                  className="block w-full text-center border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition duration-200"
                >
                  Learn More
                </button>

                <Link 
                  href="/courses" 
                  className="block text-center text-sm text-blue-600 hover:text-blue-700 font-medium py-2 hover:underline"
                >
                  ← Back to all courses
                </Link>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-5">
              <p className="text-xs font-bold uppercase text-blue-600 mb-3">📍 Quick Info</p>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600 font-semibold">Certification</p>
                  <p className="text-gray-700">Government Accredited</p>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold">Support</p>
                  <p className="text-gray-700">Lifetime, Placement Assistance</p>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold">Format</p>
                  <p className="text-gray-700">Classroom &amp; Hands-on Labs</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
