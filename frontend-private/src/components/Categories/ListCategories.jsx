import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../../api/api'; // Importa la función para obtener las categorías
import CategoryCard from './CategoryCard'; // Importa el componente que muestra cada categoría
import './ListCategories.css'; // Importa los estilos específicos para la lista de categorías

const ListCategories = () => {
    // Estado para almacenar las categorías
    const [categories, setCategories] = useState([]);
    // Estado para manejar el estado de carga
    const [loading, setLoading] = useState(true);
    // Estado para manejar errores
    const [error, setError] = useState(null);

    // Efecto para obtener las categorías al montar el componente
    useEffect(() => {
        const getCategories = async () => {
            try {
                const data = await fetchCategories(); // Llama a la función para obtener las categorías
                setCategories(data); // Actualiza el estado con los datos obtenidos
            } catch (err) {
                setError(err.message); // Maneja cualquier error que ocurra
            } finally {
                setLoading(false); // Cambia el estado de carga a falso
            }
        };

        getCategories(); // Llama a la función para obtener las categorías
    }, []); // El arreglo vacío asegura que se ejecute solo una vez al montar el componente

    // Renderiza un mensaje de carga mientras se obtienen los datos
    if (loading) {
        return <div>Cargando categorías...</div>;
    }

    // Renderiza un mensaje de error si ocurre algún problema
    if (error) {
        return <div>Error al cargar categorías: {error}</div>;
    }

    return (
        <div className="list-categories">
            {categories.map((category) => (
                <CategoryCard key={category.id} category={category} /> // Mapea sobre las categorías y renderiza un CategoryCard para cada una
            ))}
        </div>
    );
};

export default ListCategories; // Exporta el componente para su uso en otras partes de la aplicación