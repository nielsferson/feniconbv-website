import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const items = [
  ['/', 'Home'],
  ['/services/', 'Services'],
  ['/copilot/', 'Copilot & AI'],
  ['/power-platform/', 'Power Platform'],
  ['/about/', 'About'],
  ['/insights/', 'Insights'],
  ['/contact/', 'Contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="shell nav">
        <NavLink to="/" className="brand">
          <img src="/images/branding/fenicon-logo.png" alt="FENICON" />
        </NavLink>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav id="primary-navigation" className={`nav-links ${open ? 'open' : ''}`}>
          {items.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({isActive}) => isActive ? 'active' : ''}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <NavLink className="button button-primary nav-cta" to="/contact/">Let's talk</NavLink>
      </div>
    </header>
  )
}
