# Mobile Responsiveness Testing Checklist

## 📱 Viewport Testing

### Test All Breakpoints:

- [ ] 320px (iPhone SE - smallest)
- [ ] 375px (iPhone 12/13 Mini)
- [ ] 390px (iPhone 12/13 Pro)
- [ ] 412px (Android - common)
- [ ] 428px (iPhone 14 Pro Max)
- [ ] 768px (iPad Portrait)
- [ ] 1024px (iPad Landscape)
- [ ] 1280px (Desktop small)
- [ ] 1920px (Desktop full HD)
- [ ] 2560px (Desktop 2K)

---

## ✅ Visual Testing Checklist

### Navigation & Header

- [ ] Logo is visible and properly sized
- [ ] Navigation menu works (hamburger on mobile)
- [ ] Menu items are clickable (min 44x44px)
- [ ] No horizontal overflow
- [ ] Sticky header works properly
- [ ] No text cutoff

### Hero Section

- [ ] Title readable on all devices
- [ ] CTA buttons properly sized (min 44x44px)
- [ ] No text overlap
- [ ] Background images scale correctly
- [ ] Animations don't cause jank

### Content Sections

- [ ] Text is readable (min 16px font size)
- [ ] No horizontal scroll
- [ ] Images scale responsively
- [ ] Cards stack properly on mobile
- [ ] Grid layouts adapt (1 col → 2 col → 3+ col)
- [ ] Spacing is consistent

### Forms

- [ ] Input fields are properly sized
- [ ] Touch targets are large enough (44x44px)
- [ ] Keyboard doesn't cover inputs (viewport adjusts)
- [ ] Labels are readable
- [ ] Error messages visible
- [ ] Submit buttons accessible

### Footer

- [ ] Links are clickable
- [ ] Social icons visible
- [ ] Newsletter form works
- [ ] Contact info readable
- [ ] No content cutoff

---

## 🔍 Functional Testing

### Touch Interactions

- [ ] Tap targets are at least 44x44px
- [ ] No accidental taps (adequate spacing)
- [ ] Swipe gestures work (if applicable)
- [ ] Pinch to zoom allowed (accessibility)
- [ ] No ghost clicks (300ms delay removed)

### Performance

- [ ] Page loads in < 3s on 3G
- [ ] No layout shift during load
- [ ] Images lazy load below fold
- [ ] Animations are smooth (60fps)
- [ ] No janky scrolling

### Typography

- [ ] Body text: 16px minimum
- [ ] Headings scale appropriately
- [ ] Line height: 1.5 minimum
- [ ] No text overflow
- [ ] Sufficient contrast (4.5:1 for text)

### Images & Media

- [ ] Images load progressively
- [ ] Alt text for all images
- [ ] No broken images
- [ ] Videos are responsive
- [ ] Proper aspect ratios maintained

---

## 🌐 Browser Testing

### iOS Devices

- [ ] Safari (iOS 15+)
- [ ] Chrome (iOS)
- [ ] Firefox (iOS)
- [ ] Edge (iOS)

### Android Devices

- [ ] Chrome (Android)
- [ ] Samsung Internet
- [ ] Firefox (Android)
- [ ] Opera (Android)

### Desktop Browsers

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (macOS)
- [ ] Edge (latest)

---

## ⚡ Performance Checks

### Mobile Performance Metrics

```
LCP: < 2.5s
FID/INP: < 100ms
CLS: < 0.1
FCP: < 1.8s
TTI: < 3.8s
```

### Network Conditions

- [ ] Fast 4G (4Mbps)
- [ ] Slow 3G (400Kbps)
- [ ] 2G (50Kbps) - graceful degradation
- [ ] Offline (if PWA)

---

## 📊 Lighthouse Mobile Scores

### Run Lighthouse with Mobile Device:

```bash
# Chrome DevTools
1. F12 → Lighthouse tab
2. Select "Mobile" device
3. Run audit
```

### Target Scores:

- Performance: 90+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

---

## 🧪 Testing Tools

### Chrome DevTools

```bash
# Device Emulation
1. F12 → Toggle device toolbar (Ctrl+Shift+M)
2. Select device or custom dimensions
3. Test all breakpoints
```

### Real Device Testing

- Use BrowserStack or LambdaTest
- Test on actual devices when possible
- Verify touch interactions
- Check performance on real networks

### Automated Testing

```bash
# Run Lighthouse CI
npm install -g @lhci/cli
lhci autorun --collect.url=http://localhost:3000

# Test multiple viewports
npm install -g pa11y
pa11y http://localhost:3000 --viewport 375x667
```

---

## 🐛 Common Issues to Check

### Layout Issues

- [ ] No horizontal scroll (overflow-x: hidden)
- [ ] Content fits viewport width
- [ ] Fixed positioning works correctly
- [ ] Modals/overlays display properly
- [ ] Z-index stacking is correct

### Typography Issues

- [ ] No text cutoff or overflow
- [ ] Font sizes are readable
- [ ] Line breaks are natural
- [ ] No widow/orphan text
- [ ] Proper word wrapping

### Form Issues

- [ ] Input fields don't zoom in iOS
- [ ] Keyboard doesn't hide submit button
- [ ] Autocomplete works
- [ ] Validation messages visible
- [ ] Focus states are clear

### Image Issues

- [ ] Proper aspect ratios
- [ ] No stretched/squished images
- [ ] Lazy loading works
- [ ] WebP format supported
- [ ] Fallbacks for older browsers

### Performance Issues

- [ ] No render-blocking resources
- [ ] Images are compressed
- [ ] CSS/JS is minified
- [ ] Fonts are optimized
- [ ] Animations use GPU acceleration

---

## 📝 Test Results Template

```markdown
### Test Date: [Date]

### Tester: [Name]

### Device: [Device Model]

### Browser: [Browser + Version]

### Network: [Connection Type]

#### Viewport: [Width]px

- Layout: ✅/❌
- Navigation: ✅/❌
- Forms: ✅/❌
- Images: ✅/❌
- Performance: ✅/❌

#### Issues Found:

1. [Issue description]
2. [Issue description]

#### Screenshots:

- [Attach relevant screenshots]

#### Lighthouse Score:

- Performance: [Score]
- Accessibility: [Score]
- Best Practices: [Score]
- SEO: [Score]
```

---

## 🎯 Priority Fixes

### High Priority (Fix Immediately)

- Horizontal scroll on any device
- Broken layouts
- Unreadable text
- Non-functional forms
- Failed security checks

### Medium Priority (Fix Soon)

- Performance below 80
- Touch target sizes < 44px
- Minor layout shifts
- Image optimization
- Accessibility issues

### Low Priority (Nice to Have)

- Micro-animations
- Advanced PWA features
- Edge case devices
- Minor visual tweaks
- Performance above 90

---

## 🔄 Regular Testing Schedule

### Before Each Release

- [ ] Run full mobile testing suite
- [ ] Test on at least 3 real devices
- [ ] Run Lighthouse audits
- [ ] Check Core Web Vitals
- [ ] Verify no regressions

### Monthly

- [ ] Quick smoke tests
- [ ] Check analytics for issues
- [ ] Review error logs
- [ ] Update testing devices list

### Quarterly

- [ ] Comprehensive audit (see PERFORMANCE_AUDIT.md)
- [ ] Update testing tools
- [ ] Review new device releases
- [ ] Check browser updates

---

**Last Updated**: December 7, 2025
**Version**: 1.0.0
