import React from 'react';
import './Footer.css'; // Importar estilos específicos para el Footer

// Componente Footer que renderiza el pie de página de la landing page
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <h4>Accesos Directos</h4>
                    <ul>
                        <li><a href="#services">Servicios</a></li>
                        <li><a href="#clients">Nuestros Clientes</a></li>
                        <li><a href="#about">Sobre Nosotros</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h4>Información de Contacto</h4>
                    <p>Email: contacto@sertena.com</p>
                    <p>Teléfono: +123 456 7890</p>
                </div>
                <div className="footer-social">
                    <h4>Redes Sociales</h4>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} SERTENA. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;