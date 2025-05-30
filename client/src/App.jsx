import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthContent from './context/AuthContent.jsx'
import { SignUp } from './pages/SignUp.jsx'
import Sign from './pages/SignIn.jsx'
import Dashboard from './pages/Dashboard.jsx'
import PrivateRoute from './Route/PrivateRoute.jsx'

function App() {
  return (
    <Router>
      <AuthContent>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<Sign />} />
          
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
          } />
        </Routes>
      </AuthContent>
    </Router>
  )
}

export default App
