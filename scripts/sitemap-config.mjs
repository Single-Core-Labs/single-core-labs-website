/**
 * Central sitemap route registry — keep in sync with src/App.jsx and navigation.
 * "services" maps to /solutions (SolutionsPage).
 */

export const SITE_URL = 'https://singlecorelabs.in'

/** @type {import('./generate-sitemap.mjs').StaticRoute[]} */
export const STATIC_ROUTES = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/solutions', priority: 0.9, changefreq: 'monthly', comment: 'Services' },
  { path: '/solutions/healthcare-intelligence', priority: 0.9, changefreq: 'monthly' },
  { path: '/solutions/ai-modernization', priority: 0.85, changefreq: 'monthly' },
  { path: '/solutions/tech', priority: 0.9, changefreq: 'monthly' },
  { path: '/enterprise', priority: 0.85, changefreq: 'monthly' },
  { path: '/case-studies', priority: 0.8, changefreq: 'monthly' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/careers', priority: 0.75, changefreq: 'weekly' },
  { path: '/contact', priority: 0.8, changefreq: 'monthly' },
  { path: '/ai-infrastructure-vs-cloud', priority: 0.85, changefreq: 'monthly' },
  { path: '/indian-ai-cloud-market-alternative', priority: 0.85, changefreq: 'monthly' },
  { path: '/security', priority: 0.85, changefreq: 'monthly' },
  { path: '/deployment', priority: 0.85, changefreq: 'monthly' },
  { path: '/research-collective', priority: 0.85, changefreq: 'monthly' },
  { path: '/terms', priority: 0.5, changefreq: 'monthly' },
  { path: '/privacy', priority: 0.5, changefreq: 'monthly' },
]

export const BLOG_TABLE = 'blog_posts'
