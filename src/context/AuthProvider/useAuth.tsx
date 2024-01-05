import { AuthContext } from "."
import { useContext } from "react"

//qualquer parte do codigo que quiser usar o contexto pode invocar o useAuth

export const useAuth = ()=> {
    const context = useContext(AuthContext);
    
    return context;
}