import { Link } from 'react-router-dom'

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = '',
  showCta = true,
  secondaryLabel,
  secondaryTo,
}) {
  return (
    <section className="page-hero">
      <div className="shell page-hero-grid">
        <div className="page-hero-inner">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="hero-buttons">
            {showCta && <Link className="button button-primary" to="/contact/">Let's talk →</Link>}
            {secondaryLabel && secondaryTo &&
              <Link className="button button-outline" to={secondaryTo}>{secondaryLabel}</Link>
            }
          </div>
        </div>
        {image &&
          <div className="page-hero-media">
            <img src={image} alt={imageAlt} />
          </div>
        }
      </div>
    </section>
  )
}
