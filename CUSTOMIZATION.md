# Customization Guide

## Quick Customization Steps

### 1. Update Personal Information

#### Hero Section (`components/Hero.tsx`)
```typescript
// Update your name
<h1>Your Name</h1>

// Update job titles in TypeAnimation
sequence={[
  "Your Title 1",
  2000,
  "Your Title 2",
  2000,
]}

// Update social links
<a href="https://linkedin.com/in/yourprofile">
<a href="mailto:your@email.com">
<a href="https://yourwebsite.com">
```

#### About Section (`components/About.tsx`)
- Update bio text
- Change location, phone, email
- Update education details

#### Experience Section (`components/Experience.tsx`)
```typescript
const experiences = [
  {
    company: "Your Company",
    role: "Your Role",
    period: "MM/YYYY - MM/YYYY",
    description: ["Achievement 1", "Achievement 2"],
  },
  // Add more experiences
];
```

#### Skills Section (`components/Skills.tsx`)
```typescript
const skillCategories = [
  {
    title: "Category Name",
    skills: [
      { name: "Skill Name", icon: IconComponent, color: "text-color" },
    ],
  },
];
```

#### Projects Section (`components/Projects.tsx`)
```typescript
const projects = [
  {
    title: "Project Name",
    description: "Project description",
    tech: ["Tech1", "Tech2"],
    gradient: "from-color-500 to-color-500",
    link: "https://project-url.com", // Optional
  },
];
```

### 2. Change Colors & Theme

#### Update Gradient Colors (`app/globals.css`)
```css
.gradient-text {
  background: linear-gradient(to right, 
    rgb(59 130 246),  /* Blue */
    rgb(168 85 247),  /* Purple */
    rgb(236 72 153)   /* Pink */
  );
}
```

#### Update Theme Colors
```css
:root {
  --background: 0 0% 100%;      /* Light mode background */
  --foreground: 222.2 84% 4.9%; /* Light mode text */
  --primary: 221.2 83.2% 53.3%; /* Primary color */
}

.dark {
  --background: 222.2 84% 4.9%; /* Dark mode background */
  --foreground: 210 40% 98%;    /* Dark mode text */
}
```

### 3. Update SEO Metadata (`app/layout.tsx`)

```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your description",
  keywords: ["keyword1", "keyword2"],
  openGraph: {
    title: "Your Name",
    description: "Your description",
    url: "https://yourwebsite.com",
  },
};
```

### 4. Update Sitemap (`app/sitemap.ts`)

```typescript
{
  url: 'https://yourwebsite.com',
  lastModified: new Date(),
}
```

### 5. Update Robots.txt (`app/robots.ts`)

```typescript
sitemap: 'https://yourwebsite.com/sitemap.xml',
```

### 6. Add Your Logo/Avatar

1. Add your image to `public/` folder
2. Update Hero or About section:

```typescript
<Image 
  src="/your-image.jpg" 
  alt="Your Name"
  width={400}
  height={400}
/>
```

### 7. Customize Animations

#### Change Animation Speed
```typescript
// In any component
transition={{ duration: 0.6 }} // Change duration
```

#### Disable Animations
Remove or comment out `motion` components and replace with regular HTML elements.

### 8. Add New Sections

1. Create new component in `components/` folder
2. Import and add to `app/page.tsx`:

```typescript
import NewSection from "@/components/NewSection";

export default function Home() {
  return (
    <main>
      {/* ... existing sections ... */}
      <NewSection />
    </main>
  );
}
```

### 9. Change Fonts

Update `app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({ subsets: ["latin"] });
```

### 10. Add Analytics

#### Google Analytics
1. Install package: `npm install @next/third-parties`
2. Add to `app/layout.tsx`:

```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

## Tips

- Test changes locally with `npm run dev`
- Build before deploying: `npm run build`
- Check for TypeScript errors: `npm run lint`
- Keep backups of your customizations
- Use version control (Git) to track changes

## Need Help?

- Check Next.js docs: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs
- Framer Motion docs: https://www.framer.com/motion/
