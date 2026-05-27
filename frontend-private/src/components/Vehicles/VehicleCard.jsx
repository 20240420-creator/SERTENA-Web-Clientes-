import React from 'react';

// Componente VehicleCard que muestra la información de un vehículo en formato de tarjeta
const VehicleCard = ({ vehicle, onEdit, onDelete }) => {
    // Función para manejar la edición del vehículo
    const handleEdit = () => {
        onEdit(vehicle.id);
    };

    // Función para manejar la eliminación del vehículo
    const handleDelete = () => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este vehículo?')) {
            onDelete(vehicle.id);
        }
    };

    return (
        <div className="vehicle-card">
            <h3>{vehicle.name}</h3>
            <p>Marca: {vehicle.brand}</p>
            <p>Modelo: {vehicle.model}</p>
            <p>Año: {vehicle.year}</p>
            <div className="vehicle-card-actions">
                <button onClick={handleEdit}>Editar</button>
                <button onClick={handleDelete}>Eliminar</button>
            </div>
        </div>
    );
};

export default VehicleCard;