import { useEffect } from 'react'

const SITE_NAME = 'FENICON'

function setMetaTag(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function usePageMeta(title, description) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`
    document.title = fullTitle
    if (description) {
      setMetaTag('name', 'description', description)
      setMetaTag('property', 'og:description', description)
    }
    setMetaTag('property', 'og:title', fullTitle)
  }, [title, description])
}
