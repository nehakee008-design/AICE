"use client"

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <header className="relative">
        <div
          className="h-72 sm:h-96 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://aicecomputers.com/wp-content/uploads/2025/06/306283a0-b2a9-4595-90af-ff565622b339.jpg')",
          }}
        >
          <div className="h-full w-full bg-gradient-to-r from-slate-900/60 to-transparent flex items-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="text-white">
                <p className="text-sm sm:text-base font-medium mb-2">About Academic Institute of Computer Education Society</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">ABOUT US</h1>
                <p className="mt-3 text-sm sm:text-base opacity-90">Leading computer &amp; skill training center in Vijayapur since 2008</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 border-t border-b py-3">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-4 text-sm">
              <span className="font-semibold">Contact:</span>
              <a href="tel:9945470269" className="text-sky-600 hover:underline">+91 9945470269</a>
              <span className="text-gray-400">/</span>
              <a href="tel:9986122719" className="text-sky-600 hover:underline">9986122719</a>
            </div>
            <div className="text-sm text-gray-600">Near Siddeshwar Temple, Opp Sudhir Medical, Vijayapur</div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <aside className="lg:col-span-1 space-y-4">
              <div className="p-6 bg-white rounded-2xl shadow-sm border">
                <h2 className="text-xl font-bold">Founder</h2>
                <p className="mt-2 font-semibold">Mr. Santhosh Patil</p>
                <p className="text-sm text-gray-600">Founder And C.E.O Of A.I.C.E</p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-sm border">
                <h3 className="text-sm font-semibold text-sky-600">Quick Facts</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>Founded: 2008 (17 years of skill development)</li>
                  <li>ISO 9001:2015 certified</li>
                  <li>NSDC &amp; KSDC training partner</li>
                  <li>10000+ trained, 4000+ placed</li>
                </ul>
              </div>
            </aside>

            <section className="lg:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border">
                <h3 className="text-2xl font-bold mb-3">About Academic Institute of Computer Education Society</h3>
                <div className="prose prose-slate max-w-none text-sm sm:text-base">
                  <p>
                    Academic Institute of Computer Education Society is a leading computer and skill training center in Vijayapur since 2008. We provide government certified skill development courses and placements.
                  </p>
                  <p>
                    Our society's ISO 9001:2015 certification demonstrates our dedication to quality and standards. We are training partners of NSDC and KSDC and have received the International Achiever Award for excellence in skill development.
                  </p>
                  <p>
                    We have a mission to provide the best quality computer skill training to all classes of people. Our training center features well-equipped labs, certified faculty, and infrastructure aligned with government guidelines.
                  </p>
                  <p>
                    We operate 6 branches across Vijayapura &amp; Bagalkote districts, with 2 branches in Vijayapur.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-r from-white to-slate-50 rounded-2xl border shadow-sm flex items-start gap-4">
                  <img src="https://aicecomputers.com/wp-content/uploads/2025/06/why-LBWC7DK-1.png" alt="founded 2008" className="w-16 h-16 object-contain" />
                  <div>
                    <h4 className="font-semibold">We are founded</h4>
                    <p className="text-sm text-gray-600">on 2008</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border shadow-sm">
                  <h4 className="font-semibold">Regd.By Govt Of Karnataka</h4>
                  <p className="text-sm text-gray-600 mt-1">Reg No : SOR/810/DRCS-688/08-09</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-2xl border shadow-sm">
                  <h4 className="font-semibold">Specialised In</h4>
                  <p className="text-sm text-gray-600 mt-1">Software, Hardware, Network Training, Graphic Designing</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border shadow-sm">
                  <h4 className="font-semibold">Government partners</h4>
                  <p className="text-sm text-gray-600 mt-1">Kaushalya Karnataka, KSDC, NSDC, PMKVY, Skill India</p>
                </div>
              </div>
            </section>
          </div>

          {/* Directors */}
          <section className="mt-10">
            <h3 className="text-xl font-bold mb-4">Our Directors</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: 'M.N.Patil', title: 'Director', img: 'https://aicecomputers.com/wp-content/uploads/2025/07/11.png' },
                { name: 'A.M. Patil', title: 'Director', img: 'https://aicecomputers.com/wp-content/uploads/2025/07/FGVGXXFD.png' },
                { name: 'M.M.Patil', title: 'Director', img: 'https://aicecomputers.com/wp-content/uploads/2025/07/FCGG.png' },
                { name: 'Shivaleela Patil', title: 'Director', img: 'https://aicecomputers.com/wp-content/uploads/2025/07/ZDDFDDDD.png' },
              ].map((d) => (
                <div key={d.name} className="flex flex-col items-center text-center bg-white p-4 rounded-2xl border shadow-sm">
                  <img src={d.img} alt={d.name} className="w-28 h-28 object-cover rounded-full" loading="lazy" />
                  <p className="mt-3 font-semibold">{d.name}</p>
                  <p className="text-sm text-gray-600">{d.title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA / Join Us */}
          <section className="mt-12 bg-sky-50 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold">Join the Aice team</h4>
              <p className="text-sm text-gray-700">Draw your future earlier — explore opportunities with us.</p>
            </div>
            <div>
              <a href="#" className="inline-block bg-sky-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-sky-700">View opportunities</a>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
