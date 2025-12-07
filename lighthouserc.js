module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000',
        'http://localhost:3000/about',
        'http://localhost:3000/blogs',
      ],
      numberOfRuns: 3,
      settings: {
        preset: 'desktop',
        throttling: {
          rttMs: 40,
          throughputKbps: 10240,
          cpuSlowdownMultiplier: 1,
        },
      },
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 0.95 }],
        'categories:pwa': ['warn', { minScore: 0.8 }],
        
        // Core Web Vitals
        'first-contentful-paint': ['warn', { maxNumericValue: 1800 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 200 }],
        'interactive': ['warn', { maxNumericValue: 3800 }],
        
        // Performance metrics
        'speed-index': ['warn', { maxNumericValue: 3400 }],
        'max-potential-fid': ['warn', { maxNumericValue: 100 }],
        
        // Best practices
        'uses-responsive-images': 'error',
        'offscreen-images': 'warn',
        'uses-webp-images': 'warn',
        'uses-optimized-images': 'warn',
        'modern-image-formats': 'warn',
        'uses-text-compression': 'error',
        'uses-rel-preconnect': 'warn',
        'font-display': 'error',
        'no-document-write': 'error',
        'uses-passive-event-listeners': 'warn',
        
        // Mobile specific
        'viewport': 'error',
        'content-width': 'error',
        'tap-targets': 'warn',
        
        // Security
        'is-on-https': 'error',
        'uses-http2': 'warn',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
