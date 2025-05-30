import React, { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import db from '../Service/Database'

export const Auth = createContext()

const AuthContent = ({ children }) => {
  const navigate = useNavigate()
  const database = new db()

  const login = async (email, password) => {
    if (!email || !password) return "Enter The Required Details"
    try {
      await database.authenticateUser({ email, password })
      navigate('/dashboard')
      return "The User Is Logged In"
    } catch (err) {
      return err.message
    }
  }

  const register = async (email, password) => {
    if (!email || !password) return "Enter The Required Details"
    try {
      await database.addUser({ email, password })
      navigate('/dashboard')
      return "User Registered"
    } catch (err) {
      return err.message
    }
  }

  return (
    <Auth.Provider value={{ login, register }}>
      {children}
    </Auth.Provider>
  )
}

export default AuthContent
