import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { SITE_URL, STATIC_ROUTES } from './sitemap-config.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const OUTPUT = join(ROOT, 'public', 'sitemap.xml')

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function buildUrl(path) {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL.replace(/\/$/, '')}${normalized}`
}

function buildSitemapXml(routes) {
  const today = new Date().toISOString().slice(0, 10)

  const entries = routes.map((route) => {
    const lastmod = route.lastmod ? route.lastmod : today
    return `  <url>
    <loc>${escapeXml(buildUrl(route.path))}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(2)}</priority>
  </url>`
  })

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`
}

async function main() {
  const xml = buildSitemapXml(STATIC_ROUTES)
  writeFileSync(OUTPUT, xml, 'utf8')
  console.log(`[sitemap] Wrote ${OUTPUT} (${STATIC_ROUTES.length} URLs)`)
}

main().catch((err) => {
  console.error('[sitemap] Generation failed:', err)
  process.exit(1)
})
