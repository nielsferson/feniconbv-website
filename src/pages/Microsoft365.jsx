import PageHero from '../components/PageHero'

export default function Microsoft365() {
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
          <div className="content-grid four">
            <article className="content-card"><h2>Teams</h2><p>Collaboration, meetings and workspace governance.</p></article>
            <article className="content-card"><h2>SharePoint</h2><p>Knowledge, intranets and information architecture.</p></article>
            <article className="content-card"><h2>OneDrive</h2><p>Personal files, sync and sharing patterns.</p></article>
            <article className="content-card"><h2>Governance</h2><p>Clear ownership, lifecycle and secure collaboration.</p></article>
          </div>
        </div>
      </section>
    </>
  )
}
