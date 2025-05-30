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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign In</h2>
        <input
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {error && <p className="mb-4 text-red-600 text-sm">{error}</p>}
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
          onClick={handleClick}
        >
          Sign In
        </button>
        <p className="mt-4 text-center text-gray-600 text-sm">
          Don't have an account?{' '}
          <a href="/" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
        
      </div>
    </div>
  )
}

export default SignIn ; 