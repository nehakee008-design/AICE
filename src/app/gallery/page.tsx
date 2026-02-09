import type { Metadata } from 'next'

const galleryImages = [
  'https://aicecomputers.com/wp-content/uploads/2025/06/2ff54b35-c859-4757-b85f-26f93990373b.jpg',
  'https://aicecomputers.com/wp-content/uploads/2025/06/5d112bcf-1b25-4568-b0e0-b64dfb5679d3.jpg',
  'https://aicecomputers.com/wp-content/uploads/2025/06/6a02773f-d474-4d3d-9a56-b60387b3e071.jpg',
  'https://aicecomputers.com/wp-content/uploads/2025/06/96a519b0-5231-4ff7-81d3-96f591fa0252.jpg',
  'https://aicecomputers.com/wp-content/uploads/2025/06/bbcaf5de-5111-4362-b795-59b34be8b9b8.jpg',
  'https://aicecomputers.com/wp-content/uploads/2025/06/7fc327fd-6ea1-4ec6-8fd1-fbdf6a9c4edb.jpg',
  'https://aicecomputers.com/wp-content/uploads/2025/06/df0da543-b427-4433-b545-384a40e92aa8.jpg',
  'https://aicecomputers.com/wp-content/uploads/2025/06/7e5cc2a2-cfdd-4c9c-9963-10fc061dc3a8.jpg',
  'https://aicecomputers.com/wp-content/uploads/2025/06/2b914497-f5a1-481f-a166-a95feaf9b008.jpg',
  'https://aicecomputers.com/wp-content/uploads/2025/06/f1235524-8347-40f1-96ad-92c4ec3a5e34.jpg',
  'https://aicecomputers.com/wp-content/uploads/2025/06/a73c6fc9-87cc-40ed-ae19-7429f6ba4c57.jpg',
  'https://aicecomputers.com/wp-content/uploads/2025/06/afd22d35-99fd-4f40-834d-f05ae88ff706.jpg',
  'https://aicecomputers.com/wp-content/uploads/2025/06/dbc57f19-1aaf-49af-ba43-b5f11bc15294.jpg',
  'https://aicecomputers.com/wp-content/uploads/2025/06/e59ddb1f-f60c-4eec-a695-d0edc3694f22.jpg',
]

const classroomImages = [
  'https://aicecomputers.com/wp-content/uploads/2025/06/afd22d35-99fd-4f40-834d-f05ae88ff706.jpg',
  'https://aicecomputers.com/wp-content/uploads/2025/06/a73c6fc9-87cc-40ed-ae19-7429f6ba4c57.jpg',
  'https://aicecomputers.com/wp-content/uploads/2025/06/f1235524-8347-40f1-96ad-92c4ec3a5e34.jpg',
  'https://aicecomputers.com/wp-content/uploads/2025/06/2b914497-f5a1-481f-a166-a95feaf9b008.jpg',
  'https://aicecomputers.com/wp-content/uploads/2025/06/7e5cc2a2-cfdd-4c9c-9963-10fc061dc3a8.jpg',
  'https://aicecomputers.com/wp-content/uploads/2025/06/df0da543-b427-4433-b545-384a40e92aa8.jpg',
  'https://aicecomputers.com/wp-content/uploads/2025/06/7fc327fd-6ea1-4ec6-8fd1-fbdf6a9c4edb.jpg',
  'https://aicecomputers.com/wp-content/uploads/2025/06/96a519b0-5231-4ff7-81d3-96f591fa0252.jpg',
  'https://aicecomputers.com/wp-content/uploads/2025/06/dbc57f19-1aaf-49af-ba43-b5f11bc15294.jpg',
  'https://aicecomputers.com/wp-content/uploads/2025/06/e59ddb1f-f60c-4eec-a695-d0edc3694f22.jpg',
]

export const metadata: Metadata = {
  title: 'Gallery - AICE Computer Center Vijayapur',
  description:
    'Explore AICE Computer Center Vijayapur Gallery of classrooms, labs, and student life. See how hands-on IT education happens at our ISO-certified institute.',
  openGraph: {
    title: 'Gallery - AICE Computer Center Vijayapur',
    description:
      'Explore AICE Computer Center Vijayapur Gallery of classrooms, labs, and student life.',
    url: 'https://aicecomputers.com/gallery',
    images: [
      {
        url: 'https://aicecomputers.com/wp-content/uploads/2025/06/afd22d35-99fd-4f40-834d-f05ae88ff706.jpg',
        width: 1280,
        height: 960,
        alt: 'AICE Computer Center Vijayapur Gallery',
      },
    ],
  },
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 sm:py-24 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 leading-tight">
            Gallery
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our classrooms, labs, and student moments at AICE Computer Center Vijayapur.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Our Institute</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Campus Highlights</h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              A quick look at our learning environment, infrastructure, and daily student life.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((src, index) => (
            <div key={`${src}-${index}`} className="group relative overflow-hidden rounded-xl bg-gray-200 h-40 sm:h-52">
              <img
                src={src}
                alt={`AICE Computer Center Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Learning Spaces</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Class Room</h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Modern classrooms designed for practical training and focused learning.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {classroomImages.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="group relative overflow-hidden rounded-xl bg-white border border-gray-200"
              >
                <img
                  src={src}
                  alt={`AICE Computer Center Classroom image ${index + 1}`}
                  className="h-44 sm:h-56 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
