import { Api } from "../../api/api";
import { IUser } from "./types";

// Escrever no browser 
export function setUserLocalStorage(user: IUser | null){

    //foi colocado u para dificultar saber que é um user
    localStorage.setItem('u', JSON.stringify(user))
}

// Ler browser
export function getUserLocalStorage (){
    const json = localStorage.getItem('u')

    if(!json){
        return null;
    }
    
    const user = JSON.parse(json)

    return user ?? null;
}

export async function LoginRequest (email: string, password: string){
    try{
        const request = await Api.post('login', {email, password})

        return request.data;
    } catch(error){
        return null;
    }
}