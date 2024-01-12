import { useAuth } from "../../context/AuthProvider/useAuth"
import React from "react"
import Login from "../../pages/Login/Login"

export const ProtectedLayout = ({children}: {children:JSX.Element})=>{
    const auth = useAuth()

    if (!auth.email){
        return(
        <Login/>
        )
    }
    return children
}