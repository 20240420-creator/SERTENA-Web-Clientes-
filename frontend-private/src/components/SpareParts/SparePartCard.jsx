import React from 'react';

// Componente que representa una tarjeta de repuesto
const SparePartCard = ({ sparePart, onEdit, onDelete }) => {
    // Función para manejar la edición del repuesto
    const handleEdit = () => {
        onEdit(sparePart.id);
    };

    // Función para manejar la eliminación del repuesto
    const handleDelete = () => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este repuesto?')) {
            onDelete(sparePart.id);
        }
    };

    return (
        <div className="spare-part-card">
            <h3>{sparePart.name}</h3>
            <p>Descripción: {sparePart.description}</p>
            <p>Precio: ${sparePart.price}</p>
            <div className="card-actions">
                <button onClick={handleEdit}>Editar</button>
                <button onClick={handleDelete}>Eliminar</button>
            </div>
        </div>
    );
};

export default SparePartCard;