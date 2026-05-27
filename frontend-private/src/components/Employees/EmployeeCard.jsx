import React from 'react';

// Componente que representa una tarjeta de empleado
const EmployeeCard = ({ employee, onEdit, onDelete }) => {
    // Función para manejar la edición del empleado
    const handleEdit = () => {
        onEdit(employee.id);
    };

    // Función para manejar la eliminación del empleado
    const handleDelete = () => {
        if (window.confirm(`¿Estás seguro de que deseas eliminar a ${employee.name}?`)) {
            onDelete(employee.id);
        }
    };

    return (
        <div className="employee-card">
            <h3>{employee.name}</h3>
            <p>Posición: {employee.position}</p>
            <p>Email: {employee.email}</p>
            <p>Teléfono: {employee.phone}</p>
            <div className="employee-card-actions">
                <button onClick={handleEdit}>Editar</button>
                <button onClick={handleDelete}>Eliminar</button>
            </div>
        </div>
    );
};

export default EmployeeCard;