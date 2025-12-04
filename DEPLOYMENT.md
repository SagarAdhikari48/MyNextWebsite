# Deployment Guide

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js portfolio:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Your site will be live in minutes!

3. **Custom Domain** (Optional)
   - Go to your project settings on Vercel
   - Navigate to "Domains"
   - Add your custom domain (e.g., sagaradhikari.info.np)
   - Follow the DNS configuration instructions

## Deploy to Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

## Deploy to AWS Amplify

1. Connect your GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Deploy

## Environment Variables

If you're using environment variables, add them in your deployment platform:

- `NEXT_PUBLIC_SITE_URL`: Your website URL
- `NEXT_PUBLIC_CONTACT_EMAIL`: Your contact email

## SEO Optimization Checklist

After deployment:

- ✅ Submit sitemap to Google Search Console: `https://yourdomain.com/sitemap.xml`
- ✅ Verify robots.txt: `https://yourdomain.com/robots.txt`
- ✅ Test mobile responsiveness
- ✅ Check page load speed with Lighthouse
- ✅ Verify Open Graph tags with Facebook Debugger
- ✅ Test all links and contact form

## Performance Tips

1. **Enable Compression**: Most platforms enable this by default
2. **CDN**: Vercel and Netlify provide global CDN automatically
3. **Image Optimization**: Next.js handles this automatically
4. **Caching**: Configure appropriate cache headers

## Monitoring

- Use Vercel Analytics or Google Analytics to track visitors
- Monitor Core Web Vitals in Google Search Console
- Set up uptime monitoring (e.g., UptimeRobot)

## Updates

To update your live site:

```bash
git add .
git commit -m "Update content"
git push
```

Your deployment platform will automatically rebuild and deploy the changes.
