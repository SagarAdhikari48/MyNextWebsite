# Sagar Adhikari - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS featuring smooth animations, dark/light theme, and excellent SEO optimization.

## 🚀 Features

- ⚡ Built with Next.js 14 App Router for optimal performance
- 🎨 Beautiful UI with Tailwind CSS v4
- 🌓 Dark/Light theme toggle
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🔍 SEO optimized with metadata and sitemap
- 🎯 Type-safe with TypeScript
- 🎭 Glass morphism effects
- 📧 Contact form with email integration

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Theme:** next-themes
- **Type Animation:** react-type-animation

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   ├── globals.css      # Global styles
│   ├── sitemap.ts       # SEO sitemap
│   └── robots.ts        # SEO robots.txt
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Experience.tsx   # Work experience
│   ├── Skills.tsx       # Skills & technologies
│   ├── Projects.tsx     # Featured projects
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx       # Footer
│   └── ThemeProvider.tsx # Theme context
└── public/              # Static assets
```

## 🎨 Customization

### Update Personal Information

Edit the content in the following components:
- `components/Hero.tsx` - Name, title, social links
- `components/About.tsx` - Bio, location, education
- `components/Experience.tsx` - Work history
- `components/Skills.tsx` - Technical skills
- `components/Projects.tsx` - Portfolio projects
- `components/Contact.tsx` - Contact information

### Update SEO Metadata

Edit `app/layout.tsx` to update:
- Page title
- Description
- Keywords
- Open Graph data

### Change Theme Colors

Edit `app/globals.css` to customize:
- Color variables
- Gradient colors
- Glass effect styling

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The site can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Sagar Adhikari**
- Website: [sagaradhikari.info.np](https://www.sagaradhikari.info.np)
- LinkedIn: [linkedin.com/in/sagaradhikari48](https://linkedin.com/in/sagaradhikari48)
- Email: sagradhkr48@gmail.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
