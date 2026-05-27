import React from 'react';
import { useFetch } from '../../hooks/useFetch'; // Importamos el hook personalizado para la obtención de datos
import ServiceCard from '../../components/Services/ServiceCard'; // Importamos el componente que muestra cada servicio

const OurServices = () => {
    // Usamos el hook useFetch para obtener los servicios desde la API
    const { data: services, loading, error } = useFetch('/api/services'); // Reemplazar con la ruta correcta de la API

    // Si hay un error, lo mostramos
    if (error) {
        return <div>Error al cargar los servicios: {error.message}</div>;
    }

    // Si los datos están cargando, mostramos un mensaje de carga
    if (loading) {
        return <div>Cargando servicios...</div>;
    }

    return (
        <div className="our-services">
            <h2>Nuestros Servicios</h2>
            <div className="services-grid">
                {services.map(service => (
                    <ServiceCard key={service.id} service={service} /> // Renderizamos cada servicio usando el componente ServiceCard
                ))}
            </div>
        </div>
    );
};

export default OurServices;