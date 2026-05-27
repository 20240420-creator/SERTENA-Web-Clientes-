import { useState } from 'react';

/**
 * Custom hook para manejar errores en formularios.
 * Este hook proporciona funciones para establecer y limpiar errores.
 * 
 * @returns {Object} - Un objeto que contiene el estado de errores y funciones para manejar errores.
 */
const useFormError = () => {
    // Estado para almacenar los errores del formulario
    const [formErrors, setFormErrors] = useState({});

    /**
     * Función para establecer un error en un campo específico.
     * 
     * @param {string} field - El nombre del campo donde se debe establecer el error.
     * @param {string} message - El mensaje de error que se debe mostrar.
     */
    const setError = (field, message) => {
        setFormErrors(prevErrors => ({
            ...prevErrors,
            [field]: message,
        }));
    };

    /**
     * Función para limpiar el error de un campo específico.
     * 
     * @param {string} field - El nombre del campo cuyo error se debe limpiar.
     */
    const clearError = (field) => {
        setFormErrors(prevErrors => {
            const { [field]: _, ...remainingErrors } = prevErrors;
            return remainingErrors;
        });
    };

    /**
     * Función para limpiar todos los errores del formulario.
     */
    const clearAllErrors = () => {
        setFormErrors({});
    };

    return {
        formErrors,
        setError,
        clearError,
        clearAllErrors,
    };
};

export default useFormError;