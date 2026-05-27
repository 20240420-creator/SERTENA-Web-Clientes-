import React, { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch'; // Importamos el hook personalizado para manejar la obtención de datos
import ListClients from '../components/Clients/ListClients'; // Importamos el componente que lista los clientes
import RegisterClient from '../components/Clients/RegisterClient'; // Importamos el componente para registrar nuevos clientes
import Toast from '../components/Toast'; // Importamos el componente de notificaciones

const Clients = () => {
    // Estado para manejar la visibilidad del formulario de registro
    const [showRegister, setShowRegister] = useState(false);
    // Estado para manejar los mensajes de notificación
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('success');

    // Usamos el hook useFetch para obtener la lista de clientes
    const { data: clients, error, loading } = useFetch('/api/clients'); // Reemplazar con la ruta correcta de la API

    useEffect(() => {
        // Si hay un error al obtener los clientes, mostramos un mensaje de error
        if (error) {
            setToastMessage('Error al cargar los clientes');
            setToastType('error');
        }
    }, [error]);

    // Función para manejar el cierre del formulario de registro
    const handleCloseRegister = () => {
        setShowRegister(false);
    };

    return (
        <div className="clients-page">
            <h1>Gestión de Clientes</h1>
            <button onClick={() => setShowRegister(true)}>Registrar Nuevo Cliente</button>
            {loading && <p>Cargando clientes...</p>}
            {clients && <ListClients clients={clients} />} {/* Renderizamos la lista de clientes */}
            {showRegister && <RegisterClient onClose={handleCloseRegister} setToastMessage={setToastMessage} setToastType={setToastType} />}
            {toastMessage && <Toast message={toastMessage} type={toastType} />} {/* Mostramos el mensaje de notificación */}
        </div>
    );
};

export default Clients;