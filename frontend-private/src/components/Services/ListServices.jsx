import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch'; // Importamos el hook personalizado para la obtención de datos
import ServiceCard from './ServiceCard'; // Importamos el componente que muestra cada servicio

// Componente para listar todos los servicios
const ListServices = () => {
    // Estado para almacenar los servicios
    const [services, setServices] = useState([]);
    // Usamos el hook useFetch para obtener los servicios desde la API
    const { data, loading, error } = useFetch('/api/services'); // Cambia la ruta según tu API

    // Efecto para actualizar el estado de servicios cuando se obtienen los datos
    useEffect(() => {
        if (data) {
            setServices(data); // Actualizamos el estado con los datos obtenidos
        }
    }, [data]);

    // Manejo de errores
    if (error) {
        return <div>Error al cargar los servicios: {error.message}</div>; // Mostramos un mensaje de error si ocurre
    }

    // Mostramos un mensaje de carga mientras se obtienen los datos
    if (loading) {
        return <div>Cargando servicios...</div>;
    }

    return (
        <div className="services-list">
            <h2>Lista de Servicios</h2>
            <div className="services-grid">
                {services.map(service => (
                    <ServiceCard key={service.id} service={service} /> // Renderizamos cada servicio usando el componente ServiceCard
                ))}
            </div>
        </div>
    );
};

export default ListServices; // Exportamos el componente para su uso en otras partes de la aplicación