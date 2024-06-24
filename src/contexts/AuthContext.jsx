import { createContext , useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({children})=>{

    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        setIsLoggedIn(true);
        console.log('ci sono')
        navigate('/profilo');
    }

    const logout = ()=>{
        setIsLoggedIn(false);
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