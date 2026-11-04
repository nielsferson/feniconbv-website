// Generates a static index.html per route inside dist/, each carrying its
// own <title>, meta description, canonical link and Open Graph/Twitter tags.
// GitHub Pages serves plain static files, so without this step every route
// would be indexed with the same generic homepage metadata until a crawler
// executes the SPA's JavaScript. The React app itself is untouched: each
// generated file still loads the same bundle and boots the SPA normally.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { pageMeta, serviceRouteKeys } from '../src/content/pageMeta.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(__dirname, '..', 'dist')
const siteUrl = 'https://fenicon.be'

const template = readFileSync(path.join(distDir, 'index.html'), 'utf8')

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function renderServiceSchema({ path: routePath, title, description }, canonicalUrl) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: title,
    name: title,
    description,
    url: canonicalUrl,
    areaServed: 'BE',
    provider: { '@type': 'Organization', name: 'FENICON', url: `${siteUrl}/` },
  }
  return `\n    <script type="application/ld+json" data-service-schema="true">${JSON.stringify(schema)}</script>\n  </head>`
}

function renderPage(entry, isService) {
  const { path: routePath, title, description, image } = entry
  const fullTitle = escapeHtml(`${title} | FENICON`)
  const desc = escapeHtml(description)
  const canonicalUrl = `${siteUrl}${routePath}`
  const imageUrl = `${siteUrl}${image}`

  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${fullTitle}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${canonicalUrl}$2`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${desc}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${fullTitle}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${desc}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${canonicalUrl}$2`)
    .replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${imageUrl}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${fullTitle}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${desc}$2`)
    .replace(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${imageUrl}$2`)

  if (isService) {
    html = html.replace('</head>', renderServiceSchema(entry, canonicalUrl))
  }

  return html
}

for (const [key, entry] of Object.entries(pageMeta)) {
  const html = renderPage(entry, serviceRouteKeys.includes(key))
  const outDir = entry.path === '/' ? distDir : path.join(distDir, entry.path)
  mkdirSync(outDir, { recursive: true })
  writeFileSync(path.join(outDir, 'index.html'), html)
  console.log(`prerendered ${entry.path}${serviceRouteKeys.includes(key) ? ' (+ Service schema)' : ''}`)
}
