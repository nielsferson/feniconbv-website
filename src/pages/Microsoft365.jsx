import PageHero from '../components/PageHero'
import usePageMeta from '../hooks/usePageMeta'
import usePageSchema from '../hooks/usePageSchema'
import { pageMeta } from '../content/pageMeta'

export default function Microsoft365() {
  usePageMeta(pageMeta.microsoft365)
  usePageSchema(pageMeta.microsoft365)
  return (
    <>
      <PageHero
        eyebrow="MICROSOFT 365"
        title="Work smarter together."
        intro="Build a modern workplace around Teams, SharePoint, OneDrive and Microsoft 365 with governance that supports both users and IT."
        image="/images/microsoft-365/m365-hero.webp"
        imageAlt="Microsoft 365 applications"
      />
      <section className="section">
        <div className="shell">
          <p className="eyebrow">KEY FOCUS AREAS</p>
          <h2>Key focus areas</h2>
          <div className="content-grid four">
            <article className="content-card"><h3>Teams</h3><p>Collaboration, meetings and workspace governance.</p></article>
            <article className="content-card"><h3>SharePoint</h3><p>Knowledge, intranets and information architecture.</p></article>
            <article className="content-card"><h3>OneDrive</h3><p>Personal files, sync and sharing patterns.</p></article>
            <article className="content-card"><h3>Governance</h3><p>Clear ownership, lifecycle and secure collaboration.</p></article>
          </div>
        </div>
      </section>
    </>
  )
}
