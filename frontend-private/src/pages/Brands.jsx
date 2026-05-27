import React from 'react';
import ListBrands from '../components/Brands/ListBrands';
import RegisterBrand from '../components/Brands/RegisterBrand';
import { useContext } from 'react';
import { AuthContext } from '../hooks/useAuth';
import ProtectedRoute from '../components/ProtectedRoute';

/**
 * Brands Page
 * Esta página se encarga de gestionar las marcas, permitiendo listar y registrar nuevas marcas.
 * Utiliza el contexto de autenticación para asegurar que solo los usuarios autenticados puedan acceder a esta página.
 */
const Brands = () => {
    // Se obtiene el contexto de autenticación
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
            <div className="brands-page">
                <h1>Gestión de Marcas</h1>
                <RegisterBrand />
                <ListBrands />
            </div>
        </ProtectedRoute>
    );
};

export default Brands;