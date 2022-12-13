import { React, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth=()=>{
    const [isLogged] = useState(true);
    if(isLogged){
        return true
    } else {
        return false
    }
}

export const  ProtectedRoute=() =>{
    const auth=useAuth()

    return auth?<Outlet/>: <Navigate to="/"/>
}

export default ProtectedRoute;