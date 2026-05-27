import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch'; // Importamos el hook personalizado para manejar la obtención de datos
import VehicleCard from './VehicleCard'; // Importamos el componente que muestra cada vehículo

const ListVehicles = () => {
    // Estado para almacenar los vehículos
    const [vehicles, setVehicles] = useState([]);
    // Usamos el hook para obtener los datos de los vehículos
    const { data, loading, error } = useFetch('/api/vehicles'); // Cambia la URL según tu API

    useEffect(() => {
        // Si hay datos, los almacenamos en el estado
        if (data) {
            setVehicles(data);
        }
    }, [data]);

    // Manejo de errores
    if (error) {
        return <div>Error al cargar los vehículos: {error.message}</div>;
    }

    // Si los datos están cargando, mostramos un mensaje de carga
    if (loading) {
        return <div>Cargando vehículos...</div>;
    }

    return (
        <div className="vehicle-list">
            <h2>Lista de Vehículos</h2>
            <div className="vehicle-cards">
                {vehicles.map(vehicle => (
                    <VehicleCard key={vehicle.id} vehicle={vehicle} /> // Renderizamos cada vehículo usando VehicleCard
                ))}
            </div>
        </div>
    );
};

export default ListVehicles;