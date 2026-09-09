import { Mail, Linkedin } from 'lucide-react'
import PageHero from '../components/PageHero'

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="Let's build a smarter tomorrow."
        intro="Have a question or want to explore how FENICON can help your organization? Start with the challenge, not the product."
        image="/images/contact/contact-hero.webp"
        imageAlt="Modern consulting workspace"
        showCta={false}
      />
      <section className="section">
        <div className="shell contact-feature">
          <div className="contact-stack">
            <article className="contact-card">
              <span><Mail size={22} /></span><h2>Email</h2>
              <p>For consulting requests, projects and general questions.</p>
              <a href="mailto:niels.ferson@hotmail.com">niels.ferson@hotmail.com →</a>
            </article>
            <article className="contact-card">
              <span><Linkedin size={22} /></span><h2>LinkedIn</h2>
              <p>Connect with Niels Ferson.</p>
              <a href="https://www.linkedin.com/in/niels-ferson/" target="_blank" rel="noreferrer">Open LinkedIn profile ↗</a>
            </article>
          </div>
          <img className="contact-office" src="/images/contact/contact-office.webp" alt="FENICON consulting office" />
        </div>
      </section>
    </>
  )
}
