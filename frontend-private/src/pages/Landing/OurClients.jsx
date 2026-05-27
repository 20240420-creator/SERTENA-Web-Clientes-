import React from 'react';

// Componente que representa la sección de "Nuestros Clientes" en la landing page
const OurClients = () => {
    // Lista de clientes, en un entorno real esta información podría venir de una API
    const clients = [
        { id: 1, name: 'Cliente A', logo: '/path/to/logoA.png' },
        { id: 2, name: 'Cliente B', logo: '/path/to/logoB.png' },
        { id: 3, name: 'Cliente C', logo: '/path/to/logoC.png' },
        { id: 4, name: 'Cliente D', logo: '/path/to/logoD.png' },
        { id: 5, name: 'Cliente E', logo: '/path/to/logoE.png' },
    ];

    return (
        <section className="our-clients">
            <h2>Nuestros Clientes</h2>
            <div className="clients-grid">
                {clients.map(client => (
                    <div key={client.id} className="client-card">
                        <img src={client.logo} alt={client.name} />
                        <p>{client.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurClients;