/**
 * Central sitemap route registry — keep in sync with src/App.jsx and navigation.
 * "services" maps to /solutions (SolutionsPage).
 */

export const SITE_URL = 'https://singlecorelabs.in'

/** @type {import('./generate-sitemap.mjs').StaticRoute[]} */
export const GUIDE_ROUTES = [
  { path: '/guides', priority: 0.9, changefreq: 'weekly' },
  { path: '/guides/sovereign-ai-infrastructure', priority: 0.8, changefreq: 'monthly' },
  { path: '/guides/agentic-workflows', priority: 0.8, changefreq: 'monthly' },
  { path: '/guides/llm-fine-tuning', priority: 0.8, changefreq: 'monthly' },
  { path: '/guides/semantic-caching', priority: 0.8, changefreq: 'monthly' },
  { path: '/guides/llm-providers-india', priority: 0.8, changefreq: 'monthly' },
  { path: '/guides/healthcare-data-pipelines', priority: 0.8, changefreq: 'monthly' },
  { path: '/guides/llm-security-patterns', priority: 0.8, changefreq: 'monthly' },
  { path: '/guides/inference-cost-optimization', priority: 0.8, changefreq: 'monthly' },
]

export const BLOG_SLUGS = [
  'why-indian-enterprises-need-sovereign-ai',
  'real-cost-gpt4o-indian-startups',
  'fine-tuning-vs-rag-decision-guide',
  'healthcare-ai-india-2026',
  'llm-security-checklist',
  'reducing-llm-costs-without-sacrificing-quality',
]

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
  { path: '/blog', priority: 0.85, changefreq: 'weekly' },
  { path: '/terms', priority: 0.5, changefreq: 'monthly' },
  { path: '/privacy', priority: 0.5, changefreq: 'monthly' },
  { path: '/blog', priority: 0.9, changefreq: 'weekly' },
  ...BLOG_SLUGS.map(s => ({ path: `/blog/${s}`, priority: 0.8, changefreq: 'monthly' })),
  ...GUIDE_ROUTES,
]

export const BLOG_TABLE = 'blog_posts'
