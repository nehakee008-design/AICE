# Quick Start Guide

## 🚀 Running the Website Locally

### Start Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser

### Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure Overview

```
aicepractice/
├── src/
│   ├── app/                    # Pages and routing
│   │   ├── page.tsx           # Home page
│   │   ├── about/page.tsx     # About page
│   │   ├── services/page.tsx  # Services page
│   │   ├── testimonials/page.tsx
│   │   ├── contact/page.tsx   # Contact page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/             # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── ContactForm.tsx
│   │   └── index.ts
│   └── public/                 # Static assets
├── package.json               # Dependencies
├── tsconfig.json             # TypeScript config
├── tailwind.config.ts        # Tailwind config
├── next.config.js            # Next.js config
└── README.md                 # Full documentation
```

## ✏️ Making Changes

### Update Contact Information
Edit `src/components/Footer.tsx`:
```tsx
// Change phone, email, address, etc.
```

### Add Testimonials
Edit `src/app/testimonials/page.tsx`:
```tsx
const testimonials = [
  {
    quote: "Your testimonial here",
    author: "Client Name",
    title: "Position",
    company: "Company",
  },
  // Add more...
]
```

### Update Services
Edit `src/app/page.tsx` and `src/app/services/page.tsx`:
```tsx
const services = [
  {
    icon: 'computer',
    title: 'Your Service',
    description: 'Description',
    features: ['Feature 1', 'Feature 2'],
  },
  // Add more...
]
```

### Change Colors
Edit `tailwind.config.ts`:
```ts
theme: {
  extend: {
    colors: {
      primary: '#1e40af',    // Change this
      secondary: '#64748b',  // Or this
      accent: '#0f766e',     // Or this
    },
  },
}
```

## 🎯 Key Features

- ✅ **5 Pages**: Home, About, Services, Testimonials, Contact
- ✅ **Component Library**: Header, Footer, Hero, ServiceCard, ContactForm
- ✅ **Responsive Design**: Works on mobile, tablet, desktop
- ✅ **Form Validation**: Contact form with error handling
- ✅ **SEO Optimized**: Meta tags, structured data
- ✅ **Fast Loading**: Optimized images, lazy loading
- ✅ **Accessible**: WCAG compliant, keyboard navigation

## 🔗 Navigation Structure

- **Home** `/` - Landing page with overview
- **About** `/about` - Company story, values, team
- **Services** `/services` - Detailed service offerings
- **Testimonials** `/testimonials` - Client feedback, FAQs
- **Contact** `/contact` - Contact form, location, hours

## 📧 Email Form

The contact form on `/contact` currently logs data to console. To enable actual email sending:

1. Choose email service (SendGrid, Mailgun, etc.)
2. Set up API credentials
3. Create `/api/contact` route
4. Update ContactForm component to call API

## 🎨 Customization Examples

### Add a banner to homepage
Edit `src/app/page.tsx` and add a new section after Hero

### Change button colors
Edit `src/app/globals.css`:
```css
.btn-primary {
  @apply bg-primary hover:bg-blue-700 /* Change color */;
}
```

### Add testimonial images
Update `src/components/TestimonialCard.tsx` to include image handling

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

All components automatically adapt to screen size.

## 🚢 Ready to Deploy?

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions to:
- Vercel (recommended)
- Netlify
- AWS
- Your own server
- Docker

## ❓ Common Questions

**Q: How do I add more pages?**
A: Create a folder in `src/app/` with a `page.tsx` file inside.

**Q: How do I add images?**
A: Place images in `public/` folder and reference them in your pages.

**Q: Can I use this with a CMS?**
A: Yes, you can connect Contentful, Strapi, or any headless CMS.

**Q: How do I update the logo?**
A: Edit the logo in `src/components/Header.tsx` at the top.

## 📞 Need Help?

- Read the full [README.md](./README.md)
- Check [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- Visit [nextjs.org/docs](https://nextjs.org/docs)

---

**Happy coding! 🎉**
