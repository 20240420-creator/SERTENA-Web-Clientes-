import React from 'react';

// Componente que representa una tarjeta de cliente
const ClientCard = ({ client, onEdit, onDelete }) => {
    // Función para manejar la edición del cliente
    const handleEdit = () => {
        onEdit(client.id); // Llama a la función onEdit pasando el ID del cliente
    };

    // Función para manejar la eliminación del cliente
    const handleDelete = () => {
        onDelete(client.id); // Llama a la función onDelete pasando el ID del cliente
    };

    return (
        <div className="client-card">
            <h3>{client.name}</h3> {/* Muestra el nombre del cliente */}
            <p>Email: {client.email}</p> {/* Muestra el email del cliente */}
            <p>Teléfono: {client.phone}</p> {/* Muestra el teléfono del cliente */}
            <div className="client-card-actions">
                <button onClick={handleEdit}>Editar</button> {/* Botón para editar el cliente */}
                <button onClick={handleDelete}>Eliminar</button> {/* Botón para eliminar el cliente */}
            </div>
        </div>
    );
};

export default ClientCard; // Exporta el componente para su uso en otros módulos