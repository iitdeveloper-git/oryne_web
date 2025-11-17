# 🎨 Oryne Website Customization Examples

This guide shows you exactly how to customize different aspects of your Oryne website with practical examples.

## 🎯 Quick Customization Tasks

### 1. Change Main Headline

**File**: `app/components/Hero.tsx`

**Current:**

```typescript
<h1>Transform Your Educational Institution with Oryne</h1>
```

**Change to:**

```typescript
<h1>Revolutionize Your School with Oryne Platform</h1>
```

---

### 2. Update Pricing Plans

**File**: `app/components/Pricing.tsx`

**Find the plans array around line 12 and modify:**

```typescript
const plans = [
  {
    name: "Starter",
    price: 149, // Change price
    period: "month",
    description: "Perfect for small schools", // Update description
    features: [
      "Up to 1000 students", // Modify features
      "All ERP modules",
      // Add more features...
    ],
  },
];
```

---

### 3. Change Color Scheme

**File**: `tailwind.config.js`

**Example: Change to Green & Orange theme**

```javascript
primary: {
  50: '#f0fdf4',
  100: '#dcfce7',
  200: '#bbf7d0',
  300: '#86efac',
  400: '#4ade80',
  500: '#22c55e',  // Main green
  600: '#16a34a',
  700: '#15803d',
  800: '#166534',
  900: '#14532d',
},
accent: {
  50: '#fff7ed',
  100: '#ffedd5',
  200: '#fed7aa',
  300: '#fdba74',
  400: '#fb923c',
  500: '#f97316',  // Main orange
  600: '#ea580c',
  700: '#c2410c',
  800: '#9a3412',
  900: '#7c2d12',
}
```

---

### 4. Add Your Logo

**Step 1**: Place your logo in `public/` folder as `logo.png`

**Step 2**: Update `app/components/Header.tsx`

**Replace around line 42:**

```typescript
// Old:
<div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg">
  <span className="text-white font-bold text-lg">O</span>
</div>

// New:
<img src="/logo.png" alt="Oryne Logo" className="w-10 h-10" />
```

---

### 5. Update Contact Information

**File**: `app/components/Footer.tsx`

**Find the contactInfo array around line 48:**

```typescript
const contactInfo = [
  {
    icon: MapPinIcon,
    label: "Address",
    value: "Your actual address here", // Update
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "+1 (555) YOUR-NUMBER", // Update
  },
  {
    icon: EnvelopeIcon,
    label: "Email",
    value: "contact@yourdomain.com", // Update
  },
];
```

---

### 6. Add Real Statistics

**File**: `app/components/Statistics.tsx`

**Update stats array around line 14:**

```typescript
const stats = [
  {
    icon: UsersIcon,
    value: "50K+", // Your real numbers
    label: "Active Users",
    description: "Your custom description",
    color: "from-blue-500 to-cyan-500",
  },
  // Update other stats...
];
```

---

### 7. Customize Module Information

**File**: `app/components/ModulesShowcase.tsx`

**Update modules array around line 22:**

```typescript
{
  id: 'erp',
  title: 'ERP System',
  description: 'Your custom description here',
  features: [
    'Your custom feature 1',
    'Your custom feature 2',
    // Add your features...
  ],
  stats: {
    users: '20K+',  // Your real stats
    institutions: '100+',
    efficiency: '90%'
  }
}
```

---

### 8. Add Real Testimonials

**File**: `app/components/Testimonials.tsx`

**Update testimonials array around line 8:**

```typescript
const testimonials = [
  {
    name: "Your Customer Name",
    role: "Their Position",
    image: "/testimonial-1.jpg", // Add image to public/
    rating: 5,
    content: "Their actual testimonial text here...",
    company: "Their Institution Name",
  },
  // Add more testimonials...
];
```

---

### 9. Change Feature Icons & Text

**File**: `app/components/Features.tsx`

**Modify features array around line 17:**

```typescript
{
  icon: YourChosenIcon,  // Import from heroicons
  title: 'Your Feature Name',
  description: 'Your feature description...',
  gradient: 'from-blue-500 to-cyan-500'  // Choose colors
}
```

---

### 10. Update Meta Tags for SEO

**File**: `app/layout.tsx`

**Modify around line 4:**

```typescript
export const metadata: Metadata = {
  title: "Your Custom Title - Oryne Platform",
  description: "Your custom description for SEO...",
  keywords: "your, custom, keywords, here",
  // Add Open Graph for social sharing
  openGraph: {
    title: "Your Title",
    description: "Your Description",
    images: ["/og-image.jpg"], // Add image to public/
  },
};
```

---

## 🎨 Color Customization Examples

### Monochrome Blue Theme

