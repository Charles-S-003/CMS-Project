import React, { useContext, useState } from 'react'
import { Auth } from '../context/AuthContent'
import { Link } from 'react-router'

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {error && <p className="mb-4 text-red-600 text-sm">{error}</p>}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center text-gray-600 text-sm">
          Already have an account?{' '}
          <a href="/signin" className="text-blue-600 hover:underline">
            Click here
          </a> 
        </p>
      </div>
    </div>
  )
}

export default SignUp ; 