import React, { useContext , useEffect } from 'react'
import {Auth} from '../context/AuthContent'
import { useNavigate } from 'react-router';

const PrivateRoute = () => {
    const { isAuth } = useContext( Auth ) ; 
    const navigate = useNavigate() ; 
    useEffect(() => {
        if( !isAuth ){
            navigate('/') ; 
        }
    },[isAuth , navigate] ) 
}

export default PrivateRoute ;