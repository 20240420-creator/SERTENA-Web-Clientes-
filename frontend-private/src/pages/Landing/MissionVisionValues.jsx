import React from 'react';

// Componente que muestra la misión, visión y valores de la empresa
const MissionVisionValues = () => {
    return (
        <div className="mission-vision-values">
            <h2>Misión</h2>
            <p>
                Nuestra misión es proporcionar servicios técnicos de alta calidad que satisfagan las necesidades de nuestros clientes, garantizando su satisfacción y confianza.
            </p>
            <h2>Visión</h2>
            <p>
                Ser reconocidos como líderes en el sector de servicios técnicos, innovando constantemente y superando las expectativas de nuestros clientes.
            </p>
            <h2>Valores</h2>
            <ul>
                <li>Compromiso: Nos comprometemos a ofrecer lo mejor en cada servicio.</li>
                <li>Integridad: Actuamos con honestidad y transparencia en todas nuestras interacciones.</li>
                <li>Innovación: Buscamos constantemente nuevas formas de mejorar nuestros servicios.</li>
                <li>Respeto: Valoramos a nuestros clientes, empleados y socios, fomentando un ambiente de respeto mutuo.</li>
                <li>Calidad: La calidad es nuestra prioridad en cada proyecto que emprendemos.</li>
            </ul>
        </div>
    );
};

export default MissionVisionValues;