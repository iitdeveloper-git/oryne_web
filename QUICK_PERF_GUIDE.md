# 🚀 Quick Performance Audit Guide

## Run Performance Tests

### 1. Local Development Testing

```bash
# Start the development server
npm run dev

# In another terminal, run Lighthouse
npm run lighthouse:mobile   # Mobile audit
npm run lighthouse:desktop  # Desktop audit
```

### 2. Production Build Testing

```bash
# Build and test production version
npm run test:perf

# Or manually:
npm run build
npm run start
# Then run lighthouse in another terminal
npm run lighthouse
```

### 3. Google PageSpeed Insights

**Online Tool (No Installation Required)**

1. Go to: https://pagespeed.web.dev/
2. Enter your production URL
3. Click "Analyze"
4. Review Mobile & Desktop scores

**Target Scores:**

- Performance: 90+ 🟢
- Accessibility: 95+ 🟢
- Best Practices: 100 🟢
- SEO: 100 🟢

---

## 📊 Core Web Vitals Quick Check

### Using Chrome DevTools

1. **Open DevTools**: `F12` or `Ctrl+Shift+I`
2. **Go to Lighthouse tab**
3. **Select Device**: Mobile or Desktop
4. **Click "Analyze page load"**

### Key Metrics to Check:

| Metric  | Target  | Good | Needs Improvement         |
| ------- | ------- | ---- | ------------------------- |
| **LCP** | < 2.5s  | 🟢   | 🟡 2.5-4s / 🔴 > 4s       |
| **INP** | < 200ms | 🟢   | 🟡 200-500ms / 🔴 > 500ms |
| **CLS** | < 0.1   | 🟢   | 🟡 0.1-0.25 / 🔴 > 0.25   |
| **FCP** | < 1.8s  | 🟢   | 🟡 1.8-3s / 🔴 > 3s       |
| **TTI** | < 3.8s  | 🟢   | 🟡 3.8-7.3s / 🔴 > 7.3s   |

---

## 📱 Mobile Responsiveness Testing

### Quick Browser Test

```bash
# Chrome DevTools Device Emulation
1. Open Chrome DevTools (F12)
2. Press Ctrl+Shift+M (Toggle Device Toolbar)
3. Select device or enter custom dimensions

Test These Viewports:
- 375px (iPhone 12/13)
- 390px (iPhone 12/13 Pro)
- 412px (Android)
- 768px (iPad)
- 1024px (iPad Pro)
```

### Checklist:

- [ ] No horizontal scroll
- [ ] Text is readable (16px minimum)
- [ ] Buttons are tappable (44x44px minimum)
- [ ] Images scale correctly
- [ ] Navigation works
- [ ] Forms are usable

---

## 🔧 Optimization Checklist

### Before Every Release:

#### Images

- [ ] All images compressed
- [ ] Using WebP/AVIF format
- [ ] Lazy loading enabled
- [ ] Proper alt text
- [ ] Responsive sizes

#### Code

- [ ] Production build tested
- [ ] Console logs removed
- [ ] No unused code
- [ ] Bundle size checked
- [ ] CSS optimized

#### Performance

- [ ] Lighthouse score > 90
- [ ] Core Web Vitals pass
- [ ] Mobile responsive
- [ ] Caching configured
- [ ] CDN ready

#### SEO

- [ ] Meta tags set
- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] Schema markup added
- [ ] Open Graph tags

---

## 🛠️ Install Performance Tools (Optional)

### Install Lighthouse CLI globally:

```bash
npm install -g lighthouse @lhci/cli
```

### Run Lighthouse from command line:

```bash
# Mobile audit
lighthouse http://localhost:3000 --preset=mobile --view

# Desktop audit
lighthouse http://localhost:3000 --preset=desktop --view

# Save report
lighthouse http://localhost:3000 --output=html --output-path=./lighthouse-report.html
```

### Install Bundle Analyzer:

```bash
npm install --save-dev @next/bundle-analyzer
```

Add to `next.config.js`:

```javascript
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
```

Run analysis:

```bash
npm run analyze
```

---

## 📈 Monitoring Setup

### Google Search Console

1. Add property: https://search.google.com/search-console
2. Verify ownership
3. Check Core Web Vitals report
4. Monitor mobile usability

### Google Analytics 4

1. Set up GA4 property
2. Enable Web Vitals measurement
3. Create custom reports
4. Set up alerts for issues

### Real User Monitoring (Optional)

```bash
# Install Vercel Analytics (if using Vercel)
npm install @vercel/analytics

# Or Sentry for error tracking
npm install @sentry/nextjs
```

---

## 🐛 Common Issues & Quick Fixes

### Issue: Low Performance Score

**Quick Fixes:**

- Check image sizes (compress/optimize)
- Review third-party scripts
- Enable caching
- Minify CSS/JS

### Issue: High LCP

**Quick Fixes:**

- Optimize hero images
- Preload critical resources
- Remove render-blocking resources
- Use CDN for static assets

### Issue: High CLS

**Quick Fixes:**

- Set image dimensions
- Optimize font loading
- Reserve space for ads/embeds
- Avoid inserting content above existing content

### Issue: Slow INP/FID

**Quick Fixes:**

- Reduce JavaScript execution time
- Split large bundles
- Use requestIdleCallback for non-critical work
- Optimize event handlers

### Issue: Mobile Scroll Issues

**Quick Fixes:**

- Add `overflow-x: hidden` to body
- Check for elements wider than viewport
- Use `max-width: 100vw`
- Test on real devices

---

## 📞 Need Help?

### Documentation:

- **This Project**: See `PERFORMANCE_AUDIT.md`
- **Mobile Testing**: See `MOBILE_TESTING.md`
- **Next.js**: https://nextjs.org/docs/advanced-features/measuring-performance
- **Web.dev**: https://web.dev/vitals/

### Testing Tools:

- PageSpeed Insights: https://pagespeed.web.dev/
- WebPageTest: https://www.webpagetest.org/
- GTmetrix: https://gtmetrix.com/
- Lighthouse: Built into Chrome DevTools

---

## 🎯 Quick Win Optimizations

### 5-Minute Wins:

1. ✅ Enable compression (already done in next.config.js)
2. ✅ Add caching headers (already done)
3. ✅ Optimize fonts (already done with next/font)
4. ✅ Minify production build (already enabled)
5. ✅ Enable WebP images (already configured)

### 15-Minute Wins:

1. Compress all images
2. Add lazy loading to below-fold images
3. Remove unused CSS/JS
4. Optimize third-party scripts
5. Set up CDN

### 1-Hour Wins:

1. Implement service worker
2. Set up monitoring
3. Create performance dashboard
4. Document optimization process
5. Train team on best practices

---

**Last Updated**: December 7, 2025
**Next Review**: March 7, 2026

**Status**: ✅ All optimizations implemented
**Ready for Production**: ✅ Yes
