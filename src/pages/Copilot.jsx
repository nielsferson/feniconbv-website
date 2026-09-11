import PageHero from '../components/PageHero'
import usePageMeta from '../hooks/usePageMeta'

export default function Copilot() {
  usePageMeta(
    'Copilot & AI',
    'From readiness and governance to Copilot Studio agents, FENICON helps organizations introduce AI in a practical, secure and scalable way.'
  )
  return (
    <>
      <PageHero
        title="Turn ideas into impact with Microsoft Copilot."
        intro="From readiness and governance to Copilot Studio agents, FENICON helps organizations introduce AI in a practical, secure and scalable way."
        image="/images/copilot/copilot-hero.webp"
        imageAlt="Microsoft Copilot and AI"
        secondaryLabel="Explore Microsoft 365"
        secondaryTo="/microsoft-365/"
      />
      <FeatureSection items={[
        ['Assess','Review data, permissions, licensing and readiness.'],
        ['Design','Select valuable scenarios and define the target solution.'],
        ['Implement','Configure Copilot, agents and supporting services.'],
        ['Scale','Establish governance, adoption and repeatable patterns.']
      ]}/>
      <section className="section soft-section">
        <div className="shell">
          <div className="content-grid three">
            <article className="content-card"><h2>Knowledge</h2><p>Agents grounded in trusted organizational content.</p></article>
            <article className="content-card"><h2>Productivity</h2><p>Summarization, preparation and day-to-day assistance.</p></article>
            <article className="content-card"><h2>Process automation</h2><p>Connect AI with workflows, data and business actions.</p></article>
          </div>
        </div>
      </section>
    </>
  )
}

function FeatureSection({items}) {
  return (
    <section className="section">
      <div className="shell split-content">
        <div><h2>AI starts with a strong foundation.</h2></div>
        <div className="feature-list">
          {items.map(([t,d],i) =>
            <article key={t}><span>0{i+1}</span><div><h3>{t}</h3><p>{d}</p></div></article>
          )}
        </div>
      </div>
    </section>
  )
}
