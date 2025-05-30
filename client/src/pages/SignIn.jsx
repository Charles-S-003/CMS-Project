import React, { useContext, useState } from 'react'
import { Auth } from '../context/AuthContent'

export const SignIn = () => {
  const auth = useContext(Auth)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleClick = async () => {
    setError('')

    if (!email || !password) {
      setError("Please enter both email and password.")
      return
    }

    try {
      const result = await auth.login(email, password)
      if (result !== 'The User Is Logged In') {
        setError(result)
      }
    } catch (err) {
      console.error("Login failed:", err)
      setError("Unexpected error occurred.")
    }
  }

  return (
    <div>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleClick}>Sign In</button>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  )
}
