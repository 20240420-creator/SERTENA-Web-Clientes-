import React from 'react';
import './HeroSection.css'; // Importar estilos específicos para el HeroSection

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">
                    EXPERTOS EN SERVICIOS TÉCNICOS INDUSTRIALES Y RESIDENCIALES
                </h1>
                <p className="hero-description">
                    Ofrecemos soluciones integrales para tus necesidades técnicas, garantizando calidad y eficiencia en cada servicio.
                </p>
                <div className="hero-buttons">
                    <button className="hero-button download-app">Descargar App</button>
                    <button className="hero-button services">Nuestros Servicios</button>
                </div>
            </div>
            <div className="hero-image">
                <img src="/path/to/your/image.jpg" alt="Infraestructura" />
            </div>
        </div>
    );
};

export default HeroSection;