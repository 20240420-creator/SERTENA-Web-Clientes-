import React from 'react';

// Componente BrandCard que muestra la información de una marca en formato de tarjeta
const BrandCard = ({ brand }) => {
    // Desestructuramos las propiedades de la marca
    const { id, name, logo, description } = brand;

    return (
        <div className="brand-card">
            <img src={logo} alt={`${name} logo`} className="brand-logo" />
            <h3 className="brand-name">{name}</h3>
            <p className="brand-description">{description}</p>
            <button className="view-details-button" onClick={() => alert(`Detalles de la marca: ${name}`)}>
                Ver Detalles
            </button>
        </div>
    );
};

export default BrandCard;