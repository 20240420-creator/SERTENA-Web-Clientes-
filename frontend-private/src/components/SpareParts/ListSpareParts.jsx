import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch'; // Importamos el hook personalizado para manejar la obtención de datos
import SparePartCard from './SparePartCard'; // Importamos el componente que muestra cada repuesto

const ListSpareParts = () => {
    // Estado para almacenar los repuestos
    const [spareParts, setSpareParts] = useState([]);
    // Usamos el hook para obtener los datos de los repuestos
    const { data, loading, error } = useFetch('/api/spare-parts'); // Cambia la URL según tu API

    // Efecto para manejar la actualización del estado cuando se obtienen los datos
    useEffect(() => {
        if (data) {
            setSpareParts(data); // Actualizamos el estado con los datos obtenidos
        }
    }, [data]);

    // Manejo de errores
    if (error) {
        return <div>Error al cargar los repuestos: {error.message}</div>; // Mensaje de error
    }

    // Si los datos están cargando, mostramos un mensaje de carga
    if (loading) {
        return <div>Cargando repuestos...</div>; // Mensaje de carga
    }

    return (
        <div className="list-spare-parts">
            <h2>Lista de Repuestos</h2>
            <div className="spare-parts-grid">
                {spareParts.map(sparePart => (
                    <SparePartCard key={sparePart.id} sparePart={sparePart} /> // Renderizamos cada repuesto
                ))}
            </div>
        </div>
    );
};

export default ListSpareParts; // Exportamos el componente para su uso en otras partes de la aplicación