import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AuthContent, { Auth } from './context/AuthContent.jsx'

createRoot(document.getElementById('root')).render(
    <Router>
      <AuthContent>
        <App />
      </AuthContent>
    </Router>

)