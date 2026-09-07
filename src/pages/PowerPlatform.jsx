import PageHero from '../components/PageHero'

export default function PowerPlatform() {
  return (
    <>
      <PageHero
        eyebrow="POWER PLATFORM"
        title="Turn ideas into solutions."
        intro="Create business applications and automation with Power Apps, Power Automate and Dataverse while keeping architecture and governance in scope."
        image="/images/power-platform/power-platform-hero.webp"
        imageAlt="Microsoft Power Platform"
      />
      <section className="section">
        <div className="shell content-grid four">
          {[
            ['Power Apps','Canvas and model-driven solutions around real business processes.'],
            ['Power Automate','Cloud flows and workflow automation across Microsoft services.'],
            ['Dataverse','Structured data models, security and scalable application foundations.'],
            ['Governance','Environment strategy, standards, security groups and lifecycle controls.'],
          ].map(([t,d]) => <article className="content-card" key={t}><h2>{t}</h2><p>{d}</p></article>)}
        </div>
      </section>
    </>
  )
}
