import PageHero from '../components/PageHero'

export default function Automation() {
  return (
    <>
      <PageHero
        eyebrow="AUTOMATION & INTEGRATION"
        title="Connect. Automate. Scale."
        intro="Use PowerShell, Microsoft Graph and API-driven patterns to make administration and business processes faster, repeatable and easier to govern."
        image="/images/automation/automation-hero.webp"
        imageAlt="Automation and Microsoft Graph integrations"
      />
      <section className="section">
        <div className="shell content-grid four">
          <article className="content-card"><h2>PowerShell</h2><p>Administration, provisioning, reporting and repeatable operations.</p></article>
          <article className="content-card"><h2>Microsoft Graph</h2><p>API-driven access to Microsoft 365 services and data.</p></article>
          <article className="content-card"><h2>APIs & Integration</h2><p>Connect platforms and remove unnecessary manual steps.</p></article>
          <article className="content-card"><h2>Custom solutions</h2><p>Purpose-built automation for your environment and processes.</p></article>
        </div>
      </section>
    </>
  )
}
