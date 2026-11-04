import PageHero from '../components/PageHero'
import usePageMeta from '../hooks/usePageMeta'
import { pageMeta } from '../content/pageMeta'

export default function Automation() {
  usePageMeta(pageMeta.automation)
  return (
    <>
      <PageHero
        title="Connect. Automate. Scale."
        intro="Use PowerShell, Microsoft Graph and API-driven patterns to make administration and business processes faster, repeatable and easier to govern."
        image="/images/automation/automation-hero.webp"
        imageAlt="Automation and Microsoft Graph integrations"
      />
      <section className="section">
        <div className="shell">
          <h2>Automation capabilities</h2>
          <div className="content-grid four">
            <article className="content-card"><h3>PowerShell</h3><p>Administration, provisioning, reporting and repeatable operations.</p></article>
            <article className="content-card"><h3>Microsoft Graph</h3><p>API-driven access to Microsoft 365 services and data.</p></article>
            <article className="content-card"><h3>APIs & Integration</h3><p>Connect platforms and remove unnecessary manual steps.</p></article>
            <article className="content-card"><h3>Custom solutions</h3><p>Purpose-built automation for your environment and processes.</p></article>
          </div>
        </div>
      </section>
    </>
  )
}
