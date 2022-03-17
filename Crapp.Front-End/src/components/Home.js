/* PÁGINA PRINCIPAL (LUEGO DEL LOGEARSE) */

import { useAuth } from "../context/authContext"
import { useState } from "react";
import { Alert } from "./Alert";

export function Home() {

    //* TRAE EL USUARIO, LA VARIABLE DE CARGA Y LA FUNCIÓN LOGOUT DEL AUTH CONTEXT *//
    const { user, logout, loading } = useAuth();

    const [error, setError] = useState(); //* GUARDA MENSAJES DE ERROR *//

    const handleLogout = async () => {
        setError('')
        try {
            await logout()
        } catch (error) {
            setError('Hubo un problema con el logout, inténtelo de nuevo.')
        }

    }

    //* SI LOS DATOS DEL AUTH NO SE HAN ACTUALIZADO, SE PINTA UN "CARGANDO" *//
    if (loading) return <h1>Cargando...</h1>

    return <div className="w-full max-w-xs m-auto">
        <div className="bg-white rounded shadow-md
            px-8 pt-6 pb-8 mb-4">
            {error && <Alert message={error} />}
            <h1 className="">Welcome, {user.displayName || user.email}</h1>
            <button className="w-2/5 ml-10 text-center 
            bg-gray-300 text-primary hover:bg-primary2 
            hover:text-white my-2 p-3 rounded"onClick={handleLogout} name="logout">Logout</button>
        </div>
    </div>
}