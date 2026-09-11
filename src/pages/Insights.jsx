import { ExternalLink } from 'lucide-react'
import PageHero from '../components/PageHero'
import usePageMeta from '../hooks/usePageMeta'

const microsoftBlogs = [
  { name: 'Copilot', url: 'https://techcommunity.microsoft.com/category/Microsoft365Copilot' },
  { name: 'Copilot Studio', url: 'https://techcommunity.microsoft.com/category/microsoft-copilot/discussions/copilot-studio' },
  { name: 'Teams', url: 'https://techcommunity.microsoft.com/category/microsoftteams' },
  { name: 'Power Apps', url: 'https://techcommunity.microsoft.com/category/powerapps' },
  { name: 'Power Automate', url: 'https://techcommunity.microsoft.com/category/powerautomate' },
]

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
      <section className="section soft-section">
        <div className="shell">
          <p className="eyebrow">MICROSOFT RESOURCES</p>
          <h2>More from Microsoft.</h2>
          <div className="content-grid three" style={{ marginTop: '32px' }}>
            {microsoftBlogs.map(b =>
              <article className="content-card" key={b.name}>
                <h2>{b.name}</h2>
                <a href={b.url} target="_blank" rel="noreferrer">
                  Visit blog <ExternalLink size={16} style={{ verticalAlign: 'middle', marginLeft: '4px' }} />
                </a>
              </article>
            )}
          </div>
        </div>
      </section>

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
