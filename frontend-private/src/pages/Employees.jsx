import React, { useEffect, useState } from 'react';
import ListEmployees from '../components/Employees/ListEmployees';
import RegisterEmployee from '../components/Employees/RegisterEmployee';
import { useFetch } from '../hooks/useFetch';
import { Toast } from '../components/Toast';

const Employees = () => {
    // Estado para manejar la visibilidad del formulario de registro
    const [showRegister, setShowRegister] = useState(false);
    // Estado para manejar las notificaciones
    const [notification, setNotification] = useState({ message: '', type: '' });

    // Hook para obtener la lista de empleados
    const { data: employees, error, loading } = useFetch('/api/employees');

    // Efecto para manejar errores de la API
    useEffect(() => {
        if (error) {
            setNotification({ message: 'Error al cargar empleados', type: 'error' });
        }
    }, [error]);

    // Función para manejar la apertura y cierre del formulario de registro
    const toggleRegisterForm = () => {
        setShowRegister(!showRegister);
    };

    return (
        <div className="employees-container">
            <h1>Gestión de Empleados</h1>
            <button onClick={toggleRegisterForm}>
                {showRegister ? 'Cancelar Registro' : 'Registrar Empleado'}
            </button>
            {showRegister && <RegisterEmployee setNotification={setNotification} />}
            {loading ? (
                <p>Cargando empleados...</p>
            ) : (
                <ListEmployees employees={employees} setNotification={setNotification} />
            )}
            {notification.message && (
                <Toast message={notification.message} type={notification.type} />
            )}
        </div>
    );
};

export default Employees;