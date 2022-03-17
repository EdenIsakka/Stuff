/* PÁGINA DE REGISTRO */

import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";
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
        <div className="w-full max-w-xs m-auto">
            <div className="text-center">
                {error && <Alert message = {error} />}
                <form onSubmit={handleSubmit} className="bg-primary2 px-8 pt-3 
                pb-8 mb-0">
                    <div>
                        <img src="../logoCrapp.png" alt="Logo Crapp"
                            className="mx-auto p-9 mb-8"></img>
                    </div>
                    <div className="mb-10 relative">
                        <input type="email" name="email" id="email"
                            placeholder=" " onChange={handleChange}
                            autoComplete="off"
                            className=" peer 
                                        appearance-none 
                                        bg-transparent
                                        focus:outline-none 
                                        focus:border-b-primary 
                                        leading-tigh
                                        border
                                        text-white 
                                        border-primary2 
                                        border-b-black w-9/12 pb-1
                                        placeholder-transparent 
                                        transition-colors"
                        ></input>
                        <label htmlFor="email"
                            id="email-label"
                            className=" absolute
                                        left-8
                                        -top-3.5
                                        text-sm
                                        text-primary 
                                        peer-placeholder-shown:text-base
                                        peer-placeholder-shown:text-white
                                        peer-placeholder-shown:top-0.5
                                        peer-focus:-top-3.5 peer-focus:text-primary
                                        peer-focus:text-sm
                                        cursor-text
                                        transition-all
                                        duration-150
                                        "
                        >Email</label>
                    </div>
                    <div className="mb-10 relative">
                        <input type="password" name="password"
                            onChange={handleChange} placeholder=" "
                            className=" peer appearance-none bg-transparent
                                        focus:outline-none focus:border-b-primary 
                                        leading-tigh
                                        border border-primary2 border-b-black 
                                        text-white
                                        w-9/12 
                                        pb-1
                                        placeholder-transparent 
                                        transition-colors"
                        ></input>
                        <label htmlFor="password"
                            className=" absolute
                                        left-8
                                        -top-3.5
                                        text-sm
                                        text-primary 
                                        peer-placeholder-shown:text-base
                                        peer-placeholder-shown:text-white
                                        peer-placeholder-shown:top-0.5
                                        peer-focus:-top-3.5 peer-focus:text-primary
                                        peer-focus:text-sm
                                        cursor-text
                                        transition-all
                                        duration-150                                        
                                        "
                        >Password</label>
                    </div>
                    <div className="mb-10 relative">
                        <input type="password" name="repassword"
                            onChange={handleChange} placeholder=" "
                            className=" peer appearance-none bg-transparent
                                        focus:outline-none focus:border-b-primary 
                                        leading-tigh
                                        border border-primary2 border-b-black 
                                        text-white
                                        w-9/12 
                                        pb-1
                                        placeholder-transparent 
                                        transition-colors"
                        ></input>
                        <label htmlFor="repassword"
                            className=" absolute
                                        left-8
                                        -top-3.5
                                        text-sm
                                        text-primary 
                                        peer-placeholder-shown:text-base
                                        peer-placeholder-shown:text-white
                                        peer-placeholder-shown:top-0.5
                                        peer-focus:-top-3.5 peer-focus:text-primary
                                        peer-focus:text-sm
                                        cursor-text
                                        transition-all
                                        duration-150                                        
                                        "
                        >Password</label>
                    </div>
                    <button type="submit" name="register" className="text-white p-4 px-10 
                    bg-primary hover:bg-white rounded hover:text-black duration-150">Register</button>

                </form>
                <div className="flex m-0 p-0">
                    <p className="p-3 text-primary">Already have an Account?</p>
                    <button className="w-2/5 ml-10 text-center 
                        bg-gray-300 text-primary hover:bg-primary2 
                        hover:text-white my-2 p-3 duration-150 rounded"><Link to=
                        "/login">LogIn</Link></button>
                </div>
            </div>
            
        </div>
    )
}