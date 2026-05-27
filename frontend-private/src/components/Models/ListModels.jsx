import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch'; // Importamos el hook personalizado para manejar la obtención de datos
import ModelCard from './ModelCard'; // Importamos el componente que muestra cada modelo

const ListModels = () => {
    // Estado para almacenar los modelos obtenidos
    const [models, setModels] = useState([]);
    // Usamos el hook personalizado para obtener los datos de los modelos
    const { data, error, loading } = useFetch('/api/models'); // Cambia la ruta según tu API

    // Efecto para manejar la respuesta de la API
    useEffect(() => {
        if (data) {
            setModels(data); // Si hay datos, los almacenamos en el estado
        }
    }, [data]);

    // Manejo de errores
    if (loading) return <p>Cargando modelos...</p>; // Mensaje mientras se cargan los datos
    if (error) return <p>Error al cargar los modelos: {error.message}</p>; // Mensaje de error

    return (
        <div className="model-list">
            <h2>Lista de Modelos</h2>
            <div className="model-cards">
                {models.map(model => (
                    <ModelCard key={model.id} model={model} /> // Renderizamos cada modelo usando ModelCard
                ))}
            </div>
        </div>
    );
};

export default ListModels; // Exportamos el componente para su uso en otras partes de la aplicación