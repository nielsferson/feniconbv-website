import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Copilot from './pages/Copilot'
import Microsoft365 from './pages/Microsoft365'
import PowerPlatform from './pages/PowerPlatform'
import Automation from './pages/Automation'
import About from './pages/About'
import Insights from './pages/Insights'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services/" element={<Services />} />
        <Route path="/copilot/" element={<Copilot />} />
        <Route path="/microsoft-365/" element={<Microsoft365 />} />
        <Route path="/power-platform/" element={<PowerPlatform />} />
        <Route path="/automation/" element={<Automation />} />
        <Route path="/about/" element={<About />} />
        <Route path="/insights/" element={<Insights />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
