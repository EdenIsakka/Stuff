import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({children}) {

    const {user, loading} = useAuth();

    //* SI EL OBJETO USER ESTÁ SIN ACTUALIZAR, MOSTRAR EL MENSAJE "Cargando..." *//
    if (loading) return <h1>Cargando...</h1>

    //* SI EL OBJETO USER NO EXISTE, ENVIAR AL USUARIO AL LOGIN *// 
    if (!user) return <Navigate to='/login' />

    //* SI EXISTE, MOSTRAR LA PÁGINA DE INICIO *//    
    return <>{children}</>
}
