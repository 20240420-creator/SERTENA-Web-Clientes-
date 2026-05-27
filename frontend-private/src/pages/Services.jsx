import React, { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch'; // Importamos el hook personalizado para la obtención de datos
import ListServices from '../components/Services/ListServices'; // Importamos el componente que lista los servicios
import RegisterService from '../components/Services/RegisterService'; // Importamos el componente para registrar nuevos servicios
import Toast from '../components/Toast'; // Importamos el componente de notificaciones

const Services = () => {
    // Usamos el hook useFetch para obtener los servicios
    const { data: services, error, loading } = useFetch('/api/services'); // Cambia la URL según tu API

    useEffect(() => {
        // Si hay un error, mostramos una notificación
        if (error) {
            Toast({ message: 'Error al cargar los servicios', type: 'error' });
        }
    }, [error]);

    return (
        <div className="services-page">
            <h1>Gestión de Servicios</h1>
            {loading ? (
                <p>Cargando servicios...</p> // Mensaje de carga
            ) : (
                <>
                    <RegisterService /> {/* Componente para registrar nuevos servicios */}
                    <ListServices services={services} /> {/* Componente que lista los servicios */}
                </>
            )}
        </div>
    );
};

export default Services;