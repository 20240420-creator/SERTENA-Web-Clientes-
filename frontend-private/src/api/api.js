import axios from 'axios';

// Configuración de la instancia de Axios para realizar llamadas a la API
const api = axios.create({
    baseURL: 'https://api.sertena.com', // URL base de la API
    timeout: 10000, // Tiempo de espera máximo para las solicitudes
    headers: {
        'Content-Type': 'application/json', // Tipo de contenido de las solicitudes
    },
});

// Función para obtener datos de un recurso específico
export const getResource = async (endpoint) => {
    try {
        const response = await api.get(endpoint); // Realiza la solicitud GET
        return response.data; // Retorna los datos de la respuesta
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Error al obtener los datos'); // Manejo de errores
    }
};

// Función para crear un nuevo recurso
export const createResource = async (endpoint, data) => {
    try {
        const response = await api.post(endpoint, data); // Realiza la solicitud POST
        return response.data; // Retorna los datos de la respuesta
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Error al crear el recurso'); // Manejo de errores
    }
};

// Función para actualizar un recurso existente
export const updateResource = async (endpoint, data) => {
    try {
        const response = await api.put(endpoint, data); // Realiza la solicitud PUT
        return response.data; // Retorna los datos de la respuesta
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Error al actualizar el recurso'); // Manejo de errores
    }
};

// Función para eliminar un recurso
export const deleteResource = async (endpoint) => {
    try {
        const response = await api.delete(endpoint); // Realiza la solicitud DELETE
        return response.data; // Retorna los datos de la respuesta
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Error al eliminar el recurso'); // Manejo de errores
    }
};

// Exportar la instancia de Axios para uso general
export default api;