import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function Services() {
  const services = [
    ['Copilot & AI','Readiness, adoption, governance and custom agents.','/copilot/'],
    ['Power Platform','Business apps, workflows, Dataverse and governance.','/power-platform/'],
    ['Microsoft 365','Teams, SharePoint, OneDrive and modern collaboration.','/microsoft-365/'],
    ['Automation & Integration','PowerShell, Microsoft Graph and API-driven solutions.','/automation/'],
  ]
  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title="Microsoft expertise. Real business impact."
        intro="FENICON combines Microsoft 365, AI, Power Platform and automation to create practical solutions around the way your organization actually works."
        image="/images/services/services-hero.webp"
        imageAlt="Microsoft cloud consulting"
      />
      <section className="section">
        <div className="shell">
          <div className="content-grid four">
            {services.map(([t,d,u]) =>
              <article className="content-card" key={t}>
                <h2>{t}</h2><p>{d}</p><Link to={u}>Explore →</Link>
              </article>
            )}
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="shell">
          <p className="eyebrow">WHY FENICON</p>
          <h2>Technology with a practical purpose.</h2>
          <div className="steps">
            {[
              ['01','People first','Solutions should make work better for the people using them.'],
              ['02','Microsoft focused','Deep focus on the Microsoft cloud ecosystem.'],
              ['03','Practical delivery','From architecture and governance to implementation.'],
              ['04','Built to grow','Clear foundations that can evolve with your organization.'],
            ].map(([n,t,d]) => <article key={n}><span className="step-num">{n}</span><div><strong>{t}</strong><small>{d}</small></div></article>)}
          </div>
        </div>
      </section>
    </>
  )
}