```javascript
primary: {
  500: '#3b82f6',  // Blue
  600: '#2563eb',
  700: '#1d4ed8',
},
accent: {
  500: '#60a5fa',  // Light blue
  600: '#3b82f6',
  700: '#2563eb',
}
```

### Professional Corporate Theme

```javascript
primary: {
  500: '#1e40af',  // Deep blue
  600: '#1e3a8a',
  700: '#1e293b',
},
accent: {
  500: '#94a3b8',  // Gray
  600: '#64748b',
  700: '#475569',
}
```

### Vibrant Modern Theme

```javascript
primary: {
  500: '#8b5cf6',  // Purple
  600: '#7c3aed',
  700: '#6d28d9',
},
accent: {
  500: '#ec4899',  // Pink
  600: '#db2777',
  700: '#be185d',
}
```

---

## 📝 Text Content Templates

### Hero Section Headlines

```typescript
// Professional
"Enterprise-Grade Educational Management Platform";

// Action-Oriented
"Transform Education. Empower Institutions. Achieve Excellence.";

// Problem-Solution
"Tired of Managing Multiple Systems? Meet Oryne.";

// Feature-Focused
"All-in-One Platform for Modern Educational Institutions";
```

### CTA Button Text Options

```typescript
// Trial-focused
"Start Your 30-Day Free Trial";
"Try Oryne Free for 30 Days";

// Demo-focused
"Schedule a Live Demo";
"See Oryne in Action";

// Direct
"Get Started Now";
"Begin Your Journey";
```

---

## 🖼️ Adding Images

### Hero Background Image

```typescript
// app/components/Hero.tsx
<section
  className="relative min-h-screen"
  style={{
    backgroundImage: 'url(/hero-bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
```

### Module Screenshots

```typescript
// app/components/ModulesShowcase.tsx
// Replace the placeholder div with:
<img
  src="/screenshots/erp-dashboard.png"
  alt="ERP Dashboard"
  className="rounded-2xl shadow-xl"
/>
```

---

## 🔗 Link Navigation

### Update All Navigation Links

**Files to update:**

- `app/components/Header.tsx` - Main navigation
- `app/components/Footer.tsx` - Footer links

**Example:**

```typescript
const navItems = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "/contact" }, // External page
];
```

---

## 📱 Social Media Links

### Add Social Icons to Footer

**File**: `app/components/Footer.tsx`

**Add after line 90:**

```typescript
<div className="flex gap-4 mt-6">
  <a
    href="https://twitter.com/oryne"
    className="text-secondary-300 hover:text-primary-400"
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      {/* Twitter icon path */}
    </svg>
  </a>
  <a
    href="https://linkedin.com/company/oryne"
    className="text-secondary-300 hover:text-primary-400"
  >
    {/* LinkedIn icon */}
  </a>
  {/* Add more social icons */}
</div>
```

---

## 🎬 Animation Customization

### Adjust Animation Speed

**Any component with motion:**

```typescript
// Slower animation
<motion.div
  transition={{ duration: 1.2 }}  // Default: 0.6
>

// Faster animation
<motion.div
  transition={{ duration: 0.3 }}
>

// With delay
<motion.div
  transition={{ duration: 0.6, delay: 0.5 }}
>
```

### Change Animation Type

```typescript
// Fade in from bottom
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}

// Fade in from right
initial={{ opacity: 0, x: 50 }}
animate={{ opacity: 1, x: 0 }}

// Scale up
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
```

---

## 📊 Form Integration

### Connect Contact Form

**Create**: `app/components/ContactForm.tsx`

```typescript
"use client";

export default function ContactForm() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Your form submission logic
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  };

  return <form onSubmit={handleSubmit}>{/* Form fields */}</form>;
}
```

---

## 🎯 Quick Tips

1. **Always test after changes**: `npm run dev`
2. **Use browser DevTools**: Inspect elements to see classes
3. **Search in files**: Use Cmd/Ctrl + F to find specific text
4. **Preview changes**: Save file and browser auto-refreshes
5. **Undo mistakes**: Use Git to revert changes

---

## 🆘 Common Customizations

| Task            | File                | Line Approx |
| --------------- | ------------------- | ----------- |
| Change logo     | Header.tsx          | 42          |
| Update tagline  | Hero.tsx            | 88-96       |
| Modify features | Features.tsx        | 17          |
| Edit modules    | ModulesShowcase.tsx | 22          |
| Change prices   | Pricing.tsx         | 12          |
| Update footer   | Footer.tsx          | 48          |
| Adjust colors   | tailwind.config.js  | 14          |

---

**Remember**: After any change, save the file and check localhost:3000 to see updates immediately! 🚀
