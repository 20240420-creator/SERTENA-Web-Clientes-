import React, { useEffect, useState } from 'react';
import { fetchBrands } from '../../api/api'; // Importa la función para obtener las marcas
import BrandCard from './BrandCard'; // Importa el componente BrandCard

const ListBrands = () => {
    // Estado para almacenar las marcas
    const [brands, setBrands] = useState([]);
    // Estado para manejar el estado de carga
    const [loading, setLoading] = useState(true);
    // Estado para manejar errores
    const [error, setError] = useState(null);

    // Efecto para obtener las marcas al montar el componente
    useEffect(() => {
        const getBrands = async () => {
            try {
                const data = await fetchBrands(); // Llama a la función para obtener las marcas
                setBrands(data); // Actualiza el estado con los datos obtenidos
            } catch (err) {
                setError(err.message); // Maneja el error si ocurre
            } finally {
                setLoading(false); // Cambia el estado de carga a falso
            }
        };

        getBrands(); // Llama a la función para obtener las marcas
    }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente

    // Renderiza un mensaje de carga mientras se obtienen los datos
    if (loading) {
        return <div>Cargando marcas...</div>;
    }

    // Renderiza un mensaje de error si ocurre
    if (error) {
        return <div>Error al cargar marcas: {error}</div>;
    }

    return (
        <div>
            <h2>Lista de Marcas</h2>
            <div className="brands-container">
                {brands.map((brand) => (
                    <BrandCard key={brand.id} brand={brand} /> // Mapea sobre las marcas y renderiza BrandCard
                ))}
            </div>
        </div>
    );
};

export default ListBrands;