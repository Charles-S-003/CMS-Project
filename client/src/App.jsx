import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SignUp } from './pages/SignUp.jsx'
import Sign from './pages/SignIn.jsx'
import Dashboard from './pages/Dashboard.jsx'
import PrivateRoute from './Route/PrivateRoute.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signin" element={<Sign />} />
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } />
    </Routes>
  )
}

export default App
