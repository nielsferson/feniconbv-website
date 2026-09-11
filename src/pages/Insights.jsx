import PageHero from '../components/PageHero'
import usePageMeta from '../hooks/usePageMeta'

const articles = [
  {
    tag:'COPILOT',
    title:'Getting started with Microsoft Copilot',
    text:'A practical way to think about readiness, governance and adoption.',
    image:'/images/insights/insights-hero.webp'
  },
  {
    tag:'MICROSOFT 365',
    title:'Building a governed modern workplace',
    text:'Clear principles for collaboration, ownership and lifecycle management.',
    image:'/images/home/microsoft-ecosystem.webp'
  },
  {
    tag:'AUTOMATION',
    title:'Automating with PowerShell and Graph',
    text:'Where automation can remove repetitive administration and improve consistency.',
    image:'/images/automation/automation-hero.webp'
  },
]

export default function Insights() {
  usePageMeta(
    'Insights',
    'Practical guidance about Microsoft 365, Copilot, Power Platform and automation.'
  )
  return (
    <>
      <PageHero
        title="Ideas. Insights. Impact."
        intro="Practical guidance about Microsoft 365, Copilot, Power Platform and automation."
        image="/images/insights/insights-hero.webp"
        imageAlt="FENICON insights"
        showCta={false}
      />
      <section className="section">
        <div className="shell">
          <div className="content-grid three">
            {articles.map(a =>
              <article className="article-card" key={a.title}>
                <img src={a.image} alt="" loading="lazy" />
                <div>
                  <p className="eyebrow">{a.tag}</p>
                  <h2>{a.title}</h2>
                  <p>{a.text}</p>
                </div>
              </article>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
