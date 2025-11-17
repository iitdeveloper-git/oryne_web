# 🚀 Oryne Website Deployment Guide

## Overview

This guide will help you deploy your Oryne website to production. The website is built with Next.js 14 and can be deployed to various platforms.

## 📋 Pre-Deployment Checklist

- [ ] All content is updated and finalized
- [ ] Images are optimized (use WebP format when possible)
- [ ] Contact information is correct
- [ ] Links are working
- [ ] SEO metadata is configured
- [ ] Analytics tracking is set up
- [ ] Forms are connected to backend
- [ ] Environment variables are configured
- [ ] Website is tested on multiple devices
- [ ] Performance is optimized

## 🌟 Recommended: Vercel (Easiest)

Vercel is the company behind Next.js and offers the best integration.

### Option 1: Deploy via GitHub (Recommended)

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit - Oryne website"
   git branch -M main
   git remote add origin https://github.com/yourusername/oryne-website.git
   git push -u origin main
   ```

2. **Connect to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Option 2: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Vercel Features:**

- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Zero config
- ✅ Automatic deployments on git push
- ✅ Free tier available

---

## 🎯 Alternative: Netlify

### Deploy to Netlify

1. **Build Settings**

   ```bash
   Build command: npm run build
   Publish directory: .next
   ```

2. **Via Netlify CLI**

   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Login
   netlify login

   # Initialize
   netlify init

   # Deploy
   netlify deploy --prod
   ```

3. **Via Drag & Drop**
   - Build locally: `npm run build`
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag the `.next` folder

---

## ☁️ AWS Amplify

1. **Connect Repository**
   - Go to AWS Amplify Console
   - Connect GitHub repository
   - Configure build settings:
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm ci
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: .next
         files:
           - "**/*"
       cache:
         paths:
           - node_modules/**/*
     ```

---

## 🐳 Docker Deployment

### Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Build and Run

```bash
# Build Docker image
docker build -t oryne-website .

# Run container
docker run -p 3000:3000 oryne-website
```

---

## 🔧 Environment Variables

Create `.env.local` for environment variables:

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Contact Form
NEXT_PUBLIC_CONTACT_API=https://api.example.com/contact

# Email Service
EMAIL_SERVICE_API_KEY=your-api-key

# Other configs
NEXT_PUBLIC_SITE_URL=https://oryne.com
```

**Important:** Never commit `.env.local` to git!

---

## 📊 Post-Deployment

### 1. Set Up Analytics

**Google Analytics**

```javascript
// app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
```

### 2. Configure Domain

- Point your domain's DNS to your hosting provider
- Configure SSL certificate (usually automatic)
- Set up www redirect

### 3. Performance Optimization

```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer
```

### 4. SEO Setup

- Submit sitemap to Google Search Console
- Configure robots.txt
- Set up social media meta tags
- Add structured data

### 5. Monitoring

- Set up error tracking (Sentry)
- Configure uptime monitoring
- Set up performance monitoring

---

## 🔒 Security Best Practices

1. **Headers Configuration**
   Add to `next.config.js`:

   ```javascript
   async headers() {
     return [
       {
         source: '/:path*',
         headers: [
           {
             key: 'X-Frame-Options',
             value: 'DENY',
           },
           {
             key: 'X-Content-Type-Options',
             value: 'nosniff',
           },
         ],
       },
     ]
   }
   ```

2. **Environment Variables**

   - Never expose API keys in client code
   - Use `NEXT_PUBLIC_` prefix only for public vars

3. **HTTPS Only**
   - Always use HTTPS in production
   - Most platforms enable this by default

---

## 🚀 Performance Tips

1. **Image Optimization**

   - Use Next.js Image component
   - Serve images in WebP format
   - Lazy load images below the fold

2. **Code Splitting**

   - Next.js handles this automatically
   - Use dynamic imports for heavy components

3. **Caching**

   - Configure CDN caching
   - Use stale-while-revalidate strategy

4. **Bundle Size**
   - Keep dependencies minimal
   - Tree-shake unused code
   - Use production builds

---

## 📱 Testing Checklist

Before going live:

- [ ] Test all pages on desktop
- [ ] Test all pages on mobile
- [ ] Test all forms
- [ ] Test all links
- [ ] Check loading speed
- [ ] Verify SEO meta tags
- [ ] Test contact forms
- [ ] Check accessibility
- [ ] Verify analytics tracking
- [ ] Test on different browsers

---

## 🆘 Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading

- Check `next.config.js` image domains
- Verify image paths are correct
- Ensure images are in `public/` folder

### Slow Performance

- Enable Next.js image optimization
- Check bundle size
- Enable CDN caching
- Compress images

---

## 📞 Support

If you encounter issues:

1. Check [Next.js Documentation](https://nextjs.org/docs)
2. Review platform-specific guides
3. Check browser console for errors
4. Verify build logs

---

## 🎉 Success!

Once deployed, your Oryne website will be:

- ✅ Live and accessible worldwide
- ✅ Fast and optimized
- ✅ Secure with HTTPS
- ✅ SEO-friendly
- ✅ Mobile-responsive

**Share your website URL and start showcasing Oryne to the world! 🌟**

---

**Need help? The deployment platform documentation is your best resource!**
