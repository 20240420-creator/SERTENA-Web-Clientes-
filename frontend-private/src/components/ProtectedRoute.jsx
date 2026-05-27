import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../hooks/useAuth';

/**
 * Componente ProtectedRoute
 * Este componente se encarga de proteger las rutas que requieren autenticación.
 * Si el usuario no está autenticado, se redirige a la página de inicio de sesión.
 * 
 * @param {Object} props - Props que recibe el componente.
 * @param {React.Component} props.children - Componentes hijos que se renderizarán si el usuario está autenticado.
 * @returns {React.Component} - Renderiza los hijos si el usuario está autenticado, de lo contrario redirige a Login.
 */
const ProtectedRoute = ({ children }) => {
    // Se obtiene el contexto de autenticación
    const { isAuthenticated } = useContext(AuthContext);

    // Si el usuario no está autenticado, redirige a la página de inicio de sesión
    if (!isAuthenticated) {
        return <Navigate to="/auth/login" />;
    }

    // Si el usuario está autenticado, renderiza los componentes hijos
    return children;
};

export default ProtectedRoute;