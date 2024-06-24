import { useAuth } from "../contexts/AuthContext"

export default function (){

    const { logout } = useAuth();

    return(
        <>
        <h1>Sei Loggato</h1>
        <button onClick={logout} >logout</button>
        </>
    )
}