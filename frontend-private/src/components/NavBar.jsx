import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Asegúrate de crear este archivo para los estilos del NavBar

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    SERTENA
                </Link>
                <ul className="navbar-menu">
                    <li>
                        <Link to="/" className="navbar-link">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/services" className="navbar-link">Servicios</Link>
                    </li>
                    <li>
                        <Link to="/clients" className="navbar-link">Nuestros Clientes</Link>
                    </li>
                    <li>
                        <Link to="/about" className="navbar-link">Sobre Nosotros</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="navbar-link">Contacto</Link>
                    </li>
                </ul>
                <Link to="/register" className="navbar-button">Registrarse</Link>
            </div>
        </nav>
    );
};

export default NavBar;