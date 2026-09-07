import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <Link className="footer-logo" to="/">
          <img src="/images/branding/fenicon-logo.png" alt="FENICON" />
        </Link>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/services/">Services</Link>
          <Link to="/copilot/">Copilot & AI</Link>
          <Link to="/power-platform/">Power Platform</Link>
          <Link to="/about/">About</Link>
          <Link to="/insights/">Insights</Link>
          <Link to="/contact/">Contact</Link>
        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} FENICON
          <small>Technology for people.</small>
        </div>
      </div>
    </footer>
  )
}
