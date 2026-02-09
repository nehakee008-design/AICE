"use client"

import Link from 'next/link'
import { courses } from '../../data/courses'

export default function CoursesClient() {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-xl text-blue-100">Professional training programs certified and approved by government</p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Available Programs</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose from our comprehensive selection of IT, software, hardware, and skill development courses
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              {/* Course Image */}
              <div className="h-48 overflow-hidden bg-gray-200">
                <img src={course.image} alt={course.name} className="w-full h-full object-cover hover:scale-105 transition-transform" />
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(course.rating) ? '★' : '☆'}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({course.reviews} reviews)</span>
                </div>

                {/* Course Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.name}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-200">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold">Students</p>
                    <p className="text-lg font-bold text-gray-900">{course.students}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold">Duration</p>
                    <p className="text-lg font-bold text-gray-900">{course.duration} months</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => window.open('/register', '_blank')}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
                  >
                    Enroll Now
                  </button>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="flex-1 bg-gray-100 text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-200 transition flex items-center justify-center"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who have transformed their careers with AICE Computer Center
          </p>
          <button
            onClick={() => window.open('/register', '_blank')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Register Now
          </button>
        </div>
      </section>


    </div>
  )
}
