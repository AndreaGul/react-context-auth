import { createContext , useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({children})=>{

    const navigate = useNavigate();

    const [isLoggedIn, seIsLoggedIn] = useState(false);

    const login = (payload) => {
        setIsLoggedIn(true);
        navigate('/home');
    }

    const logout = ()=>{
        seIsLoggedIn(false);
        navigate('/login');
    }


    const value={
        isLoggedIn,
        login,
        logout,
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = ()=>{
    const value = useContext(AuthContext);
    if(value === undefined){
        throw new Error('Non sei dentro al Auth Provider.');
    }
    return value;
}

export {AuthProvider, useAuth}