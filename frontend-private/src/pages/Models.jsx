import React, { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch'; // Importamos el hook personalizado para la obtención de datos
import ListModels from '../components/Models/ListModels'; // Importamos el componente que lista los modelos
import RegisterModel from '../components/Models/RegisterModel'; // Importamos el componente para registrar nuevos modelos
import Toast from '../components/Toast'; // Importamos el componente de notificaciones

const Models = () => {
    // Estado para manejar la visibilidad del formulario de registro
    const [showRegister, setShowRegister] = useState(false);
    // Estado para manejar los mensajes de notificación
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('success');

    // Usamos el hook useFetch para obtener los modelos desde la API
    const { data: models, error, loading } = useFetch('/api/models'); // Cambiar la URL según la configuración de la API

    // Efecto para manejar errores de la API
    useEffect(() => {
        if (error) {
            setToastMessage('Error al cargar los modelos');
            setToastType('error');
        }
    }, [error]);

    // Función para manejar el cierre del formulario de registro
    const handleCloseRegister = () => {
        setShowRegister(false);
    };

    // Función para mostrar el formulario de registro
    const handleShowRegister = () => {
        setShowRegister(true);
    };

    return (
        <div className="models-page">
            <h1>Gestión de Modelos</h1>
            <button onClick={handleShowRegister}>Registrar Nuevo Modelo</button>
            {showRegister && <RegisterModel onClose={handleCloseRegister} setToastMessage={setToastMessage} setToastType={setToastType} />}
            {loading && <p>Cargando modelos...</p>}
            {models && <ListModels models={models} setToastMessage={setToastMessage} setToastType={setToastType} />}
            {toastMessage && <Toast message={toastMessage} type={toastType} />}
        </div>
    );
};

export default Models;