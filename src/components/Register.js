/* PÁGINA DE REGISTRO */

import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alert";

export function Register() {

    const [user, setUser] = useState({
        email: "",
        password: "",
        repassword: "",
    });

    const { signup } = useAuth()
    const navigate = useNavigate();
    const [error, setError] = useState();

    //* SET DE EMAIL Y PASSWORD *//

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value}) 
    }

    //* SUBMIT DE LOS DATOS *//

    const handleSubmit = async (e) =>{
        e.preventDefault() //* PREVENIR EL REFRESCO DE LA PÁGINA *//
        setError('')
        if (user.password != user.repassword){
           setError("Las contraseñas no coinciden")
        } else{ 
            try {
                await signup(user.email, user.password);
                navigate("/login"); //* SI NO HUBO ERROR EN EL REGISTRO, NAVEGAS AL LOGIN *//
            } catch (error) {
                //* TRADUCCIÓN DE ERRORES *//
                switch (error.code){
                    case "auth/internal-error":
                        setError("No ha digitado los campos correctamente.");
                        break;
                    case "auth/invalid-email":
                        setError("El email digitado es inválido");
                        break;
                    case "auth/weak-password":
                        setError("La contraseña debe tener como mínimo 6 caracteres");
                        break;
                    case "auth/email-already-in-use":
                        setError("El correo digitado ya está en uso");
                        break;
                }   
            }
        }   
    }

    return (
        <div>
            {error && <Alert message = {error} />}
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange}></input>
                <input type="password" name="password" placeholder="Password" onChange={handleChange}></input>
                <input type="password" name="repassword" placeholder="Repeat Password" onChange={handleChange}></input>
                <button type="submit" name="register">Register</button>
            </form>
        </div>
    )
}