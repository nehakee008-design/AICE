# Logo File Instructions

## Location
Place your logo image file in this `public/` directory with the filename: **logo.png**

## Specifications
Based on the WordPress BWLO site, the logo should be:
- **Filename**: logo.png (or logo.jpg)
- **Dimensions**: Horizontal format (approximately 842x296px or similar)
- **Format**: PNG (transparent background preferred) or JPG
- **Description**: The AICE Computers logo from the WordPress site

## How to Add Your Logo
1. Download the logo image from your WordPress site: `https://aicecomputers.com/wp-content/uploads/2025/06/Screenshot_2025-06-04_222145-removebg-preview.png`
2. Save it as `logo.png` in this folder (`public/logo.png`)
3. The Header component will automatically display it

## Current Setup
The Header.tsx component has been updated to display an image logo:
- It looks for `public/logo.png`
- Size: 180x50 pixels (displays responsively)
- Alt text: "AICE Computers Logo"

## Notes
- Using Next.js Image component for optimization
- Transparent PNG background recommended for better design flexibility
- Logo will be responsive on mobile and desktop
