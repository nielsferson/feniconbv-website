import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
export default function Services(){return <><PageHero eyebrow="SERVICES" title="Microsoft expertise built around your organization." intro="From Microsoft 365 foundations to AI and automation, FENICON connects the Microsoft technologies that matter to your people and business."/><section className="section"><div className="shell content-grid three">{[
['Microsoft 365','Teams, SharePoint, OneDrive and governance.','/microsoft-365/'],
['Copilot & AI','Readiness, adoption, governance and agents.','/copilot/'],
['Power Platform','Apps, automation, Dataverse and governance.','/power-platform/'],
['Automation','PowerShell, Graph and provisioning.','/automation/'],
['Consulting','Architecture, roadmaps and governance.','/contact/'],
['Modern Work','Practical solutions focused on productivity.','/contact/']
].map(([t,d,u])=><article className="content-card" key={t}><h2>{t}</h2><p>{d}</p><Link to={u}>Explore →</Link></article>)}</div></section></>}