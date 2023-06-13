import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const login = (email, password) =>{

        const loggedUser = {
            id:"123",
            email
        };
        
        localStorage.setItem("user", JSON.stringify(loggedUser));

        if(password === 'secret') {
            setUser({loggedUser});
            navigate('/');
        }
        console.log("login", { user});

    };
    const logout = () => {}
    return( 
        <AuthContext.Provider 
        value={{authenticated: !!user , user, login, logout}}>
        {children}
        </AuthContext.Provider>
    )

};
 
export  const AuthContext = createContext();