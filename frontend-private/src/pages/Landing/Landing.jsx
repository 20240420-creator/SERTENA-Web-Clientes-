import React from 'react';
import HeroSection from './HeroSection';
import MissionVisionValues from './MissionVisionValues';
import OurServices from './OurServices';
import OurClients from './OurClients';
import Footer from './Footer';

/**
 * Componente Landing
 * Este componente representa la página de aterrizaje pública de la aplicación.
 * Incluye secciones como el héroe, misión, visión, servicios y clientes.
 */
const Landing = () => {
    return (
        <div>
            {/* Sección principal del héroe */}
            <HeroSection />
            {/* Sección de Misión, Visión y Valores */}
            <MissionVisionValues />
            {/* Sección de Nuestros Servicios */}
            <OurServices />
            {/* Sección de Nuestros Clientes */}
            <OurClients />
            {/* Pie de página */}
            <Footer />
        </div>
    );
};

export default Landing;