import React from 'react';

// Componente ModelCard que muestra la información de un modelo de auto
const ModelCard = ({ model }) => {
    // Desestructuramos las propiedades del modelo
    const { id, name, brand, year, description } = model;

    return (
        <div className="model-card">
            <h3 className="model-name">{name}</h3>
            <p className="model-brand">Marca: {brand}</p>
            <p className="model-year">Año: {year}</p>
            <p className="model-description">{description}</p>
            <button className="model-details-button" onClick={() => alert(`Detalles del modelo ${name}`)}>
                Ver Detalles
            </button>
        </div>
    );
};

export default ModelCard;