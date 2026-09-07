import { Link } from 'react-router-dom'

export default function PageHero({ eyebrow, title, intro, showCta = true }) {
  return (
    <section className="page-hero">
      <div className="shell page-hero-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        {showCta && <Link className="button button-primary" to="/contact/">Let's talk →</Link>}
      </div>
    </section>
  )
}
