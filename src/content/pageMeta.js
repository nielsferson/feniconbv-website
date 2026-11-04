// Central per-route SEO metadata: used at runtime by usePageMeta and at
// build time by scripts/prerender.mjs, so both stay in sync automatically.
export const pageMeta = {
  home: {
    path: '/',
    title: 'Microsoft 365 & Copilot Consultancy in Belgium',
    description: 'FENICON helps Belgian organizations get the most out of Microsoft 365, Copilot and Power Platform, with a focus on governance, security and real business value.',
    image: '/images/home/home-hero.webp',
  },
  services: {
    path: '/services/',
    title: 'Microsoft 365, Copilot & Power Platform Services',
    description: 'FENICON combines Microsoft 365, Copilot, Power Platform and automation into practical solutions for Belgian organizations, with governance built in from the start.',
    image: '/images/services/services-hero.webp',
  },
  copilot: {
    path: '/copilot/',
    title: 'Microsoft Copilot & Copilot Studio Consulting',
    description: 'From readiness and governance to Copilot Studio agents, FENICON helps Belgian organizations introduce Microsoft Copilot in a practical, secure and scalable way.',
    image: '/images/copilot/copilot-hero.webp',
  },
  microsoft365: {
    path: '/microsoft-365/',
    title: 'Microsoft 365 Workplace Consulting',
    description: 'Build a modern, governed workplace around Teams, SharePoint, OneDrive and Microsoft 365 that supports both users and IT in Belgian organizations.',
    image: '/images/microsoft-365/m365-hero.webp',
  },
  powerPlatform: {
    path: '/power-platform/',
    title: 'Power Platform Consulting & Governance',
    description: 'Create business applications and automation with Power Apps, Power Automate and Dataverse, with architecture, security and governance built in from the start.',
    image: '/images/power-platform/power-platform-hero.webp',
  },
  automation: {
    path: '/automation/',
    title: 'Automation & Microsoft Graph Integration',
    description: "Use PowerShell, Microsoft Graph and API-driven automation to make Belgian organizations' administration and business processes faster and easier to govern.",
    image: '/images/automation/automation-hero.webp',
  },
  about: {
    path: '/about/',
    title: 'About',
    description: 'FENICON is a Belgium-based Microsoft-focused consulting company built around a simple principle: technology should make work clearer, easier and more effective.',
    image: '/images/about/about-hero.webp',
  },
  insights: {
    path: '/insights/',
    title: 'Microsoft 365, Copilot & Power Platform Insights',
    description: 'Practical guidance for Belgian organizations on Microsoft 365, Copilot, Power Platform and automation, plus official Microsoft Tech Community resources.',
    image: '/images/insights/insights-hero.webp',
  },
  contact: {
    path: '/contact/',
    title: 'Contact',
    description: 'Have a question about Microsoft 365, Copilot or Power Platform? Get in touch with FENICON to explore how we can help your organization.',
    image: '/images/contact/contact-hero.webp',
  },
}

// Routes that represent an actual service offering (as opposed to Home,
// About, Insights, Contact, or the Services overview page). These get a
// schema.org Service JSON-LD block, built from their existing title and
// description, both at runtime (usePageSchema) and at build time
// (scripts/prerender.mjs).
export const serviceRouteKeys = ['copilot', 'microsoft365', 'powerPlatform', 'automation']
