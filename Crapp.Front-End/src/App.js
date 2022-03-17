import React from "react";
import { Routes, Route } from "react-router-dom"; //*FUNCIONES PARA EL MANEJO DE LAS RUTAS DE LA WEB*//
import { Home } from './components/Home'
import { Login } from "./components/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Register } from "./components/Register";
import { AuthProvider } from "./context/authContext"; //*FUNCIÓN PARA LA AUTENTICACIÓN DEL USUARIO *//
import { Footer } from "./components/Footer";

export default function App() {
  return (
    //* (AuthProvider provee la autenticación para el acceso a las rutas (Routes)) *//
    //* (ProtectedRoute protege la ruta en caso de que no se encuentre logeado un usuario) *//
    <div className="bg-background h-screen flex flex-col min-h-screen">
      <AuthProvider>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute> 
              <Home />
          </ProtectedRoute>
        }></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthProvider>
    <div className="flex-2 max-h-[25%]">
      <Footer ></Footer>
    </div>
    </div>
  )
}