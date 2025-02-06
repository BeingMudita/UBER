import React, {useContext} from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const UserProtectWrapper = ({children})=>{

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    if(!localStorage.token){
        navigate('/login')
    }

    return (
        <>
            {children}
        </>  
    )
}

export default UserProtectWrapper;