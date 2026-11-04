import { useEffect } from 'react'

const SITE_URL = 'https://fenicon.be'

// Injects a schema.org Service JSON-LD block for the current page, built
// from the same title/description already shown to visitors (no invented
// claims). Removed on unmount so navigating to a non-service page doesn't
// leave a stale Service schema behind.
export default function usePageSchema({ path, title, description }) {
  useEffect(() => {
    let el = document.head.querySelector('script[data-service-schema]')
    if (!el) {
      el = document.createElement('script')
      el.type = 'application/ld+json'
      el.setAttribute('data-service-schema', 'true')
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: title,
      name: title,
      description,
      url: `${SITE_URL}${path}`,
      areaServed: 'BE',
      provider: { '@type': 'Organization', name: 'FENICON', url: `${SITE_URL}/` },
    })

    return () => el.remove()
  }, [path, title, description])
}
