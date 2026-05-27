import React, { useEffect, useState } from 'react';
import ListCategories from '../components/Categories/ListCategories';
import RegisterCategory from '../components/Categories/RegisterCategory';
import { useFetch } from '../hooks/useFetch';
import { Toast } from '../components/Toast';

const Categories = () => {
    // Estado para manejar la visibilidad del formulario de registro
    const [showRegister, setShowRegister] = useState(false);
    // Estado para manejar las notificaciones
    const [notification, setNotification] = useState({ message: '', type: '' });

    // Hook para obtener la lista de categorías
    const { data: categories, error, loading } = useFetch('/api/categories');

    // Efecto para manejar errores de carga
    useEffect(() => {
        if (error) {
            setNotification({ message: 'Error al cargar las categorías', type: 'error' });
        }
    }, [error]);

    // Función para manejar la creación de una nueva categoría
    const handleCategoryCreated = (message) => {
        setNotification({ message, type: 'success' });
        setShowRegister(false); // Cerrar el formulario después de crear
    };

    return (
        <div className="categories-container">
            <h1>Gestión de Categorías</h1>
            <button onClick={() => setShowRegister(!showRegister)}>
                {showRegister ? 'Cancelar' : 'Registrar Nueva Categoría'}
            </button>
            {showRegister && <RegisterCategory onCategoryCreated={handleCategoryCreated} />}
            {loading ? (
                <p>Cargando categorías...</p>
            ) : (
                <ListCategories categories={categories} />
            )}
            {notification.message && (
                <Toast message={notification.message} type={notification.type} />
            )}
        </div>
    );
};

export default Categories;