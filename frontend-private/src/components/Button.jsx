import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Importar estilos específicos para el botón

/**
 * Componente Button
 * Este componente representa un botón reutilizable que puede ser utilizado en diferentes partes de la aplicación.
 * 
 * Props:
 * - onClick: Función que se ejecuta al hacer clic en el botón.
 * - children: Contenido que se mostrará dentro del botón.
 * - type: Tipo de botón (button, submit, reset).
 * - className: Clases adicionales para personalizar el estilo del botón.
 * - disabled: Booleano que indica si el botón está deshabilitado.
 */
const Button = ({ onClick, children, type = 'button', className = '', disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`btn ${className}`} // Se pueden agregar clases adicionales
            disabled={disabled} // Deshabilitar el botón si es necesario
        >
            {children} {/* Renderizar el contenido del botón */}
        </button>
    );
};

// Definición de tipos de props para el componente
Button.propTypes = {
    onClick: PropTypes.func.isRequired, // onClick es requerido y debe ser una función
    children: PropTypes.node.isRequired, // children es requerido y puede ser cualquier nodo de React
    type: PropTypes.oneOf(['button', 'submit', 'reset']), // type puede ser uno de los tipos especificados
    className: PropTypes.string, // className es opcional y debe ser una cadena
    disabled: PropTypes.bool, // disabled es opcional y debe ser un booleano
};

// Exportar el componente para su uso en otras partes de la aplicación
export default Button;