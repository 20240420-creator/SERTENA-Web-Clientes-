import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css'; // Importar estilos específicos para el modal

// Componente Modal que muestra un diálogo modal
const Modal = ({ isOpen, onClose, title, children }) => {
    // Si el modal no está abierto, no renderizar nada
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2 className="modal-title">{title}</h2>
                <div className="modal-body">
                    {children} {/* Contenido del modal pasado como props */}
                </div>
                <button className="modal-close" onClick={onClose}>
                    Cerrar
                </button>
            </div>
        </div>
    );
};

// Definición de tipos de props para el componente Modal
Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired, // Prop para controlar la visibilidad del modal
    onClose: PropTypes.func.isRequired, // Función para cerrar el modal
    title: PropTypes.string.isRequired, // Título del modal
    children: PropTypes.node.isRequired, // Contenido del modal
};

export default Modal; // Exportar el componente Modal para su uso en otras partes de la aplicación