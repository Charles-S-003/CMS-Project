import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthContent from './context/AuthContent.jsx'
import { SignUp } from './pages/SignUp.jsx'
import Dashboard from './pages/Dashboard.jsx'

function App() {
  return (
    <Router>
      <AuthContent>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthContent>
    </Router>
  )
}

export default App
