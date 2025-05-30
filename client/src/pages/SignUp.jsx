import React, { useContext, useState } from 'react'
import { Auth } from '../context/AuthContent'

export const SignUp = () => {
  const auth = useContext(Auth) 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    if (!email || !password) {
      setError('Please enter both email and password.')
      return
    }

    try {
      const result = await auth.register(email, password)
      if (result !== 'User Registered') {
        setError(result)
      }
    } catch (err) {
      setError('Unexpected error')
    }
  }

  return (
    <div>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  )
}
