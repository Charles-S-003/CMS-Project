import React, { createContext , useState } from 'react'
import { useNavigate } from 'react-router-dom'
import db from '../Service/Database'

export const Auth = createContext() ;

const AuthContent = ({ children }) => {
  const navigate = useNavigate();
  const database = new db() ;

  const [isAuth , setAuth] = useState(false) ;

  const login = async (email, password ) => {
    if (!email || !password) return "Enter The Required Details"
    try {
      await database.authenticateUser({ email, password })
      navigate('/dashboard') ; 
      setAuth(true) ;

      return "The User Is Logged In" ; 
    } catch (err) {
      return err.message
    }
  }

  const register = async (email, password) => {
    if (!email || !password) return "Enter The Required Details"
    try {
      await database.addUser({ email, password })
      navigate('/dashboard') ; 
      setAuth(true) ;
      return "User Registered"
    } catch (err) {
      return err.message
    }
  }

  const logout = () => {
    setAuth(false) ; 
  }



  return (
    <Auth.Provider value={{ login, register , isAuth }}>
      {children}
    </Auth.Provider>
  )
}

export default AuthContent ;