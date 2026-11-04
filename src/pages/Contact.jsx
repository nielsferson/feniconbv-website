import { Mail, Linkedin } from 'lucide-react'
import PageHero from '../components/PageHero'
import usePageMeta from '../hooks/usePageMeta'
import { pageMeta } from '../content/pageMeta'

export default function Contact() {
  usePageMeta(pageMeta.contact)
  return (
    <>
      <PageHero
        title="Let's build a smarter tomorrow."
        intro="Have a question or want to explore how FENICON can help your organization? Start with the challenge, not the product."
        image="/images/contact/contact-hero.webp"
        imageAlt="Modern consulting workspace"
        showCta={false}
      />
      <section className="section">
        <div className="shell contact-feature">
          <div className="contact-stack">
            <h2 className="sr-only">Contact options</h2>
            <article className="contact-card">
              <span><Mail size={22} /></span><h3>Email</h3>
              <p>For consulting requests, projects and general questions.</p>
              <a href="mailto:niels.ferson@hotmail.com">niels.ferson@hotmail.com</a>
            </article>
            <article className="contact-card">
              <span><Linkedin size={22} /></span><h3>LinkedIn</h3>
              <p>Connect with Niels Ferson.</p>
              <a href="https://www.linkedin.com/in/niels-ferson/" target="_blank" rel="noreferrer">Open LinkedIn profile</a>
            </article>
          </div>
          <img className="contact-office" src="/images/contact/contact-office.webp" alt="FENICON consulting office" />
        </div>
      </section>
    </>
  )
}
