import { useEffect } from 'react'

const SITE_NAME = 'FENICON'
const SITE_URL = 'https://fenicon.be'

function setMetaTag(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLinkTag(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function usePageMeta({ path, title, description, image }) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`
    const canonicalUrl = `${SITE_URL}${path}`

    document.title = fullTitle
    setLinkTag('canonical', canonicalUrl)
    setMetaTag('property', 'og:title', fullTitle)
    setMetaTag('property', 'og:url', canonicalUrl)

    if (description) {
      setMetaTag('name', 'description', description)
      setMetaTag('property', 'og:description', description)
      setMetaTag('name', 'twitter:description', description)
    }
    if (image) {
      const imageUrl = `${SITE_URL}${image}`
      setMetaTag('property', 'og:image', imageUrl)
      setMetaTag('name', 'twitter:image', imageUrl)
    }
    setMetaTag('name', 'twitter:title', fullTitle)
  }, [path, title, description, image])
}
