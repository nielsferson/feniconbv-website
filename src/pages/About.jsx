import PageHero from '../components/PageHero'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT FENICON"
        title="Technology for people."
        intro="FENICON is a Microsoft-focused consulting company built around a simple principle: technology should make work clearer, easier and more effective."
        image="/images/about/about-hero.webp"
        imageAlt="Technology for people"
      />
      <section className="section">
        <div className="shell about-page-grid">
          <div className="about-photo">
            <img src="/images/about/about-niels.webp" alt="FENICON consultant" />
          </div>
          <div>
            <p className="eyebrow">FENICON</p>
            <h2>Technical depth with a practical mindset.</h2>
            <p>FENICON focuses on Microsoft 365, Copilot, AI agents, Power Platform and automation, combining architecture and governance with hands-on implementation.</p>
            <div className="mini-values">
              <strong>People first</strong>
              <strong>Practical</strong>
              <strong>Trusted partner</strong>
              <strong>Real impact</strong>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
