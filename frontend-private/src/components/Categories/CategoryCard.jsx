import React from 'react';
import PropTypes from 'prop-types';
import './CategoryCard.css'; // Importar estilos específicos para el componente

// Componente CategoryCard que muestra la información de una categoría
const CategoryCard = ({ category }) => {
    return (
        <div className="category-card">
            <img src={category.image} alt={category.name} className="category-image" />
            <h3 className="category-title">{category.name}</h3>
            <p className="category-description">{category.description}</p>
        </div>
    );
};

// Definición de las propiedades esperadas para el componente
CategoryCard.propTypes = {
    category: PropTypes.shape({
        image: PropTypes.string.isRequired, // URL de la imagen de la categoría
        name: PropTypes.string.isRequired, // Nombre de la categoría
        description: PropTypes.string.isRequired // Descripción de la categoría
    }).isRequired
};

export default CategoryCard;