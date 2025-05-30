import React, { useContext , useEffect } from 'react'
import AuthContent from '../context/AuthContent'
import { useNavigate } from 'react-router';

const PrivateRoute = () => {
    const { isAuth } = useContext( AuthContent ) ; 
    const navigate = useNavigate() ; 
    useEffect(() => {
        if( !isAuth ){
            navigate('/') ; 
        }
    },[isAuth] , navigate ) 
}

export default PrivateRoute ;
