//* CONTEXTO PARA CONCEDER ACCESO LUEGO DEL LOGIN o REGISTER *//

import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from "../firebase/firebase-config";

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error("There's not Auth Provider")
    return context;
}

export function AuthProvider({ children }) {

    //* INICIALIZA EL ESTADO DEL USUARIO COMO NULL *//
    const [user, setUser] = useState(null);

    //* FUNCIÓN PARA ESPERAR LA CARGA DEL NUEVO CONTEXTO *//
    const [loading, setLoading] = useState(true);

    //* ENVÍA DATOS A FIREBASE *//
    const signup = async (email, password) => {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    }

    const login = async (email, password) => {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => signOut(auth);

    //* LOGIN CON GOOGLE *//
    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    //* VERIFICA EL ACTUAL ESTADO DEL USUARIO *//
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
    }, [])

    return (
        <authContext.Provider value={{ signup, login, logout, loginWithGoogle, loading, user }}>{children}</authContext.Provider> //* RETORNA LOS VALORES PARA EL CONTEXTO ACTUAL DE LA AUTENTICACIÓN *//
    );
}