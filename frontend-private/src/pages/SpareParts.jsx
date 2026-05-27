import React, { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch'; // Importamos el hook personalizado para la obtención de datos
import ListSpareParts from '../components/SpareParts/ListSpareParts'; // Componente para listar las piezas de repuesto
import RegisterSparePart from '../components/SpareParts/RegisterSparePart'; // Componente para registrar nuevas piezas de repuesto
import Toast from '../components/Toast'; // Componente para mostrar notificaciones

const SpareParts = () => {
    // Estado para manejar la visibilidad del toast
    const [toast, setToast] = useState({ visible: false, message: '', type: '' });

    // Usamos el hook useFetch para obtener las piezas de repuesto
    const { data: spareParts, error, loading } = useFetch('/api/spare-parts'); // Endpoint para obtener las piezas de repuesto

    // Efecto para manejar errores y mostrar notificaciones
    useEffect(() => {
        if (error) {
            setToast({ visible: true, message: 'Error al cargar las piezas de repuesto', type: 'error' });
        }
    }, [error]);

    // Función para cerrar el toast
    const closeToast = () => {
        setToast({ ...toast, visible: false });
    };

    return (
        <div className="spare-parts-page">
            <h1>Piezas de Repuesto</h1>
            <RegisterSparePart setToast={setToast} /> {/* Componente para registrar nuevas piezas */}
            {loading ? (
                <p>Cargando...</p> // Mensaje de carga mientras se obtienen los datos
            ) : (
                <ListSpareParts spareParts={spareParts} setToast={setToast} /> // Componente para listar las piezas
            )}
            {toast.visible && <Toast message={toast.message} type={toast.type} onClose={closeToast} />} {/* Componente de notificación */}
        </div>
    );
};

export default SpareParts;