# AICE Computers - Professional IT Services Website

A modern, responsive, and SEO-friendly website for AICE Computers, a professional IT services company. Built with Next.js 14, React, Tailwind CSS, and TypeScript.

## 🚀 Features

- **Modern Design**: Professional, corporate design with dark blue and accent colors
- **Responsive**: Mobile-first approach, fully responsive across all devices
- **SEO Optimized**: Meta tags, structured data, and accessibility best practices
- **Component-Based**: Reusable React components for easy maintenance
- **Form Validation**: Contact form with client-side validation using React Hook Form
- **Fast Performance**: Optimized images, lazy loading, and Next.js performance features
- **Accessibility**: WCAG compliant HTML structure and ARIA labels
- **TypeScript**: Full type safety throughout the codebase

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx                 # Root layout with metadata
│   ├── globals.css                # Global styles and Tailwind config
│   ├── page.tsx                   # Home page
│   ├── about/
│   │   └── page.tsx               # About Us page
│   ├── services/
│   │   └── page.tsx               # Services page
│   ├── testimonials/
│   │   └── page.tsx               # Testimonials page
│   └── contact/
│       └── page.tsx               # Contact page
├── components/
│   ├── Header.tsx                 # Navigation header
│   ├── Footer.tsx                 # Footer component
│   ├── Hero.tsx                   # Hero section component
│   ├── ServiceCard.tsx            # Service card component
│   ├── TestimonialCard.tsx        # Testimonial card component
│   ├── ContactForm.tsx            # Contact form with validation
│   └── index.ts                   # Component exports
├── pages/
│   └── api/                       # API routes (if needed)
└── public/
    └── ...                        # Static assets

Root Files:
├── package.json                   # Dependencies
├── tsconfig.json                  # TypeScript configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── next.config.js                 # Next.js configuration
├── .eslintrc.json                 # ESLint configuration
└── README.md                      # This file
```

## 📄 Pages

### Home Page (`/`)
- Hero section with strong value proposition
- About section overview
- Services showcase (6 service cards)
- Why Choose Us section
- Client testimonials
- Call-to-action section

### About Us (`/about`)
- Company mission and vision
- Core values section
- Timeline of company journey
- Leadership team showcase
- Call-to-action

### Services (`/services`)
- Complete service details (6 services)
- Service process explanation
- Pricing tiers (Starter, Professional, Enterprise)
- Technology stack showcase
- Call-to-action

### Testimonials (`/testimonials`)
- Client success stories (9+ testimonials)
- Industries served
- Company statistics
- FAQ section
- Call-to-action

### Contact (`/contact`)
- Contact information cards
- Contact form with validation
- Business hours
- Quick support information
- Map placeholder (for Google Maps integration)
- Call-to-action

## 🎨 Design System

### Colors
- **Primary**: `#1e40af` (Dark Blue)
- **Secondary**: `#64748b` (Gray)
- **Accent**: `#0f766e` (Teal)
- **Background**: White
- **Text**: Dark Gray

### Typography
- **Font Family**: Inter (via Google Fonts)
- **Headings**: Bold, various sizes (text-2xl to text-5xl)
- **Body**: Regular weight with 1.5 line height for readability

### Components
- Reusable card components with hover effects
- Consistent button styles (primary, secondary)
- Responsive grid layouts
- Subtle animations and transitions

## 🛠️ Technologies

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **UI Library**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Forms**: [React Hook Form 7](https://react-hook-form.com/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Linting**: [ESLint](https://eslint.org/)

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository** (or extract the project files)

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env.local
   ```

4. **Update environment variables**
   Edit `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

## 🚀 Running the Project

### Development Mode
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser

### Production Build
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Linting
```bash
npm run lint
```

## 📋 Features in Detail

### Contact Form
- Client-side validation using React Hook Form
- Email field validation with regex
- Required field indicators
- Success/error messages
- Disabled state during submission
- Form reset after successful submission

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Touch-friendly navigation
- Responsive images

### SEO Optimization
- Dynamic meta tags for each page
- Open Graph metadata
- Structured HTML headings hierarchy
- Alt text for images
- Mobile-friendly design
- Fast page load times
- Sitemap ready structure

### Accessibility
- Semantic HTML elements
- Proper heading hierarchy
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast compliance
- Focus states for interactive elements

## 🔄 Component API

### Hero Component
```tsx
<Hero
  subtitle="Welcome"
  title="Main Title"
  description="Optional description"
  cta={{ text: "Button", link: "/path" }}
  secondaryCta={{ text: "Secondary", link: "/path" }}
/>
```

### ServiceCard Component
```tsx
<ServiceCard
  icon="computer"
  title="Service Title"
  description="Description"
  features={["Feature 1", "Feature 2"]}
/>
```

### TestimonialCard Component
```tsx
<TestimonialCard
  quote="Customer quote"
  author="Name"
  title="Position"
  company="Company Name"
  rating={5}
/>
```

### ContactForm Component
```tsx
<ContactForm />
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js configuration
   - Deploy

### Deploy to Other Platforms

**Netlify:**
- Build command: `npm run build`
- Publish directory: `.next`

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
EXPOSE 3000
```

## 📝 Customization Guide

### Update Company Information
Edit these files:
- `src/components/Header.tsx` - Logo and company name
- `src/components/Footer.tsx` - Contact details
- `src/app/page.tsx` - Homepage content
- `.env.example` - Email configuration

### Add/Update Services
Edit `src/app/page.tsx` and `src/app/services/page.tsx`

### Add More Testimonials
Edit the testimonials array in `src/app/testimonials/page.tsx`

### Change Color Scheme
Edit `tailwind.config.ts`:
```ts
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
      accent: '#your-color',
    },
  },
}
```

### Add Google Maps
In `src/app/contact/page.tsx`, replace the map placeholder with:
```tsx
<iframe
  width="100%"
  height="100%"
  frameBorder="0"
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
></iframe>
```

### Set Up Email Service
Options:
- **SendGrid**: Add API key to `.env.local`
- **Mailgun**: Configure credentials
- **AWS SES**: Set up IAM credentials
- **Custom API**: Create `/api/contact` route

Example API route:
```tsx
// src/app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Send email using your service
  return Response.json({ success: true });
}
```

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Build errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Styles not loading
```bash
npm install -D tailwindcss
npm run dev
```

## 📊 Performance Tips

1. **Images**: Use Next.js Image component for optimization
2. **Fonts**: Self-hosted fonts load from Google Fonts
3. **CSS**: Tailwind CSS is already optimized for production
4. **Bundle**: Dynamic imports for heavy components
5. **Caching**: Leverage browser and server caching

## 📄 License

This project is provided as-is. Modify and deploy as needed.

## 🤝 Support

For questions or issues:
- Check the troubleshooting section
- Review Next.js documentation
- Consult Tailwind CSS docs

## ✨ Future Enhancements

- [ ] Blog section
- [ ] Team members detail pages
- [ ] Client logo carousel
- [ ] Service booking system
- [ ] Live chat support
- [ ] Newsletter subscription
- [ ] Multi-language support
- [ ] Dark mode toggle

---

**Built with ❤️ using Next.js and Tailwind CSS**

**Last Updated**: February 2024
