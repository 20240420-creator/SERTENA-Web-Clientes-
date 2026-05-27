import React from 'react';
import PropTypes from 'prop-types';
import './ServiceCard.css'; // Importar estilos específicos para el ServiceCard

// Componente ServiceCard que muestra información de un servicio
const ServiceCard = ({ service }) => {
    // Desestructuramos las propiedades del servicio
    const { title, description, imageUrl } = service;

    return (
        <div className="service-card">
            <img src={imageUrl} alt={title} className="service-card__image" />
            <h3 className="service-card__title">{title}</h3>
            <p className="service-card__description">{description}</p>
        </div>
    );
};

// Definimos las propiedades que espera recibir el componente
ServiceCard.propTypes = {
    service: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
    }).isRequired,
};

export default ServiceCard;