import { Children, createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext(null)
export default function AuthProvider({children}){
    const [user,setUser] =useState(null)
    const login=(username)=>{
        setUser(username)
    }
    const logout=()=>{
        setUser(null)
    }
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}