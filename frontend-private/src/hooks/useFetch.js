import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Custom hook para manejar la obtención de datos desde una API.
 * Este hook gestiona el estado de carga, los datos obtenidos y los errores.
 * 
 * @param {string} url - La URL de la API desde donde se obtendrán los datos.
 * @returns {Object} - Un objeto que contiene el estado de carga, los datos y los errores.
 */
const useFetch = (url) => {
    // Estado para almacenar los datos obtenidos
    const [data, setData] = useState(null);
    // Estado para manejar el estado de carga
    const [loading, setLoading] = useState(true);
    // Estado para manejar errores
    const [error, setError] = useState(null);

    useEffect(() => {
        // Función asíncrona para obtener datos
        const fetchData = async () => {
            try {
                // Realiza la solicitud a la API
                const response = await axios.get(url);
                // Actualiza el estado con los datos obtenidos
                setData(response.data);
            } catch (err) {
                // Maneja cualquier error que ocurra durante la solicitud
                setError(err);
            } finally {
                // Cambia el estado de carga a falso una vez que se completa la solicitud
                setLoading(false);
            }
        };

        // Llama a la función para obtener los datos
        fetchData();
    }, [url]); // Dependencia de la URL para volver a ejecutar el efecto si cambia

    return { data, loading, error }; // Retorna los estados
};

export default useFetch;