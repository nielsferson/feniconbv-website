import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/site.css'
import './styles/mobile-header.css'

const redirect = sessionStorage.redirect
if (redirect) {
  delete sessionStorage.redirect
  const url = new URL(redirect)
  history.replaceState(null, '', url.pathname + url.search + url.hash)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
