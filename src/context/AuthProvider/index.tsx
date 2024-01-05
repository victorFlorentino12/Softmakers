import React, {createContext, useEffect, useState} from "react";
import { IAuthProvide, IContext, IUser } from "./types";
import { LoginRequest, getUserLocalStorage, setUserLocalStorage } from "./utils";

//criação de um contexto que posso tanto receber valores e dar valores

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvide) => {
    const [user, setUser] = useState<IUser | null>();

    //carregando o contexto se o user tiver logado
    useEffect(()=>{
        const user = getUserLocalStorage()
        if(user){
            setUser(user)
        }
    }, [])

    async function authenticate (email: string, password:string) {
        const response = await LoginRequest(email, password);

        const payload = {token: response.token, email};

        setUser(payload);
        setUserLocalStorage(payload);
        
    }

    function logout (){
        setUser(null);
        setUserLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{...user, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    )
    

}