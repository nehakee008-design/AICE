export type Course = {
  id: number
  slug: string
  name: string
  rating: number
  reviews: number
  students: number
  duration: number // months
  image: string
  description: string
  brochure?: string
}

export const courses: Course[] = [
  {
    id: 1,
    slug: 'computer-basic-ms-office',
    name: 'Computer Basic & MS-Office',
    rating: 4.0,
    reviews: 98,
    students: 150,
    duration: 2,
    image: 'https://aicecomputers.com/wp-content/uploads/2025/06/b6ad0fc5-55d7-445b-b731-a20c0bb27dde.png',
    description:
      'Master the fundamentals of computers and Microsoft Office suite including Word, Excel, and PowerPoint.',
    brochure: `
      <h3>Course Overview</h3>
      <p>Accredited by State &amp; Central Government, this comprehensive course covers essential computer and office productivity skills.</p>
      <h3>Topics Covered</h3>
      <ul>
        <li>Computer Architecture</li>
        <li>English Typing</li>
        <li>Notepad, WordPad, Paint</li>
        <li>MS-Office Suite</li>
        <li>MS Word</li>
        <li>MS Excel</li>
        <li>MS PowerPoint</li>
        <li>Kannada Typing (Nudi)</li>
        <li>Internet Concepts</li>
        <li>Printing Techniques</li>
      </ul>
      <h3>Course Details</h3>
      <p><strong>Duration:</strong> 2 months</p>
      <p><strong>Fees:</strong> Normal ₹2,000 | Single Installment ₹1,500 | Group (3 members) ₹1,200</p>
      <p><strong>Certifications:</strong> Accredited by State &amp; Central Government, KS3 N.S D.C, PMRVY Skill India</p>
    `,
  },
  {
    id: 2,
    slug: 'tally-prime-with-gst',
    name: 'Tally Prime with GST',
    rating: 4.5,
    reviews: 150,
    students: 95,
    duration: 2,
    image: 'https://aicecomputers.com/wp-content/uploads/2025/06/a3d7db96-861b-4964-b6b4-6078985aadef-1024x683.png',
    description: "Learn accounting and GST management with Tally Prime, India's leading accounting software.",
    brochure: `
      <h3>Course Overview</h3>
      <p>Master modern accounting practices and GST compliance using Tally Prime, India's most widely used accounting software.</p>
      <h3>Topics Covered</h3>
      <ul>
        <li>Introduction to Tally Prime</li>
        <li>Introduction to Accounts</li>
        <li>Company Information Setup</li>
        <li>Introduction to Ledgers and Groups</li>
        <li>Trial Balance</li>
        <li>Voucher Entry</li>
        <li>Billing and Invoice</li>
        <li>Service Tax</li>
        <li>Interest Calculation</li>
        <li>TDS and TCS Reports</li>
        <li>GST (Goods and Service Tax)</li>
      </ul>
      <h3>Course Details</h3>
      <p><strong>Duration:</strong> 2 months</p>
      <p><strong>Fees:</strong> Normal ₹3,000 | Single Installment ₹2,500 | Group (3 members) ₹2,000</p>
      <p><strong>Accreditation:</strong> Academic Institute of Computer Education Society</p>
    `,
  },
  {
    id: 3,
    slug: 'desktop-publishing-dtp',
    name: 'Desktop Publishing (DTP)',
    rating: 5.0,
    reviews: 75,
    students: 99,
    duration: 2,
    image: 'https://aicecomputers.com/wp-content/uploads/2025/06/5e695f63-b6f4-4028-ab95-85acc5533ff1-1024x683.png',
    description: 'Professional design and layout skills using industry-standard publishing software.',
    brochure: `
      <h3>Course Overview</h3>
      <p>Learn professional DTP tools and techniques to create publication-ready documents. Master graphic design and layout for print and digital media.</p>
      <h3>Software Training</h3>
      <ul>
        <li>Page Maker</li>
        <li>CorelDraw</li>
        <li>Photoshop</li>
      </ul>
      <h3>Key Skills</h3>
      <ul>
        <li>Desktop Publishing fundamentals</li>
        <li>Graphic layout and design</li>
        <li>Image editing and manipulation</li>
        <li>Typography and page composition</li>
        <li>Print-ready document preparation</li>
      </ul>
      <h3>Course Details</h3>
      <p><strong>Duration:</strong> 3 months</p>
      <p><strong>Fees:</strong> Normal ₹4,000 | Single Installment ₹3,500 | Group (3 members) ₹3,000</p>
      <p><strong>Accreditation:</strong> Academic Institute of Computer Education Society</p>
    `,
  },
  {
    id: 4,
    slug: 'diploma-advance-accounting',
    name: 'Diploma in Advance Accounting (DAA)',
    rating: 4.8,
    reviews: 90,
    students: 250,
    duration: 4,
    image: 'https://aicecomputers.com/wp-content/uploads/2025/06/40d47ce2-0b95-4f15-b367-614dc793d87c-1024x683.png',
    description: 'Comprehensive diploma program in advanced accounting and financial management.',
    brochure: `
      <h3>Course Overview</h3>
      <p>This advanced accounting diploma builds expertise in financial management, reporting, and compliance. Combines foundational and specialized accounting knowledge.</p>
      <h3>Curriculum Modules</h3>
      <ul>
        <li>Computer Basics &amp; MS Office Fundamentals</li>
        <li>Tally with GST Integration</li>
        <li>Advanced Accounting Principles</li>
        <li>Financial Analysis and Reporting</li>
        <li>Taxation and Compliance</li>
        <li>Auditing Basics</li>
      </ul>
      <h3>Career Prospects</h3>
      <p>Suitable for roles in accounting, finance, taxation, and bookkeeping across organizations of all sizes.</p>
      <h3>Course Details</h3>
      <p><strong>Duration:</strong> 4 months</p>
      <p><strong>Fees:</strong> Normal ₹4,000 | Single Installment ₹3,500 | Group (3 members) ₹3,000</p>
      <p><strong>Accreditation:</strong> Academic Institute of Computer Education Society</p>
    `,
  },
  {
    id: 5,
    slug: 'diploma-software-engineering',
    name: 'Diploma in Software Engineering (D.S.E)',
    rating: 4.8,
    reviews: 111,
    students: 120,
    duration: 6,
    image: 'https://aicecomputers.com/wp-content/uploads/2025/06/frican-american-man-sitting-in-front-of-computer-Y652XBA-1024x684.jpg',
    description: 'Advanced software development and engineering principles for professional developers.',
    brochure: `
      <h3>Course Overview</h3>
      <p>Comprehensive diploma covering the full software development lifecycle, from design to deployment. Ideal for aspiring software developers and engineers.</p>
      <h3>Core Modules</h3>
      <ul>
        <li>Programming Fundamentals</li>
        <li>Object-Oriented Programming (OOP)</li>
        <li>Data Structures and Algorithms</li>
        <li>Web Development (HTML, CSS, JavaScript)</li>
        <li>Backend Development</li>
        <li>Database Management</li>
        <li>Version Control Systems (Git)</li>
        <li>Software Testing and QA</li>
        <li>Project Management Practices</li>
      </ul>
      <h3>Career Paths</h3>
      <p>Software Developer, Web Developer, Application Engineer, Full Stack Developer, QA Engineer</p>
      <h3>Course Details</h3>
      <p><strong>Duration:</strong> 6 months</p>
      <p><strong>Prerequisites:</strong> Basic computer knowledge</p>
      <p><strong>Placement Support:</strong> Yes, with industry partnerships</p>
    `,
  },
  {
    id: 6,
    slug: 'diploma-hardware-networking',
    name: 'Diploma in Computer Hardware & Networking (D.C.H.N)',
    rating: 4.9,
    reviews: 172,
    students: 180,
    duration: 4,
    image: 'https://aicecomputers.com/wp-content/uploads/2025/06/developer-presenting-computer-presentation-Z6UAHQG-1024x682.jpg',
    description: 'Master hardware configuration, networking, and system administration.',
    brochure: `
      <h3>Course Overview</h3>
      <p>Hands-on training in computer hardware assembly, network configuration, and IT infrastructure management. Perfect for aspiring IT support professionals and system administrators.</p>
      <h3>Core Topics</h3>
      <ul>
        <li>Computer Hardware Components &amp; Architecture</li>
        <li>Hardware Assembly and Troubleshooting</li>
        <li>BIOS and Firmware Configuration</li>
        <li>Operating System Installation and Management</li>
        <li>Networking Fundamentals</li>
        <li>LAN/WAN Setup and Configuration</li>
        <li>Network Protocols and Routing</li>
        <li>IP Addressing and Subnetting</li>
        <li>Network Security Basics</li>
        <li>Server Administration Basics</li>
      </ul>
      <h3>Hands-On Labs</h3>
      <p>Actual hardware assembly, network configuration, and diagnostic practice with real equipment.</p>
      <h3>Course Details</h3>
      <p><strong>Duration:</strong> 4 months</p>
      <p><strong>Lab Equipment:</strong> Fully equipped with latest hardware</p>
      <p><strong>Certification Prep:</strong> CompTIA A+ and Network+ foundations</p>
    `,
  },
  {
    id: 7,
    slug: 'advanced-diploma-software-engineering',
    name: 'Advanced Diploma in Software Engineering (A.D.S.E)',
    rating: 4.7,
    reviews: 85,
    students: 102,
    duration: 6,
    image: 'https://aicecomputers.com/wp-content/uploads/2025/06/programmers-and-developer-teams-are-coding-and-dev-Y5PU8D3-1024x683.jpg',
    description: 'Advanced programming and software architecture for professional development.',
    brochure: `
      <h3>Course Overview</h3>
      <p>An advanced program for experienced developers seeking expertise in enterprise-level architecture, design patterns, and scalable system design.</p>
      <h3>Advanced Topics</h3>
      <ul>
        <li>Software Design Patterns</li>
        <li>System Architecture &amp; Microservices</li>
        <li>RESTful APIs and Web Services</li>
        <li>Advanced Backend Development</li>
        <li>Cloud Platform Integration (AWS/Azure)</li>
        <li>Database Optimization</li>
        <li>Scalability and Performance Engineering</li>
        <li>DevOps and CI/CD Practices</li>
        <li>Enterprise Application Development</li>
        <li>Security Best Practices</li>
      </ul>
      <h3>Capstone Project</h3>
      <p>Build a production-grade application with enterprise standards.</p>
      <h3>Course Details</h3>
      <p><strong>Duration:</strong> 6 months</p>
      <p><strong>Prerequisites:</strong> Diploma in Software Engineering or equivalent experience</p>
      <p><strong>Job Placement:</strong> Senior Developer, Architect, Tech Lead roles</p>
    `,
  },
  {
    id: 8,
    slug: 'diploma-computer-teacher-training',
    name: 'Diploma in Computer Teacher Training (D.C.T.T.C)',
    rating: 5.0,
    reviews: 128,
    students: 130,
    duration: 4,
    image: 'https://aicecomputers.com/wp-content/uploads/2025/06/meeting-of-developers-Y6UCVF8-1024x683.jpg',
    description: 'Specialized training program to become a certified computer instructor.',
    brochure: `
      <h3>Course Overview</h3>
      <p>Comprehensive teacher training for aspiring computer science educators. Combines technical expertise with modern pedagogical methods and curriculum design.</p>
      <h3>Training Components</h3>
      <ul>
        <li>Computer Science Fundamentals (Advanced)</li>
        <li>Pedagogy and Teaching Methodologies</li>
        <li>Curriculum Development and Planning</li>
        <li>Learning Assessment Techniques</li>
        <li>Classroom Management</li>
        <li>Educational Technology Integration</li>
        <li>Educational Psychology</li>
        <li>Inclusive Teaching Practices</li>
      </ul>
      <h3>Technical Modules</h3>
      <ul>
        <li>Programming Concepts for Teaching</li>
        <li>IT Skills Curriculum Design</li>
        <li>Lab Setup and Management</li>
        <li>Student Project Guidance</li>
      </ul>
      <h3>Practical Experience</h3>
      <p>Teaching practicum with real students and mentor guidance to develop classroom skills.</p>
      <h3>Course Details</h3>
      <p><strong>Duration:</strong> 4 months</p>
      <p><strong>Certification:</strong> Recognized by Educational Bodies</p>
      <p><strong>Career Path:</strong> Computer Teacher, IT Trainer, Curriculum Developer</p>
    `,
  },
]

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug)
}

export default courses
