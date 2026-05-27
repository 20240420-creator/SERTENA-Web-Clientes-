import React, { useEffect, useState, useContext } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { AuthContext } from '../../hooks/useAuth';
import ClientCard from './ClientCard';
import Toast from '../Toast';

const ListClients = () => {
    // Estado para almacenar los clientes
    const [clients, setClients] = useState([]);
    // Estado para manejar errores
    const [error, setError] = useState(null);
    // Contexto de autenticación para obtener el token
    const { token } = useContext(AuthContext);
    // Hook personalizado para obtener datos de clientes
    const { fetchData } = useFetch();

    // Función para obtener la lista de clientes
    const getClients = async () => {
        try {
            const response = await fetchData('/clients', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            setClients(response.data); // Almacena los datos de clientes en el estado
        } catch (err) {
            setError(err.message); // Maneja errores y los almacena en el estado
        }
    };

    // Efecto para cargar los clientes al montar el componente
    useEffect(() => {
        getClients();
    }, [fetchData, token]);

    return (
        <div className="list-clients">
            {error && <Toast message={error} type="error" />} {/* Muestra un toast en caso de error */}
            <h2>Lista de Clientes</h2>
            <div className="clients-grid">
                {clients.map(client => (
                    <ClientCard key={client.id} client={client} /> // Renderiza cada cliente usando ClientCard
                ))}
            </div>
        </div>
    );
};

export default ListClients;