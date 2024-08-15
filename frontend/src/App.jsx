import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import { AdminLayout, GuardiaLayout, UsuarioLayout } from "./Layouts/SideBar";

import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import Inicio from "./pages/Inicio";
import { Confirmar } from "./pages/Confirmar";
("./pages/Inicio");

import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";

import UsuariosAdminPage from "./pages/Administrador/UsuariosAdminPage";
import GuardiasAdminPage from "./pages/Administrador/GuardiasAdminPage";
import ParqueaderosAdminPage from "./pages/Administrador/ParqueaderosAdminPage";

import PerfilGuardiasPage from "./pages/Guardias/PerfilGuardiasPage";
import ParqueaderosGuardiasPage from "./pages/Guardias/ParqueaderosGuardiasPage";

import PerfilUsuariosPage from "./pages/Usuarios/PerfilUsuariosPage";
import ParqueaderosUsuariosPage from "./pages/Usuarios/ParqueaderosUserPage";

import NotFound from "./pages/NotFound";

import "./index.css";

function App() {
  const { isAuth, rol } = useAuth();
  return (
    <>
      <Routes>
        {/* Rutas públicas */}
        <Route
          element={
            <ProtectedRoute
              isAllowed={!isAuth}
              redirectTo={
                rol === "Administrador"
                  ? "/administrador"
                  : rol === "Guardia"
                  ? "/guardias"
                  : rol === "Usuario"
                  ? "/usuarios"
                  : "/"
              }
            />
          }
        >
          <Route path="/singin" element={<Login />} />
          <Route path="/usuarios/singup" element={<SingUp />} />
          <Route path="/usuarios/confirmar-email/:token" element={<Confirmar />} />
        </Route>

        {/* Rutas protegidas */}
        {rol === "Administrador" && (
          <Route element={<ProtectedRoute isAllowed={isAuth} redirectTo="/" />}>
            {/* Rutas del administrador */}
            <Route
              path="/administrador"
              element={
                <AdminLayout>
                  <Inicio />
                </AdminLayout>
              }
            />
            <Route
              path="/administrador/usuarios"
              element={
                <AdminLayout>
                  <UsuariosAdminPage />
                </AdminLayout>
              }
            />
            <Route
              path="/administrador/guardias"
              element={
                <AdminLayout>
                  <GuardiasAdminPage />
                </AdminLayout>
              }
            />
            <Route
              path="/administrador/parqueaderos"
              element={
                <AdminLayout>
                  <ParqueaderosAdminPage />
                </AdminLayout>
              }
            />
          </Route>
        )}

        {rol === "Guardia" && (
          <Route element={<ProtectedRoute isAllowed={isAuth} redirectTo="/" />}>
            {/* Rutas del Guardia */}

            <Route
              path="/guardias"
              element={
                <GuardiaLayout>
                  <Inicio />
                </GuardiaLayout>
              }
            />
            <Route
              path="/guardias/perfil"
              element={
                <GuardiaLayout>
                  <PerfilGuardiasPage />
                </GuardiaLayout>
              }
            />
            <Route
              path="/guardias/parqueaderos"
              element={
                <GuardiaLayout>
                  <ParqueaderosGuardiasPage />
                </GuardiaLayout>
              }
            />
          </Route>
        )}
        {rol === "Usuario" && (
          <Route element={<ProtectedRoute isAllowed={isAuth} redirectTo="/" />}>
            {/* Rutas del Usuario */}

            <Route
              path="/usuarios"
              element={
                <UsuarioLayout>
                  <Inicio />
                </UsuarioLayout>
              }
            />

            <Route
              path="/usuarios/perfil"
              element={
                <UsuarioLayout>
                  <PerfilUsuariosPage />
                </UsuarioLayout>
              }
            />

            <Route
              path="/usuarios/parquedero"
              element={
                <UsuarioLayout>
                  <ParqueaderosUsuariosPage />
                </UsuarioLayout>
              }
            />
          </Route>
        )}
        {/* Otras rutas */}
        <Route
          path="/singup"
          element={<Navigate to="/usuarios/singup" replace />}
        />
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
      
      </Routes>
    </>
  );
}

export default App;
