import React, { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import ListVehicles from '../components/Vehicles/ListVehicles';
import RegisterVehicle from '../components/Vehicles/RegisterVehicle';
import Toast from '../components/Toast';

const Vehicles = () => {
    // Estado para manejar la visibilidad del toast
    const [toast, setToast] = useState({ message: '', type: '' });
    const { data: vehicles, error, loading } = useFetch('/api/vehicles'); // Llamada a la API para obtener vehículos

    // Efecto para manejar errores de la API
    useEffect(() => {
        if (error) {
            setToast({ message: 'Error al cargar los vehículos', type: 'error' });
        }
    }, [error]);

    // Función para manejar el cierre del toast
    const handleCloseToast = () => {
        setToast({ message: '', type: '' });
    };

    return (
        <div>
            <h1>Gestión de Vehículos</h1>
            <RegisterVehicle setToast={setToast} /> {/* Componente para registrar vehículos */}
            {loading ? (
                <p>Cargando vehículos...</p> // Mensaje de carga
            ) : (
                <ListVehicles vehicles={vehicles} setToast={setToast} /> // Componente para listar vehículos
            )}
            {toast.message && (
                <Toast message={toast.message} type={toast.type} onClose={handleCloseToast} /> // Componente de toast
            )}
        </div>
    );
};

export default Vehicles;