import { createContext , useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children})=>{

    const value={

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
        return value;
    }
}

export {AuthProvider, useAuth}