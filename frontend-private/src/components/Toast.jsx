import React from 'react';
import { ToastContainer, Toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Componente Toast para mostrar notificaciones
const ToastComponent = ({ message, type }) => {
    // Configuración del tipo de notificación
    const toastType = type === 'success' ? 'success' : 'error';

    // Mostrar la notificación
    const notify = () => {
        Toast[toastType](message);
    };

    // Llamar a la función de notificación cuando el componente se monta
    React.useEffect(() => {
        if (message) {
            notify();
        }
    }, [message]);

    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    );
};

export default ToastComponent;