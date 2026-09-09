import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
export default function NotFound(){
  usePageMeta('Page not found', "The page you requested doesn't exist.")
  return <section className="page-hero"><div className="shell page-hero-inner"><p className="eyebrow">404</p><h1>Page not found.</h1><p>The page you requested doesn't exist.</p><Link className="button button-primary" to="/">Back home →</Link></div></section>
}