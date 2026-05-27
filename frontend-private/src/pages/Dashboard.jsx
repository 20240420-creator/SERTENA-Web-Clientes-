import React, { useContext } from 'react';
import { AuthContext } from '../hooks/useAuth';
import ListBrands from '../components/Brands/ListBrands';
import ListCategories from '../components/Categories/ListCategories';
import ListEmployees from '../components/Employees/ListEmployees';
import ListModels from '../components/Models/ListModels';
import ListVehicles from '../components/Vehicles/ListVehicles';
import ListClients from '../components/Clients/ListClients';
import ListServices from '../components/Services/ListServices';
import ListSpareParts from '../components/SpareParts/ListSpareParts';
import { Toast } from '../components/Toast';

const Dashboard = () => {
    // Se obtiene el contexto de autenticación
    const { user } = useContext(AuthContext);

    return (
        <div className="dashboard">
            <h1>Bienvenido, {user.name}</h1>
            <p>Este es tu panel de control donde puedes gestionar diferentes módulos.</p>
            
            <h2>Gestión de Marcas</h2>
            <ListBrands />
            
            <h2>Gestión de Categorías</h2>
            <ListCategories />
            
            <h2>Gestión de Empleados</h2>
            <ListEmployees />
            
            <h2>Gestión de Modelos</h2>
            <ListModels />
            
            <h2>Gestión de Vehículos</h2>
            <ListVehicles />
            
            <h2>Gestión de Clientes</h2>
            <ListClients />
            
            <h2>Gestión de Servicios</h2>
            <ListServices />
            
            <h2>Gestión de Repuestos</h2>
            <ListSpareParts />
            
            {/* Componente para mostrar notificaciones */}
            <Toast />
        </div>
    );
};

export default Dashboard;