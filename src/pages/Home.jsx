import { Link } from 'react-router-dom'
import { Users, Target, TrendingUp } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta(
    'Microsoft Cloud Consulting',
    'FENICON helps organizations get the most out of Microsoft 365, Copilot, Power Platform and automation — with a focus on people, governance and real business value.'
  )
  return (
    <>
      <section className="hero hero-with-image">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">MICROSOFT CLOUD CONSULTING</p>
            <h1>People. Productivity.<br/><span>A smarter tomorrow.</span></h1>
            <p className="lead">
              FENICON helps organizations get the most out of Microsoft 365,
              Copilot, Power Platform and automation — with a focus on people,
              governance and real business value.
            </p>
            <div className="hero-buttons">
              <Link className="button button-primary" to="/contact/">Let's talk →</Link>
              <Link className="button button-outline" to="/services/">Explore our services</Link>
            </div>
            <div className="hero-benefits">
              <div><span><Users size={22} /></span><div><strong>People first</strong><small>Technology that empowers</small></div></div>
              <div><span><Target size={22} /></span><div><strong>Practical solutions</strong><small>Built around your needs</small></div></div>
              <div><span><TrendingUp size={22} /></span><div><strong>Real impact</strong><small>From strategy to results</small></div></div>
            </div>
          </div>
          <div className="hero-photo">
            <img src="/images/home/home-hero.webp" alt="Technology for people and solutions for tomorrow" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-top">
            <div>
              <p className="eyebrow">WHAT WE DO</p>
              <h2>Turning Microsoft technology into real business value.</h2>
            </div>
            <Link className="section-link" to="/services/">View all services →</Link>
          </div>

          <div className="service-grid">
            <ServiceCard icon="/images/icons/copilot-ai.png" title="Copilot & AI" text="Unlock productivity with Microsoft Copilot and custom AI agents." to="/copilot/" />
            <ServiceCard icon="/images/icons/power-platform.png" title="Power Platform" text="Build solutions, automate processes and drive innovation." to="/power-platform/" />
            <ServiceCard icon="/images/icons/microsoft-365.png" title="Microsoft 365" text="Work smarter together with modern collaboration tools." to="/microsoft-365/" />
            <ServiceCard icon="/images/icons/automation-integration.png" title="Automation & Integration" text="Use PowerShell and Microsoft Graph to extend what's possible." to="/automation/" />
          </div>
        </div>
      </section>

      <section className="image-feature image-feature-dark">
        <div className="shell image-feature-grid">
          <div>
            <p className="eyebrow light">THE MICROSOFT ECOSYSTEM</p>
            <h2>A connected workplace.<br/>A more capable organization.</h2>
            <p>We bring together people, data and technology across the Microsoft cloud.</p>
            <Link className="button button-light" to="/services/">Explore the possibilities →</Link>
          </div>
          <img src="/images/home/microsoft-ecosystem.webp" alt="Microsoft cloud ecosystem" loading="lazy" />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">OUR APPROACH</p>
          <h2>From insight to impact.</h2>
          <div className="steps">
            {[
              ['1','Discover','Understand your goals and challenges.'],
              ['2','Design','Create a tailored solution and roadmap.'],
              ['3','Implement','Deliver with expertise and best practices.'],
              ['4','Grow','Support, optimize and unlock new opportunities.']
            ].map(([n,t,d]) => (
              <article key={n}>
                <span className="step-num">{n}</span>
                <div><strong>{t}</strong><small>{d}</small></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function ServiceCard({icon, title, text, to}) {
  return (
    <article className="service-card">
      <div className="service-logo">
        <img
          src={icon}
          alt=""
          aria-hidden="true"
          loading="lazy"
          style={{ width: '50px', height: '50px', display: 'block', objectFit: 'contain' }}
        />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <Link to={to}>Learn more →</Link>
    </article>
  )
}
