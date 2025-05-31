import React, { useContext , useEffect } from 'react'
import {Auth} from '../context/AuthContent'
import { useNavigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const { isAuth } = useContext( Auth ) ; 
    const navigate = useNavigate() ; 
    useEffect(() => {
        if( !isAuth ){
            navigate('/') ; 
        }
    },[isAuth , navigate] ) 

    return isAuth ? children : null
}

export default PrivateRoute ;